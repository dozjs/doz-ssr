const CONSTANTS = require('./src/constants');

function isSSR() {
    return Boolean(window[CONSTANTS.DOZ_SSR_PATH]);
}

module.exports = function (Doz) {
    Doz.mixin({
        isSSR
    });

    Doz.directive('ssr-invisible', {
        onComponentDOMElementCreate(instance, $target) {
            if (isSSR())
                $target.style.visibility = 'hidden';
        }
    })
};