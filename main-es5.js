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
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- [ngStyle]=\"{'background-position-x': '-' + 242 - (scrollTop/80) + 'px'}\" -->\n<section class=\"sidebar\">\n\t<div class=\"padding\">\n\t\t<div class=\"toggle d-sm-block d-md-none\" [ngClass]=\"{'expand': toggleMenu}\" (click)=\"toggleMenu=!toggleMenu\">\n\t\t\t<ul class=\"hamburger list-unstyled\" [ngClass]=\"{'open': toggleMenu}\">\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t</ul>\n\t\t</div>\n\t\n\t\t<div class=\"rocket\">\n\t\t\tR <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n\t\t</div>\n\t\n\t\t<img class=\"profile-picture\" src=\"../assets/img/profile.jpg\" />\n\t\t<p>Hi there, I'm</p>\n\t\t<h1>Richard Wincott</h1>\n\t\t<p class=\"tagline\">Senior front-end developer specialising in <br/>Angular and Javascript applications.</p>\n\t\n\t\t<nav [ngClass]=\"{'show': toggleMenu}\">\n\t\n\t\t\t<div class=\"rocket d-md-none\">\n\t\t\t\tR <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n\t\t\t</div>\n\t\n\t\t\t<ul class=\"list-unstyled nav-item-container\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a href (click)=\"gotoAnchorTag($event, 'skills')\">my skills</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a href (click)=\"gotoAnchorTag($event, 'about')\">about me</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a href (click)=\"gotoAnchorTag($event, 'projects')\">projects</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a href (click)=\"gotoAnchorTag($event, 'contact')\">get in touch</a>\n\t\t\t\t</li> \n\t\t\t</ul>\n\t\n\t\t\t<div class=\"footer\">\n\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t<li class=\"social git\">\n\t\t\t\t\t\t<a href=\"https://github.com/richwincott\" target=\"_blank\"><i class=\"fa fa-github-alt fa-lg\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"social facebook\">\n\t\t\t\t\t\t<a href=\"https://www.facebook.com/rich.wincott\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"social linkedin\">\n\t\t\t\t\t\t<a href=\"https://www.linkedin.com/in/richard-wincott-91040b134\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li> \n\t\t\t\t</ul>\n\t\n\t\t\t\t<br/>\n\t\n\t\t\t\t<!-- Designed and created by Richard Wincott<br/> -->\n\t\t\t\trichardwincott.co.uk &copy; {{currentYear}} \n\t\t\t</div>\n\t\t</nav>  \n\t</div>\n</section>\n\n<section class=\"content\">\n\n\t\t<router-outlet></router-outlet>\n\t\t\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"padding\">\n    <div class=\"container\">\n        <br/><br/>\n\n        <div class=\"say-hello\">\n            <a href (click)=\"gotoAnchorTag($event, contact)\">\n                Say hello! <img src=\"../assets/img/wave_large.png\" height=\"22px\" />\n            </a>\n        </div>\n    \n        <div class=\"col-xs-12 welcome-text\">\n            Welcome to my personal website and online portfolio...\n            <hr/>\n        </div>\n    \n        <br/>\n    \n        <h1 #skills id=\"skills\" style=\"font-size: 30px\">my skills</h1>\n        <br/>\n        <div class=\"icons\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-6 icon-container\" *ngFor=\"let skill of skils\">\n                    <span *ngFor=\"let icon of skill.icons\"><img class=\"icon\" [src]=\"'../assets/img/icons/' + icon + '.png'\" />&nbsp;</span>\n                    {{skill.text}}\n                </div>\n            </div>\n        </div>\n    \n        <br/><br/>\n    \n        <h1 #about id=\"about\" style=\"font-size: 30px\">about me</h1>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"block-text\">\n                    I am a Software Developer with 5 years commercial experience. I specialise in front-end web applications built with Angular.\n                    <br/><br/>\n                    I'm currently employed by YOPA working as a Javascript Developer. Before that I worked at FortressGB as a Full Stack Developer.\n                    <br/><br/>\n                    I also have a Computer Science Honours Degree. I studied at the University of Hertfordshire and Hertford Regional College in Hatfield/Ware.\n                    <br/><br/>\n                </div>\n            </div>\n        </div>\n    \n        <br/>\n    \n        <h1 #projects id=\"projects\" style=\"font-size: 30px\">projects</h1>\n        <br/>\n        <div class=\"row tiles\">\n            <div class=\"col-xs-6 col-md-6 col-lg-4 col-xl-3 tile\" (click)=\"openTile(i)\" *ngFor=\"let tile of tiles; let i = index;\" style=\"cursor:pointer\">\n                <div class=\"thumbnail\" [ngStyle]=\"{'background-image': 'url(' + tile.thumbnail + ')'}\">\n                    <!-- <div class=\"options btn-group\" ng-click=\"$event.stopPropagation();\" >\n                    <i class=\"fa fa-ellipsis-v fa-lg\" aria-hidden=\"true\"></i>\n                    <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\" style=\"padding-bottom:10px\">\n                        <li role=\"menuitem\"><a ng-click=\"openUrl(tile.url)\">Open in new tab</a></li>\n                        <li ng-if=\"tile.githuburl\" class=\"divider\"></li>\n                        <li ng-if=\"tile.githuburl\" role=\"menuitem\"><a ng-click=\"openUrl(tile.githuburl)\">View on GitHub</a></li>                  \n                        <li class=\"divider\"></li>\n                        <li role=\"menuitem\"><a ng-click=\"remove(1, $index)\">Hide this tile<span style=\"position:absolute; bottom:2px; right:30px; color:red; font-weight:bold; font-size:25px;\">&times;</span></a></li>\n                    </ul>\n                    </div> -->\n                </div>\n                <div class=\"info\">           \n                    <div class=\"title\">{{tile.title}}</div>\n                    <div style=\"font-size:10px; padding: 4px 3px;\">\n                        <span><img src=\"../assets/img/code_tag.png\" height=\"14px\" style=\"position: relative; top: -1px;\" /> {{tile.language}}</span>\n                        <br/>\n                        <span *ngIf=\"tile.githuburl\"><a [href]=\"tile.githuburl\">View on Github</a></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n        <br/>\n    \n        <h1 #contact id=\"contact\" style=\"font-size: 30px\">get in touch</h1>\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <div class=\"block-text\">\n                    Mobile: <span class=\"phone-number\">+44 7704 473 460</span>\n                    <br><br>\n                    Email: <a href=\"mailto:rich.wincott@gmail.com\">rich.wincott@gmail.com</a><br>\n                </div>\n            </div>\n        </div>\n    \n        <br/><br/><br/><br/>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-viewer/project-viewer.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-viewer/project-viewer.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button [routerLink]=\"['']\" class=\"btn btn-dark\">Back</button>\n<iframe #iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(tile.url)\" frameborder=\"0\"></iframe>");
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
            /* harmony import */ var _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project-viewer/project-viewer.component */ "./src/app/components/project-viewer/project-viewer.component.ts");
            /* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
            var routes = [
                {
                    path: '',
                    component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
                },
                {
                    path: 'viewer/:id',
                    component: _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ProjectViewerComponent"]
                }
            ];
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
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
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
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.toggleMenu = false;
                    this.scrollTop = 0;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.currentYear = new Date().getFullYear().toString();
                    // VERY HACKY TEMP SOLUTION TO STYLE .SIDEBAR::BEFORE BACKGROUND-POSITION-X
                    var style = document.createElement('style');
                    style.setAttribute('id', 'skjdfjhsk');
                    style.innerHTML = '.sidebar::before { background-position-x: -242px }';
                    document.head.appendChild(style);
                    window.addEventListener('scroll', function (event) {
                        var scrollTop = event.target.scrollingElement.scrollTop;
                        var finalValue = '-' + (242 - (scrollTop / 80)) + 'px';
                        var style = document.querySelector('#skjdfjhsk');
                        style.innerHTML = '.sidebar::before { background-position-x: ' + finalValue + ' }';
                    });
                };
                AppComponent.prototype.gotoAnchorTag = function (event, name) {
                    event.preventDefault();
                    this.toggleMenu = false;
                    var $element = document.querySelector('#' + name);
                    if (!$element) {
                        this.router.navigate(['']).then(function () {
                            setTimeout(function () {
                                $element = document.querySelector('#' + name);
                                $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                            }, 100);
                        });
                    }
                    else {
                        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    }
                    //window.location.href = '/#' + tag;
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
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
            /* harmony import */ var _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-viewer/project-viewer.component */ "./src/app/components/project-viewer/project-viewer.component.ts");
            /* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
            /* harmony import */ var _services_tile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/tile.service */ "./src/app/services/tile.service.ts");
            /* harmony import */ var _services_skill_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/skill.service */ "./src/app/services/skill.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ProjectViewerComponent"],
                        _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                    ],
                    providers: [
                        _services_skill_service__WEBPACK_IMPORTED_MODULE_8__["SkillService"],
                        _services_tile_service__WEBPACK_IMPORTED_MODULE_7__["TileService"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/index/index.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/components/index/index.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/index/index.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/index/index.component.ts ***!
          \*****************************************************/
        /*! exports provided: IndexComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function () { return IndexComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tile.service */ "./src/app/services/tile.service.ts");
            /* harmony import */ var src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/skill.service */ "./src/app/services/skill.service.ts");
            var IndexComponent = /** @class */ (function () {
                function IndexComponent(router, tileService, skillService) {
                    this.router = router;
                    this.tileService = tileService;
                    this.skillService = skillService;
                }
                Object.defineProperty(IndexComponent.prototype, "tiles", {
                    get: function () {
                        return this.tileService.tiles;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(IndexComponent.prototype, "skils", {
                    get: function () {
                        return this.skillService.skils;
                    },
                    enumerable: true,
                    configurable: true
                });
                IndexComponent.prototype.ngOnInit = function () {
                };
                IndexComponent.prototype.openTile = function (index) {
                    //window.open(tile.url, '_blank');
                    this.router.navigate(['/viewer', index]);
                };
                IndexComponent.prototype.gotoAnchorTag = function (event, $element) {
                    event.preventDefault();
                    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    //window.location.href = '/#' + tag;
                };
                return IndexComponent;
            }());
            IndexComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__["TileService"] },
                { type: src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__["SkillService"] }
            ]; };
            IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-index',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/components/index/index.component.scss")).default]
                })
            ], IndexComponent);
            /***/ 
        }),
        /***/ "./src/app/components/project-viewer/project-viewer.component.scss": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/project-viewer/project-viewer.component.scss ***!
          \*************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("button {\n  position: absolute;\n  top: 32px;\n  left: -106px;\n  z-index: 100;\n}\n@media (max-width: 767px) {\n  button {\n    display: none;\n  }\n}\niframe {\n  display: block;\n  height: 100vh;\n  width: 100%;\n  background: url('loading.gif') center center no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXZpZXdlci9DOlxcUHJvamVjdHNcXHJpY2hhcmR3aW5jb3R0LmNvLnVrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXZpZXdlclxccHJvamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC12aWV3ZXIvcHJvamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0hKO0FESkk7RUFESjtJQUVRLGFBQUE7RUNPTjtBQUNGO0FEQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXZpZXdlci9wcm9qZWN0LXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzJweDtcclxuICAgIGxlZnQ6IC0xMDZweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuaWZyYW1lIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xvYWRpbmcuZ2lmJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbn0iLCJidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzJweDtcbiAgbGVmdDogLTEwNnB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbmlmcmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2FkaW5nLmdpZlwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/project-viewer/project-viewer.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/project-viewer/project-viewer.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ProjectViewerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewerComponent", function () { return ProjectViewerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tile.service */ "./src/app/services/tile.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            var ProjectViewerComponent = /** @class */ (function () {
                function ProjectViewerComponent(route, tileService, sanitizer) {
                    this.route = route;
                    this.tileService = tileService;
                    this.sanitizer = sanitizer;
                }
                Object.defineProperty(ProjectViewerComponent.prototype, "tiles", {
                    get: function () {
                        return this.tileService.tiles;
                    },
                    enumerable: true,
                    configurable: true
                });
                ProjectViewerComponent.prototype.ngOnInit = function () {
                    var id = this.route.snapshot.paramMap.get('id');
                    this.tile = this.tiles[id];
                };
                return ProjectViewerComponent;
            }());
            ProjectViewerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__["TileService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
            ]; };
            ProjectViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-project-viewer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-viewer/project-viewer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-viewer.component.scss */ "./src/app/components/project-viewer/project-viewer.component.scss")).default]
                })
            ], ProjectViewerComponent);
            /***/ 
        }),
        /***/ "./src/app/services/skill.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/skill.service.ts ***!
          \*******************************************/
        /*! exports provided: SkillService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function () { return SkillService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SkillService = /** @class */ (function () {
                function SkillService() {
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
                }
                return SkillService;
            }());
            SkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SkillService);
            /***/ 
        }),
        /***/ "./src/app/services/tile.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/tile.service.ts ***!
          \******************************************/
        /*! exports provided: TileService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileService", function () { return TileService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TileService = /** @class */ (function () {
                function TileService() {
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
                }
                return TileService;
            }());
            TileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TileService);
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