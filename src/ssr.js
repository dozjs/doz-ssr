const Koa = require('koa');
const app = new Koa();
const Doz = require('doz');
const fs = require('fs');

require('jsdom-global')();

const rawDoz = fs.readFileSync('./node_modules/doz/dist/doz.min.js');

const js = `
    new Doz({
        root: '#app',
        template() {
            return \`
                <div>
                    <h1>Test</h1>
                    <button onclick="console.log('ciao')">Click</button>
                </div>
            \`;
        }
    });
`;

app.use(async ctx => {
    document.body.innerHTML = `
        <div id="app"></div>
    `;

    eval(js);

    const appRender = document.body.innerHTML;

    ctx.body = `<!DOCTYPE html>
    <html>
        <head>
            <title>SSR</title>
        </head>
        <body>
            ${appRender}
            <script>
            ${rawDoz}
            ${js}
            </script>
        </body>
    </html>
    `;
});

app.listen(3000);