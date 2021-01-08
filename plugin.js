const CONSTANTS = require('./src/constants');

function isSSR() {
    return Boolean(window[CONSTANTS.DOZ_SSR_PATH]);
}

module.exports = function (Doz) {
    Doz.mixin({
        isSSR
    });

    Doz.directive('ssr-$method', {
        onComponentDOMElementCreate(instance, $target, directiveValue, initial, keyArgumentsValues) {
            if (isSSR()) {
                if (Array.isArray(keyArgumentsValues) && keyArgumentsValues[0] === 'invisible') {
                    $target.style.visibility = 'hidden';
                }
            }
        }
    })
};