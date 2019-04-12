# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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