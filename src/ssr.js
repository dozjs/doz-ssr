const Koa = require('koa');
const app = new Koa();
const Doz = require('doz');

require('jsdom-global')();

app.use(async ctx => {
    document.body.innerHTML = `<div id="app"></div>`;

    new Doz({
        root: '#app',
        template() {
            return `
                <div>Ciao Mondo</div>
            `;
        }
    });

    ctx.body = document.body.outerHTML;
});

app.listen(3000);