/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/common.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.domReady = function (callback) {
            try {
                document.addEventListener("DOMContentLoaded", callback);
            }
            catch (e) {
                throw Error(e);
            }
        };
        App.getElements = function (selector) {
            var elements = document.querySelectorAll(selector);
            return elements.length ? elements : [];
        };
        App.getElement = function (selector) {
            var element = document.querySelector(selector);
            return element;
        };
        App.elementsGetter = function (selector) {
            return App.transformNodeListToArray(document.querySelectorAll(selector));
        };
        App.transformNodeListToArray = function (list) {
            try {
                return Array.prototype.slice.call(list);
            }
            catch (e) {
                throw Error(e);
                return [];
            }
        };
        App.wrap = function (selector, wrapper) {
            var localWrapper;
            if (typeof wrapper == "string")
                localWrapper = document.createElement(wrapper);
            else if (wrapper instanceof HTMLElement)
                localWrapper = wrapper;
            App.each(selector, function (el, i) {
                localWrapper.innerHTML = el.outerHTML;
                el.parentNode.replaceChild(localWrapper, el);
            });
        };
        App.each = function (elements, callback) {
            if (!callback) {
                console.error("Callback does not exists in yours 'each'");
                return;
            }
            if (typeof elements == "string")
                elements = App.transformNodeListToArray(App.getElements(elements));
            else if (elements instanceof NodeList)
                elements = App.transformNodeListToArray(elements);
            var i = 0;
            for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                var el = elements_1[_i];
                callback(el, i);
                i++;
            }
        };
        return App;
    }());
    exports.App = App;
    var Element = (function () {
        function Element(selector) {
            this._length = 0;
            if (typeof selector == "string")
                this.els = App.elementsGetter(selector);
            else if (selector instanceof HTMLElement)
                this.els = [selector];
            else if (selector instanceof NodeList)
                this.els = App.transformNodeListToArray(selector);
            else if (selector instanceof Array && (selector[0] instanceof HTMLElement || !selector.length))
                this.els = selector;
            else if (selector instanceof Element)
                this.els = selector.els;
            else
                throw Error("Invalid selector: " + selector);
        }
        Object.defineProperty(Element.prototype, "els", {
            get: function () {
                return this._els;
            },
            set: function (elements) {
                this._els = elements;
                this._length = elements.length || 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Element.prototype, "length", {
            get: function () {
                return this._length;
            },
            enumerable: true,
            configurable: true
        });
        Element.prototype.is = function (selector) {
            var element;
            if (typeof selector == "string")
                element = App.elementsGetter(selector);
            else if (selector instanceof HTMLElement)
                element = [selector];
            return this.els[0] == element[0];
        };
        Element.prototype.has = function (selector) {
            var searchElements;
            if (typeof selector == "string")
                searchElements = App.elementsGetter(selector);
            else if (selector instanceof HTMLElement)
                searchElements = [selector];
            else if (selector instanceof Element)
                searchElements = selector._els;
            else if (selector instanceof NodeList)
                searchElements = App.transformNodeListToArray(selector);
            else if (selector instanceof Array && (selector[0] instanceof HTMLElement || !selector.length))
                searchElements = selector;
            else
                throw Error("Invalid selector: " + selector);
            var isFinded = false;
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                for (var _b = 0, searchElements_1 = searchElements; _b < searchElements_1.length; _b++) {
                    var target = searchElements_1[_b];
                    if (el.contains(target)) {
                        isFinded = true;
                        break;
                    }
                }
                if (isFinded)
                    return true;
            }
            return false;
        };
        Element.prototype.addClass = function (className) {
            App.each(this.els, function (el) {
                el.classList.add(className);
            });
            return this;
        };
        Element.prototype.removeClass = function (className) {
            App.each(this.els, function (el) {
                el.classList.remove(className);
            });
            return this;
        };
        Element.prototype.toggleClass = function (className, callback) {
            if (callback === void 0) { callback = function () { }; }
            App.each(this.els, function (el) {
                if (el.classList.contains(className)) {
                    el.classList.remove(className);
                    callback(false);
                }
                else {
                    el.classList.add(className);
                    callback(true);
                }
            });
            return this;
        };
        Element.prototype.hasClass = function (targetClass) {
            for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
                var el = _a[_i];
                if (el.classList.contains(targetClass))
                    return true;
            }
            return false;
        };
        Element.prototype.find = function (selector) {
            var searchingElements = new Array();
            App.each(this.els, function (el) {
                var findedElements = el.querySelectorAll(selector);
                if (!findedElements.length)
                    return;
                for (var _i = 0, _a = App.transformNodeListToArray(findedElements); _i < _a.length; _i++) {
                    var el_1 = _a[_i];
                    searchingElements.push(el_1);
                }
            });
            return new Element(searchingElements);
        };
        return Element;
    }());
    exports.Element = Element;
    var EventListener = (function (_super) {
        __extends(EventListener, _super);
        function EventListener() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EventListener.prototype.add = function (event, callback, options) {
            App.each(this.els, function (el) {
                el.addEventListener(event, function (event) {
                    callback(this, event);
                }, options);
            });
            return this;
        };
        EventListener.prototype.trigger = function (event) {
            App.each(this.els, function (el) {
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent(event, false, true);
                el.dispatchEvent(evt);
            });
            return this;
        };
        return EventListener;
    }(Element));
    exports.EventListener = EventListener;
    var mobileMenu = (function () {
        function mobileMenu(settings) {
            this._state = false;
            this._error = false;
            this.menuActiveClass = "js__opened";
            this.bodyActiveClass = "js__menu-opened";
            this.body = App.getElement("body");
            this._settings = settings;
            this.burger = App.getElement(settings.burger);
            this.menu = App.getElement(settings.menu);
            this.bindEvents();
        }
        Object.defineProperty(mobileMenu.prototype, "error", {
            set: function (text) {
                this._error = true;
                console.error(text + ". \u041C\u0435\u043D\u044E \u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (newState) {
                this._state = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "menu", {
            get: function () {
                return this._menu;
            },
            set: function (el) {
                if (!(el instanceof HTMLElement))
                    this.error = "Меню не найдено";
                else
                    this._menu = el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "burger", {
            get: function () {
                return this._burger;
            },
            set: function (el) {
                if (!(el instanceof HTMLElement))
                    this.error = "Бургер не найден";
                else
                    this._burger = el;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(mobileMenu.prototype, "settings", {
            get: function () {
                return this._settings;
            },
            enumerable: true,
            configurable: true
        });
        mobileMenu.prototype.openMenu = function () {
            if (!window.matchMedia(this.settings.media).matches)
                return;
            if (this.settings.fixBody) {
                this.body.style.top = -window.pageYOffset + "px";
                this.body.style.position = "fixed";
            }
            this.burger.classList.add("js__active");
            this.menu.classList.add(this.menuActiveClass);
            this.body.classList.add(this.bodyActiveClass);
            this.state = true;
            return this;
        };
        mobileMenu.prototype.closeMenu = function () {
            if (!window.matchMedia(this.settings.media).matches || !this.state)
                return;
            var top = 0;
            if (this.settings.fixBody) {
                top = Math.abs(parseInt(this.body.style.top));
                this.body.style.top = "";
                this.body.style.position = "";
            }
            this.burger.classList.remove("js__active");
            this.menu.classList.remove(this.menuActiveClass);
            this.body.classList.remove(this.bodyActiveClass);
            if (this.settings.fixBody)
                window.scrollTo(0, top);
            this.state = false;
            return this;
        };
        mobileMenu.prototype.toggleMenu = function () {
            if (!window.matchMedia(this.settings.media).matches)
                return;
            if (this.state)
                this.closeMenu();
            else
                this.openMenu();
            return this;
        };
        mobileMenu.prototype.bindEvents = function () {
            var _this = this;
            document.addEventListener("click", function (event) {
                var target = new Element(event.target);
                if (!target.is(_this.burger)
                    && !new Element(_this.burger).has(target)
                    && !target.is(_this.menu)
                    && !new Element(_this.menu).has(target))
                    _this.closeMenu();
            });
            new EventListener(this.burger).add("click", function (el) {
                _this.toggleMenu();
            });
        };
        return mobileMenu;
    }());
    exports.MobileMenu = mobileMenu;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/ts/common.ts":
/*!**************************!*\
  !*** ./src/ts/common.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./app */ "./src/ts/app.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    app_1.App.domReady(function () {
        ;
        (function () {
            var maxHeight = 0;
            app_1.App.each(".cat-item__img", function (el, i) {
                if (maxHeight < parseInt(getComputedStyle(el).height))
                    maxHeight = parseInt(getComputedStyle(el).height);
            });
            app_1.App.each(".cat-item__img", function (el, i) {
                el.style.height = (maxHeight + "px");
            });
        })();
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=common.js.map