# doz-ssr
DOZ server-side rendering

<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

> Works only with bundle provided by Parcel.

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
        ctx.body = await dozSSR.render(ctx.path);
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
    * [.setContent(entryContent)](#DozSSR+setContent)
    * [.getContent()](#DozSSR+getContent) ⇒ <code>string</code>
    * [.getBundleEl()](#DozSSR+getBundleEl) ⇒ <code>HTMLElement</code> \| <code>null</code>
    * [.getBundlePath()](#DozSSR+getBundlePath) ⇒ <code>string</code>
    * [.render(routePath)](#DozSSR+render) ⇒ <code>Promise.&lt;any&gt;</code>

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

<a name="DozSSR+setContent"></a>

### dozSSR.setContent(entryContent)
Set document content

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>entryContent</td>
    </tr>  </tbody>
</table>

<a name="DozSSR+getContent"></a>

### dozSSR.getContent() ⇒ <code>string</code>
Get document content

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<a name="DozSSR+getBundleEl"></a>

### dozSSR.getBundleEl() ⇒ <code>HTMLElement</code> \| <code>null</code>
Get bundle HTMLElement

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<a name="DozSSR+getBundlePath"></a>

### dozSSR.getBundlePath() ⇒ <code>string</code>
Get bundle path from src attribute

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<a name="DozSSR+render"></a>

### dozSSR.render(routePath) ⇒ <code>Promise.&lt;any&gt;</code>
Render app

**Kind**: instance method of [<code>DozSSR</code>](#DozSSR)  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>routePath</td>
    </tr>  </tbody>
</table>


## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs/doz-ssr/blob/master/CHANGELOG.md">here</a>

## License
doz-ssr is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>