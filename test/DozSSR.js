const DozSSR = require('../');
const be = require('bejs');

describe('DozSSR', function () {
    this.timeout(5000);

    it('should be ok with promise', async function () {
        const dozSSR = new DozSSR(__dirname + '/SSR/public/index.html');
        const [content, other] = await dozSSR.render('/', {
            inject: `console.log('hello');`
        });
        console.log(content);
        be.err.true(/I'm home page/.test(content));
        be.err.object(other);
        be.err.equal(other.routePath, '/');
    });

});