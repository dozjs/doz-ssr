# doz-ssr
DOZ server-side rendering

<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## Installation

```
npm install doz-ssr
```

## Example with Koa

#### server.js

```js
const Koa = require('koa');
const serve = require('koa-static');
const body = require('koa-body');
const DozSSR = require('doz-ssr');

const dozSSR = new DozSSR('./dist/index.html');

new Koa()
    .use(serve('./public', {index: false}))
    .use(body())
    .use(async ctx => {
        const [content] = await dozSSR.render(ctx.url, {
            baseUrl: ctx.protocol + '://' + ctx.host
        });
        ctx.body = content;
    })
    .listen(3000);
```

#### bundle.js

**IMPORTANT**, since 2.0.0 it's necessary to call `window.SSR.ready()` inside your Doz app

```js
new Doz({
    root: '#app',
    template(h) {
        return h`
            <div class="container"></div>
        `
    },
    onMount() {
        if (window.SSR)
            window.SSR.ready();
    }
});
```

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>MyApp</title>
</head>
<body>
    <div id="app"></div>
    <script id="bundle" src="/bundle.js"></script>
</body>
</html>
```

## API

<a name="DozSSR"></a>

## DozSSR
**Kind**: global class  

* [DozSSR](#DozSSR)
    * [new DozSSR(entryFile, [opt])](#new_DozSSR_new)
    * [.getBundlePath()](#DozSSR+getBundlePath) ⇒ <code>string</code>
    * [.render(routePath, [opts])](#DozSSR+render) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_DozSSR_new"></a>

### new DozSSR(entryFile, [opt])
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>entryFile</td><td><code>string</code></td><td></td><td><p>File index.</p>
</td>
    </tr><tr>
    <td>[opt]</td><td><code>object</code></td><td></td><td><p>Options.</p>
</td>
    </tr><tr>
    <td>[opt.bundleId]</td><td><code>string</code></td><td><code>&quot;bundle&quot;</code></td><td><p>Bundle id selector.</p>
</td>
    </tr><tr>
    <td>[opt.docTypeString]</td><td><code>string</code></td><td><code>&quot;&lt;!DOCTYPE html&gt;&quot;</code></td><td><p>Document type.</p>
</td>
    </tr>  </tbody>
</table>

<a name="DozSSR+getBundlePath"></a>

### dozSSR.getBundlePath() ⇒ <code>string</code>
Get bundle path from src attribute

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<a name="DozSSR+render"></a>

### dozSSR.render(routePath, [opts]) ⇒ <code>Promise.&lt;\*&gt;</code>
Render app

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Default</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>routePath</td><td><code>string</code></td><td></td><td><p>The route path.</p>
</td>
    </tr><tr>
    <td>[opts]</td><td><code>object</code></td><td></td><td><p>Rendering options</p>
</td>
    </tr><tr>
    <td>[opts.reloadBundle]</td><td><code>boolean</code></td><td><code>false</code></td><td><p>If true, the bundle will be reload every render call. This operation is slow so useful only in develop mode.</p>
</td>
    </tr><tr>
    <td>[opts.baseUrl]</td><td><code>string</code></td><td><code>&quot;http://localhost&quot;</code></td><td><p>The base url. Really this param is very important, you must fill it with your real domain in production environment.</p>
</td>
    </tr><tr>
    <td>[opts.inject]</td><td><code>string</code></td><td></td><td><p>This options is useful to inject code before app bundle execution.</p>
</td>
    </tr><tr>
    <td>[opts.replacements]</td><td><code>object</code></td><td></td><td><p>This options is useful to replace any placeholder like this <code>%MY_PLACEHOLDER%,
in this case, the key will be</code>MY_PLACEHOLDER` and the value &quot;YOUR STRING&quot;. The perfect scenario are for example the meta tags values.</p>
</td>
    </tr>  </tbody>
</table>


## PLUGIN

Check if environment is server side from your app

```js
import isSSR from 'doz-ssr/plugin'

Doz.use(isSSR);

// You now can call isSSR() method inside your app
Doz.component('my-component', function(h){
    return h`<div>is server? ${this.isSSR()}</div>`
})
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs/doz-ssr/blob/master/CHANGELOG.md">here</a>

## License
doz-ssr is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>