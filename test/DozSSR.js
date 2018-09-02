const DozSSR = require('../');

describe('DozSSR', function () {
    this.timeout(5000);

    it('should be ok', function () {
        const dozSSR = new DozSSR(__dirname + '/SSR/public/index.html');
        return dozSSR.render('/');
    })

});