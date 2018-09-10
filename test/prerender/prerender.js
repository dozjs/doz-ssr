const DozSSR = require('../../index');

const dozSSR = new DozSSR('../../SSR/public/index.html');

(async ()=>{
    await dozSSR.prerender('');
})();
