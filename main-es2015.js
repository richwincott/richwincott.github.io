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
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"panel sidebar\">\n\n  <div class=\"toggle d-sm-block d-md-none\" [ngClass]=\"{'expand': toggleMenu}\" (click)=\"toggleMenu=!toggleMenu\">\n    <ul class=\"hamburger list-unstyled\" [ngClass]=\"{'open': toggleMenu}\">\n      <li></li>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n\n  <div class=\"rocket\">\n    R <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n  </div>\n\n  <img class=\"profile-picture\" src=\"../assets/img/profile.jpg\" />\n  <p>Hi there, I'm</p>\n  <h1>Richard Wincott</h1>\n  <p class=\"tagline\">Senior front-end developer specialising in <br/>Angular and Javascript applications.</p>\n\n  <nav [ngClass]=\"{'show': toggleMenu}\">\n    <ul class=\"list-unstyled\">\n      <li class=\"social git\">\n        <a href=\"https://github.com/richwincott\" target=\"_blank\"><i class=\"fa fa-github-alt fa-lg\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"social facebook\">\n        <a href=\"https://www.facebook.com/rich.wincott\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"social linkedin\">\n        <a href=\"https://www.linkedin.com/in/richard-wincott-91040b134\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i></a>\n      </li> \n    </ul>\n\n    <ul class=\"list-unstyled\">\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, skills)\">my skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, about)\">about me</a>\n      </li>\n      <li class=\"nav-item\">\n        <a href (click)=\"gotoAnchorTag($event, projects)\">projects</a>\n      </li> \n    </ul>\n\n    <div class=\"footer\">\n      Designed and created by Richard Wincott<br/>\n      richardwincott.co.uk &copy; 2019 \n    </div>\n  </nav>  \n\n</section>\n\n\n\n<section class=\"content\">\n\n  <div class=\"container\">\n    <br/><br/>\n\n    <div class=\"say-hello\">\n      <a href (click)=\"gotoAnchorTag($event, contact)\">\n        Say hello! <img src=\"../assets/img/wave_large.png\" height=\"22px\" />\n      </a>\n    </div>\n\n    <div class=\"col-xs-12 welcome-text\">\n        Welcome to my personal website and online portfolio...\n        <hr/>\n    </div>\n\n    <br/><br/>\n\n    <h1 #skills id=\"skills\" style=\"font-size: 30px\">my skills</h1>\n    <br/>\n    <div class=\"icons\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/angular.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/typescript.png\" />\n          <br/>AngularJS v1.6 with Typescript\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/react.png\" />\n          <br/>React, React Native\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/webpack.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/gulp.png\" />\n          <br/>Webpack, Gulp\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/karma.png\" />\n          <br/>Jasmine, Karma\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/node_alt.png\" />\n          <br/>Node.JS, Express, Socket.IO\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/git.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/npm.png\" />\n          <br/>Github, NPM\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/database.png\" />\n          <br/>MongoDB, MySQL\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/vscode.png\" />\n          <br/>Visual Studio Code\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/csharp.png\" />\n          <br/>ASP.Net C#\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/php.png\" />\n          <br/>WordPress, PHP\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/p5.png\" />\n          <br/>p5.js\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 icon-container\">\n          <img class=\"icon\" src=\"../assets/img/icons/conduct.png\" />&nbsp;<img class=\"icon\" src=\"../assets/img/icons/cake.png\" />\n          <br/>Management, Teamwork, Client Relations\n        </div>\n      </div>\n    </div>\n    \n    <br/><br/>\n    \n    <h1 #about id=\"about\" style=\"font-size: 30px\">about me</h1>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"block-text\">\n          I am a Computer Science Graduate with an Honours Degree. I studied at the University of Hertfordshire and Hertford Regional College in Ware.\n          <br/><br/>\n          I'm currently employed by YOPA working as a Software Developer. I specialise in front-end web applications built with Angular.\n          <br/><br/>\n          Before that I worked at FortressGB as a Software Developer. I also worked in their IT support department.\n          <br/><br/>\n        </div>\n      </div>\n    </div>\n    \n    <br/><br/>\n    \n    <h1 #projects id=\"projects\" style=\"font-size: 30px\">projects</h1>\n    <br/>\n    <div class=\"row tiles\">\n      <div class=\"col-xs-6 col-md-6 col-lg-4 col-xl-3 tile\" (click)=\"openTile(tile)\" *ngFor=\"let tile of tiles\" style=\"cursor:pointer\">\n        <div class=\"thumbnail\" [ngStyle]=\"{'background-image': 'url(' + tile.thumbnail + ')'}\">\n          <!-- <div class=\"options btn-group\" ng-click=\"$event.stopPropagation();\" >\n            <i class=\"fa fa-ellipsis-v fa-lg\" aria-hidden=\"true\"></i>\n            <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\" style=\"padding-bottom:10px\">\n                <li role=\"menuitem\"><a ng-click=\"openUrl(tile.url)\">Open in new tab</a></li>\n                <li ng-if=\"tile.githuburl\" class=\"divider\"></li>\n                <li ng-if=\"tile.githuburl\" role=\"menuitem\"><a ng-click=\"openUrl(tile.githuburl)\">View on GitHub</a></li>                  \n                <li class=\"divider\"></li>\n                <li role=\"menuitem\"><a ng-click=\"remove(1, $index)\">Hide this tile<span style=\"position:absolute; bottom:2px; right:30px; color:red; font-weight:bold; font-size:25px;\">&times;</span></a></li>\n            </ul>\n          </div> -->\n        </div>\n        <div class=\"info\">           \n          <div class=\"title\">{{tile.title}}</div>\n          <div style=\"font-size:10px; padding: 4px 6px;\">\n            <span><img src=\"../assets/img/code_tag.png\" height=\"19px\" style=\"position: relative; top: -1px;\" /> {{tile.language}}</span>\n            <br/>\n            <span *ngIf=\"tile.githuburl\">GitHub: <a [href]=\"tile.githuburl\">View</a></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br/><br/>\n\n    <h1 #contact id=\"contact\" style=\"font-size: 30px\">get in touch</h1>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <div class=\"block-text\">\n          Mobile: <span class=\"phone-number\">+44 7704 473 460</span>\n          <br><br>\n          Email: <a href=\"mailto:rich.wincott@gmail.com\">rich.wincott@gmail.com</a><br>\n        </div>\n      </div>\n    </div>\n\n    <br/><br/><br/><br/>\n  </div>\n\n</section>");

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
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-top: 40px;\n}\n\nsection {\n  padding: 40px 25px;\n}\n\n@media (max-width: 767px) {\n  section {\n    padding: 40px 10px 20px;\n  }\n}\n\n.sidebar {\n  text-align: center;\n  background-color: #010D5F;\n  background-image: url('nightsky_fade.jpg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  color: #f8f8f8;\n  padding: 40px 15px;\n}\n\n@media (min-width: 768px) {\n  .sidebar {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100vh;\n    width: 370px;\n    z-index: 100;\n    box-shadow: 0px 0px 5px #444;\n  }\n}\n\n.sidebar h1 {\n  padding-top: 5px;\n}\n\n.sidebar .rocket {\n  display: inline-block;\n  position: absolute;\n  left: 40px;\n  top: 30px;\n  font-weight: bold;\n  font-size: 28px;\n  font-family: \"Fredoka One\", cursive;\n  color: #f4f4f4;\n  width: auto;\n}\n\n.sidebar .profile-picture {\n  border-radius: 50%;\n  height: 132px;\n  width: 122px;\n  margin: 65px 0px 30px;\n  border: 2px solid #f8f8f8;\n}\n\n.sidebar .tagline {\n  line-height: 1.8rem;\n}\n\n.sidebar .social {\n  display: inline-block;\n  font-size: 20px;\n  margin: 10px 10px;\n}\n\n.sidebar .social a {\n  display: block;\n  color: #f8f8f8;\n  padding: 12px 20px;\n  transition: all 0.2 ease-in-out;\n}\n\n.sidebar .social.git a:hover {\n  color: #f08080 !important;\n}\n\n.sidebar .social.facebook a:hover {\n  color: #90ee90 !important;\n}\n\n.sidebar .social.linkedin a:hover {\n  color: #87cefa !important;\n}\n\n.sidebar .nav-item {\n  padding: 8px 0px;\n}\n\n.sidebar .nav-item a {\n  display: block;\n  color: #dedede;\n  padding: 8px 20px;\n  text-decoration: none;\n  font-size: 18px;\n}\n\n.sidebar .nav-item a:hover {\n  color: #fff;\n}\n\n.content {\n  height: 100vh;\n  background-color: #f8f8f8;\n  color: #222;\n}\n\n@media (min-width: 1400px) {\n  .content {\n    padding-right: 80px;\n  }\n}\n\n@media (min-width: 768px) {\n  .content {\n    position: relative;\n    left: 370px;\n    width: calc(100% - 370px);\n  }\n}\n\n.content .icon-container {\n  padding: 20px 30px 30px;\n}\n\n.content .icon-container .icon {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n  border-radius: 4px;\n  margin: 5px;\n}\n\n.content .say-hello {\n  text-align: right;\n  position: relative;\n  top: -30px;\n}\n\n.content .say-hello a {\n  background-color: #0D1F6D;\n  padding: 10px 15px;\n  color: #f8f8f8;\n  font-weight: bold;\n  font-size: 18px;\n  width: auto;\n  border-radius: 4px;\n  text-decoration: none;\n}\n\n.content .say-hello a img {\n  margin-left: 10px;\n  position: relative;\n  top: -2px;\n}\n\n.content .phone-number {\n  font-size: 20px;\n  position: relative;\n  top: 2px;\n  left: 5px;\n}\n\n.content .welcome-text {\n  font-size: 20px;\n}\n\n.content .block-text {\n  padding: 20px 30px;\n}\n\n.content .tiles {\n  padding: 0px 20px;\n}\n\n.content .tiles .tile {\n  margin: 35px 0px;\n  width: auto !important;\n}\n\n.content .tiles .tile .thumbnail {\n  width: 180px;\n  height: 150px;\n  background-repeat: none;\n  background-position: center center;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.content .tiles .tile .thumbnail .options {\n  position: absolute;\n  top: 10px;\n  left: 205px;\n  color: #666;\n}\n\n.content .tiles .tile .info {\n  background-color: #fff;\n  width: 180px;\n  height: 78px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  line-height: 1.5rem;\n}\n\n.content .tiles .tile .info .title {\n  background-color: rgba(0, 0, 0, 0.06);\n  padding: 3px 6px;\n}\n\n.footer {\n  font-size: 12px;\n  position: absolute;\n  bottom: 45px;\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .footer {\n    width: calc(100% - 50px);\n  }\n}\n\n.toggle {\n  position: fixed;\n  width: 30%;\n  padding: 15px 28px;\n  top: 0px;\n  right: 0px;\n  z-index: 499;\n  color: #999;\n  text-align: center;\n  font-size: 20px;\n  border-bottom-left-radius: 20px;\n  -webkit-filter: brightness(200%);\n          filter: brightness(200%);\n  cursor: pointer;\n}\n\n.toggle.expand {\n  height: 100%;\n  border-bottom-left-radius: 0px;\n}\n\n@media (max-width: 768px) {\n  nav {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: -70%;\n    background-color: rgba(0, 0, 0, 0.94);\n    height: 100% !important;\n    width: 70% !important;\n    padding: 20px 0px !important;\n    overflow: hidden;\n    z-index: 500;\n    transition: all 200ms ease;\n  }\n  nav.show {\n    left: 0%;\n    transition: all 200ms ease;\n  }\n}\n\n.hamburger {\n  position: relative;\n  top: 16px;\n  width: 40px;\n  margin: 0px auto;\n}\n\n.hamburger li {\n  position: relative;\n  width: 100%;\n  max-width: 34px;\n  height: 3px;\n  margin: 8px auto;\n  background-color: white;\n  box-shadow: 0px 0px 10px #555;\n  opacity: 0.95;\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  border-radius: 2px;\n}\n\n.hamburger.open li:nth-child(1), .hamburger.open li:nth-child(4) {\n  opacity: 0;\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n}\n\n.hamburger.open li:nth-child(2) {\n  transform: rotate(45deg);\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  z-index: 200;\n}\n\n.hamburger li:nth-child(3) {\n  position: absolute;\n  top: 3px;\n  left: 50%;\n  margin-left: -17px;\n}\n\n.hamburger.open li:nth-child(3) {\n  transform: rotate(-45deg);\n  transition: 0.3;\n  -o-transition: 0.3s;\n  -ms-transition: 0.3s;\n  -moz-transition: 0.3s;\n  -webkit-transition: 0.3s;\n  z-index: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxyaWNoYXJkd2luY290dC5jby51ay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxQcm9qZWN0c1xccmljaGFyZHdpbmNvdHQuY28udWsvc3JjXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFLSSxrQkFBQTtBQ0xKOztBRENJO0VBREo7SUFFUSx1QkFBQTtFQ0VOO0FBQ0Y7O0FER0E7RUFXSSxrQkFBQTtFQUNBLHlCRXBCa0I7RUZxQnJCLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNHLGNFMUJrQjtFRjJCbEIsa0JBQUE7QUNWSjs7QUROSTtFQURKO0lBRVEsZUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsNEJBQUE7RUNTTjtBQUNGOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURFSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNBUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDRFI7O0FESUk7RUFDSSxtQkFBQTtBQ0ZSOztBREtJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURLUTtFQUNJLGNBQUE7RUFDQSxjRWhFVTtFRmlFVixrQkFBQTtFQUNBLCtCQUFBO0FDSFo7O0FETVE7RUFDSSx5QkFBQTtBQ0paOztBRE9RO0VBQ0kseUJBQUE7QUNMWjs7QURRUTtFQUNJLHlCQUFBO0FDTlo7O0FEVUk7RUFDSSxnQkFBQTtBQ1JSOztBRFVRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7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QUFBO0VBQ0Esd0JBQUE7RUFDSCxZQUFBO0FDekJEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi8uLi9jb2xvcnMuc2Nzcyc7XHJcblxyXG5oMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDEwcHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBwYWRkaW5nOiA0MHB4IDI1cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICM0NDQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtfYmx1ZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvbmlnaHRza3lfZmFkZS5qcGcnKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICAgIGNvbG9yOiAkZGFyay10ZXh0O1xyXG4gICAgcGFkZGluZzogNDBweCAxNXB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yb2NrZXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYSBPbmUnLCBjdXJzaXZlO1xyXG4gICAgICAgIGNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzJweDtcclxuICAgICAgICB3aWR0aDogMTIycHg7XHJcbiAgICAgICAgbWFyZ2luOiA2NXB4IDBweCAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmOGY4Zjg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhZ2xpbmUge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcmstdGV4dDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjIgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmdpdCBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6I2YwODA4MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5mYWNlYm9vayBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IzkwZWU5MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5saW5rZWRpbiBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6Izg3Y2VmYSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICNkZWRlZGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMzcwcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM3MHB4KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1iYWNrZ3JvdW5kO1xyXG4gICAgY29sb3I6ICRsaWdodC10ZXh0O1xyXG5cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDMwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNheS1oZWxsbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRlcl9ibHVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFya190ZXh0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBob25lLW51bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLndlbGNvbWUtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ibG9jay10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbGVzIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuXHJcbiAgICAgICAgLnRpbGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDM1cHggMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIH1cclxuXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDQ1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBvbGQgc3R1ZmYgbmVlZHMgcmVmYWN0b3JcclxuXHJcbi50b2dnbGUge1xyXG5cdHBvc2l0aW9uOmZpeGVkO1xyXG5cdHdpZHRoOjMwJTtcclxuXHRwYWRkaW5nOjE1cHggMjhweDtcclxuXHR0b3A6MHB4O1xyXG5cdHJpZ2h0OjBweDtcclxuICAgIHotaW5kZXg6NDk5O1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjIwcHg7XHJcbiAgICBmaWx0ZXI6YnJpZ2h0bmVzcygyMDAlKTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgXHJcbiAgICAmLmV4cGFuZCB7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgICAgIHRvcDowcHg7XHJcbiAgICAgICAgbGVmdDotNzAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwgMC45NCk7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDo3MCUgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOjIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgIHotaW5kZXg6NTAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICAgIGxlZnQ6MCU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmhhbWJ1cmdlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHRvcDoxNnB4O1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIG1hcmdpbjowcHggYXV0bztcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6MzRweDtcclxuICAgICAgICBoZWlnaHQ6M3B4O1xyXG4gICAgICAgIG1hcmdpbjo4cHggYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6MHB4IDBweCAxMHB4ICM1NTU7XHJcbiAgICAgICAgb3BhY2l0eTowLjk1O1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IC4zcztcclxuICAgICAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxufVxyXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDEpLCAuaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIHRyYW5zaXRpb246IC4zO1xyXG5cdC1vLXRyYW5zaXRpb246IC4zcztcclxuICAgIC1tcy10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC4zcztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG59XHJcbi5oYW1idXJnZXIub3BlbiBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAuMztcclxuXHQtby10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuXHR6LWluZGV4OjIwMDtcclxufVxyXG4uaGFtYnVyZ2VyIGxpOm50aC1jaGlsZCgzKSB7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0dG9wOjNweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTdweDtcclxufVxyXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDMpIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAuMztcclxuXHQtby10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuXHR6LWluZGV4OjIwMDtcclxufSIsImgxIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiA0MHB4IDI1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNDBweCAxMHB4IDIwcHg7XG4gIH1cbn1cblxuLnNpZGViYXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTBENUY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWcvbmlnaHRza3lfZmFkZS5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIHBhZGRpbmc6IDQwcHggMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2lkZWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzNzBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzQ0NDtcbiAgfVxufVxuLnNpZGViYXIgaDEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnNpZGViYXIgLnJvY2tldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MHB4O1xuICB0b3A6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRva2EgT25lXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjZjRmNGY0O1xuICB3aWR0aDogYXV0bztcbn1cbi5zaWRlYmFyIC5wcm9maWxlLXBpY3R1cmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMTMycHg7XG4gIHdpZHRoOiAxMjJweDtcbiAgbWFyZ2luOiA2NXB4IDBweCAzMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjhmOGY4O1xufVxuLnNpZGViYXIgLnRhZ2xpbmUge1xuICBsaW5lLWhlaWdodDogMS44cmVtO1xufVxuLnNpZGViYXIgLnNvY2lhbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW46IDEwcHggMTBweDtcbn1cbi5zaWRlYmFyIC5zb2NpYWwgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yIGVhc2UtaW4tb3V0O1xufVxuLnNpZGViYXIgLnNvY2lhbC5naXQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZjA4MDgwICFpbXBvcnRhbnQ7XG59XG4uc2lkZWJhciAuc29jaWFsLmZhY2Vib29rIGE6aG92ZXIge1xuICBjb2xvcjogIzkwZWU5MCAhaW1wb3J0YW50O1xufVxuLnNpZGViYXIgLnNvY2lhbC5saW5rZWRpbiBhOmhvdmVyIHtcbiAgY29sb3I6ICM4N2NlZmEgIWltcG9ydGFudDtcbn1cbi5zaWRlYmFyIC5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG59XG4uc2lkZWJhciAubmF2LWl0ZW0gYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2RlZGVkZTtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnNpZGViYXIgLm5hdi1pdGVtIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBjb2xvcjogIzIyMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDM3MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNzBweCk7XG4gIH1cbn1cbi5jb250ZW50IC5pY29uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzMHB4O1xufVxuLmNvbnRlbnQgLmljb24tY29udGFpbmVyIC5pY29uIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY29udGVudCAuc2F5LWhlbGxvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMzBweDtcbn1cbi5jb250ZW50IC5zYXktaGVsbG8gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDFGNkQ7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgY29sb3I6ICNmOGY4Zjg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jb250ZW50IC5zYXktaGVsbG8gYSBpbWcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG4uY29udGVudCAucGhvbmUtbnVtYmVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiA1cHg7XG59XG4uY29udGVudCAud2VsY29tZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNvbnRlbnQgLmJsb2NrLXRleHQge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG59XG4uY29udGVudCAudGlsZXMge1xuICBwYWRkaW5nOiAwcHggMjBweDtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSB7XG4gIG1hcmdpbjogMzVweCAwcHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uY29udGVudCAudGlsZXMgLnRpbGUgLnRodW1ibmFpbCB7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSAudGh1bWJuYWlsIC5vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDIwNXB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5jb250ZW50IC50aWxlcyAudGlsZSAuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA3OHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG59XG4uY29udGVudCAudGlsZXMgLnRpbGUgLmluZm8gLnRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgcGFkZGluZzogM3B4IDZweDtcbn1cblxuLmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5mb290ZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgfVxufVxuXG4udG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiAxNXB4IDI4cHg7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiA0OTk7XG4gIGNvbG9yOiAjOTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDIwMCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9nZ2xlLmV4cGFuZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogLTcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTQpO1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogNTAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xuICB9XG4gIG5hdi5zaG93IHtcbiAgICBsZWZ0OiAwJTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZTtcbiAgfVxufVxuXG4uaGFtYnVyZ2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmhhbWJ1cmdlciBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogOHB4IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzU1NTtcbiAgb3BhY2l0eTogMC45NTtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgxKSwgLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCg0KSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuMztcbiAgLW8tdHJhbnNpdGlvbjogMC4zcztcbiAgLW1zLXRyYW5zaXRpb246IDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogMC4zcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uaGFtYnVyZ2VyLm9wZW4gbGk6bnRoLWNoaWxkKDIpIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIHotaW5kZXg6IDIwMDtcbn1cblxuLmhhbWJ1cmdlciBsaTpudGgtY2hpbGQoMykge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTdweDtcbn1cblxuLmhhbWJ1cmdlci5vcGVuIGxpOm50aC1jaGlsZCgzKSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogMC4zO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICAtbXMtdHJhbnNpdGlvbjogMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIHotaW5kZXg6IDIwMDtcbn0iLCIkbGlnaHQtYmFja2dyb3VuZCAgIDogI2Y4ZjhmODtcclxuJGxpZ2h0LXRleHQgICAgICAgICA6ICMyMjI7XHJcblxyXG4kZGFyay1iYWNrZ3JvdW5kICAgIDogIzIyMjtcclxuJGRhcmstdGV4dCAgICAgICAgICA6ICNmOGY4Zjg7XHJcblxyXG4kZGFya19ibHVlICAgICAgICAgIDogIzAxMEQ1RjtcclxuJGxpZ2h0ZXJfYmx1ZSAgICAgICA6ICMwRDFGNkQ7Il19 */");

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
                title: "Emoji Jump",
                thumbnail: "../assets/img/mw27.jpg",
                language: "p5.js, Node, Socket.io",
                url: "https://repentantsandykernel--richardwincott.repl.co/"
            },
            {
                title: "USBMusic",
                thumbnail: "../assets/img/mw26.jpg",
                language: "React, Spotify Api (artwork)",
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
    gotoAnchorTag(event, $element) {
        event.preventDefault();
        this.toggleMenu = false;
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        //window.location.href = '/#' + tag;
    }
    openTile(tile) {
        window.open(tile.url, '_blank');
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