const DozSSR = require('../../index');

const dozSSR = new DozSSR('../../test/SSR/public/index.html');

(async ()=>{
    await dozSSR.prerender('');
})();
