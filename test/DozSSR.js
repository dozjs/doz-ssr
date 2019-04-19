const DozSSR = require('../');
const be = require('bejs');

describe('DozSSR', function () {
    this.timeout(5000);

    it('should be ok with promise', async function () {
        const dozSSR = new DozSSR(__dirname + '/SSR/public/index.html');

        const [content, other] = await dozSSR.render('/', {
            inject: `document.head.appendChild(document.createElement('script'))`,
            replacements: {
                PLACEHOLDER_1: 'hello',
                PLACEHOLDER_2: 'world'
            }
        });

        console.log(content);

        be.err.true(/<script>document.head.appendChild\(document.createElement\('script'\)\)<\/script>/.test(content));
        be.err.true(/<script><\/script>/.test(content));
        be.err.true(/<meta name="a-placeholder-1" content="hello">/.test(content));
        be.err.true(/<meta name="a-placeholder-2" content="world">/.test(content));
        be.err.true(/I'm home page/.test(content));
        be.err.object(other);
        be.err.equal(other.routePath, '/');
    });

});