const CONSTANTS = require('./src/constants');

module.exports = function (Doz) {
    Doz.mixin({
        isSSR: function() {
            return Boolean(window[CONSTANTS.DOZ_SSR_PATH]);
        }
    })
};