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
})({"main.js":[function(require,module,exports) {
var string = "\nhtml,body{\n   margin: 0;padding:0;\n}\n.cat *{\n    box-sizing:border-box;margin:0;padding:0;\n}\n.cat *::before{box-sizing:border-box;}\n.cat *::after{box-sizing:border-box;}\n.cat{\n    position:relative;\n    min-height:100vh;\n    background:black;\n}\n.ear{\n    width:46px;\n    height:100px;\n    position:absolute;\n    top:90px;\n    left:50%;\n    margin-left: -23px;\n    background:#fff;\n}\n.ear.right {\n    border-radius: 30% 70% 0 0 / 100% 100% 0 0;\n    transform: translateX(80px) rotate(15deg);\n}\n.ear.right::after{\n    content:'';\n    position:absolute;\n    width:3px;\n    height:25px;\n    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;\n    top:80%;\n    left:50%;\n    background:black;\n    margin-left:-5px;\n    transform:rotate(-5deg);\n}\n.ear.right::before{\n    content:'';\n    position:absolute;\n    border:1px solid green;\n    width:3px;\n    height:14px;\n    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;\n    top:80%;\n    left:70%;\n    background:black;\n    margin-left:-5px;\n    transform:rotate(35deg);\n}\n.ear.left::after{\n    content:'';\n    position:absolute;\n    width:3px;\n    height:20px;\n    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;\n    top:80%;\n    left:50%;\n    background:black;\n    margin-left:-5px;\n    transform:rotate(-30deg);\n}\n.ear.left::before{\n    content:'';\n    position:absolute;\n    border:1px solid green;\n    width:3px;\n    height:14px;\n    border-radius:50% 60% 0 0 / 60% 50% 0 0 ;\n    top:80%;\n    left:70%;\n    background:black;\n    margin-left:-5px;\n    transform:rotate(10deg);\n}\n\n\n\n\n\n.ear.left{\n    border-radius:70% 30% 0 0 / 100% 100% 0 0;\n    transform:translateX(-80px) rotate(-15deg);\n\n}\n\n.face{\n    border:1px solid black;\n    position: absolute;\n    height: 200px;\n    width: 200px;\n    top :150px;\n    left:50%;\n    margin-left:-100px;\n    background: black;\n    border-radius: 50%;\n}\n\n.muzzle{\n    border:1px solid green;\n    width:10px;\n    height:6px;\n    position:absolute;\n    top:65px;\n    left:50%;\n    background:#fff;\n    margin-left:-3px;\n    border-radius:50% 50% 50% 50% / 30% 30% 70% 70%;\n}\n.eye{\n    border:1px solid black;\n    top:40px;\n    left:50%;\n    margin-left:-23px;\n    width:46px;\n    height:42px;\n    position:absolute;\n    background:#fff;\n    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;\n}\n.eye.left{\n    transform:translateX(-45px);\n}\n.eye.right{\n    transform:translateX(45px);\n}\n\n.eye.left::after{\n    content: '';\n    position: absolute;\n    top: 70%;\n    right: -1%;\n    height: 20%;\n    width: 50%;\n    border-radius: 70%;\n    background: #ffffff;\n}\n.eye.right::after {\n    content: '';\n    position: absolute;\n    top: 70%;\n    right:61%;\n    height: 20%;\n    width: 40%;\n    border-radius: 70%;\n    background: #fff;\n}\n@keyframes blink{\n    0%{height:0;}\n    90%{height: 0;}\n    92.5%{height:100%}\n    95%{height: 0;}\n    97.5%{height: 100%}\n    100%{height:0;}\n}\n.eye::before{\n    content:'';\n    position:absolute;\n    top:0;\n    left:50%;\n    margin-left:-50%;\n    width:100%;\n    border-radius: 0 0 50% 50% / 0 0 40% 40%;\n    background:black;\n    animation:blink infinite 5s ease-in;\n}\n.eye>.pupil{\n    position:absolute;\n    top:25%;\n    left:30%;\n    height:55%;\n    width:28%;\n    background:black;\n    border-radius: 50%;\n    animation:look-ground 4s infinite;\n}\n@keyframes look-ground {\n    0% { transform: translate(0) }\n    5% { transform: translate(100%, -20%) }\n    10% { transform: translate(100%, -20%) }\n    15% { transform: translate(-15%, -20%) }\n    20% { transform: translate(-5%, -20%) }\n    25% { transform: translate(0, 0) }\n    100% { transform: translate(0, 0) }\n}\n.pupil::after {\n    content: '';\n    position: absolute;\n    top:20%;\n    right:20%;\n    height: 30%;\n    width: 30%;\n    background: #fff;\n    border-radius: 50%;\n}\n\n\n\n";

var n = 1;
demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);

var id = setInterval(function () {
    n += 1;
    if (n > string.lenth) {
        window.clearInterval(id);
        return;
    }
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = 999999;
}, 0);
},{}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50222' + '/');
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
        parents.push(k);
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
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.170facf7.map