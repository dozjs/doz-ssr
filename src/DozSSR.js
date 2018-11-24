const fs = require('fs');
const path = require('path');
const DOZ_GLOBAL = '__DOZ_GLOBAL_COMPONENTS__';
const DOZ_SSR_PATH = '__DOZ_SSR_PATH__';
const waitOn = require('wait-on');
require('jsdom-global')();

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

        this.docRef = document.documentElement;

        //Get entry file content
        const entryContent = this.constructor.read(entryFile);

        //Set doc content
        this.setContent(entryContent);

        //Get bundle element
        const bundleEl = this.getBundleEl();

        if (!bundleEl)
            throw new Error(`Bundle element not found, please add id attribute (<script id="${this.opt.bundleId}" ...) to bundle script`);

        //Retrieve file path
        this.bundlePath = this.getBundlePath(bundleEl);

        //Get bundle content
        this.bundleJS = this.constructor.read(this.bundlePath);
    }

    /**
     * Set document content
     * @param entryContent
     */
    setContent(entryContent) {
        this.docRef.innerHTML = entryContent.replace(this.opt.docTypeString, '');
    }

    /**
     * Get document content
     * @returns {string}
     */
    getContent() {
        return `${this.opt.docTypeString}${this.docRef.outerHTML}`;
    }

    /**
     * Get bundle HTMLElement
     * @returns {HTMLElement | null}
     */
    getBundleEl() {
        return document.getElementById(this.opt.bundleId);
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

        this.constructor.clearComponents();
        this.constructor.assignRoute(routePath);
        this.eval();

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.getContent());
            }, this.opt.delayRender);
        });
    }

    /**
     * Evaluate bundle code
     * @ignore
     * @private
     */
    eval() {
        let parcelRequire = {};
        try {
            eval(this.bundleJS);
        } catch (e) {
            console.error(e)
        }
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

    /**
     * Clear component already registered
     * @ignore
     * @private
     */
    static clearComponents() {
        if (window[DOZ_GLOBAL])
            window[DOZ_GLOBAL].components = {};
    }

    /**
     * Assign current path to global object
     * @ignore
     * @private
     */
    static assignRoute(routePath) {
        window[DOZ_SSR_PATH] = routePath;
    }
}

module.exports = DozSSR;