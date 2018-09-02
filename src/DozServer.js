const fs = require('fs');
const DOZ_GLOBAL = '__DOZ_GLOBAL_COMPONENTS__';
const DOZ_SSR_PATH = '__DOZ_SSR_PATH__';
require('jsdom-global')();

class DozSSR {

    constructor(entryFile, opt = {}) {

        if(typeof entryFile !== 'string')
            throw new TypeError('An entry file is required');

        this.opt = Object.assign({
            publicPath: './public/',
            bundleId: 'bundle',
            docTypeString: '<!DOCTYPE html>',
            delayRender: 0
        }, opt);

        this.docRef = document.documentElement;

        //Get entry file content
        const entryContent = fs.readFileSync(entryFile).toString();

        //Remove doctype string
        this.docRef.innerHTML = entryContent.replace(this.opt.docTypeString, '');

        //Get bundle element
        const bundleEl = document.getElementById(this.opt.bundleId);

        if (!bundleEl)
            throw new Error(`Bundle element not found, please add id attribute (<script id="${this.opt.bundleId}" ...) to bundle script`);

        //Retrieve file path
        const bundlePath = `${this.opt.publicPath}/${bundleEl.src}`;

        //Get bundle content
        this.bundleJS = fs.readFileSync(bundlePath).toString();
    }

    /**
     * Render app
     * @param path
     * @returns {Promise<any>}
     */
    render(path) {
        this.constructor.clearComponents();
        this.constructor.assignPath(path);
        this.eval();

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`${this.opt.docTypeString}${this.docRef.outerHTML}`);
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
        eval(this.bundleJS);
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
    static assignPath(path) {
        window[DOZ_SSR_PATH] = path;
    }
}

module.exports = DozSSR;