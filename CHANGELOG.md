# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

[2.5.1] - 2020-01-08
- **Fixed** plugin does not work well

[2.5.0] - 2020-01-08
- **Added** directive `d-ssr-invisible`
- **Changed** `opt.disableCleanerScript` to `opt.cleanerScript`

[2.4.0] - 2020-01-05
- **Added** `opt.disableCleanerScript`

[2.3.0] - 2020-04-25
- **Added** root cleaner that prevent strange behaviour when use animation
- **Added** `opt.appRootId`

[2.2.6] - 2020-03-04
- Rollback to JSDOM 16.2.0

[2.2.4] - 2020-03-03
- **Fixed** destroy JSDOM window after rendering

[2.2.3] - 2020-03-02
- **Updated** JSDOM

[2.2.2] - 2019-11-15
- **Fixed** plugin issue

[2.2.0] - 2019-07-09
- **Added** `opts.headers`

[2.1.1] - 2019-06-07
- **Fixed** `requestAnimationFrame` not a function
- **Fixed** `cancelAnimationFrame` not a function

[2.1.0] - 2019-04-19
- **Added** `inject` option to options of `render` method
- **Added** `replacements` option to options of `render` method

[2.0.3] - 2019-04-12
- **Changed** deferred resolve of `render`

[2.0.0] - 2019-04-12

**IMPORTANT**, now it's necessary to call `window.SSR.ready()` inside your Doz app

Breaking changes

- **Removed** `delayRender` from constructor options
- **Removed** `reloadBundle` from `render` arguments
- **Removed** `baseUrl` from `render` arguments
- **Added** `opts` object to `render` arguments
- **Changed** `render` result, now resolve an array

[1.4.1] - 2019-03-31
- **Changed** documentation

[1.4.0] - 2019-02-27
- **Added** `baseUrl` argument to `render`
- **Fixed** scope issue

[1.3.0] - 2019-01-31
- **Added** isSSR plugin

[1.2.0] - 2019-01-31
- **Changed** JSDOM to last version

[1.1.0] - 2018-11-24
- **Added** `wait` param to render method

[1.0.2] - 2018-11-06
- **Fixed** possible errors during eval operation

[1.0.0] - 2018-09-02
- First release