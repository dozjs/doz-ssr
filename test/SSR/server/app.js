const Koa = require('koa');
const serve = require('koa-static');
const body = require('koa-body');
const DozServer = require('../../../');

process.chdir('test/SSR');

const dozServer = new DozServer('./public/index.html');

new Koa()
    .use(serve('./public', {index: false}))
    .use(body())
    .use(async ctx => {
        ctx.body = await dozServer.render(ctx.path);
    })
    .listen(3000);