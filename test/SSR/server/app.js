const Koa = require('koa');
const serve = require('koa-static');
const body = require('koa-body');
const DozSSR = require('../../../');

process.chdir('test/SSR');

const dozSSR = new DozSSR('./public/index.html');

new Koa()
    .use(serve('./public', {index: false}))
    .use(body())
    .use(async ctx => {
        ctx.body = await dozSSR.render(ctx.url);
    })
    .listen(3000);