// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
var define;
// [DOZ]  Build version: 1.16.9  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Doz", [], factory);
	else if(typeof exports === 'object')
		exports["Doz"] = factory();
	else
		root["Doz"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    INSTANCE: '__DOZ_INSTANCE__',
    DIR_IS: '__DOZ_D_IS__',
    CMP_INSTANCE: '__DOZ_CMP_INSTANCE__',
    NS: {
        SVG: 'http://www.w3.org/2000/svg'
    },
    TAG: {
        ROOT: 'dz-root',
        EACH: 'dz-each-root',
        APP: 'dz-app',
        EMPTY: 'dz-empty',
        MOUNT: 'dz-mount',
        SUFFIX_ROOT: '-root',
        TEXT_NODE_PLACE: 'dz-text-node'
    },
    REGEX: {
        IS_CUSTOM_TAG: /^\w+-[\w-]+$/,
        IS_CUSTOM_TAG_STRING: /<\w+-[\w-]+/,
        IS_BIND: /^d-bind$/,
        IS_REF: /^d-ref$/,
        IS_ALIAS: /^d:alias$/,
        IS_STORE: /^d:store$/,
        IS_COMPONENT_LISTENER: /^d:on-(\w+)$/,
        IS_LISTENER: /^on/,
        IS_ID_SELECTOR: /^#[\w-_:.]+$/,
        IS_PARENT_METHOD: /^parent.(.*)/,
        IS_STRING_QUOTED: /^"\w+"/,
        IS_SVG: /^svg$/,
        IS_SFC: /^(class\s|function\s+_class)/,
        GET_LISTENER: /^this.(.*)\((.*)\)/,
        TRIM_QUOTES: /^["'](.*)["']$/,
        THIS_TARGET: /\B\$this(?!\w)/g,
        HTML_MARKUP: /<!--[^]*?(?=-->)-->|<(\/?)([a-z][-.0-9_a-z]*)\s*([^>]*?)(\/?)>/ig,
        HTML_ATTRIBUTE: /(^|\s)([\w-:]+)(\s*=\s*("([^"]+)"|'([^']+)'|(\S+)))?/ig,
        MATCH_NLS: /\n\s+/gm,
        REPLACE_QUOT: /"/g
    },
    ATTR: {
        // Attributes for HTMLElement
        BIND: 'd-bind',
        REF: 'd-ref',
        IS: 'd-is',
        // Attributes for Components
        ALIAS: 'd:alias',
        STORE: 'd:store',
        LISTENER: 'd:on',
        ID: 'd:id',
        ON_BEFORE_CREATE: 'd:onbeforecreate',
        ON_CREATE: 'd:oncreate',
        ON_CONFIG_CREATE: 'd:onconfigcreate',
        ON_BEFORE_MOUNT: 'd:onbeforemount',
        ON_MOUNT: 'd:onmount',
        ON_MOUNT_ASYNC: 'd:onmountasync',
        ON_BEFORE_UPDATE: 'd:onbeforeupdate',
        ON_UPDATE: 'd:onupdate',
        ON_AFTER_RENDER: 'd:onafterrender',
        ON_BEFORE_UNMOUNT: 'd:onbeforeunmount',
        ON_UNMOUNT: 'd:onunmount',
        ON_BEFORE_DESTROY: 'd:onbeforedestroy',
        ON_DESTROY: 'd:ondestroy',
        ON_LOAD_PROPS: 'd:onloadprops',
        FORCE_UPDATE: 'forceupdate'
    },
    DPROPS: {
        STORE: 'store',
        ALIAS: 'alias',
        CALLBACK: 'callback',
        ID: 'id',
        ON_BEFORE_CREATE: '__onBeforeCreate',
        ON_CREATE: '__onCreate',
        ON_CONFIG_CREATE: '__onConfigCreate',
        ON_BEFORE_MOUNT: '__onBeforeMount',
        ON_MOUNT: '__onMount',
        ON_MOUNT_ASYNC: '__onMountAsync',
        ON_BEFORE_UPDATE: '__onBeforeUpdate',
        ON_UPDATE: '__onUpdate',
        ON_AFTER_RENDER: '__onAfterRender',
        ON_BEFORE_UNMOUNT: '__onBeforeUnmount',
        ON_UNMOUNT: '__onUnmount',
        ON_BEFORE_DESTROY: '__onBeforeDestroy',
        ON_DESTROY: '__onDestroy',
        ON_LOAD_PROPS: '__onLoadProps'
    }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(26);

/**
 * Register a component to global
 * @param cmp
 */
function registerComponent(cmp) {

    var tag = cmp.tag.toUpperCase();

    if (Object.prototype.hasOwnProperty.call(data.components, tag)) console.warn('Doz', 'component ' + tag + ' overwritten');

    data.components[tag] = cmp;
}

/**
 * Remove all global components
 */
function removeAll() {
    data.components = {};
    data.plugins = [];
}

/**
 * Get component from global
 * @param tag
 * @returns {*}
 */
function getComponent(tag) {
    tag = tag.toUpperCase();
    return data.components[tag];
}

/**
 * Register a plugin to global
 * @param plugin
 */
function registerPlugin(plugin) {
    data.plugins.push(plugin);
}

module.exports = {
    registerComponent: registerComponent,
    registerPlugin: registerPlugin,
    getComponent: getComponent,
    removeAll: removeAll,
    data: data
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function delay(cb) {
    if (window.requestAnimationFrame !== undefined) return window.requestAnimationFrame(cb);else return window.setTimeout(cb);
}

module.exports = delay;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var delay = __webpack_require__(2);

function callBeforeCreate(context) {
    if (typeof context.onBeforeCreate === 'function') {
        return context.onBeforeCreate.call(context);
    }
    if (context.parent && typeof context.parent[context.__onBeforeCreate] === 'function') {
        return context.parent[context.__onBeforeCreate].call(context.parent, context);
    }
}

function callCreate(context) {
    if (typeof context.onCreate === 'function') {
        context.onCreate.call(context);
    }
    if (context.parent && typeof context.parent[context.__onCreate] === 'function') {
        context.parent[context.__onCreate].call(context.parent, context);
    }
    context.app.emit('componentCreate', context);
}

function callConfigCreate(context) {
    if (typeof context.onConfigCreate === 'function') {
        context.onConfigCreate.call(context);
    }
    if (context.parent && typeof context.parent[context.__onConfigCreate] === 'function') {
        context.parent[context.__onConfigCreate].call(context.parent, context);
    }
    context.app.emit('componentConfigCreate', context);
}

function callBeforeMount(context) {
    if (typeof context.onBeforeMount === 'function') {
        return context.onBeforeMount.call(context);
    }
    if (context.parent && typeof context.parent[context.__onBeforeMount] === 'function') {
        return context.parent[context.__onBeforeMount].call(context.parent, context);
    }
}

function callMount(context) {
    if (typeof context.onMount === 'function') {
        context.onMount.call(context);
    }
    if (context.parent && typeof context.parent[context.__onMount] === 'function') {
        context.parent[context.__onMount].call(context.parent, context);
    }
    context.app.emit('componentMount', context);
}

function callMountAsync(context) {
    if (typeof context.onMountAsync === 'function') {
        delay(function () {
            context.onMountAsync.call(context);
        });
    }
    if (context.parent && typeof context.parent[context.__onMountAsync] === 'function') {
        delay(function () {
            context.parent[context.__onMountAsync].call(context.parent, context);
        });
    }
    context.app.emit('componentMountAsync', context);
}

function callBeforeUpdate(context, changes) {
    if (typeof context.onBeforeUpdate === 'function') {
        return context.onBeforeUpdate.call(context, changes);
    }
    if (context.parent && typeof context.parent[context.__onBeforeUpdate] === 'function') {
        return context.parent[context.__onBeforeUpdate].call(context.parent, context, changes);
    }
}

function callUpdate(context, changes) {
    if (typeof context.onUpdate === 'function') {
        context.onUpdate.call(context, changes);
    }
    if (context.parent && typeof context.parent[context.__onUpdate] === 'function') {
        context.parent[context.__onUpdate].call(context.parent, context, changes);
    }
    context.app.emit('componentUpdate', context, changes);
}

function callAfterRender(context, changes) {
    if (typeof context.onAfterRender === 'function') {
        return context.onAfterRender.call(context, changes);
    }
    if (context.parent && typeof context.parent[context.__onAfterRender] === 'function') {
        return context.parent[context.__onAfterRender].call(context.parent, context, changes);
    }
}

function callBeforeUnmount(context) {
    if (typeof context.onBeforeUnmount === 'function') {
        return context.onBeforeUnmount.call(context);
    }
    if (context.parent && typeof context.parent[context.__onBeforeUnmount] === 'function') {
        return context.parent[context.__onBeforeUnmount].call(context.parent, context);
    }
}

function callUnmount(context) {
    if (typeof context.onUnmount === 'function') {
        context.onUnmount.call(context);
    }
    if (context.parent && typeof context.parent[context.__onUnmount] === 'function') {
        context.parent[context.__onUnmount].call(context.parent, context);
    }
    context.app.emit('componentUnmount', context);
}

function callBeforeDestroy(context) {
    if (typeof context.onBeforeDestroy === 'function') {
        return context.onBeforeDestroy.call(context);
    }
    if (context.parent && typeof context.parent[context.__onBeforeDestroy] === 'function') {
        return context.parent[context.__onBeforeDestroy].call(context.parent, context);
    }
}

function callDestroy(context) {
    context.app.emit('componentDestroy', context);
    if (context.store && context.app._stores[context.store]) delete context.app._stores[context.store];

    if (context._unmountedPlaceholder && context._unmountedPlaceholder.parentNode) context._unmountedPlaceholder.parentNode.removeChild(context._unmountedPlaceholder);

    if (context.id && context.app._ids[context.id]) delete context.app._ids[context.id];
    if (typeof context.onDestroy === 'function' && context.parent && typeof context.parent[context.__onDestroy] === 'function') {
        context.onDestroy.call(context);
        context.parent[context.__onDestroy].call(context.parent, context);
        context = null;
    } else if (typeof context.onDestroy === 'function') {
        context.onDestroy.call(context);
        context = null;
    } else if (context.parent && typeof context.parent[context.__onDestroy] === 'function') {
        context.parent[context.__onDestroy].call(context.parent, context);
        context = null;
    }
}

function callLoadProps(context) {
    if (typeof context.onLoadProps === 'function') {
        context.onLoadProps.call(context);
    }
    if (context.parent && typeof context.parent[context.__onLoadProps] === 'function') {
        context.parent[context.__onLoadProps].call(context.parent, context);
    }
    context.app.emit('componentLoadProps', context);
}

module.exports = {
    callBeforeCreate: callBeforeCreate,
    callCreate: callCreate,
    callConfigCreate: callConfigCreate,
    callBeforeMount: callBeforeMount,
    callMount: callMount,
    callMountAsync: callMountAsync,
    callBeforeUpdate: callBeforeUpdate,
    callUpdate: callUpdate,
    callAfterRender: callAfterRender,
    callBeforeUnmount: callBeforeUnmount,
    callUnmount: callUnmount,
    callBeforeDestroy: callBeforeDestroy,
    callDestroy: callDestroy,
    callLoadProps: callLoadProps
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var castStringTo = __webpack_require__(9);
var dashToCamel = __webpack_require__(10);

var _require = __webpack_require__(0),
    REGEX = _require.REGEX,
    ATTR = _require.ATTR,
    TAG = _require.TAG,
    DIR_IS = _require.DIR_IS;

var regExcludeSpecial = new RegExp('</?' + TAG.TEXT_NODE_PLACE + '?>$');

var selfClosingElements = {
    meta: true,
    img: true,
    link: true,
    input: true,
    area: true,
    br: true,
    hr: true
};

var elementsClosedByOpening = {
    li: { li: true },
    p: { p: true, div: true },
    td: { td: true, th: true },
    th: { td: true, th: true }
};

var elementsClosedByClosing = {
    li: { ul: true, ol: true },
    a: { div: true },
    b: { div: true },
    i: { div: true },
    p: { div: true },
    td: { tr: true, table: true },
    th: { tr: true, table: true }
};

function last(arr) {
    return arr[arr.length - 1];
}

function removeNLS(str) {
    return str.replace(REGEX.MATCH_NLS, ' ');
}

var Element = function () {
    function Element(name, props, isSVG) {
        _classCallCheck(this, Element);

        this.type = name;
        this.props = Object.assign({}, props);
        this.children = [];
        this.isSVG = isSVG || REGEX.IS_SVG.test(name);
    }

    _createClass(Element, [{
        key: 'appendChild',
        value: function appendChild(node) {
            this.children.push(node);
            return node;
        }
    }]);

    return Element;
}();

function compile(data) {

    if (!data) return '';

    var root = new Element(null, {});
    var stack = [root];
    var currentParent = root;
    var lastTextPos = -1;
    var match = void 0;
    var props = void 0;

    while (match = REGEX.HTML_MARKUP.exec(data)) {

        if (lastTextPos > -1) {
            if (lastTextPos > -1 && lastTextPos + match[0].length < REGEX.HTML_MARKUP.lastIndex) {
                // remove new line space
                var text = removeNLS(data.substring(lastTextPos, REGEX.HTML_MARKUP.lastIndex - match[0].length));
                // if has content
                if (text) currentParent.appendChild(text);
            }
        }

        lastTextPos = REGEX.HTML_MARKUP.lastIndex;
        if (match[0][1] === '!') {
            // this is a comment or style
            continue;
        }

        // exclude special text node
        if (regExcludeSpecial.test(match[0])) {
            continue;
        }

        if (!match[1]) {
            // not </ tags
            props = {};
            for (var attMatch; attMatch = REGEX.HTML_ATTRIBUTE.exec(match[3]);) {
                props[attMatch[2]] = removeNLS(attMatch[5] || attMatch[6] || '');
                propsFixer(match[0].substring(1, match[0].length - 1), attMatch[2], props[attMatch[2]], props);
            }

            if (!match[4] && elementsClosedByOpening[currentParent.type]) {
                if (elementsClosedByOpening[currentParent.type][match[2]]) {
                    stack.pop();
                    currentParent = last(stack);
                }
            }

            currentParent = currentParent.appendChild(new Element(match[2], props, currentParent.isSVG));
            stack.push(currentParent);
        }

        if (match[1] || match[4] || selfClosingElements[match[2]]) {
            // </ or /> or <br> etc.
            while (true) {
                if (currentParent.type === match[2]) {
                    stack.pop();
                    currentParent = last(stack);
                    break;
                } else {
                    // Trying to close current tag, and move on
                    if (elementsClosedByClosing[currentParent.type]) {
                        if (elementsClosedByClosing[currentParent.type][match[2]]) {
                            stack.pop();
                            currentParent = last(stack);
                            continue;
                        }
                    }
                    // Use aggressive strategy to handle unmatching markups.
                    break;
                }
            }
        }
    }

    if (root.children.length > 1) {
        root.type = TAG.ROOT;
    } else if (root.children.length) {
        return root.children[0];
    }

    return root;
}

function serializeProps(node) {
    var props = {};

    if (node.attributes) {
        var attributes = Array.from(node.attributes);
        for (var j = attributes.length - 1; j >= 0; --j) {
            var attr = attributes[j];

            propsFixer(node.nodeName, attr.name, attr.nodeValue, props, node[DIR_IS]);
        }
    }
    return props;
}

function propsFixer(nName, aName, aValue, props, dIS) {
    var isComponentListener = aName.match(REGEX.IS_COMPONENT_LISTENER);
    if (isComponentListener) {
        if (props[ATTR.LISTENER] === undefined) props[ATTR.LISTENER] = {};
        props[ATTR.LISTENER][isComponentListener[1]] = aValue;
        delete props[aName];
    } else {
        if (REGEX.IS_STRING_QUOTED.test(aValue)) aValue = aValue.replace(REGEX.REPLACE_QUOT, '&quot;');
        props[REGEX.IS_CUSTOM_TAG.test(nName) || dIS ? dashToCamel(aName) : aName] = aName === ATTR.FORCE_UPDATE ? true : castStringTo(aValue);
    }
}

module.exports = {
    compile: compile,
    serializeProps: serializeProps,
    propsFixer: propsFixer
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(0),
    TAG = _require.TAG,
    CMP_INSTANCE = _require.CMP_INSTANCE,
    INSTANCE = _require.INSTANCE,
    REGEX = _require.REGEX;

var observer = __webpack_require__(29);
var hooks = __webpack_require__(3);
var update = __webpack_require__(31).updateElement;
var store = __webpack_require__(35);
var ids = __webpack_require__(36);
var proxy = __webpack_require__(11);
var toInlineStyle = __webpack_require__(37);
var queueReady = __webpack_require__(38);
var queueDraw = __webpack_require__(39);
var extendInstance = __webpack_require__(40);
var cloneObject = __webpack_require__(41);
var toLiteralString = __webpack_require__(15);
var removeAllAttributes = __webpack_require__(42);
var h = __webpack_require__(16);
var loadLocal = __webpack_require__(43);
var localMixin = __webpack_require__(44);

var _require2 = __webpack_require__(4),
    compile = _require2.compile;

var delay = __webpack_require__(2);
var propsInit = __webpack_require__(18);

var _require3 = __webpack_require__(12),
    updateBoundElementsByPropsIteration = _require3.updateBoundElementsByPropsIteration;

var Component = function () {
    function Component(opt) {
        _classCallCheck(this, Component);

        Object.defineProperties(this, {
            _isSubclass: {
                value: this.__proto__.constructor !== Component
            },
            _rawProps: {
                value: {},
                writable: true
            }
        });

        opt.cmp = opt.cmp || {
            tag: opt.tag,
            cfg: {}
        };

        this._initRawProps(opt);

        defineProperties(this, opt);

        // Assign cfg to instance
        extendInstance(this, opt.cmp.cfg, opt.dProps);

        // Create mixin
        localMixin(this);

        // Load local components
        loadLocal(this);

        var beforeCreate = hooks.callBeforeCreate(this);
        if (beforeCreate === false) return;

        // Create observer to props
        observer.create(this, true);
        // Create shared store
        store.create(this);
        // Create ID
        ids.create(this);
        // Add callback to ready queue
        queueReady.add(this);
        // Add callback app draw
        queueDraw.add(this);
        // Call create
        hooks.callCreate(this);
    }

    _createClass(Component, [{
        key: 'loadProps',
        value: function loadProps(props) {
            if ((typeof props === 'undefined' ? 'undefined' : _typeof(props)) !== 'object') throw new TypeError('Props must be an object');

            this._rawProps = Object.assign({}, props);
            propsInit(this);
            updateBoundElementsByPropsIteration(this);
            observer.create(this);
            store.sync(this);
            hooks.callLoadProps(this);
        }
    }, {
        key: 'getHTMLElement',
        value: function getHTMLElement() {
            return this._parentElement;
        }
    }, {
        key: 'beginSafeRender',
        value: function beginSafeRender() {
            proxy.beginRender(this.props);
        }
    }, {
        key: 'endSafeRender',
        value: function endSafeRender() {
            proxy.endRender(this.props);
        }
    }, {
        key: 'emit',
        value: function emit(name) {
            if (this._callback && this._callback[name] !== undefined && this.parent[this._callback[name]] !== undefined && typeof this.parent[this._callback[name]] === 'function') {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                this.parent[this._callback[name]].apply(this.parent, args);
            }
        }
    }, {
        key: 'each',
        value: function each(obj, func) {
            var safe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var res = void 0;
            if (Array.isArray(obj)) {
                if (safe) this.beginSafeRender();
                res = obj.map(func).map(function (stringEl) {
                    if (typeof stringEl === 'string') {
                        return stringEl.trim();
                    }
                }).join('');
                if (safe) this.endSafeRender();
            }
            return res;
        }
    }, {
        key: 'toStyle',
        value: function toStyle(obj) {
            return toInlineStyle(obj);
        }
    }, {
        key: 'getStore',
        value: function getStore(storeName) {
            return this.app.getStore(storeName);
        }
    }, {
        key: 'getComponentById',
        value: function getComponentById(id) {
            return this.app.getComponentById(id);
        }
    }, {
        key: 'getCmp',
        value: function getCmp(id) {
            return this.app.getComponentById(id);
        }
    }, {
        key: 'template',
        value: function template() {
            return '';
        }
    }, {
        key: 'render',
        value: function render(initial) {
            var _this = this;

            this.beginSafeRender();
            var template = this.template(h);
            this.endSafeRender();
            var next = compile(template);
            this.app.emit('draw', next, this._prev, this);
            queueDraw.emit(this, next, this._prev);

            var rootElement = update(this._cfgRoot, next, this._prev, 0, this, initial);

            //Remove attributes from component tag
            removeAllAttributes(this._cfgRoot, ['data-is']);

            if (!this._rootElement && rootElement) {
                this._rootElement = rootElement;
                this._parentElement = rootElement.parentNode;
            }

            this._prev = next;

            hooks.callAfterRender(this);
            if (initial) {
                drawDynamic(this);
            } else {
                delay(function () {
                    return drawDynamic(_this);
                });
            }
        }
    }, {
        key: 'mount',
        value: function mount(template) {
            var _this2 = this;

            var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


            if (this._unmounted) {
                if (hooks.callBeforeMount(this) === false) return this;

                this._unmountedPlaceholder.parentNode.replaceChild(this._unmountedParentNode, this._unmountedPlaceholder);

                this._unmounted = false;
                this._unmountedParentNode = null;
                this._unmountedPlaceholder = null;

                hooks.callMount(this);

                var _defined = function _defined(child) {
                    _this2.children[child].mount();
                };

                var _defined2 = Object.keys(this.children);

                for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
                    _defined(_defined2[_i2], _i2, _defined2);
                }

                return this;
            } else if (template) {
                if (this._rootElement.nodeType !== 1) {
                    var newElement = document.createElement(this.tag + TAG.SUFFIX_ROOT);
                    this._rootElement.parentNode.replaceChild(newElement, this._rootElement);
                    this._rootElement = newElement;
                    this._rootElement[CMP_INSTANCE] = this;
                }

                var root = this._rootElement;

                if (typeof cfg.selector === 'string') root = root.querySelector(cfg.selector);else if (cfg.selector instanceof HTMLElement) root = cfg.selector;

                this._unmounted = false;
                this._unmountedParentNode = null;
                this._unmountedPlaceholder = null;

                return this.app.mount(template, root, this);
            }
        }
    }, {
        key: 'unmount',
        value: function unmount() {
            var onlyInstance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var _this3 = this;

            var byDestroy = arguments[1];
            var silently = arguments[2];

            if (!onlyInstance && (Boolean(this._unmountedParentNode) || !this._rootElement || !this._rootElement.parentNode || !this._rootElement.parentNode.parentNode)) {
                return;
            }

            if (hooks.callBeforeUnmount(this) === false) return false;

            this._unmountedParentNode = this._rootElement.parentNode;
            this._unmountedPlaceholder = document.createComment(Date.now().toString());

            if (!onlyInstance) {
                this._rootElement.parentNode.parentNode.replaceChild(this._unmountedPlaceholder, this._unmountedParentNode);
            } else this._rootElement.parentNode.innerHTML = '';

            this._unmounted = !byDestroy;

            if (!silently) hooks.callUnmount(this);

            var _defined3 = function _defined3(child) {
                _this3.children[child].unmount(onlyInstance, byDestroy, silently);
            };

            var _defined4 = Object.keys(this.children);

            for (var _i4 = 0; _i4 <= _defined4.length - 1; _i4++) {
                _defined3(_defined4[_i4], _i4, _defined4);
            }

            return this;
        }
    }, {
        key: 'destroy',
        value: function destroy(onlyInstance) {
            var _this4 = this;

            if (this.unmount(onlyInstance, true) === false) return;

            if (!onlyInstance && (!this._rootElement || hooks.callBeforeDestroy(this) === false || !this._rootElement.parentNode)) {
                return;
            }

            var _defined5 = function _defined5(child) {
                _this4.children[child].destroy();
            };

            var _defined6 = Object.keys(this.children);

            for (var _i6 = 0; _i6 <= _defined6.length - 1; _i6++) {
                _defined5(_defined6[_i6], _i6, _defined6);
            }

            hooks.callDestroy(this);
        }
    }, {
        key: '_initTemplate',
        value: function _initTemplate(opt) {
            if (typeof opt.cmp.cfg.template === 'string') {
                var contentTpl = opt.cmp.cfg.template;
                if (REGEX.IS_ID_SELECTOR.test(contentTpl)) {
                    opt.cmp.cfg.template = function () {
                        var contentStr = toLiteralString(document.querySelector(contentTpl).innerHTML);
                        return eval('`' + contentStr + '`');
                    };
                } else {
                    opt.cmp.cfg.template = function () {
                        contentTpl = toLiteralString(contentTpl);
                        return eval('`' + contentTpl + '`');
                    };
                }
            }
        }
    }, {
        key: '_initRawProps',
        value: function _initRawProps(opt) {
            if (!this._isSubclass) {
                this._rawProps = Object.assign({}, typeof opt.cmp.cfg.props === 'function' ? opt.cmp.cfg.props() : opt.cmp.cfg.props, opt.props);

                this._initTemplate(opt);
            } else {
                this._rawProps = Object.assign({}, opt.props);
            }
        }
    }, {
        key: 'props',
        set: function set(props) {
            if (typeof props === 'function') props = props();

            this._rawProps = Object.assign({}, props, this._opt ? this._opt.props : {});
            observer.create(this);
            store.sync(this);
        },
        get: function get() {
            return this._props;
        }
    }, {
        key: 'config',
        set: function set(obj) {
            if (!this._isSubclass) throw new Error('Config is allowed only for classes');

            if (this._configured) throw new Error('Already configured');

            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') throw new TypeError('Config must be an object');

            if (_typeof(obj.mixin) === 'object') {
                this.mixin = obj.mixin;
                localMixin(this);
            }

            if (_typeof(obj.components) === 'object') {
                this.components = obj.components;
                loadLocal(this);
            }

            if (typeof obj.store === 'string') {
                this.store = obj.store;
                store.create(this);
            }

            if (typeof obj.id === 'string') {
                this.id = obj.id;
                ids.create(this);
            }

            if (typeof obj.autoCreateChildren === 'boolean') {
                this.autoCreateChildren = obj.autoCreateChildren;
            }

            if (typeof obj.updateChildrenProps === 'boolean') {
                this.updateChildrenProps = obj.updateChildrenProps;
            }

            this._configured = true;

            hooks.callConfigCreate(this);
        }
    }]);

    return Component;
}();

function defineProperties(obj, opt) {

    Object.defineProperties(obj, {
        //Private
        _opt: {
            value: opt
        },
        _cfgRoot: {
            value: opt.root
        },
        _publicProps: {
            value: Object.assign({}, opt.props)
        },
        _initialProps: {
            value: cloneObject(obj._rawProps)
        },
        _callback: {
            value: opt.dProps['callback']
        },
        _isRendered: {
            value: false,
            writable: true
        },
        _prev: {
            value: null,
            writable: true
        },
        _rootElement: {
            value: null,
            writable: true
        },
        _parentElement: {
            value: null,
            writable: true
        },
        _boundElements: {
            value: {},
            writable: true
        },
        _components: {
            value: {},
            writable: true
        },
        _processing: {
            value: [],
            writable: true
        },
        _dynamicChildren: {
            value: [],
            writable: true
        },
        _unmounted: {
            value: false,
            writable: true
        },
        _unmountedParentNode: {
            value: null,
            writable: true
        },
        _configured: {
            value: false,
            writable: true
        },
        _props: {
            value: {},
            writable: true
        },
        _computedCache: {
            value: new Map()
        },

        //Public
        tag: {
            value: opt.cmp.tag,
            enumerable: true
        },
        app: {
            value: opt.app,
            enumerable: true
        },
        parent: {
            value: opt.parentCmp,
            enumerable: true,
            configurable: true
        },
        appRoot: {
            value: opt.app._root,
            enumerable: true
        },
        action: {
            value: opt.app.action,
            enumerable: true
        },
        shared: {
            value: opt.app.shared,
            writable: true,
            enumerable: true
        },
        ref: {
            value: {},
            enumerable: true
        },
        children: {
            value: {},
            enumerable: true
        },
        rawChildren: {
            value: [],
            enumerable: true
        },
        autoCreateChildren: {
            value: true,
            enumerable: true,
            writable: true
        },
        updateChildrenProps: {
            value: true,
            enumerable: true,
            writable: true
        },
        mixin: {
            value: [],
            enumerable: true,
            writable: true
        },
        propsConvertOnFly: {
            value: false,
            enumerable: true,
            writable: true
        },
        propsComputedOnFly: {
            value: false,
            enumerable: true,
            writable: true
        },
        delayUpdate: {
            value: 0,
            enumerable: true,
            writable: true
        }
    });
}

function drawDynamic(instance) {
    clearDynamic(instance);

    var index = instance._processing.length - 1;

    while (index >= 0) {
        var item = instance._processing[index];
        var root = item.node.parentNode;

        if (item.node[INSTANCE]) {
            item.node[INSTANCE].destroy(true);
        }

        if (item.node.innerHTML === '') {
            var dynamicInstance = __webpack_require__(6).get({
                root: root,
                template: item.node.outerHTML,
                app: instance.app,
                parent: instance
            });

            if (dynamicInstance) {
                instance._dynamicChildren.push(dynamicInstance._rootElement.parentNode);
                root.replaceChild(dynamicInstance._rootElement.parentNode, item.node);
                dynamicInstance._rootElement.parentNode[INSTANCE] = dynamicInstance;
                instance._processing.splice(index, 1);
            }
        }
        index -= 1;
    }
}

function clearDynamic(instance) {
    var index = instance._dynamicChildren.length - 1;

    while (index >= 0) {
        var item = instance._dynamicChildren[index];

        if (!document.body.contains(item) && item[INSTANCE]) {
            item[INSTANCE].destroy(true);
            instance._dynamicChildren.splice(index, 1);
        }
        index -= 1;
    }
}

module.exports = {
    Component: Component,
    defineProperties: defineProperties,
    clearDynamic: clearDynamic,
    drawDynamic: drawDynamic
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html = __webpack_require__(7);

var _require = __webpack_require__(24),
    scopedInner = _require.scopedInner;

var _require2 = __webpack_require__(0),
    CMP_INSTANCE = _require2.CMP_INSTANCE,
    ATTR = _require2.ATTR,
    DIR_IS = _require2.DIR_IS,
    REGEX = _require2.REGEX;

var collection = __webpack_require__(1);
var hooks = __webpack_require__(3);

var _require3 = __webpack_require__(4),
    serializeProps = _require3.serializeProps;

var _require4 = __webpack_require__(27),
    extract = _require4.extract;

var hmr = __webpack_require__(28);

var _require5 = __webpack_require__(5),
    Component = _require5.Component;

var propsInit = __webpack_require__(18);

function get() {
    var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    if (!cfg.root) return;

    cfg.template = typeof cfg.template === 'string' ? html.create(cfg.template) : cfg.template;

    cfg.root.appendChild(cfg.template);

    var component = null;
    var parentElement = void 0;
    var cmpName = void 0;
    var trash = [];

    function walk(child) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        while (child) {

            if (child.nodeName === 'STYLE') {
                var dataSetId = parent.cmp._rootElement.parentNode.dataset.is;
                var tagByData = void 0;
                if (dataSetId) tagByData = '[data-is="' + dataSetId + '"]';
                scopedInner(child.textContent, parent.cmp.tag, tagByData);
                var emptyStyle = document.createElement('script');
                emptyStyle.type = 'text/style';
                emptyStyle.textContent = ' ';
                emptyStyle.dataset.id = parent.cmp.tag + '--style';
                emptyStyle.dataset.owner = parent.cmp.tag;
                if (tagByData) emptyStyle.dataset.ownerByData = tagByData;
                child.parentNode.replaceChild(emptyStyle, child);
                child = emptyStyle.nextSibling;
                continue;
            }

            if (typeof child.getAttribute === 'function' && child.hasAttribute(ATTR.IS)) {
                cmpName = child.getAttribute(ATTR.IS).toLowerCase();
                child.removeAttribute(ATTR.IS);
                child.dataset.is = cmpName;
                child[DIR_IS] = true;
            } else cmpName = child.nodeName.toLowerCase();

            var localComponents = {};

            if (parent.cmp && parent.cmp._components) {
                localComponents = parent.cmp._components;
            }

            var cmp = cfg.autoCmp || localComponents[cmpName] || cfg.app._components[cmpName] || collection.getComponent(cmpName);

            if (cmp) {

                if (parent.cmp) {
                    var rawChild = child.outerHTML;
                    parent.cmp.rawChildren.push(rawChild);
                }

                // For node created by mount method
                if (parent.cmp && parent.cmp.mounted) {
                    child = child.nextSibling;
                    continue;
                }

                if (parent.cmp && parent.cmp.autoCreateChildren === false) {
                    trash.push(child);
                    child = child.nextSibling;
                    continue;
                }

                var props = serializeProps(child);
                var dProps = extract(props);

                var newElement = void 0;

                if (typeof cmp.cfg === 'function') {
                    // This implements single function component
                    if (!REGEX.IS_SFC.test(Function.prototype.toString.call(cmp.cfg))) {
                        var func = cmp.cfg;
                        cmp.cfg = function (_Component) {
                            _inherits(_class, _Component);

                            function _class() {
                                _classCallCheck(this, _class);

                                return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
                            }

                            return _class;
                        }(Component);
                        cmp.cfg.prototype.template = func;
                    }

                    newElement = new cmp.cfg({
                        tag: cmpName,
                        root: child,
                        app: cfg.app,
                        props: props,
                        dProps: dProps,
                        parentCmp: parent.cmp || cfg.parent
                    });
                } else {
                    newElement = new Component({
                        tag: cmpName,
                        cmp: cmp,
                        root: child,
                        app: cfg.app,
                        props: props,
                        dProps: dProps,
                        parentCmp: parent.cmp || cfg.parent
                    });
                }

                if (!newElement) {
                    child = child.nextSibling;
                    continue;
                }

                if (_typeof(newElement.module) === 'object') {
                    hmr(newElement, newElement.module);
                }

                propsInit(newElement);

                newElement.app.emit('componentPropsInit', newElement);

                if (hooks.callBeforeMount(newElement) !== false) {
                    newElement._isRendered = true;
                    newElement.render(true);

                    if (!component) {
                        component = newElement;
                    }

                    newElement._rootElement[CMP_INSTANCE] = newElement;

                    child.insertBefore(newElement._rootElement, child.firstChild);

                    hooks.callMount(newElement);
                    hooks.callMountAsync(newElement);
                }

                parentElement = newElement;

                if (parent.cmp) {
                    var n = Object.keys(parent.cmp.children).length;
                    parent.cmp.children[newElement.alias ? newElement.alias : n++] = newElement;
                }

                cfg.autoCmp = null;
            }

            if (child.hasChildNodes()) {
                walk(child.firstChild, { cmp: parentElement });
            }

            if (!cmp) {
                parentElement = parent.cmp;
            }

            child = child.nextSibling;
        }
    }

    walk(cfg.template);

    var _defined = function _defined(child) {
        return child.remove();
    };

    for (var _i2 = 0; _i2 <= trash.length - 1; _i2++) {
        _defined(trash[_i2], _i2, trash);
    }

    return component;
}

module.exports = {
    get: get
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexN = /\n/g;
var regexS = /\s+/g;
var replace = ' ';
var decoder = void 0;

var html = {
    /**
     * Create DOM element
     * @param str html string
     * @param wrapper tag string
     * @returns {Element | Node | null}
     */
    create: function create(str, wrapper) {
        var element = void 0;
        str = str.replace(regexN, replace);
        str = str.replace(regexS, replace);

        var template = document.createElement('div');
        template.innerHTML = str;

        if (wrapper && template.childNodes.length > 1) {
            element = document.createElement(wrapper);
            element.innerHTML = template.innerHTML;
        } else {
            element = template.firstChild || document.createTextNode('');
        }

        return element;
    },
    decode: function decode(str) {
        decoder = decoder || document.createElement('div');
        decoder.innerHTML = str;
        return decoder.textContent;
    }
};

module.exports = html;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
// Add tag prefix to animation name inside keyframe
(@(?:[\w-]+-)?keyframes\s+)([\w-_]+)

// Add tag prefix to animation
((?:[\w-]+-)?animation(?:-name)?(?:\s+)?:(?:\s+))([\w-_]+)
 */

function composeStyleInner(cssContent, tag, tagByData) {
    if (typeof cssContent !== 'string') return;

    tag = tagByData || tag;

    cssContent = cssContent.replace(/{/g, '{\n').replace(/}/g, '}\n').replace(/^(\s+)?:root(\s+)?{/gm, tag + ' {').replace(/:root/g, '').replace(/(@(?:[\w-]+-)?keyframes\s+)([\w-_]+)/g, '$1 ' + tag + '-$2').replace(/((?:[\w-]+-)?animation(?:-name)?(?:\s+)?:(?:\s+))([\w-_]+)/g, '$1 ' + tag + '-$2').replace(/[^\s].*{/gm, function (match) {

        if (/^(@|(from|to|\d+%)[^-_])/.test(match)) return match;

        var part = match.split(',');
        var sameTag = new RegExp('^' + tag.replace(/[[\]]/g, '\\$&') + '(\\s+)?{');

        for (var i = 0; i < part.length; i++) {
            if (sameTag.test(part[i].trim())) continue;

            if (/^:global/.test(part[i])) part[i] = part[i].replace(':global', '');else part[i] = tag + ' ' + part[i];
        }
        match = part.join(',');
        return match;
    });

    cssContent = cssContent.replace(/\s{2,}/g, ' ').replace(/{ /g, '{').replace(/ }/g, '}').replace(/\n/g, '').trim();

    return cssContent;
}

module.exports = composeStyleInner;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var test = {
    'undefined': undefined,
    'null': null,
    'NaN': NaN,
    'Infinity': Infinity,
    'true': true,
    'false': false,
    '0': 0
};

function castStringTo(obj) {
    if (typeof obj !== 'string') {
        return obj;
    }

    if (test.hasOwnProperty(obj)) {
        return test[obj];
    } else if (/^[{\[]/.test(obj)) {
        try {
            return JSON.parse(obj);
        } catch (e) {}
    } else if (/^[0-9]/.test(obj)) {
        var num = parseFloat(obj);
        if (!isNaN(num)) {
            if (isFinite(obj)) {
                if (obj.toLowerCase().indexOf('0x') === 0) {
                    return parseInt(obj, 16);
                }
                return num;
            }
        }
    }
    return obj;
}

module.exports = castStringTo;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dashToCamel(s) {
    return s.replace(/(-\w)/g, function (m) {
        return m[1].toUpperCase();
    });
}

module.exports = dashToCamel;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * 	Originally was Observable Slim
 *	Version 0.0.4
 * 	https://github.com/elliotnb/observable-slim
 *
 * 	Licensed under the MIT license:
 * 	http://www.opensource.org/licenses/MIT
 *
 *	Observable Slim is a singleton that allows you to observe changes made to an object and any nested
 *	children of that object. It is intended to assist with one-way data binding, that is, in MVC parlance,
 *	reflecting changes in the model to the app. Observable Slim aspires to be as lightweight and easily
 *	understood as possible. Minifies down to roughly 3000 characters.
 */

function sanitize(str) {
    return typeof str === 'string' ? str.replace(/&(?!\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : str;
}

/**
 * ObservableSlim
 * @type {{create, observe, remove, beforeChange, beginRender, endRender}}
 */
var ObservableSlim = function () {
    // An array that stores all of the observables created through the public create() method below.
    var observables = [];
    // An array of all the objects that we have assigned Proxies to
    var targets = [];

    // An array of arrays containing the Proxies created for each target object. targetsProxy is index-matched with
    // 'targets' -- together, the pair offer a Hash table where the key is not a string nor number, but the actual target object
    var targetsProxy = [];

    // this variable tracks duplicate proxies assigned to the same target.
    // the 'set' handler below will trigger the same change on all other Proxies tracking the same target.
    // however, in order to avoid an infinite loop of Proxies triggering and re-triggering one another, we use dupProxy
    // to track that a given Proxy was modified from the 'set' handler
    var dupProxy = null;

    var _getProperty = function _getProperty(obj, path) {
        return path.split('.').reduce(function (prev, curr) {
            return prev ? prev[curr] : undefined;
        }, obj || self);
    };

    /**
     * _create
     * @description Private internal function that is invoked to create a new ES6 Proxy whose changes we can observe through the Observerable.observe() method.
     * @param target {Object} required, plain JavaScript object that we want to observe for changes.
     * @param domDelay {Boolean|Null} batch up changes on a 10ms delay so a series of changes can be processed in one DOM update.
     * @param originalObservable {Object} the original observable created by the user, exists for recursion purposes, allows one observable to observe change on any nested/child objects.
     * @param originalPath {String} the path of the property in relation to the target on the original observable, exists for recursion purposes, allows one observable to observe change on any nested/child objects.
     * @returns {Object}
     * @private
     */
    var _create = function _create(target, domDelay, originalObservable, originalPath) {

        var autoDomDelay = domDelay == null;
        var observable = originalObservable || null;
        var path = originalPath || '';

        var changes = [];

        var _getPath = function _getPath(target, property) {
            if (target instanceof Array) {
                return path !== '' ? path : property;
            } else {
                return path !== '' ? path + '.' + property : property;
            }
        };

        var calls = 0;

        var _notifyObservers = function _notifyObservers(numChanges) {

            // reset calls number after 10ms
            if (autoDomDelay) {
                domDelay = ++calls > 1;
                setTimeout(function () {
                    calls = 0;
                }, 10);
            }

            // execute observer functions on a 10ms setTimeout, this prevents the observer functions from being executed
            // separately on every change -- this is necessary because the observer functions will often trigger UI updates
            if (domDelay === true) {
                setTimeout(function () {
                    if (numChanges === changes.length) {
                        // invoke any functions that are observing changes
                        for (var i = 0; i < observable.observers.length; i++) {
                            observable.observers[i](changes);
                        }changes = [];
                    }
                }, 10);
            } else {
                // invoke any functions that are observing changes
                for (var i = 0; i < observable.observers.length; i++) {
                    observable.observers[i](changes);
                }changes = [];
            }
        };

        var handler = {
            get: function get(target, property) {

                // implement a simple check for whether or not the object is a proxy, this helps the .create() method avoid
                // creating Proxies of Proxies.
                if (property === '__getTarget') {
                    return target;
                } else if (property === '__isProxy') {
                    return true;
                    // from the perspective of a given observable on a parent object, return the parent object of the given nested object
                } else if (property === '__getParent') {
                    return function (i) {
                        if (typeof i === 'undefined') i = 1;
                        var parentPath = _getPath(target, '__getParent').split('.');
                        parentPath.splice(-(i + 1), i + 1);
                        return _getProperty(observable.parentProxy, parentPath.join('.'));
                    };
                }

                // for performance improvements, we assign this to a variable so we do not have to lookup the property value again
                var targetProp = target[property];

                // if we are traversing into a new object, then we want to record path to that object and return a new observable.
                // recursively returning a new observable allows us a single Observable.observe() to monitor all changes on
                // the target object and any objects nested within.
                if (targetProp instanceof Object && targetProp !== null && target.hasOwnProperty(property)) {

                    // if we've found a proxy nested on the object, then we want to retrieve the original object behind that proxy
                    if (targetProp.__isProxy === true) targetProp = targetProp.__getTarget;

                    // if we've previously setup a proxy on this target, then...
                    //let a = observable.targets.indexOf(targetProp);
                    var a = -1;
                    var observableTargets = observable.targets;
                    for (var i = 0, l = observableTargets.length; i < l; i++) {
                        if (targetProp === observableTargets[i]) {
                            a = i;
                            break;
                        }
                    }
                    if (a > -1) return observable.proxies[a];

                    // if we're arrived here, then that means there is no proxy for the object the user just accessed, so we
                    // have to create a new proxy for it
                    var newPath = path !== '' ? path + '.' + property : property;

                    return _create(targetProp, domDelay, observable, newPath);
                } else {
                    var value = observable.renderMode ? sanitize(targetProp) : targetProp;

                    var manipulate = observable.manipulate;
                    if (typeof manipulate === 'function') {
                        value = manipulate(value, property, true);
                    }

                    return value;
                }
            },
            deleteProperty: function deleteProperty(target, property) {

                // was this change an original change or was it a change that was re-triggered below
                var originalChange = true;
                if (dupProxy === proxy) {
                    originalChange = false;
                    dupProxy = null;
                }

                // in order to report what the previous value was, we must make a copy of it before it is deleted
                var previousValue = Object.assign({}, target);

                // get the path of the property being deleted
                var currentPath = _getPath(target, property);

                // record the deletion that just took place
                changes.push({
                    type: 'delete',
                    target: target,
                    property: property,
                    newValue: null,
                    previousValue: previousValue[property],
                    currentPath: currentPath,
                    proxy: proxy
                });

                if (typeof observable.beforeChange === 'function' && observable.checkBeforeChange !== currentPath) {
                    observable.checkBeforeChange = currentPath;
                    var res = observable.beforeChange(changes);
                    if (res === false) {
                        observable.checkBeforeChange = '';
                        return false;
                    }
                }

                observable.checkBeforeChange = '';

                if (originalChange === true) {
                    var a = void 0,
                        l = void 0;
                    for (a = 0, l = targets.length; a < l; a++) {
                        if (target === targets[a]) break;
                    } // loop over each proxy and see if the target for this change has any other proxies
                    var currentTargetProxy = targetsProxy[a];

                    var b = currentTargetProxy.length;
                    while (b--) {
                        // if the same target has a different proxy
                        if (currentTargetProxy[b].proxy !== proxy) {
                            // !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
                            // prevent a change on dupProxy from re-triggering the same change on other proxies)
                            dupProxy = currentTargetProxy[b].proxy;

                            // make the same delete on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
                            // on any other proxies so that the previousValue can show up correct for the other proxies
                            delete currentTargetProxy[b].proxy[property];
                        }
                    }

                    // perform the delete that we've trapped
                    delete target[property];
                }

                _notifyObservers(changes.length);

                return true;
            },
            set: function set(target, property, value, receiver) {

                // was this change an original change or was it a change that was re-triggered below
                var originalChange = true;
                if (dupProxy === proxy) {
                    originalChange = false;
                    dupProxy = null;
                }

                // improve performance by saving direct references to the property
                var targetProp = target[property];

                // only record a change if the new value differs from the old one OR if this proxy was not the original proxy to receive the change
                if (targetProp !== value || originalChange === false) {

                    var typeOfTargetProp = typeof targetProp === 'undefined' ? 'undefined' : _typeof(targetProp);

                    // get the path of the object property being modified
                    var currentPath = _getPath(target, property);

                    // determine if we're adding something new or modifying some that already existed
                    var type = 'update';
                    if (typeOfTargetProp === 'undefined') type = 'add';

                    var manipulate = observable.manipulate;
                    if (typeof manipulate === 'function') {
                        value = manipulate(value, currentPath, false);
                    }

                    // store the change that just occurred. it is important that we store the change before invoking the other proxies so that the previousValue is correct
                    changes.push({
                        type: type,
                        target: target,
                        property: property,
                        newValue: value,
                        previousValue: receiver[property],
                        currentPath: currentPath,
                        proxy: proxy
                    });

                    if (typeof observable.beforeChange === 'function' && observable.checkBeforeChange !== currentPath) {
                        observable.checkBeforeChange = currentPath;
                        var res = observable.beforeChange(changes);
                        if (res === false) {
                            observable.checkBeforeChange = '';
                            return false;
                        }
                    }

                    observable.checkBeforeChange = '';

                    // !!IMPORTANT!! if this proxy was the first proxy to receive the change, then we need to go check and see
                    // if there are other proxies for the same project. if there are, then we will modify those proxies as well so the other
                    // observers can be modified of the change that has occurred.
                    if (originalChange === true) {

                        var a = void 0,
                            l = void 0;
                        for (a = 0, l = targets.length; a < l; a++) {
                            if (target === targets[a]) break;
                        } // loop over each proxy and see if the target for this change has any other proxies
                        var currentTargetProxy = targetsProxy[a];
                        if (currentTargetProxy) for (var b = 0, _l = currentTargetProxy.length; b < _l; b++) {
                            // if the same target has a different proxy
                            if (currentTargetProxy[b].proxy !== proxy) {

                                // !!IMPORTANT!! store the proxy as a duplicate proxy (dupProxy) -- this will adjust the behavior above appropriately (that is,
                                // prevent a change on dupProxy from re-triggering the same change on other proxies)
                                dupProxy = currentTargetProxy[b].proxy;

                                // invoke the same change on the different proxy for the same target object. it is important that we make this change *after* we invoke the same change
                                // on any other proxies so that the previousValue can show up correct for the other proxies
                                currentTargetProxy[b].proxy[property] = value;
                            }
                        }

                        // if the property being overwritten is an object, then that means this observable
                        // will need to stop monitoring this object and any nested objects underneath the overwritten object else they'll become
                        // orphaned and grow memory usage. we excute this on a setTimeout so that the clean-up process does not block
                        // the UI rendering -- there's no need to execute the clean up immediately
                        setTimeout(function () {

                            if (typeOfTargetProp === 'object' && targetProp !== null) {

                                // check if the to-be-overwritten target property still exists on the target object
                                // if it does still exist on the object, then we don't want to stop observing it. this resolves
                                // an issue where array .sort() triggers objects to be overwritten, but instead of being overwritten
                                // and discarded, they are shuffled to a new position in the array
                                var keys = Object.keys(target);
                                for (var i = 0, _l2 = keys.length; i < _l2; i++) {
                                    if (target[keys[i]] === targetProp) {
                                        //console.log('target still exists');
                                        return;
                                    }
                                }

                                // loop over each property and recursively invoke the `iterate` function for any
                                // objects nested on targetProp
                                (function iterate(obj) {

                                    var keys = Object.keys(obj);
                                    for (var _i = 0, _l3 = keys.length; _i < _l3; _i++) {
                                        var objProp = obj[keys[_i]];
                                        if (objProp instanceof Object && objProp !== null) iterate(objProp);
                                    }

                                    // if there are any existing target objects (objects that we're already observing)...
                                    //let c = targets.indexOf(obj);
                                    var c = -1;
                                    for (var _i2 = 0, _l4 = targets.length; _i2 < _l4; _i2++) {
                                        if (obj === targets[_i2]) {
                                            c = _i2;
                                            break;
                                        }
                                    }
                                    if (c > -1) {

                                        // ...then we want to determine if the observables for that object match our current observable
                                        var _currentTargetProxy = targetsProxy[c];
                                        var d = _currentTargetProxy.length;

                                        while (d--) {
                                            // if we do have an observable monitoring the object thats about to be overwritten
                                            // then we can remove that observable from the target object
                                            if (observable === _currentTargetProxy[d].observable) {
                                                _currentTargetProxy.splice(d, 1);
                                                break;
                                            }
                                        }

                                        // if there are no more observables assigned to the target object, then we can remove
                                        // the target object altogether. this is necessary to prevent growing memory consumption particularly with large data sets
                                        if (_currentTargetProxy.length === 0) {
                                            targetsProxy.splice(c, 1);
                                            targets.splice(c, 1);
                                        }
                                    }
                                })(targetProp);
                            }
                        }, 10000);

                        // because the value actually differs than the previous value
                        // we need to store the new value on the original target object
                        target[property] = value;

                        // TO DO: the next block of code resolves test case #24, but it results in poor IE11 performance. Find a solution.

                        // if the value we've just set is an object, then we'll need to iterate over it in order to initialize the
                        // observers/proxies on all nested children of the object
                        if (value instanceof Object && value !== null) {
                            (function iterate(proxy) {
                                var target = proxy.__getTarget;
                                var keys = Object.keys(target);
                                for (var i = 0, _l5 = keys.length; i < _l5; i++) {
                                    var _property = keys[i];
                                    if (target[_property] instanceof Object && target[_property] !== null) iterate(proxy[_property]);
                                }
                            })(proxy[property]);
                        }
                    }

                    // notify the observer functions that the target has been modified
                    _notifyObservers(changes.length);
                }
                return true;
            }
        };

        // create the proxy that we'll use to observe any changes
        var proxy = new Proxy(target, handler);

        // we don't want to create a new observable if this function was invoked recursively
        if (observable === null) {
            observable = {
                parentTarget: target,
                domDelay: domDelay,
                parentProxy: proxy,
                observers: [],
                targets: [target],
                proxies: [proxy],
                path: path
            };
            observables.push(observable);
        } else {
            observable.targets.push(target);
            observable.proxies.push(proxy);
        }

        // store the proxy we've created so it isn't re-created unnecessary via get handler
        var proxyItem = { target: target, proxy: proxy, observable: observable };

        //let targetPosition = targets.indexOf(target);
        var targetPosition = -1;
        for (var i = 0, l = targets.length; i < l; i++) {
            if (target === targets[i]) {
                targetPosition = i;
                break;
            }
        }

        // if we have already created a Proxy for this target object then we add it to the corresponding array
        // on targetsProxy (targets and targetsProxy work together as a Hash table indexed by the actual target object).
        if (targetPosition > -1) {
            targetsProxy[targetPosition].push(proxyItem);
            // else this is a target object that we have not yet created a Proxy for, so we must add it to targets,
            // and push a new array on to targetsProxy containing the new Proxy
        } else {
            targets.push(target);
            targetsProxy.push([proxyItem]);
        }

        return proxy;
    };

    return {
        /**
         * Create
         * @description Public method that is invoked to create a new ES6 Proxy whose changes we can observe through the Observerable.observe() method.
         * @param target {Object} required, plain JavaScript object that we want to observe for changes.
         * @param domDelay {Boolean} if true, then batch up changes on a 10ms delay so a series of changes can be processed in one DOM update.
         * @param observer {Function} optional, will be invoked when a change is made to the proxy.
         * @returns {Object}
         */
        create: function create(target, domDelay, observer) {

            // test if the target is a Proxy, if it is then we need to retrieve the original object behind the Proxy.
            // we do not allow creating proxies of proxies because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
            if (target.__isProxy === true) {
                target = target.__getTarget;
                //if it is, then we should throw an error. we do not allow creating proxies of proxies
                // because -- given the recursive design of ObservableSlim -- it would lead to sharp increases in memory usage
                //throw new Error('ObservableSlim.create() cannot create a Proxy for a target object that is also a Proxy.');
            }

            // fire off the _create() method -- it will create a new observable and proxy and return the proxy
            var proxy = _create(target, domDelay);

            // assign the observer function
            if (typeof observer === 'function') this.observe(proxy, observer);

            // recursively loop over all nested objects on the proxy we've just created
            // this will allow the top observable to observe any changes that occur on a nested object
            (function iterate(proxy) {
                var target = proxy.__getTarget;
                var keys = Object.keys(target);
                for (var i = 0, l = keys.length; i < l; i++) {
                    var property = keys[i];
                    if (target[property] instanceof Object && target[property] !== null) iterate(proxy[property]);
                }
            })(proxy);

            return proxy;
        },

        /**
         * observe
         * @description This method is used to add a new observer function to an existing proxy.
         * @param proxy {Proxy} the ES6 Proxy returned by the create() method. We want to observe changes made to this object.
         * @param observer {Function} this function will be invoked when a change is made to the observable (not to be confused with the observer defined in the create() method).
         */
        observe: function observe(proxy, observer) {
            // loop over all the observables created by the _create() function
            var i = observables.length;
            while (i--) {
                if (observables[i].parentProxy === proxy) {
                    observables[i].observers.push(observer);
                    break;
                }
            }
        },

        /**
         * Remove
         * @description this method will remove the observable and proxy thereby preventing any further callback observers for changes occuring to the target object.
         * @param proxy {Proxy} the ES6 Proxy returned by the create() method
         */
        remove: function remove(proxy) {

            var matchedObservable = null;
            var foundMatch = false;

            var c = observables.length;
            while (c--) {
                if (observables[c].parentProxy === proxy) {
                    matchedObservable = observables[c];
                    foundMatch = true;
                    break;
                }
            }
            var a = targetsProxy.length;
            while (a--) {
                var b = targetsProxy[a].length;
                while (b--) {
                    if (targetsProxy[a][b].observable === matchedObservable) {
                        targetsProxy[a].splice(b, 1);
                        if (targetsProxy[a].length === 0) {
                            targetsProxy.splice(a, 1);
                            targets.splice(a, 1);
                        }
                    }
                }
            }
            if (foundMatch === true) {
                observables.splice(c, 1);
            }
        },

        /**
         * manipulate
         * @description This method allows manipulation data.
         * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
         * @param callback {Function} will be invoked before every change is made to the proxy, if it returns false no changes will be made.
         */
        manipulate: function manipulate(proxy, callback) {
            if (typeof callback !== 'function') throw new Error('callback is required');

            var i = observables.length;
            var foundMatch = false;
            while (i--) {
                if (observables[i].parentProxy === proxy) {
                    observables[i].manipulate = callback;
                    foundMatch = true;
                    break;
                }
            }
            if (foundMatch === false) throw new Error('proxy not found.');
        },

        /**
         * beforeChange
         * @description This method accepts a function will be invoked before changes.
         * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
         * @param callback {Function} will be invoked before every change is made to the proxy, if it returns false no changes will be made.
         */
        beforeChange: function beforeChange(proxy, callback) {
            if (typeof callback !== 'function') throw new Error('callback is required');

            var i = observables.length;
            var foundMatch = false;
            while (i--) {
                if (observables[i].parentProxy === proxy) {
                    observables[i].beforeChange = callback;
                    foundMatch = true;
                    break;
                }
            }
            if (foundMatch === false) throw new Error('proxy not found.');
        },

        /**
         * beginRender
         * @description This method set renderMode to true so the param in get is sanitized.
         * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
         */
        beginRender: function beginRender(proxy) {
            var i = observables.length;
            var foundMatch = false;
            while (i--) {
                if (observables[i].parentProxy === proxy) {
                    observables[i].renderMode = true;
                    foundMatch = true;
                    break;
                }
            }
            if (foundMatch === false) throw new Error('proxy not found.');
        },

        /**
         * endRender
         * @description This method set renderMode to false.
         * @param proxy {Proxy} the ES6 Proxy returned by the create() method.
         */
        endRender: function endRender(proxy) {
            var i = observables.length;
            var foundMatch = false;
            while (i--) {
                if (observables[i].parentProxy === proxy) {
                    observables[i].renderMode = false;
                    foundMatch = true;
                    break;
                }
            }
            if (foundMatch === false) throw new Error('proxy not found.');
        }
    };
}();

module.exports = ObservableSlim;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function updateBoundElementsByChanges(instance, changes) {
    var _defined = function _defined(item) {
        var value = item.newValue;
        var property = item.property;
        updateBoundElements(instance, value, property);
    };

    for (var _i2 = 0; _i2 <= changes.length - 1; _i2++) {
        _defined(changes[_i2], _i2, changes);
    }
}

function updateBoundElementsByPropsIteration(instance) {
    (function iterate(props) {
        var keys = Object.keys(props);
        for (var i = 0, l = keys.length; i < l; i++) {
            var property = keys[i];
            if (props[property] instanceof Object && props[property] !== null) {
                iterate(props[property]);
            } else {
                updateBoundElements(instance, props[property], property);
            }
        }
    })(instance._rawProps);
}

function updateBoundElements(instance, value, property) {
    if (Object.prototype.hasOwnProperty.call(instance._boundElements, property)) {
        var _defined2 = function _defined2(element) {
            if (element.type === 'checkbox') {
                if (!element.defaultValue) element.checked = value;else if (Array.isArray(value)) {
                    var inputs = document.querySelectorAll('input[name=' + element.name + '][type=checkbox]');

                    var _defined4 = function _defined4(input) {
                        return input.checked = value.includes(input.value);
                    };

                    var _defined5 = [].concat(_toConsumableArray(inputs));

                    for (var _i6 = 0; _i6 <= _defined5.length - 1; _i6++) {
                        _defined4(_defined5[_i6], _i6, _defined5);
                    }
                }
            } else if (element.type === 'radio') {
                element.checked = element.value === value;
            } else if (element.type === 'select-multiple' && Array.isArray(value)) {
                var _defined6 = function _defined6(option) {
                    return option.selected = value.includes(option.value);
                };

                var _defined7 = [].concat(_toConsumableArray(element.options));

                for (var _i8 = 0; _i8 <= _defined7.length - 1; _i8++) {
                    _defined6(_defined7[_i8], _i8, _defined7);
                }
            } else {
                element.value = value;
            }
        };

        var _defined3 = instance._boundElements[property];

        for (var _i4 = 0; _i4 <= _defined3.length - 1; _i4++) {
            _defined2(_defined3[_i4], _i4, _defined3);
        }
    }
}

module.exports = {
    updateBoundElementsByChanges: updateBoundElementsByChanges,
    updateBoundElementsByPropsIteration: updateBoundElementsByPropsIteration,
    updateBoundElements: updateBoundElements
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function manipulate(instance, value, currentPath, onFly, init) {

    if (init) {
        onFly = instance.propsConvertOnFly;
    }

    if (instance.propsConvert && instance.propsConvertOnFly === onFly) {
        if (_typeof(instance.propsConvert) === 'object') {
            var propPath = instance.propsConvert[currentPath];
            var func = instance[propPath] || propPath;
            if (typeof func === 'function') {
                return func.call(instance, value);
            }
        }
    }

    if (init) {
        onFly = instance.propsComputedOnFly;
    }

    if (instance.propsComputed && instance.propsComputedOnFly === onFly) {
        if (_typeof(instance.propsComputed) === 'object') {
            var cached = instance._computedCache.get(currentPath);
            if (cached === undefined) {
                cached = new Map();
                instance._computedCache.set(currentPath, cached);
            } else {
                var cachedValue = cached.get(value);
                if (cachedValue !== undefined) {
                    return cachedValue;
                }
            }
            var _propPath = instance.propsComputed[currentPath];
            var _func = instance[_propPath] || _propPath;
            if (typeof _func === 'function') {
                var result = _func.call(instance, value);
                cached.set(value, result);
                return result;
            }
        }
    }

    return value;
}

module.exports = manipulate;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function camelToDash(s) {
    return s.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

module.exports = camelToDash;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function toLiteralString(str) {
    return str.replace(/{{/gm, '${').replace(/}}/gm, '}');
}

module.exports = toLiteralString;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _require = __webpack_require__(0),
    TAG = _require.TAG;

var tag = TAG.TEXT_NODE_PLACE;
var LESS = '<';
var GREATER = '>';

var regOpen = new RegExp('<' + tag + '>(\\s+)?<', 'gi');
var regClose = new RegExp('>(\\s+)?</' + tag + '>', 'gi');

/**
 * This method add special tag to value placeholder
 * @param strings
 * @param value
 * @returns {*}
 */
module.exports = function (strings) {
    var result = strings[0];
    var allowTag = false;

    for (var _len = arguments.length, value = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        value[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < value.length; ++i) {
        var _defined = function _defined(char) {
            if (char === LESS) allowTag = false;
            if (char === GREATER) allowTag = true;
        };

        var _defined2 = [].concat(_toConsumableArray(strings[i]));

        for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
            _defined(_defined2[_i2], _i2, _defined2);
        }

        if (/<\/?style>/ig.test(strings[i])) allowTag = false;

        if (allowTag) result += '<' + tag + '>' + value[i] + '</' + tag + '>' + strings[i + 1];else result += '' + value[i] + strings[i + 1];
    }

    result = result.replace(regOpen, LESS).replace(regClose, GREATER);

    return result;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function mixin(target) {
    var sources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' || target == null) {
        throw new TypeError('expected an object');
    }

    if (!Array.isArray(sources)) {
        sources = [sources];
    }

    for (var j = sources.length - 1; j >= 0; --j) {
        var keys = Object.keys(sources[j]);
        for (var i = keys.length - 1; i >= 0; --i) {
            var index = keys[i];
            if (typeof target[index] === 'undefined') {
                target[index] = sources[j][index];
            } else {
                console.warn('Doz', 'mixin failed for already defined property: ' + index);
            }
        }
    }

    return target;
}

module.exports = mixin;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var manipulate = __webpack_require__(13);

function propsInit(instance) {

    (function iterate(props) {
        var keys = Object.keys(props);
        for (var i = 0, l = keys.length; i < l; i++) {
            var property = keys[i];
            if (props[property] instanceof Object && props[property] !== null) {
                iterate(props[property]);
            } else {
                props[property] = manipulate(instance, props[property], property, false, true);
            }
        }
    })(instance._rawProps);
}

module.exports = propsInit;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(1),
    registerPlugin = _require.registerPlugin,
    data = _require.data;

function use(plugin) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof plugin !== 'function') {
        throw new TypeError('Plugin must be a function');
    }

    plugin['options'] = options;

    registerPlugin(plugin);
}

function load(app) {
    var _defined = function _defined(func) {
        func(app.constructor, app, func.options);
    };

    var _defined2 = data.plugins;

    for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
        _defined(_defined2[_i2], _i2, _defined2);
    }
}

module.exports = {
    use: use,
    load: load
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Doz = __webpack_require__(22);
var collection = __webpack_require__(1);

var _require = __webpack_require__(19),
    use = _require.use;

var component = __webpack_require__(45);

var _require2 = __webpack_require__(5),
    Component = _require2.Component;

var mixin = __webpack_require__(46);
var h = __webpack_require__(16);

var _require3 = __webpack_require__(4),
    compile = _require3.compile;

Object.defineProperties(Doz, {
    collection: {
        value: collection,
        enumerable: true
    },
    compile: {
        value: compile,
        enumerable: true
    },
    Component: {
        value: Component,
        enumerable: true
    },
    component: {
        value: component,
        enumerable: true
    },
    define: {
        value: component,
        enumerable: true
    },
    h: {
        value: h,
        enumerable: true
    },
    mixin: {
        value: mixin,
        enumerable: true
    },
    use: {
        value: use,
        enumerable: true
    },
    version: {
        value: '1.16.9',
        enumerable: true
    }
});

module.exports = Doz;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bind = __webpack_require__(23);
var instances = __webpack_require__(6);

var _require = __webpack_require__(0),
    TAG = _require.TAG,
    REGEX = _require.REGEX;

var toLiteralString = __webpack_require__(15);
var plugin = __webpack_require__(19);

var Doz = function () {
    function Doz() {
        var _this = this;

        var cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Doz);

        this.baseTemplate = '<' + TAG.APP + '></' + TAG.APP + '>';

        if (REGEX.IS_ID_SELECTOR.test(cfg.root)) {
            cfg.root = document.getElementById(cfg.root.substring(1));
        }

        if (REGEX.IS_ID_SELECTOR.test(cfg.template)) {
            cfg.template = document.getElementById(cfg.template.substring(1));
            cfg.template = cfg.template.innerHTML;
        }

        if (!(cfg.root instanceof HTMLElement)) {
            throw new TypeError('root must be an HTMLElement or an valid ID selector like #example-root');
        }

        if (!(cfg.template instanceof HTMLElement || typeof cfg.template === 'string' || typeof cfg.template === 'function')) {
            throw new TypeError('template must be a string or an HTMLElement or a function or an valid ID selector like #example-template');
        }

        // Remove if already exists
        var appNode = document.querySelector(TAG.APP);
        if (appNode) {
            appNode.parentNode.removeChild(appNode);
        }

        this.cfg = Object.assign({}, {
            components: [],
            shared: {},
            propsListener: null,
            propsListenerAsync: null,
            actions: {},
            autoDraw: true
        }, cfg);

        Object.defineProperties(this, {
            _components: {
                value: {},
                writable: true
            },
            _usedComponents: {
                value: {},
                writable: true
            },
            _stores: {
                value: {},
                writable: true
            },
            _cache: {
                value: new Map()
            },
            _ids: {
                value: {},
                writable: true
            },
            _onAppReadyCB: {
                value: [],
                writable: true
            },
            _callAppReady: {
                value: function value() {
                    var _defined = function _defined(cb) {
                        if (typeof cb === 'function' && cb._instance) {
                            cb.call(cb._instance);
                        }
                    };

                    var _defined2 = this._onAppReadyCB;

                    for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
                        _defined(_defined2[_i2], _i2, _defined2);
                    }

                    this._onAppReadyCB = [];
                }
            },
            _onAppDrawCB: {
                value: [],
                writable: true
            },
            _onAppCB: {
                value: {},
                writable: true
            },
            _root: {
                value: this.cfg.root
            },
            action: {
                value: bind(this.cfg.actions, this),
                enumerable: true
            },
            shared: {
                value: this.cfg.shared,
                writable: true,
                enumerable: true
            },
            mount: {
                value: function value(template, root) {
                    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._tree;


                    if (typeof root === 'string') {
                        root = document.querySelector(root);
                    }

                    root = root || parent._rootElement;

                    if (!(root instanceof HTMLElement)) {
                        throw new TypeError('root must be an HTMLElement or an valid selector like #example-root');
                    }

                    var contentStr = eval('`' + toLiteralString(template) + '`');
                    var autoCmp = {
                        tag: TAG.MOUNT,
                        cfg: {
                            props: {},
                            template: function template() {
                                return '<' + TAG.ROOT + '>' + contentStr + '</' + TAG.ROOT + '>';
                            }
                        }
                    };

                    return instances.get({
                        root: root,
                        template: '<' + TAG.MOUNT + '></' + TAG.MOUNT + '>',
                        app: this,
                        parentCmp: parent,
                        autoCmp: autoCmp,
                        mount: true
                    });
                },
                enumerable: true
            }
        });

        if (Array.isArray(this.cfg.components)) {
            var _defined3 = function _defined3(cmp) {
                if ((typeof cmp === 'undefined' ? 'undefined' : _typeof(cmp)) === 'object' && typeof cmp.tag === 'string' && _typeof(cmp.cfg) === 'object') {
                    _this._components[cmp.tag] = cmp;
                }
            };

            var _defined4 = this.cfg.components;

            for (var _i4 = 0; _i4 <= _defined4.length - 1; _i4++) {
                _defined3(_defined4[_i4], _i4, _defined4);
            }
        } else if (_typeof(this.cfg.components) === 'object') {
            var _defined5 = function _defined5(objName) {
                _this._components[objName] = {
                    tag: objName,
                    cfg: _this.cfg.components[objName]
                };
            };

            var _defined6 = Object.keys(this.cfg.components);

            for (var _i6 = 0; _i6 <= _defined6.length - 1; _i6++) {
                _defined5(_defined6[_i6], _i6, _defined6);
            }
        }

        this._components[TAG.APP] = {
            tag: TAG.APP,
            cfg: {
                template: typeof cfg.template === 'function' ? cfg.template : function () {
                    var contentStr = toLiteralString(cfg.template);
                    if (/\${.*?}/g.test(contentStr)) return eval('`' + contentStr + '`');else return contentStr;
                }
            }
        };

        var _defined7 = function _defined7(p) {
            if (!['template', 'root'].includes(p)) _this._components[TAG.APP].cfg[p] = cfg[p];
        };

        var _defined8 = Object.keys(cfg);

        for (var _i8 = 0; _i8 <= _defined8.length - 1; _i8++) {
            _defined7(_defined8[_i8], _i8, _defined8);
        }

        plugin.load(this);

        if (this.cfg.autoDraw) this.draw();

        this._callAppReady();
        this.emit('ready', this);
    }

    _createClass(Doz, [{
        key: 'draw',
        value: function draw() {

            if (!this.cfg.autoDraw) this.cfg.root.innerHTML = '';

            this._tree = instances.get({
                root: this.cfg.root,
                template: this.baseTemplate,
                app: this
            }) || [];

            return this;
        }
    }, {
        key: 'getComponent',
        value: function getComponent(alias) {
            return this._tree ? this._tree.children[alias] : undefined;
        }
    }, {
        key: 'getComponentById',
        value: function getComponentById(id) {
            return this._ids[id];
        }
    }, {
        key: 'getStore',
        value: function getStore(store) {
            return this._stores[store];
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            if (typeof event !== 'string') throw new TypeError('Event must be a string');

            if (typeof callback !== 'function') throw new TypeError('Callback must be a function');

            if (!this._onAppCB[event]) {
                this._onAppCB[event] = [];
            }

            this._onAppCB[event].push(callback);

            return this;
        }
    }, {
        key: 'emit',
        value: function emit(event) {
            var _this2 = this;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            if (this._onAppCB[event]) {
                var _defined9 = function _defined9(func) {
                    func.apply(_this2, args);
                };

                var _defined10 = this._onAppCB[event];

                for (var _i10 = 0; _i10 <= _defined10.length - 1; _i10++) {
                    _defined9(_defined10[_i10], _i10, _defined10);
                }
            }

            return this;
        }
    }]);

    return Doz;
}();

module.exports = Doz;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function bind(obj, context) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj == null) {
        throw new TypeError('expected an object');
    }

    var target = Object.assign({}, obj);

    var keys = Object.keys(obj);

    for (var i = keys.length - 1; i >= 0; --i) {
        var item = target[keys[i]];
        if (typeof item === 'function') {
            target[keys[i]] = item.bind(context);
        } else if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item != null) {
            target[keys[i]] = bind(item, context);
        }
    }

    return target;
}

module.exports = bind;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var composeStyleInner = __webpack_require__(8);
var createStyle = __webpack_require__(25);

function scopedInner(cssContent, tag, tagByData) {
    if (typeof cssContent !== 'string') return;
    cssContent = composeStyleInner(cssContent, tag, tagByData);
    return createStyle(cssContent, tag);
}

module.exports = {
    scopedInner: scopedInner
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createStyle(cssContent, tag) {
    var result = void 0;
    var styleId = tag + '--style';
    var styleExists = document.querySelector('#' + styleId);

    if (styleExists) {
        result = styleExists.innerHTML = cssContent;
    } else {
        var styleEl = document.createElement('style');
        styleEl.id = styleId;
        result = styleEl.innerHTML = cssContent;
        document.head.appendChild(styleEl);
    }

    return result;
}

module.exports = createStyle;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    components: {},
    plugins: []
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(0),
    ATTR = _require.ATTR,
    DPROPS = _require.DPROPS;

function extract(props) {

    var dProps = {};

    if (props[ATTR.ALIAS] !== undefined) {
        dProps[DPROPS.ALIAS] = props[ATTR.ALIAS];
        delete props[ATTR.ALIAS];
    }

    if (props[ATTR.STORE] !== undefined) {
        dProps[DPROPS.STORE] = props[ATTR.STORE];
        delete props[ATTR.STORE];
    }

    if (props[ATTR.LISTENER] !== undefined) {
        dProps[DPROPS.CALLBACK] = props[ATTR.LISTENER];
        delete props[ATTR.LISTENER];
    }

    if (props[ATTR.ID] !== undefined) {
        dProps[DPROPS.ID] = props[ATTR.ID];
        delete props[ATTR.ID];
    }

    if (props[ATTR.ON_BEFORE_CREATE] !== undefined) {
        dProps[DPROPS.ON_BEFORE_CREATE] = props[ATTR.ON_BEFORE_CREATE];
        delete props[ATTR.ON_BEFORE_CREATE];
    }

    if (props[ATTR.ON_CREATE] !== undefined) {
        dProps[DPROPS.ON_CREATE] = props[ATTR.ON_CREATE];
        delete props[ATTR.ON_CREATE];
    }

    if (props[ATTR.ON_CONFIG_CREATE] !== undefined) {
        dProps[DPROPS.ON_CONFIG_CREATE] = props[ATTR.ON_CONFIG_CREATE];
        delete props[ATTR.ON_CONFIG_CREATE];
    }

    if (props[ATTR.ON_BEFORE_MOUNT] !== undefined) {
        dProps[DPROPS.ON_BEFORE_MOUNT] = props[ATTR.ON_BEFORE_MOUNT];
        delete props[ATTR.ON_BEFORE_MOUNT];
    }

    if (props[ATTR.ON_MOUNT] !== undefined) {
        dProps[DPROPS.ON_MOUNT] = props[ATTR.ON_MOUNT];
        delete props[ATTR.ON_MOUNT];
    }

    if (props[ATTR.ON_MOUNT_ASYNC] !== undefined) {
        dProps[DPROPS.ON_MOUNT_ASYNC] = props[ATTR.ON_MOUNT_ASYNC];
        delete props[ATTR.ON_MOUNT_ASYNC];
    }

    if (props[ATTR.ON_BEFORE_UPDATE] !== undefined) {
        dProps[DPROPS.ON_BEFORE_UPDATE] = props[ATTR.ON_BEFORE_UPDATE];
        delete props[ATTR.ON_BEFORE_UPDATE];
    }

    if (props[ATTR.ON_UPDATE] !== undefined) {
        dProps[DPROPS.ON_UPDATE] = props[ATTR.ON_UPDATE];
        delete props[ATTR.ON_UPDATE];
    }

    if (props[ATTR.ON_AFTER_RENDER] !== undefined) {
        dProps[DPROPS.ON_AFTER_RENDER] = props[ATTR.ON_AFTER_RENDER];
        delete props[ATTR.ON_AFTER_RENDER];
    }

    if (props[ATTR.ON_BEFORE_UNMOUNT] !== undefined) {
        dProps[DPROPS.ON_BEFORE_UNMOUNT] = props[ATTR.ON_BEFORE_UNMOUNT];
        delete props[ATTR.ON_BEFORE_UNMOUNT];
    }

    if (props[ATTR.ON_UNMOUNT] !== undefined) {
        dProps[DPROPS.ON_UNMOUNT] = props[ATTR.ON_UNMOUNT];
        delete props[ATTR.ON_UNMOUNT];
    }

    if (props[ATTR.ON_BEFORE_DESTROY] !== undefined) {
        dProps[DPROPS.ON_BEFORE_DESTROY] = props[ATTR.ON_BEFORE_DESTROY];
        delete props[ATTR.ON_BEFORE_DESTROY];
    }

    if (props[ATTR.ON_DESTROY] !== undefined) {
        dProps[DPROPS.ON_DESTROY] = props[ATTR.ON_DESTROY];
        delete props[ATTR.ON_DESTROY];
    }

    if (props[ATTR.ON_LOAD_PROPS] !== undefined) {
        dProps[DPROPS.ON_LOAD_PROPS] = props[ATTR.ON_LOAD_PROPS];
        delete props[ATTR.ON_LOAD_PROPS];
    }

    return dProps;
}

module.exports = {
    extract: extract
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hmr(instance, _module) {
    if (!_module || !_module.hot) return;
    var NS_PROPS = '__doz_hmr_props_store__';
    var NS_INIT_PROPS = '__doz_hmr_init_props_store__';

    window[NS_PROPS] = window[NS_PROPS] || {};
    window[NS_INIT_PROPS] = window[NS_INIT_PROPS] || {};
    var id = _module.id;
    window[NS_PROPS][id] = window[NS_PROPS][id] || new Map();
    window[NS_INIT_PROPS][id] = window[NS_INIT_PROPS][id] || new Map();

    var _defined = function _defined(p) {
        if (instance._initialProps[p] === window[NS_INIT_PROPS][id].get(p)) instance.props[p] = window[NS_PROPS][id].get(p) || instance.props[p];else instance.props[p] = instance._initialProps[p];
    };

    var _defined2 = Object.keys(instance.props);

    for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
        _defined(_defined2[_i2], _i2, _defined2);
    }

    _module.hot.dispose(function () {
        var _defined3 = function _defined3(p) {
            window[NS_PROPS][id].set(p, instance.props[p]);
            window[NS_INIT_PROPS][id].set(p, instance._initialProps[p]);
        };

        var _defined4 = Object.keys(instance.props);

        for (var _i4 = 0; _i4 <= _defined4.length - 1; _i4++) {
            _defined3(_defined4[_i4], _i4, _defined4);
        }
    });
}

module.exports = hmr;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var proxy = __webpack_require__(11);
var events = __webpack_require__(3);

var _require = __webpack_require__(12),
    updateBoundElementsByChanges = _require.updateBoundElementsByChanges;

var propsListener = __webpack_require__(30);
var manipulate = __webpack_require__(13);

function runUpdate(instance, changes) {
    events.callUpdate(instance, changes);
    propsListener(instance, changes);
    instance.render();
    updateBoundElementsByChanges(instance, changes);
}

function create(instance) {

    var recreate = false;

    if (instance._props && instance._props.__isProxy) {
        proxy.remove(instance._props);
        recreate = true;
    }

    instance._props = proxy.create(instance._rawProps, null, function (changes) {
        if (!instance._isRendered) return;

        if (instance.delayUpdate) {
            setTimeout(function () {
                runUpdate(instance, changes);
            }, instance.delayUpdate);
        } else {
            runUpdate(instance, changes);
        }
    });

    proxy.manipulate(instance._props, function (value, currentPath, onFly) {
        return manipulate(instance, value, currentPath, onFly);
    });

    proxy.beforeChange(instance._props, function (changes) {
        var res = events.callBeforeUpdate(instance, changes);
        if (res === false) return false;
    });

    if (recreate && instance._isRendered) {
        instance.render();
    }
}

module.exports = {
    create: create
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var delay = __webpack_require__(2);

function propsListener(instance, changes) {

    if (_typeof(instance.propsListener) === 'object') for (var i = 0; i < changes.length; i++) {
        var item = changes[i];
        var propPath = instance.propsListener[item.currentPath];
        if (item.type === 'update' && propPath) {
            var func = instance[propPath] || propPath;
            if (typeof func === 'function') {
                func.call(instance, item.newValue, item.previousValue);
            }
        }
    }

    if (_typeof(instance.propsListenerAsync) === 'object') for (var _i = 0; _i < changes.length; _i++) {
        var _item = changes[_i];
        var _propPath = instance.propsListenerAsync[_item.currentPath];
        if (_item.type === 'update' && _propPath) {
            (function () {
                var func = instance[_propPath] || _propPath;
                if (typeof func === 'function') {
                    (function (item) {
                        delay(function () {
                            return func.call(instance, item.newValue, item.previousValue);
                        });
                    })(_item);
                }
            })();
        }
    }
}

module.exports = propsListener;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var element = __webpack_require__(32);

module.exports = {
    updateElement: element.update
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = __webpack_require__(33),
    attach = _require.attach,
    updateAttributes = _require.updateAttributes;

var deadChildren = [];

var _require2 = __webpack_require__(0),
    INSTANCE = _require2.INSTANCE,
    TAG = _require2.TAG,
    NS = _require2.NS,
    CMP_INSTANCE = _require2.CMP_INSTANCE,
    ATTR = _require2.ATTR,
    DIR_IS = _require2.DIR_IS;

var html = __webpack_require__(7);
var composeStyleInner = __webpack_require__(8);

var storeElementNode = Object.create(null);

function isChanged(nodeA, nodeB) {
    return (typeof nodeA === 'undefined' ? 'undefined' : _typeof(nodeA)) !== (typeof nodeB === 'undefined' ? 'undefined' : _typeof(nodeB)) || typeof nodeA === 'string' && nodeA !== nodeB || nodeA.type !== nodeB.type || nodeA.props && nodeA.props.forceupdate;
}

function canDecode(str) {
    return (/&\w+;/.test(str) ? html.decode(str) : str
    );
}

function create(node, cmp, initial) {
    if (typeof node === 'undefined') return;

    var nodeStored = void 0;
    var $el = void 0;

    if (typeof node === 'string') {
        return document.createTextNode(
        // use decode only if necessary
        canDecode(node));
    }

    if (node.type[0] === '#') {
        node.type = TAG.EMPTY;
    }

    nodeStored = storeElementNode[node.type];
    if (nodeStored) {
        $el = nodeStored.cloneNode();
    } else {
        $el = node.isSVG ? document.createElementNS(NS.SVG, node.type) : document.createElement(node.type);

        storeElementNode[node.type] = $el.cloneNode(true);
    }

    attach($el, node.props, cmp);

    var _defined2 = node.children;

    var _defined3 = function _defined3(item) {
        return create(item, cmp, initial);
    };

    var _defined = new Array(_defined2.length);

    for (var _i4 = 0; _i4 <= _defined2.length - 1; _i4++) {
        _defined[_i4] = _defined3(_defined2[_i4], _i4, _defined2);
    }

    for (var _i2 = 0; _i2 <= _defined.length - 1; _i2++) {
        $el.appendChild.bind($el)(_defined[_i2], _i2, _defined);
    }

    if (typeof $el.hasAttribute === 'function') if ((node.type.indexOf('-') !== -1 || typeof $el.hasAttribute === 'function' && $el.hasAttribute(ATTR.IS)) && !initial) {
        cmp._processing.push({ node: $el, action: 'create' });
    }

    return $el;
}

function update($parent, newNode, oldNode) {
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var cmp = arguments[4];
    var initial = arguments[5];


    if (!$parent) return;

    if (!oldNode) {
        var rootElement = create(newNode, cmp, initial);
        $parent.appendChild(rootElement);
        return rootElement;
    } else if (!newNode) {
        if ($parent.childNodes[index]) {
            deadChildren.push($parent.childNodes[index]);
        }
    } else if (isChanged(newNode, oldNode)) {
        var oldElement = $parent.childNodes[index];
        // Reuse text node
        if (typeof newNode === 'string' && typeof oldNode === 'string' && oldElement) {
            oldElement.textContent = canDecode(newNode);
            if ($parent.nodeName === 'SCRIPT') {
                // it could be heavy
                if ($parent.type === 'text/style' && $parent.dataset.id && $parent.dataset.owner) {
                    document.getElementById($parent.dataset.id).textContent = composeStyleInner(oldElement.textContent, $parent.dataset.owner, $parent.dataset.ownerByData);
                }
            }
            return oldElement;
        }

        if (!oldElement) return;

        var newElement = create(newNode, cmp, initial);

        //Re-assign CMP INSTANCE to new element
        if (oldElement[CMP_INSTANCE]) {
            newElement[CMP_INSTANCE] = oldElement[CMP_INSTANCE];
            newElement[CMP_INSTANCE]._rootElement = newElement;
        }

        $parent.replaceChild(newElement, oldElement);

        return newElement;
    } else if (newNode.type) {

        var updated = updateAttributes($parent.childNodes[index], newNode.props, oldNode.props, cmp);

        if ($parent.childNodes[index]) {
            var dynInstance = $parent.childNodes[index][INSTANCE];
            if (dynInstance && updated.length) {
                var _defined4 = function _defined4(props) {
                    var _defined5 = function _defined5(name) {
                        dynInstance.props[name] = props[name];
                    };

                    var _defined6 = Object.keys(props);

                    for (var _i8 = 0; _i8 <= _defined6.length - 1; _i8++) {
                        _defined5(_defined6[_i8], _i8, _defined6);
                    }
                };

                for (var _i6 = 0; _i6 <= updated.length - 1; _i6++) {
                    _defined4(updated[_i6], _i6, updated);
                }

                return;
            }
        }

        var newLength = newNode.children.length;
        var oldLength = oldNode.children.length;

        for (var i = 0; i < newLength || i < oldLength; i++) {
            update($parent.childNodes[index], newNode.children[i], oldNode.children[i], i, cmp, initial);
        }

        clearDead();
    }
}

function clearDead() {
    var dl = deadChildren.length;

    while (dl--) {
        deadChildren[dl].parentNode.removeChild(deadChildren[dl]);
        deadChildren.splice(dl, 1);
    }
}

module.exports = {
    create: create,
    update: update
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _require = __webpack_require__(0),
    REGEX = _require.REGEX,
    ATTR = _require.ATTR,
    CMP_INSTANCE = _require.CMP_INSTANCE,
    DIR_IS = _require.DIR_IS;

var castStringTo = __webpack_require__(9);
var dashToCamel = __webpack_require__(10);
var camelToDash = __webpack_require__(14);
var objectPath = __webpack_require__(34);
var delay = __webpack_require__(2);

function isEventAttribute(name) {
    return REGEX.IS_LISTENER.test(name);
}

function isBindAttribute(name) {
    return name === ATTR.BIND;
}

function isRefAttribute(name) {
    return name === ATTR.REF;
}

function canBind($target) {
    return ['INPUT', 'TEXTAREA', 'SELECT'].indexOf($target.nodeName) !== -1;
}

function setAttribute($target, name, value, cmp) {
    if (REGEX.IS_CUSTOM_TAG.test($target.nodeName) || $target[DIR_IS]) {
        name = camelToDash(name);
    }
    if (isCustomAttribute(name)) {} else if (typeof value === 'boolean') {
        setBooleanAttribute($target, name, value);
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        try {
            $target.setAttribute(name, JSON.stringify(value));
        } catch (e) {}
    } else {
        if (value === undefined) value = '';
        $target.setAttribute(name, value);
    }
}

function removeAttribute($target, name, value) {
    if (isCustomAttribute(name) || !$target) {} else {
        $target.removeAttribute(name);
    }
}

function updateAttribute($target, name, newVal, oldVal, cmp) {
    if (newVal === '') {
        removeAttribute($target, name, oldVal, cmp);
        updateChildren(cmp, name, newVal, $target);
    } else if (oldVal === '' || newVal !== oldVal) {
        setAttribute($target, name, newVal, cmp);
        updateChildren(cmp, name, newVal, $target);
    }
}

function updateChildren(cmp, name, value, $target) {
    if (cmp && cmp.updateChildrenProps && $target) {
        name = dashToCamel(name);
        var firstChild = $target.firstChild;
        if (firstChild && firstChild[CMP_INSTANCE] && Object.prototype.hasOwnProperty.call(firstChild[CMP_INSTANCE]._publicProps, name)) {
            firstChild[CMP_INSTANCE].props[name] = value;
        }
    }
}

function updateAttributes($target, newProps) {
    var oldProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var cmp = arguments[3];

    var props = Object.assign({}, newProps, oldProps);
    var updated = [];

    var _defined = function _defined(name) {
        if (!$target || $target.nodeType !== 1) return;
        updateAttribute($target, name, newProps[name], oldProps[name], cmp);
        if (newProps[name] !== oldProps[name]) {
            var obj = {};
            obj[name] = newProps[name];
            updated.push(obj);
        }
    };

    var _defined2 = Object.keys(props);

    for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
        _defined(_defined2[_i2], _i2, _defined2);
    }

    return updated;
}

function isCustomAttribute(name) {
    return isEventAttribute(name) || isBindAttribute(name) || isRefAttribute(name) || name === ATTR.FORCE_UPDATE;
}

function setBooleanAttribute($target, name, value) {
    $target.setAttribute(name, value);
    $target[name] = value;
}

function extractEventName(name) {
    return name.slice(2).toLowerCase();
}

function trimQuotes(str) {
    return str.replace(REGEX.TRIM_QUOTES, '$1');
}

function addEventListener($target, name, value, cmp) {

    if (!isEventAttribute(name)) return;

    var match = value.match(REGEX.GET_LISTENER);

    if (match) {
        var args = null;
        var handler = match[1];
        var stringArgs = match[2];
        if (stringArgs) {
            var _defined3 = stringArgs.split(',');

            args = new Array(_defined3.length);

            var _defined4 = function _defined4(item) {
                item = item.trim();
                return item === 'this' ? cmp : castStringTo(trimQuotes(item));
            };

            for (var _i4 = 0; _i4 <= _defined3.length - 1; _i4++) {
                args[_i4] = _defined4(_defined3[_i4], _i4, _defined3);
            }
        }

        var isParentMethod = handler.match(REGEX.IS_PARENT_METHOD);

        if (isParentMethod) {
            handler = isParentMethod[1];
            cmp = cmp.parent;
        }

        var method = objectPath(handler, cmp);

        if (method !== undefined) {
            value = args ? method.bind.apply(method, [cmp].concat(_toConsumableArray(args))) : method.bind(cmp);
        }
    }

    if (typeof value === 'function') $target.addEventListener(extractEventName(name), value);else {
        value = value.replace(REGEX.THIS_TARGET, '$target');

        var _func = function _func() {
            eval(value);
        };
        $target.addEventListener(extractEventName(name), _func.bind(cmp));
    }
}

function setBind($target, name, value, cmp) {
    if (!isBindAttribute(name) || !canBind($target)) return;
    if (typeof cmp.props[value] !== 'undefined') {

        var events = ['compositionstart', 'compositionend', 'input', 'change'];

        var _defined5 = function _defined5(event) {
            $target.addEventListener(event, function (e) {
                var _value = void 0;
                if (this.type === 'checkbox') {
                    if (!this.defaultValue) cmp.props[value] = this.checked;else {
                        var inputs = document.querySelectorAll('input[name=' + this.name + '][type=checkbox]:checked');

                        var _defined6 = [].concat(_toConsumableArray(inputs));

                        _value = new Array(_defined6.length);

                        var _defined7 = function _defined7(input) {
                            return input.value;
                        };

                        for (var _i8 = 0; _i8 <= _defined6.length - 1; _i8++) {
                            _value[_i8] = _defined7(_defined6[_i8], _i8, _defined6);
                        }

                        cmp.props[value] = castStringTo(_value);
                    }
                } else {
                    _value = this.value;
                    if (this.multiple) {
                        var _defined10 = [].concat(_toConsumableArray(this.options));

                        var _defined11 = function _defined11(option) {
                            return option.selected;
                        };

                        var _defined8 = [];

                        for (var _i12 = 0; _i12 <= _defined10.length - 1; _i12++) {
                            if (_defined11(_defined10[_i12], _i12, _defined10)) _defined8.push(_defined10[_i12]);
                        }

                        _value = new Array(_defined8.length);

                        var _defined9 = function _defined9(option) {
                            return option.value;
                        };

                        for (var _i10 = 0; _i10 <= _defined8.length - 1; _i10++) {
                            _value[_i10] = _defined9(_defined8[_i10], _i10, _defined8);
                        }
                    }
                    cmp.props[value] = castStringTo(_value);
                }
            });
        };

        for (var _i6 = 0; _i6 <= events.length - 1; _i6++) {
            _defined5(events[_i6], _i6, events);
        }

        if (Object.prototype.hasOwnProperty.call(cmp._boundElements, value)) {
            cmp._boundElements[value].push($target);
        } else {
            cmp._boundElements[value] = [$target];
        }

        return true;
    }
}

function setRef($target, name, value, cmp) {
    if (!isRefAttribute(name)) return;
    cmp.ref[value] = $target;
}

function attach($target, props, cmp) {

    var bindValue = void 0;
    var name = void 0;

    var propsKeys = Object.keys(props);

    for (var i = 0, len = propsKeys.length; i < len; i++) {
        name = propsKeys[i];
        setAttribute($target, name, props[name], cmp);
        addEventListener($target, name, props[name], cmp);
        if (setBind($target, name, props[name], cmp)) {
            bindValue = cmp.props[props[name]];
        }
        setRef($target, name, props[name], cmp);
    }

    var datasetArray = Object.keys($target.dataset);
    for (var _i13 = 0; _i13 < datasetArray.length; _i13++) {
        if (REGEX.IS_LISTENER.test(datasetArray[_i13])) addEventListener($target, _i13, $target.dataset[datasetArray[_i13]], cmp);
    }

    // too slow
    /*for (let i in $target.dataset) {
        console.log(i)
        if (Object.prototype.hasOwnProperty.call($target.dataset, i) && REGEX.IS_LISTENER.test(i)) {
            addEventListener($target, i, $target.dataset[i], cmp);
        }
    }*/

    if (typeof bindValue === 'undefined') return;

    delay(function () {
        var inputs = void 0;
        var input = void 0;
        if ($target.type === 'radio') {
            inputs = document.querySelectorAll('input[name=' + $target.name + '][type=radio]');
            for (var _i14 = 0, _len = inputs.length; _i14 < _len; _i14++) {
                input = inputs[_i14];
                input.checked = bindValue === input.value;
            }
        } else if ($target.type === 'checkbox') {
            if ((typeof bindValue === 'undefined' ? 'undefined' : _typeof(bindValue)) === 'object') {
                inputs = document.querySelectorAll('input[name=' + $target.name + '][type=checkbox]');
                for (var _i15 = 0, _len2 = inputs.length; _i15 < _len2; _i15++) {
                    input = inputs[_i15];
                    input.checked = Array.from(bindValue).includes(input.value);
                }
            } else $target.checked = bindValue;
        } else {
            $target.value = bindValue;
        }
    });
}

module.exports = {
    attach: attach,
    updateAttributes: updateAttributes
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getByPath(path, obj) {
    return path.split('.').reduce(function (res, prop) {
        return res ? res[prop] : undefined;
    }, obj);
}

function getLast(path, obj) {
    if (path.indexOf('.') !== -1) {
        path = path.split('.');
        path.pop();
        path = path.join('.');
    }
    return getByPath(path, obj);
}

module.exports = getByPath;
module.exports.getLast = getLast;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function create(instance) {
    var storeName = instance.store;
    if (typeof storeName === 'string') {
        if (instance.app._stores[storeName] !== undefined) {
            throw new Error('Store already defined: ' + storeName);
        }
        instance.app._stores[storeName] = instance.props;
    }
}

function sync(instance) {
    var storeName = instance.store;
    if (typeof storeName === 'string' && instance.app._stores[storeName] !== undefined) {
        instance.app._stores[storeName] = instance.props;
    }
}

module.exports = {
    create: create,
    sync: sync
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function create(instance) {

    var id = instance.id;

    if (typeof id === 'string') {
        if (instance.app._ids[id] !== undefined) {
            throw new Error('ID already defined: ' + id);
        }
        instance.app._ids[id] = instance;
    }
}

module.exports = {
    create: create
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var camelToDash = __webpack_require__(14);

function toInlineStyle(obj) {
    var withStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _defined = Object.entries(obj);

    var _defined2 = function _defined2(styleString, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            propName = _ref2[0],
            propValue = _ref2[1];

        return '' + styleString + camelToDash(propName) + ':' + propValue + ';';
    };

    var _acc = '';

    for (var _i2 = 0; _i2 <= _defined.length - 1; _i2++) {
        _acc = _defined2(_acc, _defined[_i2], _i2, _defined);
    }

    obj = _acc;

    return withStyle ? 'style="' + obj + '"' : obj;
}

module.exports = toInlineStyle;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function add(instance) {
    if (typeof instance.onAppReady === 'function') {
        instance.onAppReady._instance = instance;
        instance.app._onAppReadyCB.push(instance.onAppReady);
    }
}

module.exports = {
    add: add
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function add(instance) {
    if (typeof instance.onAppDraw === 'function') {
        instance.onAppDraw._instance = instance;
        instance.app._onAppDrawCB.push(instance.onAppDraw);
    }
}

function emit(instance, next, prev) {
    var _defined = function _defined(cb) {
        if (typeof cb === 'function' && cb._instance) {
            cb.call(cb._instance, next, prev, instance);
        }
    };

    var _defined2 = instance.app._onAppDrawCB;

    for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
        _defined(_defined2[_i2], _i2, _defined2);
    }
}

module.exports = {
    add: add,
    emit: emit
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function extendInstance(instance, cfg, dProps) {
    Object.assign(instance, cfg, dProps);
}

module.exports = extendInstance;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = cloneObject;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function removeAllAttributes(el) {
    var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var attributeName = void 0;
    for (var i = el.attributes.length - 1; i >= 0; i--) {
        attributeName = el.attributes[i].name;
        if (exclude.includes(attributeName)) continue;
        el.removeAttribute(attributeName);
    }
}

module.exports = removeAllAttributes;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function loadLocal(instance) {

    // Add local components
    if (Array.isArray(instance.components)) {
        var _defined = function _defined(cmp) {
            if ((typeof cmp === 'undefined' ? 'undefined' : _typeof(cmp)) === 'object' && typeof cmp.tag === 'string' && _typeof(cmp.cfg) === 'object') {
                instance._components[cmp.tag] = cmp;
            }
        };

        var _defined2 = instance.components;

        for (var _i2 = 0; _i2 <= _defined2.length - 1; _i2++) {
            _defined(_defined2[_i2], _i2, _defined2);
        }

        delete instance.components;
    } else if (_typeof(instance.components) === 'object') {
        var _defined3 = function _defined3(objName) {
            instance._components[objName] = {
                tag: objName,
                cfg: instance.components[objName]
            };
        };

        var _defined4 = Object.keys(instance.components);

        for (var _i4 = 0; _i4 <= _defined4.length - 1; _i4++) {
            _defined3(_defined4[_i4], _i4, _defined4);
        }

        delete instance.components;
    }
}

module.exports = loadLocal;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mixin = __webpack_require__(17);

function localMixin(instance) {
    mixin(instance, instance.mixin);
    instance.mixin = [];
}

module.exports = localMixin;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(1),
    registerComponent = _require.registerComponent;

var _require2 = __webpack_require__(0),
    REGEX = _require2.REGEX;

function component(tag) {
    var cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    if (typeof tag !== 'string') {
        throw new TypeError('Tag must be a string');
    }

    if (!REGEX.IS_CUSTOM_TAG.test(tag)) {
        throw new TypeError('Tag must contain a dash (-) like my-component');
    }

    var cmp = {
        tag: tag,
        cfg: cfg
    };

    registerComponent(cmp);
}

module.exports = component;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(5),
    Component = _require.Component;

var mixin = __webpack_require__(17);

function globalMixin(obj) {
    mixin(Component.prototype, obj);
}

module.exports = globalMixin;

/***/ })
/******/ ]);
}); 
},{}],5:[function(require,module,exports) {
var define;
// [DozRouter]  Build version: 1.6.1  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozRouter", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozRouter"] = factory(require("doz"));
	else
		root["DozRouter"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

var _doz2 = _interopRequireDefault(_doz);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        _doz2.default.component('doz-router', _src2.default);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _require = __webpack_require__(3),
    REGEX = _require.REGEX,
    PATH = _require.PATH,
    NS = _require.NS,
    PRERENDER = _require.PRERENDER,
    SSR = _require.SSR;

var queryToObject = __webpack_require__(4);
var clearPath = __webpack_require__(5);
var normalizePath = __webpack_require__(6);
var Doz = __webpack_require__(0);

function deprecate(prev, next) {
    console.warn('[DEPRECATION]', '"' + prev + '" is deprecated use "' + next + '" instead');
}

exports.default = {
    props: {
        hash: '#',
        classActiveLink: 'router-link-active',
        linkAttr: 'data-router-link',
        isLinkAttr: 'data-is-router-link',
        mode: 'hash',
        /**
         * Base root, works only in "history" mode
         */
        root: '/',
        initialRedirect: ''
    },

    autoCreateChildren: false,

    onCreate: function onCreate() {

        //custom properties
        this._currentView = null;
        this._currentViewRaw = '';
        this._currentFullPath = null;
        this._currentPath = null;
        this._routes = [];
        this._paramMap = {};
        this._param = {};
        this._routeNotFound = '';
        this._query = {};
        this._queryRaw = '';
        this._link = {};
        this._pauseHashListener = false;
        this._noDestroy = this.props.hasOwnProperty('noDestroy');
        this._noDestroyedInstances = {};

        if (typeof Doz.mixin === 'function') {
            Doz.mixin({
                router: this
            });
        }
    },

    /**
     * Remove current view
     */
    removeView: function removeView() {
        if (this._currentView) {
            if (this._noDestroy) {
                var noDestroyInstance = this._currentView.unmount();
                this._noDestroyedInstances[noDestroyInstance.rawChildren[0]] = noDestroyInstance;
            } else {
                this._currentView.destroy();
            }
            this._currentView = null;
        }
    },


    /**
     * Set current view
     * @param view {string} component string
     * @param [cb] {string} callback function name
     * @param [preserve] {boolean} preserve view
     */
    setView: function setView(view, cb, preserve) {

        var sameView = this._currentViewRaw === view;
        if (cb && sameView) {
            var childCmp = this._currentView.children[0];
            var cbFunc = childCmp[cb];
            if (typeof cbFunc === 'function') {
                cbFunc.call(childCmp, this);
            }
        } else if (preserve && sameView) {
            this._currentView.children[0].render();
        } else {
            this.removeView();
            this._currentView = this._noDestroy && this._noDestroyedInstances[view] ? this._noDestroyedInstances[view].mount() : this.mount(view);
        }
        this._currentViewRaw = view;
    },


    /**
     * Get query url
     * @param property {string} property name
     * @returns {*}
     */
    query: function query(property) {
        return this._query[property];
    },


    /**
     * Get param url
     * @param property {string} property name
     * @returns {*}
     */
    param: function param(property) {
        return this._param[property];
    },


    /**
     * Navigate route
     * @param path {string} path to navigate
     * @param [params] {object} optional params
     */
    navigate: function navigate(path, params) {
        if (this.props.mode === 'history') {

            if (window[PRERENDER]) {
                history.pushState(path, null, normalizePath(window[PRERENDER].replace(location.origin, '') + path));
            } else {
                history.pushState(path, null, normalizePath(this.props.root + path));
            }
            this._navigate(path, params);
        } else {
            this._pauseHashListener = true;
            window.location.href = this.props.hash + path;
            this._navigate(path, params);
            this._pauseHashListener = false;
        }
    },


    /**
     * Returns current path
     * @param full {boolean}
     * @returns {*}
     */
    currentPath: function currentPath() {
        var full = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        return full ? this._currentFullPath : this._currentPath;
    },


    /**
     * Get query url
     * @param property {string} property name
     * @returns {*}
     * @deprecated in favor of query
     */
    $query: function $query(property) {
        deprecate('$query', 'query');
        return this.query(property);
    },


    /**
     * Get param url
     * @param property {string} property name
     * @returns {*}
     * @deprecated in favor of param
     */
    $param: function $param(property) {
        deprecate('$param', 'param');
        return this.param(property);
    },


    /**
     * Navigate route
     * @param args
     * @deprecated in favor of navigate
     */
    $navigate: function $navigate() {
        deprecate('$navigate', 'navigate');

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        this.navigate.apply(this, args);
    },


    /**
     * Returns current path
     * @param args
     * @returns {*}
     */
    $currentPath: function $currentPath() {
        deprecate('$currentPath', 'currentPath');

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return this.currentPath.apply(this, args);
    },


    /**
     * Navigate route
     * @param path {string|null} path to navigate
     * @param [params] {object} optional params
     * @param [initial=false] {boolean}
     * @returns {boolean}
     * @ignore
     */
    _navigate: function _navigate(path, params) {
        var _this = this;

        var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


        var found = false;
        var hashPath = window.location.hash.slice(this.props.hash.length);
        var historyPath = window.location.pathname + window.location.search;
        var fullPath = void 0;

        path = path || hashPath;

        if (this.props.mode === 'history') path = historyPath;

        if (!window[PRERENDER] && !window[SSR]) if ((path === '/' || path === '') && initial && this.props.initialRedirect) return this.navigate(this.props.initialRedirect);

        path = window[SSR] || path;

        if (window[PRERENDER]) {
            path = (location.origin + path).replace(window[PRERENDER], '');
        }

        path = this.electronFixer(path);

        fullPath = path;

        var pathPart = path.split('?');
        path = clearPath(pathPart[0]);

        if (this._currentFullPath === fullPath) return false;

        this._queryRaw = pathPart[1] || '';

        var re = void 0;

        for (var i = 0; i < this._routes.length; i++) {
            var route = this._routes[i];

            if (route.path === '*') {
                if (path) {
                    re = new RegExp('.+');
                } else {
                    re = new RegExp('^$');
                }
            } else {
                re = new RegExp('^' + route.path + '$');
            }

            var match = path.match(re);

            if (match) {
                found = true;

                if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
                    this._param = Object.assign({}, params);
                } else {
                    (function () {
                        var param = _this._paramMap[route.path];
                        _this._query = queryToObject(_this._queryRaw);
                        match.slice(1).forEach(function (value, i) {
                            _this._param[param[i]] = value;
                        });
                    })();
                }

                this._currentPath = path;
                this._currentFullPath = fullPath;
                this.setView(route.view, route.cb, route.preserve);

                break;
            }
        }

        if (!found) {
            this._currentPath = null;
            this._currentFullPath = null;
            this.setView(this._routeNotFound || '"' + path + '" not found');
        }

        this.activeLink();

        return found;
    },


    /**
     * Active current link
     */
    activeLink: function activeLink() {
        var _this2 = this;

        Object.keys(this._link).forEach(function (link) {
            var checkAlsoQuery = Boolean(_this2._link[link].length > 1 && _this2._queryRaw);

            _this2._link[link].forEach(function (el) {
                var queryEq = true;
                if (checkAlsoQuery) queryEq = new RegExp(_this2._queryRaw + '$', 'g').test(el.href);

                link = _this2.electronFixer(link);

                if (link === _this2._currentPath && queryEq) el.classList.add(_this2.props.classActiveLink);else el.classList.remove(_this2.props.classActiveLink);
            });
        });
    },
    electronFixer: function electronFixer(path) {
        if (location.protocol === 'file:' && path.includes(':')) path = path.substr(3);
        return path;
    },


    /**
     * Add a new route
     * @param route {string} route path
     * @param view {string} component string
     */
    add: function add(route, view) {
        if (route === PATH.NOT_FOUND) {
            this._routeNotFound = view;
        } else {
            var param = [];
            var path = clearPath(route);
            path = path.replace(/:(\w+)/g, function (match, capture) {
                param.push(capture);
                return '([\\w-]+)';
            });

            // Wild card
            path = path.replace(/\/\*/g, '(?:/.*)?');
            this._paramMap[path] = param;

            var cbChange = view.match(REGEX.CHANGE);
            if (cbChange) {
                cbChange = cbChange[1];
            }

            var preserve = REGEX.IS_PRESERVE.test(view);

            this._routes.push({ path: path, view: view, cb: cbChange, preserve: preserve });
        }
    },


    /**
     * Remove a route
     * @param path {string} route path
     */
    remove: function remove(path) {
        for (var i = 0; i < this._routes.length; i++) {
            var route = this._routes[i];
            if (route.path === clearPath(path)) {
                this._routes.splice(i, 1);
            }
        }
    },


    /**
     * Bind all link to routing controller
     */
    bindLink: function bindLink() {
        var _this3 = this;

        window.document.querySelectorAll('[' + this.props.linkAttr + ']:not([' + this.props.isLinkAttr + '])').forEach(function (el) {
            var path = el.pathname || el.href;

            el.dataset.isRouterLink = 'true';

            if (_this3.props.mode === 'history') {

                if (el.pathname) {
                    path = el.pathname = normalizePath(_this3.props.root + el.pathname);
                } else if (el.href) {
                    path = el.href = normalizePath(_this3.props.root + el.href);
                }

                var _path = path + el.search;

                if (window[PRERENDER]) {
                    //el.href = this.props.root + path + el.search;
                } else {
                    el.addEventListener('click', function (e) {
                        e.preventDefault();
                        history.pushState(_path, null, _path);
                        _this3._navigate(_path);
                    });
                }
            } else {
                el.href = _this3.props.hash + path + el.search;
            }

            var pathPart = path.split('?');
            path = clearPath(pathPart[0]);
            if (typeof _this3._link[path] === 'undefined') {
                _this3._link[path] = [el];
            } else {
                _this3._link[path].push(el);
            }
        });
    },
    onAppReady: function onAppReady() {
        var _this4 = this;

        window.removeEventListener('popstate', window[NS.popstate]);
        window[NS.popstate] = function (e) {
            _this4._navigate(e.state);
        };

        window.removeEventListener('hashchange', window[NS.hashchange]);
        window[NS.hashchange] = function () {
            if (!_this4._pauseHashListener) _this4._navigate();
        };

        window.removeEventListener('DOMContentLoaded', window[NS.DOMContentLoaded]);
        window[NS.DOMContentLoaded] = function () {
            _this4._navigate(null, null, true);
        };

        this.rawChildren.forEach(function (view) {
            var route = view.match(REGEX.ROUTE);
            if (route) {
                _this4.add(route[1], view);
            }
        });

        this.bindLink();

        if (this.props.mode === 'history') {
            window.addEventListener('popstate', window[NS.popstate]);
        } else {
            window.addEventListener('hashchange', window[NS.hashchange]);
        }

        window.addEventListener('DOMContentLoaded', window[NS.DOMContentLoaded]);
    },
    onMountAsync: function onMountAsync() {
        this._navigate(null, null, true);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    REGEX: {
        ROUTE: /route(?:\s+)?=(?:\s+)?"(.*?)"/,
        CHANGE: /route-change(?:\s+)?=(?:\s+)?"(.*?)"/,
        IS_PRESERVE: /\spreserve[>\s=]/
    },
    PATH: {
        NOT_FOUND: '*'
    },
    NS: {
        hashchange: '___doz_router___hashchangeListener',
        popstate: '___doz_router___popstateListener',
        DOMContentLoaded: '___doz_router___DOMContentLoadedListener'
    },
    PRERENDER: '__DOZ_PRERENDER_PUBLIC_URL__',
    SSR: '__DOZ_SSR_PATH__'
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (query) {
    var obj = {};
    if (!query) return obj;
    var data = query.split('&');
    for (var i = 0, dataLength = data.length; i < dataLength; i++) {
        var dataPart = data[i].split('=');
        if (dataPart.length) {
            var first = dataPart.splice(0, 1)[0];
            obj[first] = decodeURIComponent(dataPart.join('='));
        }
    }

    return obj;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (path) {
    return path.toString().replace(/\/+$/, '').replace(/^\//, '');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (path) {
    return path.replace(/\/{2,}/g, '/');
};

/***/ })
/******/ ]);
}); 
},{"doz":3}],1:[function(require,module,exports) {
'use strict';

var _doz = require('doz');

var _doz2 = _interopRequireDefault(_doz);

require('doz-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_doz2.default.component('home-page', {
    template: function template() {
        return '\n            <div>I\'m home page</div>\n        ';
    },
    onMountAsync: function onMountAsync() {
        console.log(this.tag, 'created', window.__DOZ_SSR_PATH__);
        if (window.SSR) {
            window.SSR.ready({ routePath: window.SSR.routePath });
        }
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('about-page', {
    template: function template() {
        return '\n            <div>I\'m about page</div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('extension-page', {
    template: function template() {
        return '\n            <div>I\'m .html page</div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('contact-page', {
    template: function template() {
        return '\n            <div>I\'m contact page</div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    },
    onMount: function onMount() {
        localStorage.setItem('avaia', 'hello');
        location.href = '/';
    }
});

_doz2.default.component('profile-page', {
    template: function template() {
        return '\n            <div>I\'m profile me page</div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('user-details-page', {
    template: function template() {
        return '\n            <div>I\'m user page with id "' + this.props.id + '", <a href="javascript:history.back()">back</a></div>\n        ';
    },
    onCreate: function onCreate() {
        this.props.id = this.router.param('id');
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('search-page', {
    template: function template() {
        return '\n            <div>I\'m search page with query "' + this.props.query + '"</div>\n        ';
    },
    onCreate: function onCreate() {
        this.props.query = this.router.query('t');
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('user-page', {
    template: function template() {
        return '\n            <div>I\'m user page index, <a href="/user/10">show id 10</a></div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('section-page', {
    template: function template() {
        var id = this.router.param('id');
        return '\n            <div>I\'m section page index ' + id + '</div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('not-found-page', {
    template: function template() {
        return '\n            <div>404 page not found</div>\n        ';
    },
    onCreate: function onCreate() {
        console.log(this.tag, 'created');
    },
    onDestroy: function onDestroy() {
        console.log(this.tag, 'destroyed');
    }
});

_doz2.default.component('navigate-buttons', {
    template: function template() {
        return '\n            <div>\n                <button onclick="this.router(\'/about\')">About</button>\n                <button onclick="this.router(\'/profile/me\')">Profile</button>\n                <button onclick="this.router(\'/search/?t=hello\')">Search hello</button>\n            </div>\n        ';
    }
});

new _doz2.default({
    root: '#app',
    template: '\n            <div class="container">\n                <nav>\n                    <a data-router-link href="/">Home</a> |\n                    <a data-router-link href="/about">About</a> |\n                    <a data-router-link href="/profile/me">Profile</a> |\n                    <a data-router-link href="/profile.html">.html</a> |\n                    <a data-router-link href="/user/">User</a> |\n                    <a data-router-link href="/search/?t=hello">Search hello</a> |\n                    <a data-router-link href="/search/?t=ciao">Search ciao</a> |\n                    <a data-router-link href="/contact">Contact</a> |\n                    <a data-router-link href="/not-found-page-bla-bla">Not found</a> |\n                    <a data-router-link href="/section/1">Section 1</a> |\n                    <a data-router-link href="/section/2">Section 2</a> |\n                    <a data-router-link href="/section/3">Section 3</a> |\n                    <a data-router-link href="/section/4">Section 4</a>\n                </nav>\n                <navigate-buttons></navigate-buttons>\n                <doz-router mode="history">\n                    <home-page route="/"></home-page>\n                    <about-page route="/about"></about-page>\n                    <contact-page route="/contact"></contact-page>\n                    <extension-page route="/profile.html"></extension-page>\n                    <profile-page route="/profile/me"></profile-page>\n                    <search-page route="/search"></search-page>\n                    <user-page route="/user/"></user-page>\n                    <user-details-page route="/user/:id"></user-details-page>\n                    <not-found-page route="*"></not-found-page>\n                    <section-page route="/section/:id" preserve></section-page>\n                </doz-router>\n            </div>\n        '
});
},{"doz":3,"doz-router":5}],7:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '57049' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[7,1], null)
//# sourceMappingURL=bundle.map