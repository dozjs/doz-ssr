# doz-ssr
DOZ server-side rendering

<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

## Installation

```
npm install doz-ssr --save
```

## Example with Koa

#### server.js

```javascript
const Koa = require('koa');
const serve = require('koa-static');
const body = require('koa-body');
const DozSSR = require('doz-ssr');

const dozSSR = new DozSSR('./dist/index.html');

new Koa()
    .use(serve('./public', {index: false}))
    .use(body())
    .use(async ctx => {
        ctx.body = await dozSSR.render(ctx.url, false, ctx.protocol + '://' + ctx.host);
    })
    .listen(3000);
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
    * [.render(routePath, [wait], [baseUrl])](#DozSSR+render) ⇒ <code>Promise.&lt;any&gt;</code>

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
    <td>entryFile</td><td><code>string</code></td><td></td><td><p>file index</p>
</td>
    </tr><tr>
    <td>[opt]</td><td><code>object</code></td><td></td><td><p>options</p>
</td>
    </tr><tr>
    <td>[opt.bundleId]</td><td><code>string</code></td><td><code>&quot;bundle&quot;</code></td><td><p>bundle id selector</p>
</td>
    </tr><tr>
    <td>[opt.docTypeString]</td><td><code>string</code></td><td><code>&quot;&lt;!DOCTYPE html&gt;&quot;</code></td><td><p>document type</p>
</td>
    </tr><tr>
    <td>[opt.delayRender]</td><td><code>int</code></td><td><code>0</code></td><td><p>delay render in ms</p>
</td>
    </tr>  </tbody>
</table>

<a name="DozSSR+getBundlePath"></a>

### dozSSR.getBundlePath() ⇒ <code>string</code>
Get bundle path from src attribute

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<a name="DozSSR+render"></a>

### dozSSR.render(routePath, [wait], [baseUrl]) ⇒ <code>Promise.&lt;any&gt;</code>
Render app

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Default</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>routePath</td><td></td>
    </tr><tr>
    <td>[wait]</td><td><code>false</code></td>
    </tr><tr>
    <td>[baseUrl]</td><td><code>http://localhost</code></td>
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