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
     * @param [opt.delayRender=0] {int} Delay render in ms.
     */
    constructor(entryFile, opt = {}) {

        if (typeof entryFile !== 'string')
            throw new TypeError('An entry file is required');

        this.opt = Object.assign({
            bundleId: 'bundle',
            docTypeString: '<!DOCTYPE html>',
            delayRender: 0
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
     * @param routePath The route path.
     * @param [reloadBundle=false] If true, the bundle will be reload every render call. This operation is slow so useful only in develop mode.
     * @param [baseUrl=http://localhost] The base url. Really this param is very important, you must fill it with your real domain in production environment.
     * @returns {Promise<*>}
     */
    async render(routePath, reloadBundle = false, baseUrl = 'http://localhost') {

        const url = normalizeUrl(`${baseUrl}/${routePath}`);

        if (reloadBundle) {
            await waitOn({
                resources: [this.bundlePath]
            });
            this.bundleJS = this.constructor.read(this.bundlePath);
        }

        const DOM = new jsdom.JSDOM(this.entryContent, {runScripts: 'outside-only', url});

        DOM.window.eval(`
            window['${DOZ_SSR_PATH}'] = '${routePath}';
            let parcelRequire = {};
            window.WebSocket = undefined;
            ${this.bundleJS};
        `);

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.opt.docTypeString + DOM.window.document.documentElement.outerHTML);
            }, this.opt.delayRender);
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