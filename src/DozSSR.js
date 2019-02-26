const fs = require('fs');
const path = require('path');
const {DOZ_GLOBAL, DOZ_SSR_PATH} = require('./constants');
const waitOn = require('wait-on');
const jsdom = require('jsdom');

class DozSSR {

    /**
     * @param entryFile {string} file index
     * @param [opt] {object} options
     * @param [opt.bundleId=bundle] {string} bundle id selector
     * @param [opt.docTypeString=<!DOCTYPE html>] {string} document type
     * @param [opt.delayRender=0] {int} delay render in ms
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
     * @param routePath
     * @param [wait=false]
     * @returns {Promise<any>}
     */
    async render(routePath, wait = false) {
        if (wait) {
            await waitOn({
                resources: [this.bundlePath]
            });
            this.bundleJS = this.constructor.read(this.bundlePath);
        }

        const DOM = new jsdom.JSDOM(this.entryContent, {runScripts: 'outside-only' });

        DOM.window.eval(`
            //if (window['${DOZ_GLOBAL}'])
              //  window['${DOZ_GLOBAL}'].components = {};
            
            window['${DOZ_SSR_PATH}'] = '${routePath}';
            let parcelRequire = {};
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