const fs = require('fs');
const path = require('path');
const {DOZ_SSR_PATH} = require('./constants');
const waitOn = require('wait-on');
const jsdom = require('jsdom');
const normalizeUrl = require('normalize-url');

class DozSSR {

    /**
     * @param entryFile {string} File index.
     * @param [opt] {object} Options.
     * @param [opt.bundleId=bundle] {string} Bundle id selector.
     * @param [opt.docTypeString=<!DOCTYPE html>] {string} Document type.
     */
    constructor(entryFile, opt = {}) {

        if (typeof entryFile !== 'string')
            throw new TypeError('An entry file is required');

        this.opt = Object.assign({
            bundleId: 'bundle',
            docTypeString: '<!DOCTYPE html>'
        }, opt);

        this.entryFile = entryFile;

        this.DOM = new jsdom.JSDOM('');
        this.window = this.DOM.window;
        this.docRef = this.window.document.documentElement;

        //Get entry file content
        this.entryContent = this.constructor.read(entryFile);

        this.docRef.innerHTML = this.entryContent.replace(this.opt.docTypeString, '');
        //Set doc content
        //this.setContent(this.entryContent);

        //Get bundle element
        const bundleEl = this.window.document.getElementById(this.opt.bundleId);

        if (!bundleEl)
            throw new Error(`Bundle element not found, please add id attribute (<script id="${this.opt.bundleId}" ...) to bundle script`);

        //Retrieve file path
        this.bundlePath = this.getBundlePath(bundleEl);

        //Get bundle content
        this.bundleJS = this.constructor.read(this.bundlePath);
    }

    /**
     * Get bundle path from src attribute
     * @returns {string}
     */
    getBundlePath(bundleEl) {
        const rootBundlePath = path.parse(this.entryFile).dir;
        return path.normalize(`${rootBundlePath}/${bundleEl.src}`);
    }

    /**
     * Render app
     * @param routePath {string} The route path.
     * @param [opts] {object} Rendering options
     * @param [opts.reloadBundle=false] {boolean} If true, the bundle will be reload every render call. This operation is slow so useful only in develop mode.
     * @param [opts.baseUrl=http://localhost] {string} The base url. Really this param is very important, you must fill it with your real domain in production environment.
     * @returns {Promise<*>}
     */
    render(routePath, opts = {}) {
        return new Promise(async resolve => {

            opts = Object.assign({
                reloadBundle: false,
                baseUrl: 'http://localhost'
            }, opts);

            const url = normalizeUrl(`${opts.baseUrl}/${routePath}`);

            if (opts.reloadBundle) {
                await waitOn({
                    resources: [this.bundlePath]
                });
                this.bundleJS = this.constructor.read(this.bundlePath);
            }

            const DOM = new jsdom.JSDOM(this.entryContent, {runScripts: 'outside-only', url});

            // Add SSR object that contains `ready` callback
            DOM.window.SSR = {
                get routePath() {
                    return routePath;
                },
                ready: (args) => {
                    resolve([this.opt.docTypeString + DOM.window.document.documentElement.outerHTML, args]);
                }
            };

            // Add SSR path
            DOM.window[DOZ_SSR_PATH] = routePath;

            // Disable WebSocket
            DOM.window.WebSocket = undefined;
            // Transform interval to timeout
            DOM.window.setInterval = DOM.window.setTimeout;
            DOM.window.clearInterval = DOM.window.clearTimeout;

            DOM.window.eval(`
                let parcelRequire = {};
                ${this.bundleJS};
            `);

        });
    }

    /**
     * Read file
     * @param filePath
     * @returns {string}
     * @ignore
     * @private
     */
    static read(filePath) {
        return fs.readFileSync(filePath).toString();
    }

}

module.exports = DozSSR;