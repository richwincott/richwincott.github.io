(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"sidebar\">\n\n  <div class=\"toggle d-sm-block d-md-none\" [ngClass]=\"{'expand': toggleMenu}\" (click)=\"toggleMenu=!toggleMenu\">\n    <ul class=\"hamburger list-unstyled\" [ngClass]=\"{'open': toggleMenu}\">\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n\n  <div class=\"rocket\">\n    R <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n  </div>\n\n  <img class=\"profile-picture\" src=\"../assets/img/profile.jpg\" />\n  <p>Hi there, I'm</p>\n  <h1>Richard Wincott</h1>\n  <p class=\"tagline\">Senior front-end developer specialising in <br/>Angular and Javascript applications.</p>\n\n  <nav [ngClass]=\"{'show': toggleMenu}\">\n\n    <div class=\"rocket d-md-none\">\n      R <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n    </div>\n\n    <ul class=\"list-unstyled nav-item-container\">\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, skills)\">my skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, about)\">about me</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, projects)\">projects</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, contact)\">get in touch</a>\n      </li> \n    </ul>\n\n    <div class=\"footer\">\n      <ul class=\"list-unstyled\">\n        <li class=\"social git\">\n          <a href=\"https://github.com/richwincott\" target=\"_blank\"><i class=\"fa fa-github-alt fa-lg\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li class=\"social facebook\">\n          <a href=\"https://www.facebook.com/rich.wincott\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i></a>\n        </li>\n        <li class=\"social linkedin\">\n          <a href=\"https://www.linkedin.com/in/richard-wincott-91040b134\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i></a>\n        </li> \n      </ul>\n\n      <br/>\n\n      <!-- Designed and created by Richard Wincott<br/> -->\n      richardwincott.co.uk &copy; 2019 \n    </div>\n  </nav>  \n\n</section>\n\n\n\n<section class=\"content\">\n\n  <div class=\"container\">\n    <br/><br/>\n\n    <div class=\"say-hello\">\n      <a href (click)=\"gotoAnchorTag($event, contact)\">\n        Say hello! <img src=\"../assets/img/wave_large.png\" height=\"22px\" />\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 welcome-text\">\n        Welcome to my personal website and online portfolio...\n        <hr/>\n    </div>\n\n    <br/><br/>\n\n    <h1 #skills id=\"skills\" style=\"font-size: 30px\">my skills</h1>\n    <br/>\n    <div class=\"icons\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 icon-container\" *ngFor=\"let skill of skils\">\n          <span *ngFor=\"let icon of skill.icons\"><img class=\"icon\" [src]=\"'../assets/img/icons/' + icon + '.png'\" />&nbsp;</span>\n          {{skill.text}}\n        </div>\n      </div>\n    </div>\n    \n    <br/><br/>\n    \n    <h1 #about id=\"about\" style=\"font-size: 30px\">about me</h1>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"block-text\">\n          I am a Software Developer with 6 years commercial experience. I specialise in front-end web applications built with Angular.\n          <br/><br/>\n          I'm currently employed by YOPA working as a Javascript Developer. Before that I worked at FortressGB as a Full Stack Developer.\n          <br/><br/>\n          I also have a Computer Science Honours Degree. I studied at the University of Hertfordshire and Hertford Regional College in Hatfield/Ware.\n          <br/><br/>\n        </div>\n      </div>\n    </div>\n    \n    <br/><br/>\n    \n    <h1 #projects id=\"projects\" style=\"font-size: 30px\">projects</h1>\n    <br/>\n    <div class=\"row tiles\">\n      <div class=\"col-xs-6 col-md-6 col-lg-4 col-xl-3 tile\" (click)=\"openTile(tile)\" *ngFor=\"let tile of tiles\" style=\"cursor:pointer\">\n        <div class=\"thumbnail\" [ngStyle]=\"{'background-image': 'url(' + tile.thumbnail + ')'}\">\n          <!-- <div class=\"options btn-group\" ng-click=\"$event.stopPropagation();\" >\n            <i class=\"fa fa-ellipsis-v fa-lg\" aria-hidden=\"true\"></i>\n            <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\" style=\"padding-bottom:10px\">\n                <li role=\"menuitem\"><a ng-click=\"openUrl(tile.url)\">Open in new tab</a></li>\n                <li ng-if=\"tile.githuburl\" class=\"divider\"></li>\n                <li ng-if=\"tile.githuburl\" role=\"menuitem\"><a ng-click=\"openUrl(tile.githuburl)\">View on GitHub</a></li>                  \n                <li class=\"divider\"></li>\n                <li role=\"menuitem\"><a ng-click=\"remove(1, $index)\">Hide this tile<span style=\"position:absolute; bottom:2px; right:30px; color:red; font-weight:bold; font-size:25px;\">&times;</span></a></li>\n            </ul>\n          </div> -->\n        </div>\n        <div class=\"info\">           \n          <div class=\"title\">{{tile.title}}</div>\n          <div style=\"font-size:10px; padding: 4px 6px;\">\n            <span><img src=\"../assets/img/code_tag.png\" height=\"19px\" style=\"position: relative; top: -1px;\" /> {{tile.language}}</span>\n            <br/>\n            <span *ngIf=\"tile.githuburl\">&nbsp;&nbsp;&nbsp;<a [href]=\"tile.githuburl\">View on Github</a></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br/><br/>\n\n    <h1 #contact id=\"contact\" style=\"font-size: 30px\">get in touch</h1>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"block-text\">\n          Mobile: <span class=\"phone-number\">+44 7704 473 460</span>\n          <br><br>\n          Email: <a href=\"mailto:rich.wincott@gmail.com\">rich.wincott@gmail.com</a><br>\n        </div>\n      </div>\n    </div>\n\n    <br/><br/><br/><br/>\n  </div>\n\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-top: 40px;\n}\n\nsection {\n  padding: 40px 25px;\n}\n\n@media (max-width: 767px) {\n  section {\n    padding: 40px 10px 20px;\n  }\n}\n\n.sidebar {\n  text-align: center;\n  background-color: #010D5F;\n  background-image: url('nightsky_fade.jpg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  color: #f8f8f8;\n  padding: 40px 15px;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    width: 370px;\n    z-index: 100;\n    box-shadow: 0px 0px 5px #444;\n  }\n}\n\n@media (max-width: 767px) {\n  .sidebar {\n    padding-bottom: 20px;\n  }\n}\n\n.sidebar h1 {\n  padding-top: 5px;\n}\n\n.sidebar .rocket {\n  display: inline-block;\n  position: absolute;\n  left: 40px;\n  top: 30px;\n  font-weight: bold;\n  font-size: 28px;\n  font-family: \"Fredoka One\", cursive;\n  color: #f4f4f4;\n  width: auto;\n}\n\n.sidebar .profile-picture {\n  border-radius: 50%;\n  height: 132px;\n  width: 122px;\n  margin: 65px 0px 30px;\n  border: 2px solid #f8f8f8;\n}\n\n.sidebar .tagline {\n  line-height: 1.8rem;\n}\n\n.sidebar .social {\n  display: inline-block;\n  font-size: 20px;\n  margin: 10px 10px;\n}\n\n.sidebar .social a {\n  display: block;\n  color: #f8f8f8;\n  padding: 12px 18px;\n  transition: all 0.2 ease-in-out;\n}\n\n.sidebar .social.git a:hover {\n  color: #f08080 !important;\n}\n\n.sidebar .social.facebook a:hover {\n  color: #90ee90 !important;\n}\n\n.sidebar .social.linkedin a:hover {\n  color: #87cefa !important;\n}\n\n@media (max-width: 767px) {\n  .sidebar nav {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: -70%;\n    background-color: rgba(0, 0, 0, 0.94);\n    height: 100% !important;\n    width: 70% !important;\n    padding: 90px 0px 0px;\n    overflow: hidden;\n    z-index: 500;\n    transition: all 200ms ease;\n    text-align: left;\n  }\n  .sidebar nav .nav-item-container {\n    padding: 0px 20px;\n  }\n  .sidebar nav.show {\n    left: 0%;\n    transition: all 200ms ease;\n  }\n}\n\n.sidebar nav .nav-item {\n  padding: 8px 0px;\n}\n\n.sidebar nav .nav-item a {\n  display: block;\n  color: #dedede;\n  padding: 8px 20px;\n  text-decoration: none;\n  font-size: 18px;\n}\n\n.sidebar nav .nav-item a:hover {\n  color: #fff;\n}\n\n.content {\n  height: 100vh;\n  background-color: #f8f8f8;\n  color: #222;\n}\n\n@media (min-width: 1400px) {\n  .content {\n    padding-right: 80px;\n  }\n}\n\n@media (min-width: 768px) {\n  .content {\n    position: relative;\n    left: 370px;\n    width: calc(100% - 370px);\n  }\n}\n\n@media (max-width: 767px) {\n  .content {\n    padding-top: 20px;\n  }\n}\n\n.content .icon-container {\n  padding: 4px 30px 4px;\n}\n\n.content .icon-container .icon {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  border-radius: 4px;\n  margin: 5px;\n}\n\n.content .say-hello {\n  text-align: right;\n  position: relative;\n  top: -30px;\n}\n\n.content .say-hello a {\n  background-color: #0D1F6D;\n  padding: 10px 15px;\n  color: #f8f8f8;\n  font-weight: bold;\n  font-size: 18px;\n  width: auto;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n.content .say-hello a img {\n  margin-left: 10px;\n  position: relative;\n  top: -2px;\n}\n\n.content .phone-number {\n  font-size: 20px;\n  position: relative;\n  top: 2px;\n  left: 5px;\n}\n\n.content .welcome-text {\n  font-size: 20px;\n}\n\n.content .block-text {\n  padding: 20px 30px;\n}\n\n.content .tiles {\n  padding: 0px 20px;\n}\n\n@media (max-width: 767px) {\n  .content .tiles {\n    width: 100vw;\n    position: relative;\n    left: -10px;\n    padding: 0px;\n  }\n}\n\n.content .tiles .tile {\n  margin: 35px 0px;\n  width: auto !important;\n}\n\n@media (max-width: 767px) {\n  .content .tiles .tile {\n    margin: 15px 0px;\n  }\n}\n\n.content .tiles .tile .thumbnail {\n  width: 180px;\n  height: 150px;\n  background-repeat: none;\n  background-position: center center;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n@media (max-width: 767px) {\n  .content .tiles .tile .thumbnail {\n    width: 157px;\n    height: 131px;\n    background-size: cover;\n  }\n}\n\n.content .tiles .tile .thumbnail .options {\n  position: absolute;\n  top: 10px;\n  left: 205px;\n  color: #666;\n}\n\n.content .tiles .tile .info {\n  background-color: #fff;\n  width: 180px;\n  min-height: 78px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  line-height: 1.8rem;\n  padding: 3px 6px;\n}\n\n@media (max-width: 767px) {\n  .content .tiles .tile .info {\n    width: 157px;\n  }\n}\n\n.content .tiles .tile .info .title {\n  border-bottom: 1px solid #eaeaea;\n  padding: 1px;\n}\n\n.footer {\n  text-align: center;\n  font-size: 12px;\n  position: absolute;\n  bottom: 45px;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    width: calc(100% - 50px);\n  }\n}\n\n.toggle {\n  position: fixed;\n  width: 30%;\n  padding: 15px 28px;\n  top: 0px;\n  right: 0px;\n  z-index: 499;\n  color: #999;\n  text-align: center;\n  font-size: 20px;\n  border-bottom-left-radius: 20px;\n  -webkit-filter: brightness(200%);\n          filter: brightness(200%);\n  cursor: pointer;\n}\n\n.toggle.expand {\n  height: 100%;\n  border-bottom-left-radius: 0px;\n}\n\n.hamburger {\n  position: relative;\n  top: 16px;\n  width: 40px;\n  margin: 0px auto;\n}\n\n.hamburger li {\n  position: relative;\n  width: 100%;\n  max-width: 34px;\n  height: 3px;\n  margin: 8px auto;\n  background-color: white;\n  box-shadow: 0px 0px 10px #555;\n  opacity: 0.95;\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  border-radius: 2px;\n}\n\n.hamburger.open li:nth-child(1), .hamburger.open li:nth-child(4) {\n  opacity: 0;\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n.hamburger.open li:nth-child(2) {\n  transform: rotate(45deg);\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  z-index: 200;\n}\n\n.hamburger li:nth-child(3) {\n  position: absolute;\n  top: 3px;\n  left: 50%;\n  margin-left: -17px;\n}\n\n.hamburger.open li:nth-child(3) {\n  transform: rotate(-45deg);\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  z-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxyaWNoYXJkd2luY290dC5jby51ay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxQcm9qZWN0c1xccmljaGFyZHdpbmNvdHQuY28udWsvc3JjXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFLSSxrQkFBQTtBQ0xKOztBRENJO0VBREo7SUFFUSx1QkFBQTtFQ0VOO0FBQ0Y7O0FER0E7RUFlSSxrQkFBQTtFQUNBLHlCRXhCa0I7RUZ5QnJCLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNHLGNFOUJrQjtFRitCbEIsa0JBQUE7QUNkSjs7QUROSTtFQURKO0lBRVEsZUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsNEJBQUE7RUNTTjtBQUNGOztBRFBJO0VBWEo7SUFZUSxvQkFBQTtFQ1VOO0FBQ0Y7O0FEQUk7RUFDSSxnQkFBQTtBQ0VSOztBRENJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NSOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURHSTtFQUNJLG1CQUFBO0FDRFI7O0FESUk7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZSOztBRElRO0VBQ0ksY0FBQTtFQUNBLGNFcEVVO0VGcUVWLGtCQUFBO0VBQ0EsK0JBQUE7QUNGWjs7QURLUTtFQUNJLHlCQUFBO0FDSFo7O0FETVE7RUFDSSx5QkFBQTtBQ0paOztBRE9RO0VBQ0kseUJBQUE7QUNMWjs7QURVUTtFQURKO0lBRVEsY0FBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7SUFDQSxnQkFBQTtFQ1BWO0VEU1U7SUFDSSxpQkFBQTtFQ1BkO0VEVVU7SUFDSSxRQUFBO0lBQ0EsMEJBQUE7RUNSZDtBQUNGOztBRFdRO0VBQ0ksZ0JBQUE7QUNUWjs7QURXWTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNUaEI7O0FEV2dCO0VBQ0ksV0FBQTtBQ1RwQjs7QURnQkE7RUFlSSxhQUFBO0VBQ0EseUJFckprQjtFRnNKbEIsV0VySmtCO0FEMEh0Qjs7QURXSTtFQURKO0lBRVEsbUJBQUE7RUNSTjtBQUNGOztBRFVJO0VBTEo7SUFNUSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtFQ1BOO0FBQ0Y7O0FEU0k7RUFYSjtJQVlRLGlCQUFBO0VDTk47QUFDRjs7QURZSTtFQUNJLHFCQUFBO0FDVlI7O0FEWVE7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDVlo7O0FEY0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ1pSOztBRGNRO0VBQ0kseUJFaktVO0VGa0tWLGtCQUFBO0VBQ0EsY0V0S1U7RUZ1S1YsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNaWjs7QURjWTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDWmhCOztBRGlCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDZlI7O0FEa0JJO0VBQ0ksZUFBQTtBQ2hCUjs7QURtQkk7RUFDSSxrQkFBQTtBQ2pCUjs7QURvQkk7RUFRSSxpQkFBQTtBQ3pCUjs7QURrQlE7RUFESjtJQUVRLFlBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDZlY7QUFDRjs7QURtQlE7RUFLSSxnQkFBQTtFQUNBLHNCQUFBO0FDckJaOztBRGdCWTtFQURKO0lBRVEsZ0JBQUE7RUNiZDtBQUNGOztBRGtCWTtFQU9JLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUN0QmhCOztBRFdnQjtFQURKO0lBRVEsWUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQ1JsQjtBQUNGOztBRGlCZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2ZwQjs7QURtQlk7RUFLSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDckJoQjs7QURXZ0I7RUFESjtJQUVRLFlBQUE7RUNSbEI7QUFDRjs7QURrQmdCO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0FDaEJwQjs7QUR1QkE7RUFJSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDdkJKOztBRGdCSTtFQURKO0lBRVEsd0JBQUE7RUNiTjtBQUNGOztBRHlCQTtFQUNDLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsZUFBQTtBQ3RCSjs7QUR3Qkk7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7QUN0QlI7O0FEMEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdkJKOztBRHlCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDdkJSOztBRDBCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0gsbUJBQUE7RUFDRyxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUN2Qko7O0FEeUJBO0VBS0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0gsbUJBQUE7RUFDRyxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDSCxZQUFBO0FDdEJEOztBRHdCQTtFQUNDLGtCQUFBO0VBQ0EsUUFBQTtFQUNHLFNBQUE7RUFDQSxrQkFBQTtBQ3JCSjs7QUR1QkE7RUFLSSx5QkFBQTtFQUNBLGVBQUE7RUFDSCxtQkFBQTtFQUNHLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNILFlBQUE7QUNwQkQiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLy4uL2NvbG9ycy5zY3NzJztcclxuXHJcbmgxIHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHBhZGRpbmc6IDQwcHggMjVweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzQ0NDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya19ibHVlO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9uaWdodHNreV9mYWRlLmpwZycpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xyXG4gICAgY29sb3I6ICRkYXJrLXRleHQ7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDE1cHg7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvY2tldCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiA0MHB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdGcmVkb2thIE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDEzMnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjJweDtcclxuICAgICAgICBtYXJnaW46IDY1cHggMHB4IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y4ZjhmODtcclxuICAgIH1cclxuXHJcbiAgICAudGFnbGluZSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay10ZXh0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE4cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMiBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZ2l0IGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojZjA4MDgwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmZhY2Vib29rIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojOTBlZTkwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmxpbmtlZGluIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjojODdjZWZhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgICAgICBsZWZ0Oi03MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwgMC45NCk7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjcwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA5MHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgei1pbmRleDo1MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5zaG93IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweDtcclxuICAgIFxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNkZWRlZGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSAgIFxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMzcwcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM3MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iYWNrZ3JvdW5kO1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0O1xyXG5cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDMwcHggNHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zYXktaGVsbG8ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0zMHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0ZXJfYmx1ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcmtfdGV4dDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5waG9uZS1udW1iZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC53ZWxjb21lLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmxvY2stdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aWxlcyB7XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcblxyXG4gICAgICAgIC50aWxlIHtcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDM1cHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDIwNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTU3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDc4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA0NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gb2xkIHN0dWZmIG5lZWRzIHJlZmFjdG9yXHJcblxyXG4udG9nZ2xlIHtcclxuXHRwb3NpdGlvbjpmaXhlZDtcclxuXHR3aWR0aDozMCU7XHJcblx0cGFkZGluZzoxNXB4IDI4cHg7XHJcblx0dG9wOjBweDtcclxuXHRyaWdodDowcHg7XHJcbiAgICB6LWluZGV4OjQ5OTtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoyMHB4O1xyXG4gICAgZmlsdGVyOmJyaWdodG5lc3MoMjAwJSk7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIFxyXG4gICAgJi5leHBhbmQge1xyXG4gICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGFtYnVyZ2VyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjE2cHg7XHJcbiAgICB3aWR0aDo0MHB4O1xyXG4gICAgbWFyZ2luOjBweCBhdXRvO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDozNHB4O1xyXG4gICAgICAgIGhlaWdodDozcHg7XHJcbiAgICAgICAgbWFyZ2luOjhweCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzowcHggMHB4IDEwcHggIzU1NTtcclxuICAgICAgICBvcGFjaXR5OjAuOTU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjM7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG59XHJcbi5oYW1idXJnZXIub3BlbiBsaTpudGgtY2hpbGQoMSksIC5oYW1idXJnZXIub3BlbiBsaTpudGgtY2hpbGQoNCkge1xyXG4gICAgb3BhY2l0eTowO1xyXG4gICAgdHJhbnNpdGlvbjogLjM7XHJcblx0LW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcbn1cclxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IC4zO1xyXG5cdC1vLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG5cdHotaW5kZXg6MjAwO1xyXG59XHJcbi5oYW1idXJnZXIgbGk6bnRoLWNoaWxkKDMpIHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHR0b3A6M3B4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xyXG59XHJcbi5oYW1idXJnZXIub3BlbiBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zaXRpb246IC4zO1xyXG5cdC1vLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG5cdHotaW5kZXg6MjAwO1xyXG59IiwiaDEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDQwcHggMjVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA0MHB4IDEwcHggMjBweDtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxMEQ1RjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltZy9uaWdodHNreV9mYWRlLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZzogNDBweCAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDM3MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjNDQ0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG59XG4uc2lkZWJhciBoMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uc2lkZWJhciAucm9ja2V0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwcHg7XG4gIHRvcDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiRnJlZG9rYSBPbmVcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICNmNGY0ZjQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnNpZGViYXIgLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgd2lkdGg6IDEyMnB4O1xuICBtYXJnaW46IDY1cHggMHB4IDMwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmOGY4Zjg7XG59XG4uc2lkZWJhciAudGFnbGluZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG59XG4uc2lkZWJhciAuc29jaWFsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xufVxuLnNpZGViYXIgLnNvY2lhbCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZjhmOGY4O1xuICBwYWRkaW5nOiAxMnB4IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjIgZWFzZS1pbi1vdXQ7XG59XG4uc2lkZWJhciAuc29jaWFsLmdpdCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmMDgwODAgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5zb2NpYWwuZmFjZWJvb2sgYTpob3ZlciB7XG4gIGNvbG9yOiAjOTBlZTkwICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAuc29jaWFsLmxpbmtlZGluIGE6aG92ZXIge1xuICBjb2xvcjogIzg3Y2VmYSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaWRlYmFyIG5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IC03MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk0KTtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogOTBweCAwcHggMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnNpZGViYXIgbmF2IC5uYXYtaXRlbS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG4gIC5zaWRlYmFyIG5hdi5zaG93IHtcbiAgICBsZWZ0OiAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgfVxufVxuLnNpZGViYXIgbmF2IC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG59XG4uc2lkZWJhciBuYXYgLm5hdi1pdGVtIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNkZWRlZGU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zaWRlYmFyIG5hdiAubmF2LWl0ZW0gYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGNvbG9yOiAjMjIyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAuY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMzcwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM3MHB4KTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuLmNvbnRlbnQgLmljb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogNHB4IDMwcHggNHB4O1xufVxuLmNvbnRlbnQgLmljb24tY29udGFpbmVyIC5pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGVudCAuc2F5LWhlbGxvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbn1cbi5jb250ZW50IC5zYXktaGVsbG8gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDFGNkQ7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250ZW50IC5zYXktaGVsbG8gYSBpbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG4uY29udGVudCAucGhvbmUtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiA1cHg7XG59XG4uY29udGVudCAud2VsY29tZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRlbnQgLmJsb2NrLXRleHQge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uY29udGVudCAudGlsZXMge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVudCAudGlsZXMge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLTEwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59XG4uY29udGVudCAudGlsZXMgLnRpbGUge1xuICBtYXJnaW46IDM1cHggMHB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50IC50aWxlcyAudGlsZSB7XG4gICAgbWFyZ2luOiAxNXB4IDBweDtcbiAgfVxufVxuLmNvbnRlbnQgLnRpbGVzIC50aWxlIC50aHVtYm5haWwge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbnQgLnRpbGVzIC50aWxlIC50aHVtYm5haWwge1xuICAgIHdpZHRoOiAxNTdweDtcbiAgICBoZWlnaHQ6IDEzMXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSAudGh1bWJuYWlsIC5vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDIwNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSAuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxODBweDtcbiAgbWluLWhlaWdodDogNzhweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBsaW5lLWhlaWdodDogMS44cmVtO1xuICBwYWRkaW5nOiAzcHggNnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50IC50aWxlcyAudGlsZSAuaW5mbyB7XG4gICAgd2lkdGg6IDE1N3B4O1xuICB9XG59XG4uY29udGVudCAudGlsZXMgLnRpbGUgLmluZm8gLnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3RlciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB9XG59XG5cbi50b2dnbGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDE1cHggMjhweDtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHotaW5kZXg6IDQ5OTtcbiAgY29sb3I6ICM5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMjAwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b2dnbGUuZXhwYW5kIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG59XG5cbi5oYW1idXJnZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTZweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uaGFtYnVyZ2VyIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiA4cHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjNTU1O1xuICBvcGFjaXR5OiAwLjk1O1xuICB0cmFuc2l0aW9uOiAwLjM7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDEpLCAuaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDQpIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5oYW1idXJnZXIub3BlbiBsaTpudGgtY2hpbGQoMikge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjM7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgei1pbmRleDogMjAwO1xufVxuXG4uaGFtYnVyZ2VyIGxpOm50aC1jaGlsZCgzKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xN3B4O1xufVxuXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDMpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uOiAwLjM7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IDAuM3M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcztcbiAgei1pbmRleDogMjAwO1xufSIsIiRsaWdodC1iYWNrZ3JvdW5kICAgOiAjZjhmOGY4O1xyXG4kbGlnaHQtdGV4dCAgICAgICAgIDogIzIyMjtcclxuXHJcbiRkYXJrLWJhY2tncm91bmQgICAgOiAjMjIyO1xyXG4kZGFyay10ZXh0ICAgICAgICAgIDogI2Y4ZjhmODtcclxuXHJcbiRkYXJrX2JsdWUgICAgICAgICAgOiAjMDEwRDVGO1xyXG4kbGlnaHRlcl9ibHVlICAgICAgIDogIzBEMUY2RDsiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.toggleMenu = false;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.tiles = [
                        {
                            title: "Emoji Jump",
                            thumbnail: "../assets/img/mw27.jpg",
                            language: "p5.js, Node, Socket.io",
                            url: "https://repentantsandykernel--richardwincott.repl.co/"
                        },
                        {
                            title: "USBMusic",
                            thumbnail: "../assets/img/mw26.jpg",
                            language: "React, Spotify Api",
                            url: "http://dev.richardwincott.co.uk/usbmusic",
                            githuburl: "https://github.com/richwincott/usbmusic"
                        },
                        {
                            title: "Chat",
                            thumbnail: "../assets/img/mw25.jpg",
                            language: "Angular",
                            url: "http://dev.richardwincott.co.uk:8181"
                        },
                        {
                            title: "Spikes",
                            thumbnail: "../assets/img/mw24.jpg",
                            language: "p5.js, Node, Socket.io",
                            url: "http://dev.richardwincott.co.uk:8282",
                            githuburl: "https://github.com/richwincott/spikes"
                        },
                        {
                            title: "Mario",
                            thumbnail: "../assets/img/mw23.jpg",
                            language: "Canvas, Modules, Classes",
                            url: "http://dev.richardwincott.co.uk/mario",
                            githuburl: "https://github.com/richwincott/mario"
                        },
                        {
                            title: "FortressGB Website",
                            thumbnail: "../assets/img/mw20.jpg",
                            language: "Wordpress, PHP",
                            url: "http://www.fortressgb.com/"
                        },
                        {
                            title: "Friends of Pishiobury",
                            thumbnail: "../assets/img/mw1.jpg",
                            language: "Angular, PHP",
                            url: "http://www.friendsofpishioburypark.co.uk/"
                        }
                    ];
                    this.skils = [
                        {
                            text: 'Angular, Typescript',
                            icons: [
                                'angular',
                                'typescript'
                            ]
                        },
                        {
                            text: 'React, React Native',
                            icons: [
                                'react'
                            ]
                        },
                        {
                            text: 'Webpack, Gulp',
                            icons: [
                                'webpack',
                                'gulp'
                            ]
                        },
                        {
                            text: 'Jasmine, Karma',
                            icons: [
                                'karma'
                            ]
                        },
                        {
                            text: 'Node.JS, Express, Socket.IO',
                            icons: [
                                'node_alt',
                            ]
                        },
                        {
                            text: 'Github, NPM',
                            icons: [
                                'git',
                                'npm'
                            ]
                        },
                        {
                            text: 'MongoDB, MySQL',
                            icons: [
                                'database',
                            ]
                        },
                        {
                            text: 'Visual Studio Code',
                            icons: [
                                'vscode',
                            ]
                        },
                        {
                            text: 'ASP.Net C#',
                            icons: [
                                'csharp',
                            ]
                        },
                        {
                            text: 'WordPress, PHP',
                            icons: [
                                'php',
                            ]
                        },
                        {
                            text: 'p5.js',
                            icons: [
                                'p5',
                            ]
                        },
                        {
                            text: 'Teamwork',
                            icons: [
                                //'conduct',
                                'cake'
                            ]
                        }
                    ];
                };
                AppComponent.prototype.gotoAnchorTag = function (event, $element) {
                    event.preventDefault();
                    this.toggleMenu = false;
                    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    //window.location.href = '/#' + tag;
                };
                AppComponent.prototype.openTile = function (tile) {
                    window.open(tile.url, '_blank');
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Projects\richardwincott.co.uk\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map