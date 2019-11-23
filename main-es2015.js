(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <section class=\"panel sidebar\">\n\n      <div class=\"toggle d-sm-block d-md-none\" [ngClass]=\"{'expand': toggleMenu}\" (click)=\"toggleMenu=!toggleMenu\">\n        <ul class=\"hamburger list-unstyled\" [ngClass]=\"{'open': toggleMenu}\">\n          <li></li>\n          <li></li>\n          <li></li>\n          <li></li>\n        </ul>\n      </div>\n\n      <img class=\"profile-picture\" src=\"../assets/img/profile.jpg\" />\n      <p>Hi There, I'm</p>\n      <h1>Richard Wincott</h1>\n      <p>Senior front-end developer specialising in <br/>Angular and Javascript applications.</p>\n\n      <nav [ngClass]=\"{'show': toggleMenu}\">\n        <ul class=\"list-unstyled\">\n          <li class=\"social git\">\n            <a href=\"https://github.com/richwincott\" target=\"_blank\"><i class=\"fa fa-github-alt fa-lg\" aria-hidden=\"true\"></i></a>\n          </li>\n          <li class=\"social facebook\">\n            <a href=\"https://www.facebook.com/rich.wincott\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i></a>\n          </li>\n          <li class=\"social linkedin\">\n            <a href=\"https://www.linkedin.com/in/richard-wincott-91040b134\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i></a>\n          </li> \n        </ul>\n\n        <ul class=\"list-unstyled\">\n          <li class=\"nav-item\">\n            <a href=\"#skills\" (click)=\"gotoAnchorTag('skills')\">my skills</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#about\" (click)=\"gotoAnchorTag('about')\">about me</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"#projects\" (click)=\"gotoAnchorTag('projects')\">projects</a>\n          </li> \n        </ul>\n\n        <div class=\"footer\">\n          Designed and created by Richard Wincott<br/>\n          richardwincott.co.uk &copy; 2019 \n        </div>\n      </nav>  \n\n    </section>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <section class=\"content\">\n\n      <div class=\"container\">\n        <br/><br/>\n\n        <h1 id=\"skills\" style=\"font-size: 30px\">my skills</h1>\n        <br/>\n        <div class=\"icons\">\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/angular.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/typescript.png\" />\n              <br/>AngularJS v1.6 with Typescript\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/react.png\" />\n              <br/>React, React Native\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/webpack.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/gulp.png\" />\n              <br/>Webpack, Gulp\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/karma.png\" />\n              <br/>Jasmine, Karma\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/node_alt.png\" />\n              <br/>Node.JS, Express, Socket.IO\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/git.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/npm.png\" />\n              <br/>Github, NPM\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/database.png\" />\n              <br/>MongoDB, MySQL\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/vscode.png\" />\n              <br/>Visual Studio Code\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/csharp.png\" />\n              <br/>ASP.Net C#\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/php.png\" />\n              <br/>WordPress, PHP\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/p5.png\" />\n              <br/>p5.js\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n              <img class=\"icon\" src=\"../assets/img/icons/conduct.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/cake.png\" />\n              <br/>Management, Teamwork, Client Relations\n            </div>\n          </div>\n        </div>\n        \n        <br/><br/>\n        \n        <h1 id=\"about\" style=\"font-size: 30px\">about me</h1>\n        <div class=\"row\">\n          <div class=\"col-xs-12\">\n            <div class=\"about-me\">\n              I am a Computer Science Graduate with an Honours Degree. I studied at the University of Hertfordshire and Hertford Regional College in Ware.\n              <br/><br/>\n              I'm currently employed by YOPA working as a Software Developer. I specialise in front-end web applications built with Angular.\n              <br/><br/>\n              Before that I worked at FortressGB as a Software Developer. I also worked in their IT support department.\n              <br/><br/>\n            </div>\n          </div>\n        </div>\n        \n        <br/><br/>\n        \n        <h1 id=\"projects\" style=\"font-size: 30px\">projects</h1>\n        <br/>\n        <div class=\"row tiles\">\n          <div class=\"col-xs-6 col-md-6 col-lg-4 col-xl-3 tile\" ng-click=\"changeUrl('#/1/' + $index)\" *ngFor=\"let tile of tiles\" style=\"cursor:pointer\">\n            <div class=\"thumbnail\" [ngStyle]=\"{'background-image': 'url(' + tile.thumbnail + ')'}\">\n              <div class=\"options btn-group\" ng-click=\"$event.stopPropagation();\" >\n                <i class=\"fa fa-ellipsis-v fa-lg\" aria-hidden=\"true\"></i>\n                <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\" style=\"padding-bottom:10px\">\n                    <li role=\"menuitem\"><a ng-click=\"openUrl(tile.url)\">Open in new tab</a></li>\n                    <li ng-if=\"tile.githuburl\" class=\"divider\"></li>\n                    <li ng-if=\"tile.githuburl\" role=\"menuitem\"><a ng-click=\"openUrl(tile.githuburl)\">View on GitHub</a></li>                  \n                    <li class=\"divider\"></li>\n                    <li role=\"menuitem\"><a ng-click=\"remove(1, $index)\">Hide this tile<span style=\"position:absolute; bottom:2px; right:30px; color:red; font-weight:bold; font-size:25px;\">&times;</span></a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"info\">           \n              {{tile.title}}<br/>\n              <span style=\"font-size:10px;\">Status: {{tile.status}} | Type: {{tile.type}}</span>\n            </div>\n          </div>\n        </div>\n  \n        <br/><br/><br/><br/>\n      </div>\n\n    </section>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-top: 40px;\n}\n\nsection {\n  padding: 40px 25px;\n}\n\n@media (max-width: 767px) {\n  section {\n    padding: 20px 10px;\n  }\n}\n\n.sidebar {\n  text-align: center;\n  background-color: #222;\n  color: #f8f8f8;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    width: 370px;\n    z-index: 100;\n    box-shadow: 0px 0px 5px #444;\n  }\n}\n\n.sidebar h1 {\n  padding-top: 25px;\n}\n\n.sidebar .profile-picture {\n  border-radius: 50%;\n  height: 132px;\n  width: 122px;\n  margin: 40px 0px;\n}\n\n.sidebar .social {\n  display: inline-block;\n  font-size: 20px;\n  margin: 30px 10px 10px;\n}\n\n.sidebar .social a {\n  display: block;\n  color: #f8f8f8;\n  padding: 12px 20px;\n  transition: all 0.2 ease-in-out;\n}\n\n.sidebar .social.git a:hover {\n  color: #f08080 !important;\n}\n\n.sidebar .social.facebook a:hover {\n  color: #90ee90 !important;\n}\n\n.sidebar .social.linkedin a:hover {\n  color: #87cefa !important;\n}\n\n.sidebar .nav-item {\n  padding: 8px 0px;\n}\n\n.sidebar .nav-item a {\n  display: block;\n  color: #f8f8f8;\n  padding: 8px 20px;\n  text-decoration: none;\n  font-size: 18px;\n}\n\n.content {\n  height: 100vh;\n  background-color: #f8f8f8;\n  color: #222;\n}\n\n@media (min-width: 1400px) {\n  .content {\n    padding-right: 80px;\n  }\n}\n\n@media (min-width: 768px) {\n  .content {\n    position: relative;\n    left: 370px;\n    width: calc(100% - 370px);\n  }\n}\n\n.content .icon-container {\n  padding: 20px 20px 30px;\n}\n\n.content .icon-container .icon {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  border-radius: 4px;\n  margin: 5px;\n}\n\n.content .about-me {\n  padding: 20px 30px;\n}\n\n.content .tiles {\n  padding: 20px 0px;\n}\n\n.content .tiles .tile {\n  margin: 35px 0px;\n  width: auto !important;\n}\n\n.content .tiles .tile .thumbnail {\n  width: 180px;\n  height: 150px;\n  background-repeat: none;\n  background-position: center center;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.content .tiles .tile .thumbnail .options {\n  position: absolute;\n  top: 10px;\n  left: 205px;\n  color: #666;\n}\n\n.content .tiles .tile .info {\n  background-color: #fff;\n  width: 180px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  padding: 4px 6px;\n}\n\n.footer {\n  font-size: 12px;\n  position: absolute;\n  bottom: 60px;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    width: calc(100% - 50px);\n  }\n}\n\n.toggle {\n  position: fixed;\n  width: 30%;\n  padding: 15px 28px;\n  top: 0px;\n  right: 0px;\n  z-index: 499;\n  color: #999;\n  text-align: center;\n  font-size: 20px;\n  border-bottom-left-radius: 20px;\n  -webkit-filter: brightness(200%);\n          filter: brightness(200%);\n  cursor: pointer;\n}\n\n.toggle.expand {\n  height: 100%;\n  border-bottom-left-radius: 0px;\n}\n\n@media (max-width: 768px) {\n  nav {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: -70%;\n    background-color: rgba(0, 0, 0, 0.94);\n    height: 100% !important;\n    width: 70% !important;\n    padding: 20px 0px !important;\n    overflow: hidden;\n    z-index: 500;\n    transition: all 200ms ease;\n  }\n  nav.show {\n    left: 0%;\n    transition: all 200ms ease;\n  }\n}\n\n.hamburger {\n  position: relative;\n  top: 5px;\n  width: 40px;\n  margin: 0px auto;\n}\n\n.hamburger li {\n  position: relative;\n  width: 100%;\n  max-width: 34px;\n  height: 3px;\n  margin: 8px auto;\n  background-color: white;\n  box-shadow: 0px 0px 10px #555;\n  opacity: 0.95;\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  border-radius: 2px;\n}\n\n.hamburger.open li:nth-child(1), .hamburger.open li:nth-child(4) {\n  opacity: 0;\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n.hamburger.open li:nth-child(2) {\n  transform: rotate(45deg);\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  z-index: 200;\n}\n\n.hamburger li:nth-child(3) {\n  position: absolute;\n  top: 3px;\n  left: 50%;\n  margin-left: -17px;\n}\n\n.hamburger.open li:nth-child(3) {\n  transform: rotate(-45deg);\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  z-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxyaWNoYXJkd2luY290dC5jby51ay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxQcm9qZWN0c1xccmljaGFyZHdpbmNvdHQuY28udWsvc3JjXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFLSSxrQkFBQTtBQ0xKOztBRENJO0VBREo7SUFFUSxrQkFBQTtFQ0VOO0FBQ0Y7O0FER0E7RUFXSSxrQkFBQTtFQUNBLHNCRXZCa0I7RUZ3QmxCLGNFdkJrQjtBRGF0Qjs7QURGSTtFQURKO0lBRVEsZUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsNEJBQUE7RUNLTjtBQUNGOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNEUjs7QURHUTtFQUNJLGNBQUE7RUFDQSxjRTNDVTtFRjRDVixrQkFBQTtFQUNBLCtCQUFBO0FDRFo7O0FESVE7RUFDSSx5QkFBQTtBQ0ZaOztBREtRO0VBQ0kseUJBQUE7QUNIWjs7QURNUTtFQUNJLHlCQUFBO0FDSlo7O0FEUUk7RUFDSSxnQkFBQTtBQ05SOztBRFFRO0VBQ0ksY0FBQTtFQUNBLGNFbEVVO0VGbUVWLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDTlo7O0FEV0E7RUFXSSxhQUFBO0VBQ0EseUJFMUZrQjtFRjJGbEIsV0UxRmtCO0FEd0V0Qjs7QURNSTtFQURKO0lBRVEsbUJBQUE7RUNITjtBQUNGOztBREtJO0VBTEo7SUFNUSxrQkFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtFQ0ZOO0FBQ0Y7O0FEUUk7RUFDSSx1QkFBQTtBQ05SOztBRFFRO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ05aOztBRFVJO0VBQ0ksa0JBQUE7QUNSUjs7QURXSTtFQUNJLGlCQUFBO0FDVFI7O0FEV1E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FDVFo7O0FEV1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDVGhCOztBRFdnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDVHBCOztBRGFZO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDWGhCOztBRGlCQTtFQUtJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEWUk7RUFESjtJQUVRLHdCQUFBO0VDVE47QUFDRjs7QURvQkE7RUFDQyxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGVBQUE7QUNqQko7O0FEbUJJO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0FDakJSOztBRHNCSTtFQURKO0lBRVEsY0FBQTtJQUNBLGVBQUE7SUFDQSxRQUFBO0lBQ0EsVUFBQTtJQUNBLHFDQUFBO0lBQ0EsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsMEJBQUE7RUNsQk47RURvQk07SUFDSSxRQUFBO0lBQ0EsMEJBQUE7RUNsQlY7QUFDRjs7QURzQkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNuQko7O0FEcUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNuQlI7O0FEc0JBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDSCxtQkFBQTtFQUNHLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ25CSjs7QURxQkE7RUFLSSx3QkFBQTtFQUNBLGVBQUE7RUFDSCxtQkFBQTtFQUNHLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNILFlBQUE7QUNsQkQ7O0FEb0JBO0VBQ0Msa0JBQUE7RUFDQSxRQUFBO0VBQ0csU0FBQTtFQUNBLGtCQUFBO0FDakJKOztBRG1CQTtFQUtJLHlCQUFBO0VBQ0EsZUFBQTtFQUNILG1CQUFBO0VBQ0csb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0gsWUFBQTtBQ2hCRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vLi4vY29sb3JzLnNjc3MnO1xyXG5cclxuaDEge1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHBhZGRpbmc6IDQwcHggMjVweDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAzNzBweDtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzQ0NDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1iYWNrZ3JvdW5kO1xyXG4gICAgY29sb3I6ICRkYXJrLXRleHQ7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzJweDtcclxuICAgICAgICB3aWR0aDogMTIycHg7XHJcbiAgICAgICAgbWFyZ2luOiA0MHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAxMHB4IDEwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICRkYXJrLXRleHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5naXQgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmMDgwODAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuZmFjZWJvb2sgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiM5MGVlOTAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYubGlua2VkaW4gYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiM4N2NlZmEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay10ZXh0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDM3MHB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNzBweCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYmFja2dyb3VuZDtcclxuICAgIGNvbG9yOiAkbGlnaHQtdGV4dDtcclxuXHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAzMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1tZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aWxlcyB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcblxyXG4gICAgICAgIC50aWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAzNXB4IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIG9sZCBzdHVmZiBuZWVkcyByZWZhY3RvclxyXG5cclxuLnRvZ2dsZSB7XHJcblx0cG9zaXRpb246Zml4ZWQ7XHJcblx0d2lkdGg6MzAlO1xyXG5cdHBhZGRpbmc6MTVweCAyOHB4O1xyXG5cdHRvcDowcHg7XHJcblx0cmlnaHQ6MHB4O1xyXG4gICAgei1pbmRleDo0OTk7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcclxuICAgIGZpbHRlcjpicmlnaHRuZXNzKDIwMCUpO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBcclxuICAgICYuZXhwYW5kIHtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjBweDtcclxuICAgIH1cclxufVxyXG5cclxubmF2IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgICBsZWZ0Oi03MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLCAwLjk0KTtcclxuICAgICAgICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOjcwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6MjBweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDo1MDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5zaG93IHtcclxuICAgICAgICAgICAgbGVmdDowJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGFtYnVyZ2VyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjVweDtcclxuICAgIHdpZHRoOjQwcHg7XHJcbiAgICBtYXJnaW46MHB4IGF1dG87XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOjM0cHg7XHJcbiAgICAgICAgaGVpZ2h0OjNweDtcclxuICAgICAgICBtYXJnaW46OHB4IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OjBweCAwcHggMTBweCAjNTU1O1xyXG4gICAgICAgIG9wYWNpdHk6MC45NTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMztcclxuICAgICAgICAtby10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbn1cclxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgxKSwgLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICB0cmFuc2l0aW9uOiAuMztcclxuXHQtby10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxufVxyXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDIpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogLjM7XHJcblx0LW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcblx0ei1pbmRleDoyMDA7XHJcbn1cclxuLmhhbWJ1cmdlciBsaTpudGgtY2hpbGQoMykge1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDozcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE3cHg7XHJcbn1cclxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgzKSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgdHJhbnNpdGlvbjogLjM7XHJcblx0LW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XHJcblx0ei1pbmRleDoyMDA7XHJcbn0iLCJoMSB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogNDBweCAyNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgfVxufVxuXG4uc2lkZWJhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgY29sb3I6ICNmOGY4Zjg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM0NDQ7XG4gIH1cbn1cbi5zaWRlYmFyIGgxIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uc2lkZWJhciAucHJvZmlsZS1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEzMnB4O1xuICB3aWR0aDogMTIycHg7XG4gIG1hcmdpbjogNDBweCAwcHg7XG59XG4uc2lkZWJhciAuc29jaWFsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbjogMzBweCAxMHB4IDEwcHg7XG59XG4uc2lkZWJhciAuc29jaWFsIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMiBlYXNlLWluLW91dDtcbn1cbi5zaWRlYmFyIC5zb2NpYWwuZ2l0IGE6aG92ZXIge1xuICBjb2xvcjogI2YwODA4MCAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLnNvY2lhbC5mYWNlYm9vayBhOmhvdmVyIHtcbiAgY29sb3I6ICM5MGVlOTAgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5zb2NpYWwubGlua2VkaW4gYTpob3ZlciB7XG4gIGNvbG9yOiAjODdjZWZhICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAubmF2LWl0ZW0ge1xuICBwYWRkaW5nOiA4cHggMHB4O1xufVxuLnNpZGViYXIgLm5hdi1pdGVtIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBjb2xvcjogIzIyMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDM3MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNzBweCk7XG4gIH1cbn1cbi5jb250ZW50IC5pY29uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCAzMHB4O1xufVxuLmNvbnRlbnQgLmljb24tY29udGFpbmVyIC5pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGVudCAuYWJvdXQtbWUge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uY29udGVudCAudGlsZXMge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSB7XG4gIG1hcmdpbjogMzVweCAwcHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uY29udGVudCAudGlsZXMgLnRpbGUgLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSAudGh1bWJuYWlsIC5vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDIwNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSAuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxODBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHggNnB4O1xufVxuXG4uZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNjBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XG4gIH1cbn1cblxuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTVweCAyOHB4O1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgei1pbmRleDogNDk5O1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyMDAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvZ2dsZS5leHBhbmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIG5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IC03MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk0KTtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweCAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgfVxuICBuYXYuc2hvdyB7XG4gICAgbGVmdDogMCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2U7XG4gIH1cbn1cblxuLmhhbWJ1cmdlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmhhbWJ1cmdlciBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogOHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzU1NTtcbiAgb3BhY2l0eTogMC45NTtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgxKSwgLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCg0KSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDIpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLmhhbWJ1cmdlciBsaTpudGgtY2hpbGQoMykge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTdweDtcbn1cblxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIHotaW5kZXg6IDIwMDtcbn0iLCIkbGlnaHQtYmFja2dyb3VuZCAgIDogI2Y4ZjhmODtcclxuJGxpZ2h0LXRleHQgICAgICAgICA6ICMyMjI7XHJcblxyXG4kZGFyay1iYWNrZ3JvdW5kICAgIDogIzIyMjtcclxuJGRhcmstdGV4dCAgICAgICAgICA6ICNmOGY4Zjg7Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.toggleMenu = false;
    }
    ngOnInit() {
        this.tiles = [
            {
                "title": "Emoji Jump",
                "thumbnail": "../assets/img/mw27.jpg",
                "status": "Ongoing",
                "type": "Personal",
                "url": "https://repentantsandykernel--richardwincott.repl.co/"
            },
            {
                "title": "USBMusic (React)",
                "thumbnail": "../assets/img/mw26.jpg",
                "status": "Complete",
                "type": "Personal",
                "url": "http://dev.richardwincott.co.uk/usbmusic",
                "githuburl": "https://github.com/richwincott/usbmusic"
            },
            {
                "title": "Chat",
                "thumbnail": "../assets/img/mw25.jpg",
                "status": "Ongoing",
                "type": "Demo",
                "url": "http://dev.richardwincott.co.uk:8181"
            },
            {
                "title": "Spikes",
                "thumbnail": "../assets/img/mw24.jpg",
                "status": "Complete",
                "type": "Game",
                "url": "http://dev.richardwincott.co.uk:8282",
                "githuburl": "https://github.com/richwincott/spikes"
            },
            {
                "title": "Mario",
                "thumbnail": "../assets/img/mw23.jpg",
                "status": "Ongoing",
                "type": "Game",
                "url": "http://dev.richardwincott.co.uk/mario",
                "githuburl": "https://github.com/richwincott/mario"
            },
            {
                "title": "Login Demo C#",
                "thumbnail": "../assets/img/mw22.jpg",
                "status": "Complete",
                "type": "Demo",
                "url": "http://dev.richardwincott.co.uk/shop"
            },
            {
                "title": "Blackhawks Dashboard",
                "thumbnail": "../assets/img/mw21.jpg",
                "status": "Employment",
                "type": "Work",
                "url": "assets/img/blackhawks-dashboard-1.jpg"
            },
            {
                "title": "FortressGB Website",
                "thumbnail": "../assets/img/mw20.jpg",
                "status": "Employment",
                "type": "Work",
                "url": "http://www.fortressgb.com/"
            },
            {
                "title": "Friends of Pishiobury",
                "thumbnail": "../assets/img/mw1.jpg",
                "status": "Ongoing",
                "type": "Work",
                "url": "http://www.friendsofpishioburypark.co.uk/"
            },
            {
                "title": "EDF Energy Internship",
                "thumbnail": "../assets/img/mw0.jpg",
                "status": "Complete",
                "type": "Work",
                "url": "http://dev.richardwincott.co.uk/projects/portfolio"
            },
            {
                "title": "Parallax Demo",
                "thumbnail": "../assets/img/mw15.jpg",
                "status": "Complete",
                "type": "Demo",
                "url": "http://dev.richardwincott.co.uk/projects/parallax"
            },
            {
                "title": "WordPress Site",
                "thumbnail": "../assets/img/mw16.jpg",
                "status": "N/A",
                "type": "Development",
                "url": "http://dev.richardwincott.co.uk/wordpress"
            }
        ];
    }
    gotoAnchorTag(tag) {
        this.toggleMenu = false;
        window.location.href = '/#' + tag;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
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



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\richardwincott.co.uk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map