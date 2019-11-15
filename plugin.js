const {DOZ_SSR_PATH} = require('./src/constants');

module.exports = function (Doz) {
    Doz.mixin({
        isSSR: function() {
            return Boolean(window[DOZ_SSR_PATH]);
        }
    })
};