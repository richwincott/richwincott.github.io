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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- [ngStyle]=\"{'background-position-x': '-' + 242 - (scrollTop/80) + 'px'}\" -->\n<section class=\"sidebar\">\n\t<div class=\"padding\">\n\t\t<div class=\"toggle\" [ngClass]=\"{'expand': toggleMenu}\" (click)=\"toggleMenu=!toggleMenu\">\n\t\t\t<ul class=\"hamburger list-unstyled\" [ngClass]=\"{'open': toggleMenu}\">\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t\t<li></li>\n\t\t\t</ul>\n\t\t</div>\n\t\n\t\t<!-- <div class=\"rocket\">\n\t\t\tR <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n\t\t</div> -->\n\n\t\t<div style=\"width: 300px; margin: 0px auto;\">\n\t\t\t<div class=\"container-fluid\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t<img class=\"profile-picture\" src=\"../assets/img/profile.jpg\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t\t\t<h1>Richard<br/>Wincott</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- <p>Hi there, I'm</p> -->\n\t\t<p class=\"tagline\">Experienced Front-end Web developer specialising in <!-- <br/> -->Angular and Javascript applications.</p>\n\t\n\t\t<nav [ngClass]=\"{'show': toggleMenu}\">\n\t\n\t\t\t<!-- <div class=\"rocket d-md-none\">\n\t\t\t\tR <img src=\"../assets/img/rocket_large.png\" height=\"40px\" alt=\"\"> C H\n\t\t\t</div> -->\n\t\n\t\t\t<ul class=\"list-unstyled nav-item-container\">\n\t\t\t\t<li *ngFor=\"let item of navItems\" class=\"nav-item\">\n\t\t\t\t\t<a href [ngClass]=\"{'active': item.active}\" (click)=\"gotoAnchorTag($event, item.anchor)\">{{item.label}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\n\t\t\t<div class=\"footer\">\n\t\t\t\t<ul class=\"list-unstyled\">\n\t\t\t\t\t<li class=\"social git\">\n\t\t\t\t\t\t<a href=\"https://github.com/richwincott\" target=\"_blank\"><i class=\"fa fa-github-alt fa-lg\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"social facebook\">\n\t\t\t\t\t\t<a href=\"https://www.facebook.com/rich.wincott\" target=\"_blank\"><i class=\"fa fa-facebook fa-lg\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"social linkedin\">\n\t\t\t\t\t\t<a href=\"https://www.linkedin.com/in/richard-wincott-91040b134\" target=\"_blank\"><i class=\"fa fa-linkedin fa-lg\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t</li> \n\t\t\t\t</ul>\n\t\n\t\t\t\t<br/>\n\t\n\t\t\t\t<!-- Designed and created by Richard Wincott<br/> -->\n\t\t\t\trichardwincott.co.uk &copy; {{currentYear}} \n\t\t\t</div>\n\t\t</nav>  \n\t</div>\n</section>\n\n<section class=\"content\">\n\t<router-outlet></router-outlet>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"padding\" style=\"background-color: white;\">\r\n    <div class=\"\">\r\n        <br/><br/>\r\n\r\n        <!-- <div class=\"say-hello\">\r\n            <a href (click)=\"gotoAnchorTag($event, contact)\">\r\n                Say hello! <img src=\"../assets/img/wave_large.png\" height=\"22px\" />\r\n            </a>\r\n        </div> -->\r\n    \r\n        <div class=\"welcome-text\">\r\n            Welcome to my personal website and online portfolio...\r\n            <hr/>\r\n        </div>\r\n    \r\n        <br/>\r\n    \r\n        <h1 #skills id=\"skills\" style=\"font-size: 30px\">my tools</h1>\r\n        <br/>\r\n        <div class=\"icons\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-6 icon-container\" *ngFor=\"let skill of skils\">\r\n                        <div class=\"icon-container-innner\">\r\n                            <span *ngFor=\"let icon of skill.icons\"><img class=\"icon\" [src]=\"'../assets/img/icons/' + icon + '.png'\" />&nbsp;</span>\r\n                            {{skill.text}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <br/><br/>\r\n    \r\n        <h1 #about id=\"about\" style=\"font-size: 30px\">about me</h1>\r\n        <div class=\"block-text\">\r\n            Web developer with 5 years commercial experience. Specialising in front-end applications built with Angular.\r\n            <br/><br/>\r\n            Currently employed by Foster + Partners, working as an Applications Developer.\r\n            <br/><br/>\r\n            Previously worked at YOPA as a Javascript developer and before that worked at FortressGB as a Full Stack developer.\r\n            <br/><br/>\r\n            Bachelor of Computer Science, 2nd Class Honours Degree. Studied at the University of Hertfordshire and Hertford Regional College.\r\n            <br/><br/>\r\n        </div>\r\n    \r\n        <br/>\r\n    \r\n        <h1 #projects id=\"projects\" style=\"font-size: 30px\">projects</h1>\r\n        <br/>\r\n        <div class=\"tiles\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row text-center\" style=\"width: auto;\">\r\n                    <div class=\"col-xs-6 col-md-6 col-lg-4 col-xl-3 tile\" (click)=\"openTile(i)\" *ngFor=\"let tile of tiles; let i = index;\" style=\"cursor:pointer\">\r\n                        <div class=\"project-container-inner\">\r\n                            <div class=\"thumbnail\" [ngStyle]=\"{'background-image': 'url(' + tile.thumbnail + ')'}\">\r\n                                <!-- <div class=\"options btn-group\" ng-click=\"$event.stopPropagation();\" >\r\n                                <i class=\"fa fa-ellipsis-v fa-lg\" aria-hidden=\"true\"></i>\r\n                                <ul class=\"dropdown-menu dropdown-menu-right\" uib-dropdown-menu role=\"menu\" aria-labelledby=\"single-button\" style=\"padding-bottom:10px\">\r\n                                    <li role=\"menuitem\"><a ng-click=\"openUrl(tile.url)\">Open in new tab</a></li>\r\n                                    <li ng-if=\"tile.githuburl\" class=\"divider\"></li>\r\n                                    <li ng-if=\"tile.githuburl\" role=\"menuitem\"><a ng-click=\"openUrl(tile.githuburl)\">View on GitHub</a></li>                  \r\n                                    <li class=\"divider\"></li>\r\n                                    <li role=\"menuitem\"><a ng-click=\"remove(1, $index)\">Hide this tile<span style=\"position:absolute; bottom:2px; right:30px; color:red; font-weight:bold; font-size:25px;\">&times;</span></a></li>\r\n                                </ul>\r\n                                </div> -->\r\n                            </div>\r\n                            <div class=\"info\">           \r\n                                <div class=\"title\">{{tile.title}}</div>\r\n                                <div style=\"font-size:10px; padding: 4px 3px;\">\r\n                                    <span><img src=\"../assets/img/code_tag.png\" height=\"12px\" style=\"position: relative; top: -1px;\" /> {{tile.language}}</span>\r\n                                    <br/>\r\n                                    <span *ngIf=\"tile.githuburl\"><a [href]=\"tile.githuburl\">View on Github</a></span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <br/>\r\n    \r\n        <h1 #contact id=\"contact\" style=\"font-size: 30px\">get in touch</h1>\r\n        <div class=\"block-text\">\r\n            Mobile: <span class=\"phone-number\">+44 7704 473 460</span>\r\n            <br><br>\r\n            Email: <a href=\"mailto:rich.wincott@gmail.com\">rich.wincott@gmail.com</a><br>\r\n        </div>\r\n    \r\n        <br/><br/><br/><br/>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center; margin-top: 8%;\">\n    <img style=\"width: 100%; max-width:600px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxIAAAFvCAYAAAGp4M1rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgABZmlJREFUeNrsXHt0FNUZ/92Z2dnNPkISSAgbEoIJDwkSDAJFPSBga1uhWltBngfBA7Q+UA/g4x9aW+qxKogttbZQBUErUMFHRY4SHufYAj0EAsaEpwmQTTabFxCyyc7cuf1j9jEz2c3uJhESTr5z9pA7997vfvP97vd997v3DoQxhp5IhBAAsAJI8j/yAai9UfJ0hR5JZ5n4lRIPOaPUuzrZP0AKgOou0HNM8nYFGNx1nkDOTvZ1xvluzp5k7VwPkdPZA/t2azCSbqBCnL2WoSdrD7Ou9F431X1m9HXXjdDDlWpcedkA9EEPJQ49l8Itga910aRw3qxgOLsBSL2W0UPJebOCYe3FNnYijLGoWxqBVJ8Q0ibtL9x3gAAYOWXypJNtmBMS9yxjjLli6a9tF8+4UfqlALDEK2/hvgPZABIBnJwyeRLT8NPpTqvLqGC88vLL448fO06PHD5cd/zkyfttDtuCT/d/fq+d2S0ATADGA/gSQAuAfpevNr65ZO1jD/GlPHt2+Yp3Vk5avkjHfVx4kzebzQQARNFM+qf35xvqGxRRFElVlUvGEbj2Nu3nZz3ysFxT48mIKPmRdmLDuMiuJi0ttTIjI2Pda6+/8SKAFAC5AM4CSJ065R53u5o3gwDAuPzxlqamq3TChDuTZs+ZO2Tmi7/Y5v2JFwemff2557KnWIRYCEDy5yp9AZQDOD9p4t27AXw1LCd3NYCED7Ztu3vWjBkbz1WUK4yxEBhZGQMtb23Y6E1JTkZSUhJSUpLhsNuQNSMTV+ZeAe2jIGOxEwyMEULIxa2XwHgGcMDgWdmQJAmNcy7DVGbyCRW8NG3qz/5zd8HEvZJX8tgstuQLrvJRecNGsq0fbhnt9lYnVtZeyqq5q0Zpnug1MZPKh6/nYfnGAt+wVqS/kA5ZkkEpRbXbnQEA723ZPG/Dxo05B/Yd+A0OwZW6oh/zvFpLcl/OYT6vbxUtob+t/JeL9JvVd3lKv5SH7xx716M7v9g56vL5ywftT9gvtUxsIRnLneA4DtUr3SBeQB4go//K/mBgAAN8WT7GVXIXl/3qadeQocMPvb/1velz5s2rsZgTGhVFuXaypDj9zTVvTCCEKIQQwbOmlkiDJQBA7twcnP/rd+CucgAPMJEBFCAKgblERO2yOlxrbkZ9fSMaGhrQ0NCIioqKOUsWL3qfMYaAfyIA+H/v3iMZwfjo2E7MJXMAAMMXDguaXOnGsuCEyXtsBEo2fGuwX4DIROVMVcGyZw9C+daKmCLVrYuGQ5ZlyJIMxhgu/OMimMDUvVgAAQC1lDs/B2c3nwOY5q2MfBcOB8dxOnmHPTo06D5Ov3smKH/27EFgYLj0diUYUeuZmaHPZ33Q96MUEEJw9r1zQT63LRmJk29/E/Z9HP+zw724Bs3NXh0YP77vXpOqITBBE8jDJoCTb58MHFX/rnnMg6wtmWqBhtqIZlFXzls6AowxMMZQ+rcylbMCWG1W5C0ZAUIIOI7DifWhMJP/+CiAqEATQsDMDCaTCVSkYIxBEZWgpHlLVR4EBBzPged5UKqg+J1ivRxLRgAASt4OKb7072W4/anRunYWiyZMaJ5bbVaAAdRGdTppfKARA7/IUN27pspkMunKADD6yXwAwA+f+pFqfUDwX03izQBQQTOHwoLh4ByArLaov6Megz/IbiM0x3F6cEQxFKyoLlZog6Wujhd4XaAL8OV5vi34fv6BtoQQ8LxehtufGQ34hxvyZi7OPH42orzBMQzjBOWlbfUSkEFbZ3wnLe/fz12NVrkl0i4IBaAIfiAiWoaJM4Fr4aCYFH2FjIhljuOiPzfUhVvRBawkKp9A/whtEs8ntiuvbuxwPGSEHy+KHozUrDRDgAlE7z8Ff7DXed2wnpyAwLlngIqdFnUK/TNjGVGeR6vrSNt4xopHXtr2d/QPRdH5Gnj7FJ/RRen2BzmEwh0fQl0PBvFxKuIycPSlotAMkDUzwVhGlOfR6jrSNp6x4pFXjvCLxtfAO9WUarQKnRForYF4PJ51wUAEgDIVWr6Fi0+ImxiMtK/TOgxG0BQEPiwYQmghCrJg/ty//PfQkWWBZR5H1HZ8s4DsXYNQfn9FiIVkGEGKoCCpHeVJcaS6mrZHXyjSVQ3dOgSOC474xopHXs2zzD0DUVNQEz9fbVAXVL16W7xHNN6JacEIgiPLNOiiAIC/xiPpTB+U31cRUwCPNaDFZBGxtGUdGCseeSP0PbqiKK4AHgxBVF0M/fyB6QvDBg9t3DDun5iuCXohninqBSMOOY36pLISzjPpCkwbxE2mEE58C99xxX4PYIz5U0Hnx+oEGGPWFuDok0UdeieO47Tg8FowOE1B0QYTbSK0fs36kBJiXVXcrKup9lZYMQRwQRCMnkgxWkYwiGsXtYE18diCcR23gOvhpq6zZcTbf9q06SHL0Ce3XDgwmD9FIeo2gAjGGGRFhgATeI7vBaMT77tq1SrIVF0UKWDq1k1oG0oJl2cEEeJ5HopC4aVe3aoqUjbaHTPwxszG0FJ4flHXZeCBuPFOQXQ90LCnUUgIbUySSG4q+FCSJFCqwGa2teE1ZnMBjs4pCq8IPxU9ckw960AMyouVYmibeWQgLo65BAA4N/F82L5jtha0eaZ7Hxp97GAAjqFt0exjKL9Sjv4J6TBxApgCUEWBwSMhXACnz61csUSWZRBCIApi+OUZVc0xwZOAhDoLKKUYvTkfjosOOC7aseO2nZWDDmZRS4NFNVvDLGGMQVEUWOotSCtOpRuHvXtWluUaSimjlEKW1UMlRVGCP6FZ0PEJd3yZVpbWZmbyLRysngRYPVZY6lVZZVlG/qZ8pB/vz4Z+OtT34a07arP2ZyL5XJK6coxgGeZGMyileOWPr1fLsgxblQ3J55KQfDYZfSoSQSkF18rpZZCBJHMSTJwJhBBQhUKSJK0BKOHyDAUAPXjwQB1j+qWt9uUZY+hb2hepx1KnVp51nRZFkZQ2lSl2u4Pru7MvqaurVxZsmA9RFMmjzkX9Pyv5ZL97pNuW9+kIKFCCQOTm5OKnmH7P6k2/O7No04LAljWZMmWqvbBwb1NrayvLzs4W1qxd93xDfe3IlNR+l379z6Uzr6Zf5dSklLUQQmRCiD1w1swYQ/6WUSibfgrWOiscbjveWPxnV6Ipsdrr9V5Yt27t8yXuEq/NbiMDB2aaizcXN1XDjZn7fgmkQBiUPIisf/WtD57d8fSE9G/ToRBVT5YGC+xuO14av3phYe5XRx6ZOeOKw2EnA3Y5iSxJrKqqioqimbz+8TrXE88ufcZ1l+u1y1lX1NkucbAKoXsZAi+AUort27e9qoGMGc/CRAA5AEaWlp3eluEcAIvFrCYfHAdBECz5+aNaZFlGScm3gX4xXzhwOBK5zMyBgttdQ5uariqtra0d/qBh3rz5qZs3byo2bn/vLdzPAUguLNw78vDhQ9UA8NWXX16Nl7/ZbCaiaCYBeevqamNyqIwxV0CevLwRTOAFFJ84IVJKfTKlIAB8Ph9cVW4MHZIzC0CZ/9diBEMAkA2goLTs9IcBMAJnCoIgmKF+HaSlG3bHqKO3Q75nCieTQCmVqKIAjGnBmAPgBIDTAb1yhjxDBsAaGhogyTI+3rULn+zaBWtCwq1a39ZL8c0bURSz9+zejR3bt0OSZXhqakBUE5IiLW2ZHyFJPVOmGHzLLZg5a9ZDPklq6AWjw6RQSpseePDB+5ii3sRJsFrBGJP9+maRwGgBcG3CD8YtKykpwdixYxfIslwBoEnbqZfipmZFUVxz58+bfarsNMaPveM5qJe0m7V6NR47JQAYAiDPH0MuAjgFwBNnvtzuzmWsN/46cjMwWrxoL9ZE4BctNsbCjweQDGAogMF+vZ8CUOoHhYXbQvdB/UJU9FtNFYD6ONOz60IBpccKXkeA6EpXBeAKgO8AtPrBqfR7IhYuzwh0akTovKrZ6NeuM9VBvR4ZFZTuHsT9Oq0D4PVbRrNxkgsROl3WlG9YrGCMtXbgO/NI1NhNALli3JMKghFmWyEuAGJVVifauboon2nuQmDbjYlRAInYsKd8LOP5HpKxbkc9BQypEwrtMZ+VCdfJPDvkstpRrLO7gNCV/xHO/wEAAP//7J17cFTVHce/59zH7obdZMMmSzaIIEEiFgMEdWqDaNWxQp0y9mFHrFOrgI/qKGhnKr5qbSsoVnxQ+rCCaKFGrDpQ2xknMbUPH5gHEYGAxLw35E12kyW7997TP+4jd3dvHpvELIuczM5kz57zu+ec33mf8/tckuJUnSxtGq4P0P1JnGwkVxEJ1vDx0nRyEuhWJ6pVTApRh0+hRpA7xvAtk/jMlBi0vxI0nNN59pQsis5piTOip3NtTiVF5KRYy5p0aACfwpXoBOLhLBPVgtynY4vI/ZLi9aXyajoVB+vJXjmfluiiHJxxp4QiUq3FJRdZpN91GuoznCspLVtaUlpm12/omT+JutHGtXrWeOONdYuipLSMlpSWLS19718Os7+53EZTlgaUJW/mrKwP9338wtcvuvgRAP1H62rf6gp15+3/8NNFUI/9ZgHwAnhHm1XMu2Pdml3B44GzJFnqatvbHn3UOQylxuPJ4oLBgOLz+TgAqKurky7/5hXOso2lR0qCZc6VN1wfUBQF7e0d1oScMdJxsrOzmimh2PnX4ilQt9ivhHrIHxkYOJm9fNk1IxJybLDB5/Nxt65anf9pdbX/vf+W7D353YGZ6W+4QrfdcedrRUVLSgAchHqRwAP12PRkUdElxTZRrJ4z65zvAEj7YN/Hv77koovXHquvazErgrzx5ttKptuNTA3IkuWZCl7gkbE7HSxNgXt7JuyVNhAQNO5sAgjAeIa8G2cjEomg/d4OCDW8LBwQZNJL2p969JkdclBqUSKs35XlujDDnu7pD4WO3/mzNauf3vLs+2s3331Z7029ouSVNaASYP/MBjrAIev3HuOisd/fOh0AHn74oXsff/xXmx988MGfNjY3rv9n1T+AGYBDcIAPCpAOR3rCkbDb72+d/n7F+9cuLVy613O+5+3Og50rAMD2gq3ZuyFbxVswoP2OdsiZMiLTJfhuz4EKx2F4auszu5o/r58/e9bcf4uiOFPm5QwaoU2EEJExpty+YfW3lGOygxDCEUKIf2crmJ3h3JvmQJEV1D/bAEgaGUczaaEnCT67+hCm01x0dfegq6sbPT096OruwXUrrqUAmN5W6Btvvi2bFeHxZEIQBGTsTUc4V72ZqZNxDr9UY1SSC9bMR0SKRPkBAJHJ4EEhBWxHRLh3u9H60HFLYo3Znb9qnqoIDVMEAjS81ACmG04RLaMmN/fmc1WqzTBUHF02ABx88ZDhl3/zXANTdORllYxDJIKZN52N+m0NoAMUjKoFq6QpmP2jc0AoASUUR3eoXJGC2y+Aoig48MfP4rsdhaBxUSMykWmlCB4m9gcXF1nLia1HRHiaqgibza7SD0x3EniBB1yIo9EwxhCaEcIXD9cBAE7OHYCn3gPPGg8ooSCUDE3FsREoigJZUK/1A4AiMGNU06k4ZlCLbJctiTgMDAf/MFjoVnAVu8NutAjDZIAwpE1JAxMYZMEUWKP7EBAQOghe4Xk+DjyjE3EYY7B/4BhqHOIAKFRXxPeuW2HJchXbbcalc57n1IybbAcopfj0iQNRfqJNhGgTkdGWEe8vihBEQTUSNNtAaLI5jjMKWBAE2Gw2tfDMckRVDs/zoJSCqjfcLdMQG1cPH/VsjgPHc3EyYuPqn2Pra+PyoFeMOLnaR6QmO5Xo+wQcAEJNsyfBShEOv8OwuKx6bL/qOYJlpl6QHMfF+VNKB2cQpt9iZxV6xoyCi5FjFd7qWbFxDWfxbCsZVtaoIW8oPryF3Ki9JMJDYlJUb1NfV7dCV8SIwC6xYxDGZTRRK9u1odwkmn4NGUYeR1gzm6pHRNgdHnX46LlzvNe999ylIyaMBdeQsK6i2d+A+0DG2GEjp4Ld9mhtsUfI2wVPzh9azghyCSHgtXrPom9gktiVb9yArTAFGx94Enk7884oIuZ7+SMViSlC+zN3TXq3BA24wmK3I8x9r4t3qf9ot2TLH6hIjPgyCfSbxU8UDi8vksCzIxP8HcDWrVujK/igSQoHC6QEHZziqSM8JRQiEa1rfTJbhDTOWj6OFjHvz/Osfx9GbmHh4sFuh+NATeSO2E25KEVwHGf0YzoTauFzC84oAkBamyNhRURNfkQhdq8vigUVZb4ly3IcWo0b4CYeFzFZxJvxoCCGiVt+91hYUCT2ixKlEQDYs2fPXQAgSdLoa+VXbbDGGFulqZJbTWzNXRN75rebqvXAVgjRM4rQWuTWwjErQiVCAEePHNlu7o2o6YsCg4ymQaNiViGL/1R4RhEYIc/DpFMF1igghGLVqlteMfVGzBLERSkBCIs6UIlaOcYQXGZ8eNapzZgdJbXG0n804eTRpVNfFmgbmZwWSgHiuU8UABx2uxUHdcglvPeQF42FTYakihsq1W3jJG5xlN9YAVebEwFvcMQtjmHpNomQbSzkpvtdUT2LjotFDICLxiiCAADRxgddg4WFg7MUnfzChTg4W5yQZRmyLGNK6xS4mlzIKc/BK+e8GkpvcjEuNLhTq+N9dJiKLMtIb3BhZunZJ/6Sv/OoLMshWZaZJEmWZBtzTRvqWNN7KJpsE/AEYe+2w9HhgKPTgYU7FkCXn30wCzP+N0P529feOjFnzxzklOcgrd2hvl1AjsERyQANUyiKAq/Xq5JxthfA/UUGMj/PhLvWbaRXj2/sAveKUekVBxWhHyhEgVQoVFuDgsqq6nen5/rgdE0Bz/EadJ3DhRcuNkb93uxevLh+O73+B98/KxgMKOaXgnR2dsg6NGXt+vtvXFd+z+NzyvKM5qUoChRZwd33rL3lvnVr3w0EehXz8emqVatzt2x5oRkAfvPEhoKFCxc9FAqF9v/8+ft/2HFepyc0tR/5e/MZQHoJgZNSFdOmKAoYA2qvOAaFY3Add8LZ6sRz6373H6czLb2iovKXxa+9tr+mpmbgqU2blt3yk5v3GqWTplbI5zdtuWxz8dOvOrudxu7qoWWHQWWC3yze+FZrZevTL2/f3tDV1Snn5eUJ4UiEdXd1K8FgQHE6XbT49d1Ntz1664ljy2pdOu/KV+VD/Y56MKYOvn19/WhsasaCgvnLobI7WgHI5ndXZAJYWFlVXTJtmhdTM92gHKceVnAcdu3a9djGjRseDYfDOHy4JiGijc1mIz6fj+MFgTQ2NEjjodksW7bc9c47f68B1Nf7XHnF5Uw/xAdAKsrLr2lsbOjYtm1bs9PppH5/S8KG/Hp6AcDv98ujTa9OtDkvP58JooCVK1dW3Xff/UFCyBK9sgSCQTQ3+7GgYP41AKqg2goqZkWkA1hUWVX9nsczFd7sbFCOGoqg6nw2NkFJuX5yipJsgPiLb4QxpujrMsYYurp7cPx4GxYUzL8aQKV2uYDRmGFGurTokl8EAgFEIhHsLi7Gxx99BEppyr6JMcmOEUKmfFFbi93Fr6OzowOSJOGyS4s2w2Cjxe81yQAG+vr7/eoRJIF32jQULVmyCMmlEqS6k+bm58/LyHS3ZLjdCIfD6Ovrq9fKNE4R+lIkyBgLlX9Sjra2dlx11VXfBtCBcQJTvuqKANC1fPnyH5/o7cUn+/YhIkm9AALab3H4OQr1AtkCAD6o196PQH19WP94WsREk2uGGyfG+i68IWQB6kt5PAmMC1a7fDYAZwM4T5PVoQ3ULfrKI5aqrNNVAlDNZVsQQ1eZzAF5uEIlhOQmorhkjhNaN+TXlOLRyjYKWhariJNQ0TadUFE3IZyC+KAxFn5nEpOqQLXnaNJaQ1gr22HxQSFTK0g2Zq4HE2S9wxgbSHJeFK2LtyxbK1qNkmCtnJAwQ4TrnyBFtHyZpJq4jdHhuynLHiYV7BfGax3UngJ5TBlDkvEQaiKpkMFJJ9ScTnSaseR/KPd/AAAA///sXXt0FdW5/+2ZOefMOTknJCSQJ0KMvLy3IQ+FooIKq65qi7ZWEREQrFXUaxG5tha9atX6KPUBlUq91wrWImDfevVWy6u3dynekgco5AFcIISER17kPCZnZva+f8zMycw5c5KTJyHJXmtWksmevffs+X77+779+H3nnZ2mn8duM3vN+RgWjcQDyOhlGacGqQXbW7fhZH8I9nkdnQZx4nsJiN6kbgetTyBFg0qCxhR7IQNiaKrsQZwyhriQiOgbZqqeJt9QFZyhCorsIV5fvPpPjoBi+HjZI4AYXG0Z0uRm3AgghpxwZI8AYsR8upABEURs0IUU9J5lMLufTKlhQX85VECRdAEBogl6JME4qcUEFBHaTNZgAMYIH+wFli6UraINXQAiOkn6M+c7ZWAYpaEAigtpBKMD9ExfJhdsmENGQDECiOGc0obbC0e2efTHdotEl+x37NzNAWDGOa14z0W1sd8B0dOAqt0tr8uPNMD19bbebqZIG/XzeRE5GEgZ7NLRzh8/gehaxCBoNNgL2OFjR1lXle7YuZuYnusUDC++8Pz75eWlNzDG2rfv2LUQwG7E2d1tAvCAaoi+GjD6e49ud+vThRBz51xDo/u5P/vY50vmjBPH23fsEgBcvm7tK8/eftutcwgh6vYdu+4GUAHgOLRjJDIAzLn2ahYlXwQ6u8Oca69m+n2YQaUTUBt5OZN1pAKgdvIcoylys7IdVYdqysGYqUctv7ooZRfzPAdwhI67LidAQM5y57hmJjJGPdTjPOh0g2EsAHr59OmHKysPJvnb/I7QrFAqp3ACTWFOZbzCy+NlImfKyLkn2zimzSil6gcfflR+pvXsh20t53bOz7llFwBsD+waA6Bx7pxr0hCHuDMtLZ33+bwkOzvHKbVLNDl5lDBt2rTRmZmZqQCQlJTkaW1tPZeSkpLyzra3i2sCNQUpl6a4v3PrLZUHaw6mHKk9nF935kQBQsSVl5X32Opb/m3zX7Z8NH/+bQsalvxg4dtCvUYByygDZRRUpZ9SSj9tbGp6KSFp2GM/GzTlzskplZuqWqYunbL04MbKjTEZZiSuFdesX/NEwVcLypZcv3iDwSVsHC1ftHjJyqq6yivvXXb/r1Wos5feu2gVPIAwTmibzs/Yu2jxkvL3tm2bvXv3zuK0tLSzTz71zIZTpxrKa2tr6xvq6wOhUEjhOI7IskyrqiqDhUXFyRljxyZ5fT5RFN3Ov//3346GJIk1NTbKAOD1evmCgoJRl8+Yfnna6LQZiqK2CALv9XiSLq2trQ1kZmbSJc/cURK+LJwmXSkRNUMFczCMX3QRGGOMUqr6v+YHXysoREKQERa+6eZvNf/xP/8wHgQOAAwKVDCiEBUqaScC/HBX/+MQL8Kl8SkQchyUmUKSWAfxTW9tnHP/g//SEA8UBABEl8j9ZstWRRRFuEURbrcboihGLo/HDY/bDZ7nQDgOD254ABvzN0FJt56MzL/jYjAwjf2DaNSDh945bPshpyybHCGQoJTi6NvHIi4maSfgghyIREBkAhIi4Fo5xp3jQCQwLsAxrpln4BmRJyhEyVVI2tOjQUCIkqOg7VY/1FEq4GLasWcBoD4KdZT2ATrXvRrxNAAwjmHinZdEyC6oSqFSFYxaOfkD1wVAFALqo1r7FRI52MiSKJQcBfI4BdRLNT3NaXUQRkAUgPIM41bkQlVV1L5xAnwbD+4cAZE4nWmIgTk0BvfIOKmP83QU1S6RAhzgPO7EuMdyNUZdEDAw1Gw6ZCX41se7vIUTYmSGgeHEK3Xgm3lwAQ4kQMA3c+DOcfD+yUuZRn5O2ha0QTjuABciYAQMRGsbcwBqpkLaC8MY81S6NvDqsmDwYx/bcjym2y/97tTI4FO5saobthLg3u/GvoX7kSvkgFKKkCQhFDKuECRJgmTckyTcteQOZ3Nrq0HawRhjEHQsRNSL1C5xXdfd0XOr734cm/+wGUqqFRQejydW0cTZ+CyKoka8QRn2b/ii4x88wDwM1KN99Ul3TdQEkIEEpwRR9+hJW/vg5LZ6TFx2CcKjwjiX1gYeBq+0RnNMJCCQGrRtT1K1ed2MWH643e5IYAqqUk1bUNph1oGg7m57M95d5Y50gyAJ2mSrLiCEACAkQmbuFt348o0DmqAn0ZggNq5aFyY8OT7yd/WvamznrMK5YQjjBLiaXBFQWAxaEwCSkpI6yNRNSRmjQBkTexR87F/HckYZJ2+uB2zNio50YmsdJn93UsQiIUTnarX5Bi6XS+9ndLpZPqmmY3lKypVAHRSuFhd8vC/mPeKl5tZWw6yieruYEPUyPAC+XWp/ThTF1XFtVdN7J/PJcDa7EBwXsnTH/vVfoHhlkfXBOC9ocH5XP1ATN8+07xcAYsdHE4+JGH3faOx/7Qt7IXS74T7tRsq6lBgbmxCCslfLbZ+b9PNJ8e1yoUPFMoEZALV+gDjtn7RuorUHSUf5xhWJBuNk8fvhwQJ9JOkYoAru/woOrziCwCWxgcuqflxt/Q5xyjXxTiX0zdxud5d57Aa/GD9HtZeHRMqeHPWtGGP4xS9eh0hEqMxKKEpB4wFF0AGhwEQDGO2ECAtvn78mUY3l5twQG0QQmcQwssWEN7KJGmDO58/zx81jjkYgCAIcDof2IePkN/IZRP/m36MjEthFQogOBmC+zAEEzG2KjpRgF/VAy2eN6mAGaySMRrxyBN5yGfVOXj+py/7t7BtEv7ddRAi7/u3snaOvilf2WaI/xH3PaNAk8F7GVVxSAgdxIMzCFhBw4GKI/GRZ/lD3T3kTFizrFAYw+HiOrF3iCQ/xtAvZ/5UVwxe593kr83e3+I+jrrhxxBLMH5O6akuCszvdbU/CqZv90FndvXrvBNrRKbd11KWKatflIzGZiLv4RjhIqgSZyhZgRGuK+bd8e2k0IOwW7wxQJLwnioDAecYJLmw/qgSzQl2jPoFRIW7qbv7ePjdQ5faknESe6Y/+jZOn5EfFMffKH6/o+ln0UiYAODknnJzToh1sKF/NWsICAhYHGFbDi7feoqzDRvvpD9eAa+dQ8ngsy/LBew/2iabo7kjW05G416mvyu1JOQOoKRLOY3O/sbCxXzUFAYGX91oBQTr8uCh/go+3eMdgnajj//rJxzfOm3fjnyNI4WMnpSij4MFjVtEs8K/rZdsQZ5ycXY/sv2V1TarRE9KNnhJ19BfBR5xyqxdXd/pY7sfj4Dnl7v++kAe2zJKnirH3MasZffQbx5BWnpZY+d1o74IFC+JrDqcD/mDMWjIfNVvG7MwnAxj8Ky+/ZJnnU1UVgsBbkMcT7W8P7wEf0H4v+UmstqifWT/sNUVbtr/TS3UpQ1NTxPn/4ZsP97mmWLny4U67xxSUCOXlZQ9GgcKQfRZNDGjWFha/glIKl9NpykAszrYQEKwvEpUOLDmY2EftiRBiAJ/rr3LZAPWFMvBllrxYjL2rrNqiJa81sfL74Du5nE60+f2We4/+8JHdiIqGY3yFzkDBW+eA9RBfNqFzCAiEYEdRJS8VY+8KayeEUkPDGhQla4v7v32DFBTx8uxdUdpnMtHZxj9e4KGq1M51CNvIvq35ZDzNtfn9FslWFCXuIk/xP5VY1y8a3IlP1Y042kPX0TYPCt2Vh57KhFnyBQGUxg1JHrVRxgoKZvpnJBLqTfO+sSIaFJy9F4/X11mje166deoIKEZAYUlpB9IGHBQ8z8eL0miOX2fRFHbmkxHjy2JCcRwBpQwMDDwvQKWqtqfIKIjELm1k/W8W6ovqz7/JcCH4FEPdfAIwYed4NF7c2C/9sGHDL2OlnuPA9OhmBkAAYPm935sXpSUswIhnPtFo88rY60IpAyEEkipZVgjtVmuzS7MS2wJgoDrEjyze9bCclotaBt3inV3K/+TihOWh07Kj8pWUlMT6uoQYW18hii4juCMOHjwoRYGC2akQO1BYQmerigqn0xFBHQWNWS20c3am/mlqwuqycPO0uHmOXnEs1lFbVDrszKe9i0ptsx+efcQ2f1p1Wo/LPXrFsT43yVKOp/S5+WSWO5nKEUAQQvSQswQCz5vzcVGQo+gkRIgBiogJVVFRvmXGjK8ukBUZXp83grZkVzKiMaCf2LLc8zS7uzx6bwlO2eaE7LGu2DiCDmTlZLHDVx0hwbQgwknhDmvQbqZnc3HXdendQCgBp3IQwjw4mY90Yrz2dbZ/iRDSZzQDJe8UY+9CewDE3De7igyW5ajx/3MRKOto1LStBdh/s7azmFACQRLgCGmTJ1/ecACqS4UqqGA80yLZ0gT6l3be19GDZdHbhSi7ozxupF1L/k76c+/CUhBGkHI8BaeCp5DmSgNHuA7TST/7IoouBPyBaGXA7AABxO5956CxNyRDozXJAOArK9/3O1EUkZ4+GoLggOhygeM7TqhwOipLS0uxfPm9FsExtkNXzK8AHxbgbnIjuTYZs8bOeunamXNP7irdsWb/jn3KqFEp5+5cuuxRl0tM5nleHJ0zOu+D9/8sfKVgWs2RmsN78nLzxnGEJ16fNyfkDF76wuvPfd2f7U9pymviIiABULylyLaTzR+IMYZQcoiW5F/W9J2b5v+26WzTngMHvqzkCCGXTJyYN3ZsRlFTU9OXNdWViz766MMJAJJWP/bE2mAwcEbgBdGXnJzv8yZd/8gjq6a8/Mra06sefigdAHnp5bWhpRsWi815zVwoNQTK0UgPF71bGAsgm7/NAsEYQ9nt5R15mHbmgjACQgn4MI/k+mQ8+c2ng6/97FU34xh57scvBp792dOiEOL51Q888e+BQKBGkWU/Lwjib97Z9FxdXZ0rJycn+M1v3XTfuNyL5m3+9TtPb9u2VWMvd4C89eamWxrO1D+36d23PHKyDH+OH/7MANqT26E4FRRvje3f0gVlHSawzCPpTBJGH0nFhgf+ozQcDh9qbGz8u6LIwYaGhuOZmZnjW1qap065bOqo03Vnahllkior/g//8kFBzaHqe8Zkj8HyhfevGZuR+dnKhx78XX1JPYLpIUgpElRHrE3GqRzSq9JxaMMhiLyoLR0wBk7fih+SJFBK0dTUjEAgiLq6E1/ecP3XH4EWSKoBHTxcEXCQmCUHjb7epwMiE0BqWfm+90RRRGpqCjxuNziBg1NwAHrFnGlLdVFRYWQtwzg9pVIVCq+g8vaqjvoe7T3xQFpaOn/VVVd5b7tt/q179uyZx3Gc0NLcXFhaVho558AYQ1FRMaYVFt10/Pjx0zt37Di1b19FnwSWcrlcZNq0QnHChAluANi+fXtrRsZYfsVDD1/t8Xlyjxw5/I+Pdnzw86ZQ00TnOae8dt369wA8Du2wflbKKN/su5Yt++XLr64bO/fza9q2T9/lfHjl99uzsrLwyA9+dB00Jo0iRVFuXPXwiimyVwYv87hn2fLbkr0pGZkZmd/+11Ur7zpw4EC4zyYKHCCQNeFwuVwkPz/fccWVV6Xm5+dnii7nyl+9+ebXCEcip+e8Xi8mzZx8QIXKcjNyyxqPNb1W9nnZ2YqKcqk3wYfxgvXo7vS6y9ne9FKoLisw+DCPuWwu3l/9PggIKGOattAHv7AsIxwOo7GxGaFQCNMK/nkBtBiOp6GFvGuBFsGOxtMUxkq2F1ogyGwA6WXl+7aJogif14vkZB+cTic4jsCYmyXoOAvAcZwIU/jUyZMnsc3vbllWUly8MdoPxzBL0ewaiW4ld7lcOb0SsAu0r+z6Z9Kkiay6usYc2JpnjMmROPcmLQEA4XAYwZCElpZWAxQLde1Qr2uKVmg7rGg8RxsmW0s2fPyS4sLljFEoupMdz1ZkjLVGW4FVVdXEBhAjyWTKdXUNN0B0NmCYABHpxv37919pmXGKkk9jnaKysrJGB5JqctdjfAo7R5vpmWUDQU6Hc1Rbmx+EEDQTBjkcRmtrKxwOJ1qam/HxJ58sffbZZ3boCKQj4j6SBmpcAcAKCgpKAWQRQrLKyspKnQ4nQlIISR4PvD4fQlI7/H4/vnfXst+b5NsIXB4z4AidaAojUnC71C6d1WaWOIiiG599+hnyJozHjOnTFyuqWqurIr9JDY1Enh9JAwkMBUCAMdZUWFg4k+O4nH0VFb+trq7BrKtnIywrAGNo8/v/TweDEShYSWT2KWKnAXBDC6SYDS3AfOqnn33+RigYqJ4z59rnTc7KaV1D+KNts/NhjsRRxX3KsNcborAeBLUfsLp6YeK40HN6zb5oo+ELu6GxtI/RfeLRM2deMe619et/UlJcdB+Ac7ofcQJa7GK/nbYgXVSSZKokVX95BRprW4sOhnNRqMMwAEVvhCBhYe0lS19jf4dvH0SgMA/mLn32NFWXXZ9+T9Zl9Qw0Bkq/rjVoIuaTRSXpP/3QQtYKumkl6aaVNBxNJsZYe28oMAeC9rO/ATFIzShVl0tZl90maGRADpPcBvU8SjyZFRKw1Qz/ohWxm6iGrf+gTxlmD9a2DWfHWweFogs/3125FRKshMLmLOuw9/AGITCGMSDiya1q879Ok9ANqvJ+AUJfMnH3Nat3guWdhLbek3meBaEBAB1oZvOB8gt7CZBuJQEjqS8SPY/gaMDI2lCfJmEIjgz9rkESAAf6GSBDBggD8f27LS+DsVFDORFCHNCmCruKI6dCmz2Rh9L7Xwjy9v/sXXl4VNXZ/51z79yZZGaSCVlIAiFhCwSQLYpbK5tbXfq5a3GlgloXRG3Vz+Jaba2ouGPt91W7iFu/togLokCoVQoVXFACsiUBEhKyZ/aZe873x70zc2fm3skkZIPM+zz3yXLvPev7e7dz7nlToOh7UABKiNACZR2IxmgaFyKh7sEYvBjcgOhls+ZIokI9GcHJgbIdv7vkh7L3fyBSj45xf/PjsexgW/u5/p70JSQN4w0kP+KY2/Z/LAMi8xhllPxe0GAp0kixFPUc2ftQahaq9fUX5aYAcfRQf6jy/H5gUDv6b4HQlAJEihKBgfbjHOanwJAChBEN7QfnnQ6AeezLIEJuChBHDwl9XF/mAOl3JlKUAkQMWQaBr9Lf7SlMAeLooSEpGZeiFCCOXWk80No1JAWIFIOmqP9M0j6n1LcR3aOeirLUI/orLwE9EyXLhfKxfU+SMBgm9lgBRE4f13ekcXijbRey5l5hP7ZPj4YOBkAcKyaTdBS1tbaHn0tRChBHrSqv7eXnU/5ZChB9rsrtR8m42JGiQWsyHQ2MFujj93oKEJkpQBw9dDSp8sN9/F5PkTUFiBSlKGUyHXXkSE1fSgOnABGh9BS/pqinSQR65+SLZE9P4Jxj3foNZO6cWTzRuzFt7HUgJzh6v1fHYwDV2acfHa1dV0HUenl/8GG433q5qY+0Um1esM5o3foNU6BERHYBODxn9kyWxGT1xVHzPZpQ5UgOJj6a6uxO+9at32ADUAYlz8NeAPVzZs+UOxMQenx3pIDQ3boxuriEqlI4lCA7dKw431NdxTurcO26CookjkpZt37DiHlXXPYl5xxvvPXOfQDeA/DtQFKhA/lw5iOpT5XIFADTaue16yrI3Dmz0nqzXWazmYQST65bvyEHwGVXXH7Ji5RQrHjz7QcBbFi3fkM1lLOo3LFCUm07Wbd+Awnx2ZzZM/nadRV07pxZLHYMRheXEA0/h95he6qrWCwvx2mI0cUlZgB573+0+hqB0oyzzzjzVajJGv97yS8dl8y/9JcZQsZon89X1iAf3r17097zEDmrn6rSfqz6s1K9uGrzpwHIePa5ZfNuWXTryGtvv2oebaIiZxyMMz9nvOqNt955dK5t1p8NR3NG9xw9uz2D+v2R7J82m51mDcmiABAMBHhVVVUQAG5ffMeIZ59ZVoPNyirxWmdFGgA+b95lHrBwptHvDjc2ntmlBmw+glXnbvQ5MyNjotlsXkOIkod6xRtvS1B2q3pVSTwOwDBVIrer82cFkHfBf/24pqOjPfmzn8wg8MWcum2OpFQoKSgRhmRni9VV1YGzzj47a/z4srzNm/594I477xKvm3/V/V6T96LAlIAYLAuCS+A3tt5UkZXlwCmn/vAbDlZDQPdCOY8qCCUFnA3Kdh2H2vZWqOmjjz9+uk+SpE8sZvMWAKipqXlyzmkzP4Oyv8v0wvKXTjr+hBN+dNLxJ9wLoHlPdVV7IkAQj8ezmslykQZjGrSBe2V/oVmQHJRStPBW/6SLJrQKTUIDgsTH7UzkFu6QvpEy1MF3Pv7EE7vvvefuPAKS7j3ZZyMiJHmoLPpHB4TAiAAK7yhQchLLDIwxxjgLrHjj7U9Wr/lgff15Dcv+ZHqNrXVVZALwzrXO8uFEY+YoKCgUc3NzBYcjU2xsbAyccMIMR1HRCIfNZku32e0Zh+rqDjmyHPbWtpahy994aS4bzoaffPYpdYKJBvYf2j9s34G908BJOulA43//YsnsqfK09Nbm5vsefvzBwlZn68mknYBxBs6U9Lq/XLLkpEWLFu1Pimk2GQNiwvwyx/ZXK1sN3z0xeUDYR9gnWYj5I8ErgFACQkh4fs/46VnPXDb78jUARi286fqn/ILPzDM5Tsn7wfrjJk+uGTlyFHnkoQeu8Pl90jnnnPvxaafN+vuePXsqAwF/YMeOHc1ms1kQTSa6Y0el02a1ClOnThsCACUjRxV+9+22ffX19d7aulp/MBDkokkkRcOLzDNmnFhUOm7cXJNJzAoEgm3p6ekTN37+Wd7Jp5x6aNkbS8duadtS4p3llfwTA2BWBhCgeN4IMM4YZ5y5j3cz0kp9CHLvqTN/4N+8ZVOaj/utAAQiIwiGIDgJEj8IPMT86C8etVx94TUgDAgEgpBM4neMcY3PGcEtFQS5MD9/SktbG9MDBKGU4o23/sosFjMsFgvS09JgsVjCV3qaBVK6hHQpDZRSuOBG8bIR8I/zAzLALRzcxDHshkK1ag4CRUIRQlDz+n5FWQkApxwgwNirxkBmMpjMIDMZnHE039QCoVHgwmEq58v5vHF3o0wCxDNiWPGBM2ee/XVpcekOMPiDPrkNjDPOIYuiMEFwCJZdW3aOP/GkU9q8Xm91XWPdqI2b/nXWRVde+tm99//ilCVLltTf88g9wwNlfuad4jMFigOEWzjhAlcz1qvA9xGIh0SYakUQRiHnBuH4hwPS9xIYZxEAcwbOOerrG4aFBjknJ/uy0nGl53/+2car33zzzXGrV394NyF08YcffrD90D/qhWHXFf48kBlYChtgMpvuJBbytMQlCD4BgUAAVb+qJkWXDOeyLMNb7nU2L2mx512Tyxu+Pzzsjofu+KMgCJVP3v/k47c9ctufV7z+emXTzuZfh7XCWRnP+E8LXCoXyMh6xQHzQTMopYpPB466R+sgHBIBGWBWBm5lYHaGoYuH6vELOOeYffkcz9wZZ3xktdjqbrv5Z7NvXPizHcdNnrLTbDaPsNttI51OVz0V6TA5IO8TBMHKGPNxcHDOZZfLJb33ybulaz7/aIzYJCgOM1HyGxIQ3vibJiLnypAdctSOtLFXj4FqNaB6eQ2In4TT+HCBRwwf1ZgnHAAjEFoonjvjeczLuhICpwgEgnB7PPB4vPB4PPB6veHL7VF+3nrjQrG+8TBTuhsDCADkLyveutNuty1NBIg0yQKBCvCTAIqeHIb22R1RcZ/RV47SBcTuP++Jk2hlPx0fZjCZydj3x6pwThgiA8RLQbwExEdA/ATESSC0CJy4CCc+woUWgVMXgZwr00BJkIABWc86QEBIyy2t4OkcLIMBAgcXFdDKmbIijaIVYLwNLqvOG+UY/vhwpFVaotrKmAIILRO5Z7nB0xTBQAKRiYQIyNkyAiUBBPNkQOLgVBkXwojyLIARdxVBDsqQmYyDL9dCaKEgHgriJ4oQoQA3cTWBFAc4AYIAN3OwLIXBuaA0aNRVI0EpBSUUHBy7/rhbp5PAyHklcYDgUPpV+5s6CK0U8BII7RS0jYK4CbeusvJQtM99hhu0SQBhABfAOeEgFGA2hkBpgPgm+5B/a36EF6Boreo3a3THf8JPy8LCZudr3ydtuQkdAp6b+Byuy54f1hCdAeLSiy8QQr3mnHNRCwYA5Kp5lz+zctX7Sw2ZRNMDAQJMThMIj44qtV3ahpyVOfEOno7DL4oiOOdglIEyGp5MAOAmAJaYYIMMEEZIFCszZWpCDDP0pTyAAO6Z7ijJrx/qSHCLRm6KggCTyaQAQmAQZEH5nbNIGQRou74dXOSRsjX3tJrRMMohiiCEKIIBUKRnbDlJ+uaH7q9HyRPFYQ1h1H9JksK/a5/jnMNf4o8aJ8IIwECyVmeR0LPtV3WABAlAODhRWUR1Y7nEwAXAZDIp4NcISKPxF01iyFfrUj4gEiDIFBxdjj2EuksIiYoyEY0XnjDEGhoISihMbklxxzSfpDSe34SC9wuiSiaE6MadBEFASEttX15pGJsy7zej+IER4fp3v6bRNkIMgxcCUqOEtJ1pmh6TiEkEwFXq1q3H+n169JCo70g+SQGvqsoZZRF/Qh0PAgJm1u9A2s60SDu0RWuYhHMOURRBCTWO0XGgdP7YiEYa58GBew7oPuoe64Zo0kyxQZkmk8kQELHvcKJoJ5MUeYeldeJ/MwV0cWAweI1Salh/ZJ6sUZzqGusCDVBkCVkgIOAxL+oJhGAw+Ggo0qZyDhG12iEixxKH8kh4aglMbhNokEIWoyW5IArgHCCdpG+klIYBkUgajHl0tGIqqJNWtnA8Kl/Zofts1RPVmHBjGUY9NTKsokMTEWr/1y9+o1/Ps2OipLHWKQ1pIMIIKKVgjMUxkVEfRj09MtyO8DgSErbxCSGKCUY5WDozLGfijROiguUZe0SM+tVI7F2yz5C5EknjkFCKaj/RgIMnABHvXMuGqP76Bgz/07CoMTB6LwoQBs+MfW5MjKAGOGewrk8HB4fMZUPLJkQ/ufySX2uWFggArqchEq4CU9Cowk0uE4iPxH2zFupUrKQwipUbaRAAmLJosmJuqKMTMs+sO61wjXUZmx5alQAC0gXppBfLDy04hrRaCMyd9VExucQoMOj9pJSCE46aG/cblyOKcZLPVmdLrj9J9jmp/oidax4ttZ7YiuLXR0SvjbAk1k+SbLNiYlFMt5arGoKHtTEHB9MviCLauA0DgiQLiFjUTSiegAOBA3FIrvz5Dkx4qiwpe70zCabXeQAoWJ2P3WP2dC719Aaadz4ZegtbIVAYrsYb9UGghuXG/u0c7UyqnC6NbbLPJFlunFZJgqK0VRLvJbIajNosEUlXO1B9thZiYddlDRFLU8dOxSfeT+KQ7Mn3JC1tkpEGWuYLDUbG3ozkpIzeALJuMEcyz3RSbmflJ9KUCd9PZhmN9Xx/kq5bTxMdQZuNBFWI/NwPCeZOm6QxlwhimF+rJZKm+ZfNh+ARonPHM4OOdPYMM34mbP/HXEbvxD2H5OvqytaIrrYnKWJIul+d1XvEfU6iHYnaq72+evjrrrenG23mnMPHfMaRtWhAaANJhMaEnggAGggEPk+WKdJoOqiP6jZajg2Z9uGEdZvpjpR6olzWjXJYP46vzv2Cjwvi+UGSe7XN06eXh32GIA9qfImEgCCdaoh9e/c+1dmchSoyUzMEjwCpWdK4Jsr11QNfx9ujsVdn93mnDen6O0fyXl+Uy7tRDu/H8eVduHqxzeXlEUAIqntAEq8ixC0zUJ1FCvqLn9/572TnzkRMEDtEHLd0UvfQntIQx6SGCO+RjrncBZ5ea/OCBQsjlouQ1IZdrYZQIus6gIjzI/RM35ADIxABolvoPsOnAHHMAsKxPTPu/5U/q+z1NotERBpNSxg4aGluXgaddX+qEwDTAQTRGSemxq0ECG7RsPFNU5tSgBikgBi9YnTid3uwzVFRSB0zSYgJV19z9bxnY/icG5lMcYDgHKA0uhLGWRgsoksBRN7GvLiGV/24OgWIwWoydTbnvdVmHVDoONdUT0OIOkswOoDgcQtd2sUP0aXcK/poOBqObzBupdxJL+RuMKDcTcaV0TtkUO73VyfetVn659LeH4e+LJcb36s9rQ6F/yzovTbrhMcZ50YhVxgBwtBkUlRONCBM1BRGouBJchm/mwtzPf7OkbzXzXI7hjt7t21sgJWr8l/JqmJUnVsddavuVBUQrG/mSRAoZBZMSkPE+hAcBhuMY1cZRRIBwaRRkxKquD0X7UmZTJ1dx6jJlP1NtvH7vWgyRfGqdl+bfoSVa30IvT2LNBgM1sY5LYTo2mPlZdPDv5e9WhbX+NbRbSlADFJAJJz3PgIEpRQkLqCq/6kDNTCZyKFDh1ZGtYsxCJRGvoLT0OUXXBH+Pb0hrWsDkALEoATE9msq+wQQCXbLkFjtYKg2AJDr51/7SlS7ZBmCIOiGtHIycjrvRAoQgxYQU1+YEnffk+3p0TaHVqnjJD6h4Mxw63fc1zpiAvREaQ+ZccOtxxKVOnWEtty+dVA71eXPTh+UTjUACD6h1+cptI9JLxjkD0RnFGhtba0w0BA87gMJjWMdE3ploAbf5lJC4ye/JyXjsaAhekrLHI0mU1c1ZzfavHDhQn0NIahfNmro3xs3vqmnHfQ0BNexsVRA6DO/0f/6TNofJRpiQIxDP2kIAEhrSIMnx9Pn4xn6NFdLS5f+9isYfMiq50PoaogQKKjqWPeYLZ3SEINCQ0x4q6zveEIDBgLdLxuNLCNdDcH1NETYbKKm8D7zyEcUkc8qQ5S9IxtNpU0pDZHSEP0zv1C2GwVlBr3D5I00hN7WjThAhL/LZ8mfFF6yvhhNY1KASAGi/wBBCAXULUaxXxTraAgkrSFEQXmMcRY6wAKMM9DOMuIypACRAkSYCrYUoG5aXR8CIrKHSRDEzkymOB8izo84ePDgmhA0CFE0RKSi6JaWlpZ2z49I+RCDI8oEoHBrQR/7EABjioYQRSGRhujUueAAyL8+/efHiqnE1LOIIlu+Y4/6mDlzVlyDRq8d1fOfFGqodUTrMfkJqeAT+vQT0tYRrb1SbpfKO4KyE2WcijssrxOTKZGGwAsvPL8t5DuYTKawcxKrHQDg/PPPi/ufo8bRI9KgtUh/wvbM2ntMaojCLwv6VEPsmbVXX+AUtfaohugtq0ELiPAxq6HT/xiDKIqQZeUlp9O5F1FnhxuHXaHzEAlVKIoCwLmKFh612xUACgoKuzcAyUzYzL1dKjt7d/ZRDYi8yjzDcqpOqY57fstVW5Oq1x464S/J9u2ZqS9wijYP7zYgylaV9TggysuPB4A4qyV0gnjokGoAqKrat9FAO/BEUab40CtXT43jHAIRdE+A1c1X1wVzoeiL4dhfHn9wL2EEX17xFTjlsB22oiPPmbDsks+LkzNteoN475bTNLIJTSObulVn6cel2HLlVt17uv83KDdvR16X6tdK8LRmS9fGyODZUHtFn4gy2wQEWRCMMwhEUJYECFHTACByDi+AG29Y+KaBMWYYZdJikEbQxmESRcW5CC14JNGf8tenY8u8rUkNVm5lLvZPPwDCI9vMqUyR3pwOqUOCL8MHV5a720wXZWtygHAlN4PgFyB6RUN7NPS/pE7d6yFASE4Jfqs/OeeRE+VUbs1BxSDA9NenQU1eEjEJgsr5sYQT0CCF5JQg+AXIkhy+mKDkmODJJgQ1CLGGj7Q38COMjoiJnaeEfZcJfnzmjyM+A3iU/0AJCZ/wGiPkdXWZ2IkLE24xkxkEsxBGWlcyjWpVHJUpRI8Ik0f54i52Wb3wi0J0FLYDTMk3IHpEDNk1BM/e/eLhux67Pds3xYd6WwMJWoIkaA5G5XAAgPI3pxsOsPantT4dUruZpTWn+afkTHHOO+fKBktamv2x9x7JgJLDTAgNqlZhkpgDi+MmKEji2pRQgxrQcSsnYcsVWxMzAyMQfSJErwhOFeHBicLInPLw2GrnafKK41A7vRaiV+SWNgs7a/LZwdNPP6utxdeU9djyR01+mw/+DD+8Dh98GT4ELUEwgSUc3ygThgOiX4TJpeb9YBzPPPt8w+2LbgmrFVudDTRIQYNUyTehsimnDEzkUTyWaDwBgAYoHJJDOb+VKAdxa80aQRQRDAYRdQaBgUOdCBBxyJGZDEIjx+Drbd8IRaPiJCsjoAFFGtnqrcjYn4HF8+66zSQJ57344QunAwhceeXVi4YOzTdJZrPNxV3pxUUjCg8cPNhwuKH+G2Gs6Kurqc2557r7RGoVxnOrfMLDv3uovHlUs8U51BmesIJv8+NAqgWB9iqqKAo8/tDSjc5W1+ragwe/3rDyn3UjR47Ku/OuuyeYzeZchyOz6q47Ft/Owe2/eXzpZ/X1hz6hVKAWiyXHak0f9cD9v1wwZ+7p7V9s3mzr6OgACNiTTz1Td8U7lw5vG9ZGZLMcJWFjmVPvUOXYtk9bMRVf/uSrKAAQTkBkRbNZOsw4ns1wzhx5mvWN/1sBGqCYf9OC9t//7+8ynlz89B/8k/2HXS53LefM73BklT9w/30LCUjwuR+98HfOsZcSyi+/9NLnl/9mOQBg/NTxlpef/v3bi++8tVxOl+HJ86Cj0AlPtgeB9AAcNY6EBzwTRiC5JTiqHTjJcTKu+/X1FS6Xa9Oe3bv33HDjzR3NTU2Hx5aOPXXfvr0FY6eUup0tzqZgMOjx+/3Ol5Y//wqnHOf817l7Jy6evOyll56/3ef1jsmsyYA724OANaCrsWiAwi7ZIyYSj9YQAqUIRLeZ6PB5nPoI/S5AyRY6BEq2x5z/fLH1XYvFApvNCocjE4IgwCxJalaaUHokxU4rL58e9alpiPkOTq2FySmi2F3y8skTT6p98bmX/iBJZmKz2ajT6WSh7KA2m53a7TYCAB0dTq5EBTpY6B4ASJJEJk6amHb2OedMTBthuezBD++/xJnnFEZvGA3JbYoDA+fKyIQcrIcfeeyB6qqqbevWrd3x3nur2mMH2Gw2E5vNTpuaGuWSkhLx3HPPG/rd9u1tFevXRX0UfcVP5mWf86Nz5mTn5JxZtW9P9ojikbV+v3//pm0bT35ryxtT3LluyZ8egN/qBxMZxq8aByhZND1qcnIzAIkoZKjJAGD7BZUQ/AIktwRzhwTJaYbkMcHcamZPLXlmO2G0Y+U//ma/4MKLnW3tbR9vqKh4t7Kysr2h/pC/paWV+f1+ftnllw+dOmXqhEWLbl0bSokbRxkQEARHAPxXDz42oWBYwdilyx9/0ZPnQXqTFWa3pHtGbeU5O5RMRE4JF4+72HXKkB8+37CvoWJ/TXXj5v9sbqmuqg74/X4OAEVFw0V/IBCu3+V08VgeAIC33/nrwUW33jz5b2v/kTPnllkfH550GH5rIA6I1mYr/nP3fzDWMRZMTYZJqeLrBgJBBINBuFwutLS2wev1onz61AsBtEDJanoYQIc6L1wPEBRK6twQIPI+37jpTbvdnp6enoYhQ7IgiALMJkkzKBFATJs2NerIc8Y4mJqLbf2nG6bnvZL7JQDgXhxxUnCz2UwmTppknjJtSmZR4bDnOjo6rNZ0a8aq91aNDiX7CAHytdf+9NgHH66u+HbbN4fefvut5p7yn0tKSsQxY8emFY8oTqusrHRu27bNe9XVV+efNuu0S/ZV7/u0rb21bOXHf/9tUJTplKGTW26+ZdE9AF5XNfOIOxbftmZIdvav77//oeVzN8+S186oyL5j8W2Ny555/nQoOZlGArhIFIWxN99yY7GcLmNCycS/TZtc/sqUKVNvqT90aOXCBdd/mOx4GQJBSyYQBBTmyM7OEWbMmJE+bfr0oTnZOUP+8Iff/12bdAYEmDZtOngu/w4c/MTJJz267v1129d/sr61qanxyM7LeDw6a6u1zsrdQ91R5hPhBOmH0/H1kq9RnFEMzpTzwihRABEMyggEAmjv6EB7e0cIEBcBaAJQpwLCZQQIqBrCAiALQCGAocuX/+7aH/zwhxenpVmQPWQIJMkUzoMG1YkMAUIQhIwdO3bk/fK++3bv2r0LnHHITIYsy9i583ttXYXoBQpJ91D+aa30SYoZeoHs9gx67XXXFT7/3LObY++tW7+BaJOmh2jtuopQIkARwLjPP/8sv7293dVQX+/+7PPPWuoP1csLFiwoWrbs6eq+6ofZbCYhCa4d3+bmJrk3xpZzXqvVRGvXrX3o1ltueVAQBEXogmD1mjVzCvLz/80YczPG1J0UKkNyDlmW4fcH0NrWBqfTpQXEYQ0g3FAOu9EFBFUB4VCZNh9A5rZvt//FYrEge0gWzGYpnJNMcawjgNi+ffupxx133KaQbbZq1apX77rzzuu+37Urtp5CDDLinNfqraR2RmvXVZC5c2YVDMbxih2jm266qaWiYr1jx46dRMOv5ihAhF3mCCCaW1rhdrtDgLgYQD2AWgCNADxaQIgGQTRt6JUkWiLX0qhRo84FsClU+Pnnnz8fwHykKHFosX9WTAY06QmMl19+Oauz8QlHnTVh2NBYv/vuyv9B/DHMCVeqY9cGOQFoS0tLeC2Ca52+mBetVutjg3UCU9Q/ciWW36KjiZG7TqcTjzz80MYYQMQdwZQo7CoDYIIgmHw+n7+mplqy2ycgGAjgQE0NtmzZCkoIcnJzIEnSX2fNnn0rem9TdYpSZAgKSmlOmsVS8sH7H3zRcLgBsiyjoLAQ5eXHIyjL2L1rF2x2O8ySlOn1+Zo0/N3pOgRiASEzFlz+4gsfPPjwwxe4XG4E/H4EgkGUTShDeroVNpsNw4cPe1D11FlKQ6Soj4kBCHq83pbjpkxxNjc12jxeL5jM0NzcBBCKYcOHob29A0FZ9mp5W49XaYJKZABBznnwww8/2AIQiKKIrKwsjB49Gru//x733nP3b4cPH3YaAC+U9O0pDZGi/jCbggD8OTnZcydPnnxtdVUVSsePQ25uLsxmZYngwP79NcFg0BviayNQUIMKZJXBAwBkn9/fErLJGhoa8Ok/P4VkNm9a+e67/4ISx/VCE8tNka6TmNmX7w0yH0IG4APg8vp8dZdccukNX2zejDUfrYmcFiMI/li+TkZDaCvwq4zuZ4z5V7z+l4ovt25FW3sHvv3u2z9ecOGFT3HO21VA+DSASIFCn6x9/N5gAkUYEAA6/AF/w6zZsxdMmDgR33zzDb7d9i0uuejCZSpP+2L4Fcn4ECFAeKAsXNiWLn3ina1ffj1r2tTJNwBwAmhTL6daQVf8h9oeHxWDMCYhpLCb5dUmkNoDfh0lUft7SONp/+zuePRUG5kq9d0A2gFYOOfSuHGlC77bXvk/r37y6l84uFfDz4aA0FsdIipQ0gHkQFmcywNgVzWKVwVCE5SVvla1kkB/aoijBRBdYdS+qucYAESIZ9MAZALIVnk3S+VjovJoIyIr1B16fq/YCeJcKvObVEQRDSCa1UK9KXOpS4yUzzk/lMxzqdHqEoXMJici2YGYyp8hQLSqPOsz8iEShV2Dqopp0wAh9LNDVU0epMKtXSWqSv4mzrlPBwhmVcKlqGt+BFRe9CJysndQFepay8atugO6EVExScRxtSBofAuP+rs86EZf2WdzpH5EdrL7mQaauTSAQaH1Jbj6u1kFhF/9vxcGi3KJABGrJWT12RDqYkNXKe2QooFCTOPPBlRzP5ZvDdfLxCTsshA4qKZC7V6QwQqGVii7ggdiuwa76aTlWz8ie/7kzvhW7KRwoilAN8HEoB15zt2EEMdAbFfKnwgL7i7zLU2icO2GP4aePefuaKdDqfYMaGB0mW/FJPfl9xrz95Rj2dMOapLlDbS9W6y3HPU+1HC9oS2SJooUHSnVptpx7FAKEMcGM6bAkAJEChQpMPQ8iakh6HHmtELZT9Pb1AZlFTZFxxIgetiJ6nVnOwlyqVd+L2lghmMkmtTbc5/SEAOLQkybjp5ZwGtFZPtMinpLgA5ElB7TA06IHcpW+s6oQ72OKRro/Pb/7H15nBxVtf/3LlXV+2xJZiY7BEImJJCFxQ0IoL6g6E9BUHgisoUE9bk8XB7qU0DcQER8ivgEfGzyVPS5IQiEsAoEwpYFspB9JpmZzNbTPd213Pv7o6p6qnt6ncw+dfKp9ExPd93t3O/3nHPvPTXpJ8R4j9v7UlBCzqUOYxnuhkGfuSeo+AaDbzWNZ5IYzZOsYynaW+2QwVgT90ySL2N37ErqsU8SfqzJJ4jxJ8MV1B4uT8aVCRM0HyLRxii5++KTxIQAyckkdIK0meaQ+wFM3pSXFH4CAZ8kfBk293yybM6cCvts9EQnewN2zijf0PHFJwlfDktCk8Q9Hy/hpKESxfEwJks4aro/lX2S8GV43PNq33OY8GM8fYJ7Fj5BjFPF9MV3z8cCOCr+MGd5FhNtbk7xh9b3JHzxra9KpQr+k5OKGQbuYyrGu4QxvOdVfPE9CZ8gJqDU+wRRFrjWj/M2MIxMghpffJKYdFI/wdvG/CEuG2TrfT32xScJX7wSncAgWu0TxKCIotr3hH3xScIXwD6JGp2gbWPwT9kOVkLjjFx9gpgg4i9cjz2ZyCdRx0LoYbAnncfCye96jI+nJPghJp8kfPGtr4plNL2jNtjnDw5HhAegFdjnOkarH8dyuuxq+OHECSV+uMkniIlMEpYD7MYQ39dw7mtNMrItJQH44USfJHwZFpnouWy0UShTB3BwmMs46JQzGfqzHCyp9aeyTxK+DL3UToJxiI1Cme0TrJzR7s/Jbuj4JOHLqEjIcdEnuox0yo2uCV7eWEth4u9k8knCl2GQ8br3fTxIcoKX5xOELz5JTALxtwn6Mt7FT9rnk4QvvvXliy95JQo/aZ9PEr74BOGLL3mEYeJmBfAlR4iUsv8XQsZMxdx65auTt85DIWufeNLd3y1hb2nUAZhnnrFCDmWZhJAJkdhOStlcYbunj+X6DclEmgRtHK22DqNk9eHja9cR2JsCAs6ryMWDfDhwuLhZDOvK/e6YJYl5c+YSANixe5ccik4aDVn7xJPTAXz0S1/4/OXNzfuPv+XWn36uoaFxO4BtsPfB951x+mliCCbWhHl2gk8Sk5ckxitBaJpG0um0zNeHa5940vWMjgRw9Fe/cvVn9u/bt/z0M8548LLLVz0LoAXAVgcPUg5pSADyjNNPk8Pc34f1fRejB4PTGfIqhyTmzZlLYafw4I4l7L664SrhXJbnZ/cyd+zeVfBk6uNr11HnPtJzAQBxfibOpQIIOq+9ABJnRlZU1OjHe9cRAIscZZjzn9+8Zs2O3TuOhgkGCUj7P1NKmZBSttx2+3//pKamphnAI2dGVqQHPVInQcNEysn04sD8QY/3riMFx+OkEQ6xvTgK+Y3GWBsdXYd3TJz3GOzDeAFnHhsA+gCYOfPPDSu5V+LMM1Y0jk0GAEHarnc+MohGY7SpqUlLpVJi586dRjzeIzRNIw/9/ZGDsNOrHHvTD39wzksb1n8cKmoRAmSNhAhLQIEEgfXfq+64rbq6ptchiUOwU710mDDbOPgh2A+IMhwMtDz9yBzMcvGSOV6KmxIp46l48BMejE0DSJ8ZWZEXQ+edN5fk4LH38r4nPHVzL2PH7l3mYZPE3JmzKCEk9sw/n7u2uqbmvZDS86H+Hy3LSuzYsePvhBA0NDQ0xWLRhSBEKopimtQUGtVEKpWaD4koIUSasNJdoiu+6e1N5xo95kl7tuymiZ5Ez9Ily5M26wgqIBQJwaLhSPiGb31n0SuvbJgNYBok+MqVZ2371KcvaXMUvBtA8tF/PKJ1dByqu2LVauNAvEUloHzto49N/c1v7psLjigCiIiICMoqqVm1lmpNsYgx0yC1t9ZCQkJK5xJSSiktCZmSUiYvueSyLe//l5X3AfjNmZEVvaMFIN4JoGkaUVWNqKpKotEIicWqGFc4CWgBOnPmzIBhGGL3nt0pzjgJhcMsEg7TUCjEo9EoD4ZCaiga0qhGVaZybhIDlmEJIYUgjDAAMKUpQ4GwZlnmuze89NIHr7hi9V9uuPX6e15/6rVePIZ9HuCpBjDbUciuT1184Z+EFIvdaeIQr92vzs898XhTKpXq8Umicpkype4OSuhKQghAAALSP2+dlwsv/ORRH/jg2ZoJM8TBEw6AwTFUjgQwW0JUb9606ex77rs79Z3vfvdnBjGtoAxKD5hw2A8LqgYQ6urqjKTTevehQ+1bm/c3H2hu3h/f37y/r3n//vTBg62WqqpE01QcOtQhdD0bpFVVIwCg62mZTqelV3dVVSUAEKoJ0c7OTtHRcsgsSQiZHzWoqkbq6mrp4mXHRRY3HTelrq6uBgC6u7vjuq7r0Wgs3NjYcEQ0GpsHgOi63q7reoJzHmic3qBdcNH570IATbJONpozLc08woQ1w4I1zYIMSUgqQQA0fq5RSkgTEoaE1KWUppQyWbu4LvW5T39h28yGmXEqafLggZbgL2//ReKLV199IByOBAFZJQnC8XicfOXqLx2bSqUCIKCQkP9xzddbj5nftN+ZO8ImIGkQUHPf3r0RI6Vrp5562nOzZs2cqirqV6SUhDhzSVXVrYyxuBCCmqbJLdNkALBt67bfSylJfUPDwlgsttAD+bkuirzrjjsvuumHP9y0a9/e9GBJggDA7BkztRtvubWPcwbOOTRNs6ZOqesNBYNGdVVVghCCZF9fWAipGIYRAiEK5xycc6gKB1cUEA4ElSAotRWaEAJJgF7RK5vOPUbqTbqUmpTEoJKYEJICUpVEBiSkJgmYpDU/qbEgwXO8F+l5BbEbQEBA2q5rp0SAAESCSSKCElKVECEBqUpILgEOSCJx5IVHZAhCSOESRT9pOGjX8IEGa8+WvWmkkSA6em/63s2vRSKxlxUo8c2vbJrz4xtvOjkWifX9/Be3bwchzQSk5cmn1u38w29/v2Pz5s1lpW+YO3cuX7nyrKnTp8+otogFlWk8Go1ENFULA5DJvmQimexLxGKx6qpYrEFRlWrGWJAxHpWQQgiRYIxVSymNdDrdRgjonr17Irf8148+JiLCEnWCWtOsgDnNCogpliLCkklNUiiSAoCkziQkIJn/JQgxARKnYB0U/ACXrJ2BJhihJgEoIIMSokrAnGEi+EIQyn4lQ7wZkpAD+tT9/bdt7e1fHDIkfQHN1glWNXuJdXnfbvhovQQFCCOgnC7ff3/zBgA4atW8GippB6ccjDJIS8ISFizTem3rr7ctcb//iZs/3vnkU09WO2269sCfD347c/OTMf222247f82aNb8dSlKofWfNdqvB0mRYUhkB+F6GwIaAPY9AQKj96hJGPyRI9HwkDn6AgcRJxrYVqoBUARkQkAEJEZGQUQERE6i+tXogUKCAsy6BU049tfWj5517lzBlXFjCYIxpTz/1ZGTpsuVvcc5Ub1TA0I1ER2dHu7CEVVVdXRuLxRpUVa2SUkBKWIqiRBWFT7Es0ZdIJLanUqluhfOAhJS6rvdaliUYY5TABinKqKapWljVtBotoE43uTUjTMOBP/z+t8f8+S9/5tXV1albfvJfb1NKY5xz9p3rr52/ZctmTkCsWCxm9cR7aPLDSUVEJbMaLGo1WLCmWBBhGx+QYy8fecER/cDpMXoOfrMVtIeCJghgEBALkNT5BIUEAQGXRFIQ26aXgOWMl+sbCBumMu+nCYgJkAQB7WK47srr8ZFlH0EtrQUDzcwh07RgmAYMw4Rpmp5XA5yzpKooSSEEQqFgIpVKK319KbWzqyvU0dkVMk37s5Zl3vD5z6z51sG2NpHLJsVIIqt7ptVN4bfednubovAqF/w551A4h6Io8L6Xe3lJIqAEwCjNkAQIQUqm8NFrPoL1jeuRPjYNK2L1U4ATZJLErh9v55j5bzMGEmOWX0Myv+/8za6yJ+IxF8/3ehE2UXhIovMTXUiclgCxCIgOwCL2QBoEJElAkwSkl4KkCIgJCdMeZOhEkjQs0kdMkqA60WESnViwiLX60tXtVDLzjZdfi374Xz7SHdIiLS/885+19z1wzxwZkGrTuxeyN5pfV6w6wUIPB00AdMWK0+WnLr7ktb179yS/9f1vvNecaRKpSMiAhAw6E191hpEQSMUhwpCwAbzOglVjQUQFREgArL9/UU7oU8LuA6d9xKD9Ke64tMGHSzTc1IDg5sAAksgQsOfK8Tb+6ejhO90iRUzYZRDHRCD9RkEmOEK9GgMCCgIG3HrbrStv+OV3b92b3jvfmupYhkEBqIBUAcIAUAIiCSgoqEFBJQUxCKRl64KlWTjl2fdg48aN/bohJXrf3wu9SQftpFB2Kf95yUWXnnHnvXeugJCA6bHsibT7mTuvzPO+E0wlJrFbYgIw8CYk3rZmWe81G6yAmGLBqnbqrEhIJgEFmH3hLJsgnPnk1X23T3fduRvEIHY5bgDEHXMG+17E7j9JJeZcMLtsgnD/3nVRN1gHlbSbSpIkkqSJBQsCaSKITih0UKKDEsuu3J0/uvuxxx97dM799997pDNyBADVFmk02dIHkgYWHNUkP/+FLz3LKIs+8MC9TY2Njb1HHDmvc926tdOefeZZAoBKKgk4qAxLJqYIYswxmFVvoeqOKrfvpYMJrtHTT6LOz/vvboZkMjM2xWTBp4/JgKZXf7ffswNEkLzGultW1hyTnlcARJL8/SsB1kOh7FXw/Q/9AP8SW4kZfAYYaGY+FSMJlwRyL8MwYXh+/+Jnrwp3dnelE8mkyB1ht718YJOyf2491C46OztPmDZt6rbDXXyRDrG6wgnH8gXL8er+V6Ebut2hLL9imlNMqKqapaD9Bm8OWRBS0RMDFK4M9CSca+ePdsGcUtwDhnAGWzg1ERlFIEQQCgsKsRCEYQMsAPzQ+GEjiARWEDyU+DvQA5AjCOQ3bdB/jj8HGZAAlYhfFMfMi2fg2WefwbPPPvMeAgI5H+j8QlfGG8pEH0k2e0qaDQQ4nHUwYoOd5NLjzA0UzhkUVcmA1QACzkMUzpi+M7s4goNfawUxCSSXRKoSoGCSSntiiv4quM2WTlvBJT7ZctHD4jzbYpaKHLDh2zt5syarzJ7MW+/aCs55xnDY85O9MOtMmzQFASxcd4t1C3CJx6+VGGDwgDhjkG+KCEKc+iwEwUI3kpz5fM647X5gD46++Kh+ksgTKhaqqOgkg6IqBQkhL3lIoPesXkCAQII4RMAyY+LoO9EBmAREAquvvHwlACiKknXv5staQHspaB/Fems9uWjTBe+RBMBxAIisRZzU4gQJnOgUzWBHBIJ2dECE7XGuu7suY+x6iTOXIEAAERBZc7iYcM6zCDijt7ICQ0sO7NPMd3PmGbEIJAWoyRAmYQRIAJRQYIiXyZsPHkgLIby1z6ExgHuUK5cgMteaKy/f/eAf/zTk8VUKissvvAJ3X3s3aJp6Akf5Zetd27DwiqY8fZpNFASkos5knPVbCcJ2I6WQaP1QawYMSoInkXlPnUhIBN4MILUgdVh9tfd/9+HIi47ItM8MmLBqrTI0sry3h1I45dmTqgAB5yGJAWOaPjrdr5nDuEM7a7KSgQAhhF339v/XbuuEO+7Mscor7NjgmwH0eXSi5Pfz/Hnbr7fj2FULMwTh9pkXxCsRRVFKlp9bT0n79V4qsvIynK8Ys4xsiMo1XWWB1xzZ85u9OOriedmeVU6UIfNzJRjBWFads4hiWBQSoCYFSzFUsxqoRClbV8rVRSnlU0IImqcnpBO9l/k8iQEEgaE4cCcLexhhGoKSUMD7GAyLeKzUAkZ7vYB6SM1PFGRwYEgp7XcjidPNVKLtQ+0VK0HVc1WYfldj/7ZeOXDSSkhsvbNyx+zQ6kNovNPeYKLsUBC7LDZgLSkTn3aBwwsgBHjjto0Vlbl4zaKSHmJ/+Rnn3vZwctxzJlm2Z+GSRAkCrmRMF1x+zADQHOBlOq+ZmH4eazyrjkzaOiKBQx/uGJRONN5ZOknqm796q2KdaLmkBbPumTVADwYDYJxze72wnC3pnjBhJeJGAwoCGSnDApcl9KEBUA4pA0kBgycJFyMGLOwOgiSOu2rxQN3MQ8L7P74fU6dMQ5RGwR2SkLCNLVLEYhJlhlHi8fgNyL+zNMuj4DlDk0sOmVfLEk9zjlMG5TEQCmdKDgD2AA1CTSpgKQ6qUwguilqMb177FpZ+fknpQisIN3mBw54gBK0r2ip+yOXcX85B9LVoP/XmmwzOe8deuRCbbttc0f2739GDWXfPygt+hchiAHhX2KYsCwqFy8v3nhdsvISRZYkV6KdMGyusr9dSzVs/r0WZS6Te/vOApUsWbae3V1yfOb+cjdhrseJ5W52mL169CG/8vDIS7zipE3Pum5O/74dwrIdinmVCu/mQ9bBPIvXL9u/uwHGfXTxQL3O9jwrKpJQOIM9Kw9qV9LOUEjN/OxNf/NKXUM2r4Ww6tD1yCLA8iygSEhYsMDDoZTzm5LJLPvVMDkmIPCEnUsqTcPfYkvb29u/NmDF9UCRRiPUICFSigic5eIKBWHaMt0DcNiO9RycQ3R4ZlPdSLtgdWHmgYiuhemP1gAUwW6/y32juf8/Frst3VahgHKXO1xQF7wrblM+CqqTcXNDNrE/lTDg5YIfe4MJj+SZgqXoVIrhc4+HgWQcrrk/NxpqKztgPRicKrUkM51gPuozM+MhhDYMm5ycR3REd0roPRR+X0sfcz11wwYWQUiIt0kVDSe77DAxW+Q9MdLfeugRBcgJ89pgV8CK8BEEB0KtWX/Hc4KNNhXuSEYbTTzgDPMFBUyz/cbyca9uabVkhgnxXqXtkXXkmnKVald1D2JNs4EUKvE9Rs7G64jIYowXv5165feF9r9LySvVzsYXTYvXIrTNj2Zf7/lCMwWDqn+/vQ6cTha/aTTWDGqO8QDSMYz1YfbLHduD4V3qfUtf2z+wYNowY4AENUz/nRmMAwJIWhBRFDXECe7deCU9lDwYeuKMe/O8PQxaJBOcLOw1KisXPGBhWnrISf/u/v4KmqL2ThZSm59ZTWjHt6WlD5gYPxfcrCb8MtpzDzq81hG79oHSh0vqPdP8Uu68YgfYO5RiNxFgPYnzy9skw1LXt1LbhxYgRnE/UOR9hShOmNPOGm0gFOzuSyeQDnlCTN8SEXG+CFyGHXIKgwzX5TjzuJPB7OGjK2Xdfhnu+94P7xhxJDAowRhq0R5kkxnV9xTgrR0zuug47RoygThBCIKSAIQ0YwoBKVVAHKMUgKvHJCz9+I/rTdRAPYQwgClqmJ0EB0J7u7puGvPEgCNAAWIKBJxkaH28oK+QEAew9e9/QuIFD5EYOWsmGu4zRLG8i1Xe86cQErWvjo41lf3ZYMWKYdeKKK1Z5Y/aQkDCkAUtaebeLVyj5wkxe/Pd4MaUw3EMU991776+GYq7lNlAlKliSgSUZiCCYd++87E1ZBa7Wd7YWK6T863C/X+w+pTtj+MsYzfImUn3Hm05M1LoCmHfvkaOPEcOsE8uWLcsuSkowMGhUA/fsOcpHEmWclci3BkHytA60SLUHhJ4efvih3uGYe5xwLJqzGCzJQUyC6i1VZbPy1su2+p6E70n4nsQk8iQggerN1aOPEcOsE8uWLc8KN3HCEeMxRFkUnPCCHkQpgtB1/Z85XkQ+gijoSRTIPlLe4rW9a4GU9CKEFFkNYYRh6TFLwXt5Jm1F08+ayurw+OxenyR8kvBJYpKRxJjAiGHSibwPNgIBJRSc8MyZiYJxJEaLbpN/880tt+R4EaQYD5QbbsqEnNKp9PPFK8iKVtA9DJLbAed/+HzwBAcx7SqFDgTL7vQ3vrDRJwmfJHySmGQkMeoYMZI6UaYQCju5ZxFn4uv/8dUXc4z/okRRzo6lLJJ4++0d/1OMANw90MU8CUtayM0+WxerA08wULO/rsuvXVZWp+tR3ScJnyR8kphkJDHqGDGMOpG7HlEWQRBAYYqDsrLS9YjCywE5zEEKLK9kiOLqf//i4488+ngBkrAvRbETopUKO3k9CZXaJ6+zMjMCYEkGSyt9gvDlazZg+Xc9HWsdJiBYIwSC1giD7kiXN8L1ffmaDYdV3Pz7jkZ0d3Ri6IQ1QeuaAy2jhhHD2Mfe9YhyhVIKEMCyBChosa2xNE9PFtzCQ4vi+ECiKHleQgjhPDeC5iUGSigCNJA5QeiKQhSwFAOMbGJb8qPjy2ZovUr3PYnJ7kkc7iV9T2I8eRKjihHDqBNXXHFFxUPBGAMByRvSd6XlQMvP8oSZvElwZCFGKUQMMseTIOWQBAgB52xgAjpPkr/clXlKKN55/DvB9IG3j+6OlBd3vHKjTxI+SRze5Yebxh1JjBpGjKROlAw1ETDGIIQompbjob/99U9lhJryLlznpojNZZQskojHe9YWdD+khBACnLGMN1FOfnMKio996LzMwnVWCOA388segK6junyS8EnC9yQmGUmMCkaMIZLgnNmnskXxNOK/++3/tuQx9gulCs/rSRQlK5eBXlq//v7CJAEIS4A4Sdtcr6EUURBCcPKSk/N6EgBQt7GurAHY8eG3fZLwScL3JCYZSYwKRowRkqCOF+Ea6CXt8eJnI0qGm3JZJe+6xPe/992iq4OWsPpjZE7OkdIMRBBgAVAjP0nMfXhO2YPQurTVJwmfJHxPYpKRxIhjxDDohJQSZ599dmUkwRgooZmnJxaSVCr1VpFQkxfvs27C83yQlBF6oqUaKoQA5woqOYvOCMsbbnJl1rqZ2HvqvpL32XvKvjGZ4G9Uyxmt8ka4vstvXTb++85P8FcCSTE2MGKY+rgSkrDT7hP7+fFCFD0fceDAgSeR/1yELPYzLTIMpU5flyQJ15ughJSVhIqC4ui5Rxf8+7RXp41ciMH3JPxzEr4nMa48iRHHiGHSiUq2v1JKQQm1M1mUCDVddumn78iD3yUzS9E8DCLL+DLd8fbbdxQmCWeXk7TjZaTMJ14RQnDqu08t+pl5fzvSJwmfJHyS8Eli9DFiJHWiCEnYC9YSQpSV1K+iUFMpTwIossvplpt/9LuiuiPs/EyEEDDKcm6evzEEBGd/oLirVb2z2icJnyR8kvBJYvQxYpRJglICSojHiyhJEsXORRQkilKH6fJ5EwQA3bRpY6JUyEk6zEZJ6cR/rsxonFF08QUAFt+3yCcJnyR8kvBJYnQxYhh0Yvny8kNNhNheBJzITTHY7OnpebVEqAmFepZXSBC5axNZ4k3uJ6Wb7dV9ZCGFlAJC2vt4CyUBpKR0aEqNqyMDCCMFgiMNuuNJ/CfTje36jrGF6xHFiGHo43JJwn0MrBD2A4i8hnXmueEeeeyxR39dItSUb7mhoCchS5CFWwhNJHp35MbHGGMOSbjrEjITdgLJnyo8N+RUVmf+apnvSfiehO9J+J7E6GHEMOhE1tPoSpCEDdB2xEY6i9aEECicD0DRn9zy49cLhJoqWrgu5UkMWJvYs2fPc9khJgFFUTKhJSEcgnA8B0IITGEWfSYrIaTsDIhqXB3ck6HGyJPp4g1x/8l046m+400nKrxPvCE+euMzTH06rBgxxDpRLMyelRDV8SKcSBOE7P+rwjkopRAy7/pzbqhJlFMzWqYXITBwXYKsuuLye7NIVUhQSqEoit0Az7qE21Bd6EUP1xEQrFp1ZVkKsPh3i4bNSoi2RIbdEmtZ0uJ7EuOovuNOJyq8T8uSlgnlSQw3Rgy1J1GMJLwRFpckXJR2t75SSsEVbkdqBt6rkBfhrVVZCf4KdUMhoqC5noQQIsNmgMxiOeH88yb6KxSXK7V47Ur17qphUYB5a+dVfJ+XLyo/TXWytg/xqb0+SYyj+o47najwPvGpvYjXl+9NvHzRhorur8bVESeJ4cSIkQhB5hrUWQTh/N3FSkXhoJTAsrK/s3fv3scGG2oCKlu4ljlDNGARRErAsiwQSqAoCoQQmXUJm5EoAjwAlapDN3HXzcPLn9ww5IDAdDaocMHLn9yAUEcITQ8tyB9OqI9j6/u2DfTbyrGK/m/R0IRMxpOMofoejk4EO4NY+LemEdWJpr82YcsHt1R0P7cec/85B3U76vJ+5o2PboQe1iuv6x8WDc04y7GBEYPVz63v25pl4FOTQuvRcNqs0/B299uYGZkJRhgMYdp653lcqUsSUvaH8qWUYIyBMwbdMAYcqnvyyXWPFwg1iQJEIcshiVyyEHk8CQAghw4d2lhfX58ZfWHZW7E4YxCZxjiTjDJoRLNPCJboXJcdCSm9kD1tyzS0HtM6+HEuUJll9yzFhn99peT3iSQglj3Y1KIwuYk3PrIRFrcguICkcqD1UWmoozUCtVc9/DaK4qNNpJPKXTgbDeTQonQ543m4fTWcsvzeZXj5wsoBp6+qr/j3BtHOSGsESlwpuAkk2BGAGldtQC8y3kSQzHgDgCQSe07Yi90n7smYg5Icng7XvV03dOMsi8/b3PcJIZi2eSpaF7QNGUZk9HgQ4xaf2puFHTzNQUxg0dJjoTEtA/xSygHzxbtgDUn6vQjObaDOk7/ptp//bGMRL0IMxpOQZd6QACB/+fOfHrj8ilXf8bo/QggQzsE5t8NNnkozaj8Yo1TSv/nz52Pbtm1ldfqsl2eidX5rSSCHdMBPOplpiYSksigQLr13CV77+OuZ7+e7L9MZtB4NoY4gVn/4qt4tr2wOv/D6C0SPpZGs7UM6loIeNuyy3MmWb+IVkGBXEPMfm39YpJchXcsBBUlADQpmUrA0B9OZ5CkuufPz8U3Hy9c3v0al/cVCz8Ed1GSrhCiIIGX304gRxf3L8PIFQ2OZZuklAGLPfc/fPb973g90BXD0P44qmV352D8uxJsfeAuCCYAA1CKAo7NKikPpU6AkVVkbqEXDtAb55vYt1NQsmJoJS7VgqRaEIiAUC4IJWKpt9LjGT5ZOFzFw5j4/5/AscmfO2sZYP4jm6vdtt/0ytWbNqkCuzk1fPx3t8w7197e330k/omX0zdPXkgzEiIwei8OcFQIgJgE1GJYsWIogD2bOPlD3HIQj1PMzcSothe1FuGEmy7LyzX+aB9NFOQRRypOQJVwTACC33/6LzZd7tm1JKSEsCxIAozYYZQDK+9AhQorWbMWK07Ft27aSoOLee87zc7D75N0DJh61KFiaQUkq0Ho0KEkFPMVtZWASZiDLPZNZwTTn/8X3L0L7gnZQg2ZIRqJfkYhJwJMcalzF0vOWP7rsHSco//qOT0lJZLBX9k45YLTUtMm22K//746wpQluBAyiR3RiBAxYmgVBRUFFa3qkCaHOYMVkkPdnCUzdNAVKUhGsjwueYinaR3tOf9cZhz501ocPpJLpA5ZuNQtLJhRFifBFbFpQC1U/+ujD9Y/949EaEEQIIUEACgAOCSYhmaOEsqqq2lq58qz9M2bOSO3Zs0dWxaooCOmzLEs55ZRTAuueWDv73nvvUVHknEwGiJefgIMHD6a3Hdym6SHDHideGpAq9XzKIax891x2/1JsuOCVCtjRO7nt35nBwFMcWlzDOe85t+vhvzxULSEhmASRALFohikEkxnAmrplCm7+1i1tdedO7XzqqSeTisJDb7z+unj3u98DQglbv3597Kkn19VnDK6/HC2NkCHNoCmIIBa1qEUsohOd9H3n2u/FiaQbWlpa/tHR3tF85snv49NnzFgWqYp8kAfo4uu+8+1QT6oHUpE2aQQEzKAJI6wjHdVhhAyYAdMmEi4G6HLTwwsQ7Az2b4OvlCQkQC0KrnN7Dsc1hNpDmDdvHq5cfVWnlEgKYbWZptUOIN1+6JAMBoNnx+Px/v52ij3qoXlI1CdADWZ7/cK2e0ieIItkNgEK9zVvXiSCQFcAQhGwFCvznUqMGiLsCARLU1SpVVCoYmd0lSJDEhn9y+k/KW0M4ow5W2FFofxN5exqKkgWhUbN+xQ6DkAFEAQQAhBxrjCAAAB1/UsbHuSO58A5RzAYQDgUAlc4CKGgBFAUFZQ68TSHtl0C8B6uc2NuLS0tOPvsDzpZDmlJIJRSYuM5m8B0e+KpcRVajwo1rkGJczkzMtMKILQ4GoyycDisBINBxhWFWZYleuNxo7e31/CWoQUCTFNVFolEFK4oTFVVSgkhljMKnHPGGGO6rhu7d+3q2b5jezIWq+INDQ0apZSYhiE0TWOxWEyNxaoCkapItLqmui4cicyeOqPuxOff+ueSO5+4Y3pySpL3VaeIqZmwFCsDBHNenIO6nbVlA5e3H3JfpZS46jOfOTB9+sy/G5apQyJlGkZHT098986db+94/vnnW3ftfDt16FCH0PW0BIBIJEqj0QiZNq1eOXLevNDMmTMjlmli165d3Tt27OibPXu2dvySJfVNC5oWdnR2zKuvb0i1t7dt3rxp07b169d3tLYeNOLxXgkA9fXT2IknnlS9oKmpMRgMhk468aSl+5ubeSgUWsw5OyIWq6pedcWlYUfnrBtvulknhCYBmdrdvRvfv+uGOckpSTVVlWJ6RIfpnZBea5YASx44PrdvJLHRyfsMd1KIKLImZRnEI6XEaxe8njW93PANEQRUUNtSFNQGJufiKQ61V0WsNya/tebaQzVKDedEYf/5rWtYT28PCAhWvv8svO99K7v6jL4DqXTf61s3bd1dU1272TQNUwhhdnd393Z1diZS6bQhhJBSCBkOh7WFxx579PTpM86yTHPZjJkzUtu2bX/g9ddefeaFF19s09NpMXXqVKW7p8da98Ta3oINU0CgOEbSMcepl3z60mX10xoWaJrWQCgC02ZMnXfNdf+xorl3P/SoDj1mQI/o0KM6zICJ6IEoZq6fUTBckiuvnP+qbVASmTHyqEmhpBQEujUcFThaXvmB1btZj7IxLMK7hCk6dF3v7ksm21rbWg80Nzd3JhMJUwghe3p69JaWFj0Q0OjChcfGauvqwgBgGIYppZSEEOLOZT2dFoZpWno6bfalUsI0DEEZIwBAKSWRWFhVVZVTSaWu6+Z55398HwDja1/98sf6+pK3J+uTMEImjKiOvtoU0lVpGCEDFrfK8jCoSRHoCSC2P4qHbvw7FtQugEpVZ0E622uxPYz+eW2aFkzTXrewhIV0Ko3eRBK6rsM0TZimiRdffPF3a1avuh9AGkASQAJAr3MlnfcN2E/rFvkouxhJIIckAh6SiDqvQYckfu8lCU1TEQ6HoaqKnbeJ2mznJqOy2T3Hw8ghCUIIli5dkvV7IZJwL0MzkIqloMQVPPrXx2vn3DW7M6tVX8X00QxTaJpGIpEonTdvnrps2bLqGXNnNkbqI7N/9cfbv93D4jGmM6VqX8w+UULKtG4dryaXFCCBa6+//m9vvbXtp/v27T30wgvPd2x4+eXUcLRJVTUCAPF4jyj3O8uXnxA8fsmS6jmz50yrqa2dGgwEqgilmmmaqXi8p+XAgQOthmGYDQ0NU6c11h+3acvGk//08B+OveqLn7EitbGXbv75jef1mr3EUixiahZM1YSkEo2vNEgA5pe//JW+6TNmHbQso3PrW2+164b59vHHL2kDkJje2NjwiU+cdymAMCFEAUAvvfTSx1atWn1T4CfaI4+fuI7OnNF41Y033vjTl15an+nXT37yos5ly0/8JYBqAFN+/7vfLo5Ewg0fPedcQ9eN8FVXrwocWHIQzLBJgKcUcIOBpRiYwfDRD57TvfDoxQ/9z513fvxg8wHxg+/9aJepm692dnQ+nUj0tgeDwZimBaoIIcyyLNM0zWR7W9vOV159Ze+rr2zo2bt3n6nraZlOp4uaqgsXLlR1w5Dbt20zBj2wCgiCzu5F0wENw37VqIYzzjgzMn369OC0afXRecfMm7PhtfW/XPvk2iDXecZ6d5W4X5kLe5Atx7XYYTUnFEQNCp7m8tz3ntM6XZv1fdJHmlv3HWzevnV7x44dO/ra2tosXdelfZXukyGTH6C50J++FvraljteuGNBfEYcRlSHpZSeDkxnCHYFcCwW4d6v34vZ0dlghNnheEns/aBCOKmN2ACSEMKCEBKmZaGvrw/JZB8Mw8iQxA03XP/VPzz44FYAKQ9JxB2S6MshibzeRDkkwRyS0BySiHpIIgRAe+jvj1zX2NjY5JKEoigIh0MIaJodL2PUeZypB+zdBRgpC5LE8ccfl5ckcsnBvYQQuPSyy9Z9+eovn16gXaNKEsVANhKJ0HAkTFRFIZwrJBAI0FA4zGqqq3ltba0aDIXUuXNmf/ONN944e8PLL2fiYjU1NS9+6d+v/t7PfvazLaZpSWGZsqur2+zp6bZaWlqsEZs8Q9AP3t+99Y5GY/Tkd5wcXrxocS3jHC+99NKhnp5u88gjjgzOP+aYusbGxvpIODJN1bSwoevVs2bPfgzAk2ecfpqVr6y1TzypOCEzc/v2t2YcddQxuwHIM89YkSnz8bXrMusw73rXO4547rnnDziGknvPgGMkzQSwrKur60ghRNqyrOSe3bsCjdNntKVTqe7unu6De/bsad21c2d3Z2eHeeqpK2bMnz//+O6enpbPffaqZzABxDV+ampraG1NLQ8ENEoZJ8FAgHzsY+d+7sc/vvlTDmaAEIKVK1e2fOy882++6867nuiJx42e7m69p6fb6k0kLNMwpWkaUjcM2dnRKQ4darfGUlullM2lvKIFC46RrkFMCQWhZABxZuGYkLhy9WqsWbMmB9P649/95yL6ScKyBISwYFkCpmkikUwilUpnkcTyZUs+AUB3CMH1IrwkoQMwB0MS3pATcyaUOyminisMIHDZZZcf/9nP/dvXMyTBOYKhAILBIDjjYIxmnlLnJQnX94dEXpKglMY8jci4Qh2dnSuuv/66u/7xyCNz3dV8IQReeHH90prq6leLtGk6fJmwomkaSafT0juRB7sOUa48vnYdB6Be++3/nJFKpUVvb9zSDUOahiHj8V7Z2xsXXsKrq5vC6uunsc2bN+v+iI0/KYckAGDNmtWda9eurc6QBCG4/vrv3HLOOed8MQ++cillcqDhi8xaTj9W9mO4ZVnOJaAbBhKJBHTdyCWJCxwM9YaZ4s7vfTn4elgkwR1PwksSMYckggC0V159/Z7skJOGSDgEzm2S4JxndyrpP04nC5DE3r17z5ozZ87aYvGyX/ziF19YvXr1LWWOsU8Sk2wij5QQQnzdmiS6VYmR0dHZWQ2guramZlcBfKUOSfTlIwnPuntRkkil00gmkzAMM0MSzc3Nb5618v3XOaEmrxfhJQkj1wgfsG5STr8ge4eThezdTgQASSQS7dmdKbK2uRbddVKgz2traxfnqUuWVEAQvvjiiy+HawxU9PnampquPAQxpHVwnyeRC7FnrXz/D5DNMfnOrsti+FoOSeQ7JzGgEEopf+8ZK77X2dmJtrY2pNOpTAjIfXX38LqnsIUQONjais2bN+OtLW+ira0NiUQCmzZuvCMYCMymlNZEo9H/wthJNeeLL774MqSOiYurhJAo53zar371q3P279v3eldXF7Zv24Y3N2/Gzl270NramsFNrwchPOuxALB/3z50dXXhJ7fccj/nPOQQSjEj/7DPSeRjISu3IEII5ZxH1z7++IaVZ521rK8vhb5kHwixTwAauu0KpVIpmKZprzcwBoUriETCkBKYMmUKptTVLbOE6JJSpvI0xhdffPFlIhEE8YC0JYQwr7zyyhcopec/+OCDFy1Y0PT1ZDKJ1tZWpNM6TMuEsAQIIdA0FcFAEIFQEJwrzs0IorEYDMPAHx/8XTtjTLUsi+QhiIqwlZTxd+/itbvDKea5ogDCnLGqUDA469G1674SCAQQCGjIvGoaAMA0TSe3k72QvXnTJjQ0NmLf3n13r1hx2k8B9KCCrVmDED9uPBlmn78m4cvwyVDqlnddwt1F6h41iBKgqrWt/ZldO3di6rSpiMZiNn4C4E4SVUsIpFJppFIpz2sKZ55+2tdT6XSrlNJdrO5xLndNwrtoXdSj4OXOuxwvwl3scC/LtKxUMpU6mBvaIoSCUgbGKJ55+hmk0ynU1NTiG9/4xvUvvvjCZtOyOqSU3U6lU07FveTgiy+VArYmpUyPZHl+r/sySG8C6E/uYTrYlwagSECZOnXKaZTSakVRpq5bt+6nnR0dwXg8jlNPOw2xWAzSMD2Wvn275ub9O9O63iWldLe2uvc1kH1wruRp63JJInc9wi1QdxoTcEnDNM1kZuuWlOg41IFNGzeiuroKtXV1mHfUUdj59o7n3/veM39hCeF6De7JP/f0n3dLVlm5RXzxJUfqhtjiK6c8X3w5HLIQHgOcOkYzBUCFECSdTlvvete7LmGMVW3ftv32gwcPYsvmLejs7ARXFCxafFwGdzdt2vSKEEL3kILuMb7NoQ435bpEiuMSeU9euyEn9wS2ds455y76zGc/e1UoGEIkGkE4FMbFF190zdNPP93seAvegx1ekkjlIQlMNpIYRP6h6SNcv+YK6xeCfUp5JKVLSpkcAS9iwrZtGPss39vaKJBt81jpkpywk/fIQdi53FRIIef9wAsvvPiV6pra+YlEL3rjvTAMA+9735mfF0Kk0H/COu4JNfU6uOvirFUOxpZLEvA0QPHEzcLIPoEddhqnoH/nlOvu6DkE4V596F+DmPQEMRFJYjTq6Mih4Qw7OWGmulHQj+bxrN8+SVREFAEPWYRyiMLF2kySTU+kx8XZOLLPRqQcrDUxBFlgva4Q8bhEplNIbmZB11UKeCrufT/tIQSv55C7DjGpCWICi+54oSMadiKECCnlgWEAugaUd85oOPrRl4kZcgIGbk31hqHcEH/KIQrNmVNKDknkpuFIYGAyv7LD+LzCRggP66VziMP1FDTnvl5Pwm1c2kMM3tCSN04mfYKYkN5R+yh5E9RT7kEp5aBzARFCGID60e5HX5smPFHAA+RekjA82Jn0kIQXb03P51yDPF+kpmycrWR3U6434W2A610k4T5roN/T8DZQz3m1csjBJ4iJLd0Aqkax/Po8oQ7XgHH12p1w2ih4PuX0ny+TgyhyvQnvzqeUo5sqssNNQHZ43yUG76J12YfoButJeIkicwjEQxJ9ToVZzmctz+csnxwmrTeRIIRUjbFqqWOQDAr2n69Fk4YocrFW5BAAdy6XILwHny3kHFHI8Uwqwlo+iMojh+kosrduuRV2K+1tpED+56r65DB5iKLZP3g2uH7ze2FSehRe0sg9hpAPb3PTJx023vLDaADxsBZB9noFKeI+wScHH/B8ovAJwpeKyQIevLVysJYMF97yIay8HOT3fPGJwhefIHypHDdHBHN5pXvyJxrwD+UDaCZynYapfs0AamFvm/YlW5IAusa6LkwCkh4vhDFswn018GWUpcN59b2KbPL0xZcxIT5J+DKWgFEBMHUS90Eb7AVJX3zxScIXX/KIMUnJwicHX3yS8MWXQZAFAIxW+ovhFgHggD/Uvvgk4YsvhydeIK2HfXhovIoF4KA/pL74JDGOZIzuXqhIJtEOGC/AUtghqbFMGhbsUJLwocaf++MWX/yOmuADPPm2UAZg54caSfKwYOdVSvka5xOBTxK++DJxSVKBv4Dsk4QvWfL/2fvuAEmqav3v3Krq3JPz5l1YlrCw7C4siMoC6kMxEYzPgIDP8PQ9UZ9gfvpEMRNEQH8qKggYEAEVRBYkCkiG3WUzGybthJ6Zng4V7v39UVU91T0dZ3rCztxPi5nZma66de+55zvfuUmShMR8Igl3Z1f3TOpSG/u5Zze4u2mmZY1KkpEkISNNiUMfCsZOSpxKuIe6WLLKJUlIkpAkMdswkyuUZ+OK4DBm9qwKwB6XkNt5l48mzNw27WXZsCQJObvpUEWdrAIAM3MucjHUeoiqHzI9VQo+WQWSJCSmBqF5/v5R55rNcMnLPYReYrzyk5AkITFF0fN8diy1h1iZXUKTqajxqktCkoTEFEao8wkK7NXWh7pTrIW9IHC+D3QrshtLkpCYGrB5+M4zObg5FWiFPZ22bx7bcbPsytLpSEgVUQ10YG4Obvowv8/PkH5HNpbEFEGbJ++pzBMn2oH5l3qpk91YkoTE1CA6T95Tw6E//lAJWucR+QNyZp4kCQlJEpMkiPmYr26eJ0QhCUKShMQUOk9JEJIoDnXUya4sSUJi6hzIXLdDOePFrgM2h9tYQjachMSE0CarYM7XhQwCJElITBGa5vj7tcomnhd1IhfQSZKQmCLM5U3QAtJ5FHSogTn0PnWySSVJSEwN5vomaA2yiedF3chZTZIkJKYIc3kTtCbZvPOijgKyGSVJSEwN5noaRp4lMD/qSKpFSRISU4S5PBtEDlbPj7qS/kWShIRsG6mSZF3Ny0BHOiIJKdGl45B1JoMBCUkSsxNzebBPk807L+osKptNkoTE1CAk301iDtSdJAlJEhJThDr5bhKHeN35ZXPNHcjjS2cXZA53emABGAKQKvF3AdhrVWS7VIZGWQWSJCSmBnN5gdlsWD0+4lzlIuUhkihmPoUSBjAqu4nEdEKmm6SSmC7M9OrxzgoJIh/BdM7zOpzvgY4kCYkZRZ2sgikBr7Jz73TuKZEfciW9JAmJKYKc+TM16D5E7jkXEJZVIElCYmow1zdBmynn0X2I3vtQdcS1sitLkpCYGsz1TdBmQiXpmNq0EHeeIRWnDTkDTJKEhGyDCWMmVgz3zZFnzIa6LAdyuxXpoCRk5zpkwOfos6QvkZANOw8hZXr1MTxHnzVbIc+MkCQhMUWolTY2JUjM0WfN1n4rT5+THVhiijAfpgzKXV/ndp3KqduSJCSmCPNlEzS5uGpu12mdbA5JEhJTg/myCdp0k+FMTEvV53idFoIcT5MkISFxyMGYJ8+cDZAz8yRJSEwR5tMmaNOdGpmJKal8jtep9B+SJCTmaSeXkJgo6mQVSJKQmBrIYx2nFvo8eeZMQ85qkiQhIUlCQkIShCQJiemEnA0iMRdQJ6tg/iBzfCkRHTKFFkJU9V6b7v8HASAA4ozTN4rJPq9IXc6J2SCV1MdM2FU17UO+47h3ndOB5X2bHnAbkwAIIhJzpS9OuM3dh8w2kihUrmpXikMQdY6qMmDnl40zTt9oVfuZRNQxR0iicxa/c78QIj3NjtOPaV73UkkbVPldW+eIIu7MEyyqsCeV+B2SMHP9Qa4vqIbfnIwPng6SUGc7K3r/bYqILAzgaIckkgD6AfTft+mBUQDW6aedKqrUueQmaBJzAXMiZer1K5vu/wdtuv8fGuy91FqdrwqANIABAAfv2/RAHPZUZ16pk87nt2bI102vklixZGnmAztf2SOq1WDTiU33/0MB8JZbb/nNG++84473NTU3b77iyqu/D2AngN0AhgCY1SCKuaIipJKYv0qCiGoxR/Ybc+vPyST4HHJY1d3dtfJT//XJqzo6Fjz3gyuu/BnsXX53ANgFYNQhDhOAqFYAWSnBTMRPV+qjswirXJJwHua9vLlJkecqq2D3bXqAyqlsd9zg9NNOrcrCpU33/yMA4A3vffc7bwOgCCEgIMzj16x9+JLPf+FWAJsdoug9/bRT05Ns6BDm0GBfroMqYTvTThJOR55OTDtJ5KZLKsF9mx5gTh8GAJ5vHC5f/zxUAx2/308+n590PS3S6bRwbdjxKQHHRo8DcNS733Xe1wjEQACBxHFrjn/kkks/fxuA7QAOAog5xJGAnYrSAfBiPsx5Tqa7eL5mfCUAeO9Rapy0QMDu/eq98vroYv65YpJYsWSpCnvnSSXnYh4JZnm+9/6bWagwjrG6ZMM9L5NboYrTmEHnnsNnRDZWvBXCffEH6gCsBdAeiw2u+sQnPvYZAAHBBUEAQgghINJCiIH1606457Ofu2QTgK1nRDb+a1JWeiLmjIoAADyR7aDui9uDfWdE8hjziTNAEk9MM0mcOAMk8URxksjXJvfFH2BOPw44FweQwthRr16nRU6/UwFYjqOaXfuN+THmtNJ2uf1+P7lE4P68aPFitaW5Rdu9e7fe1dVpOr6nG/ZU3mUAVr/7Xed9hRRaiiD8vIZDRAVEUAAK8cPNwzq/+YXv3Ao7HT3ikEU/7JMJDzoZh5SjMFy/JxzfpjmXS8yaU6eK83eG5+Kez6nO90kARt6+BWDFO5a6bcRyLsXzPbz+2PPV3PnKHj5pklixZCkDEHEu7Wc3/OJVRx9zzNuEEPTUv/71l0987ONP5CEKC4C16R8PnLpg4cLTBRNrFVIEAFiWVZ8y0u3DfLgvkU68Y/uzO/b6EfC7n/FUlKtWfABqHAOtcypZOA20w/lqeAzbHXhyG8gHoPbRRx4+et+Bva+/4MMfDv3mll/X/+6O376G13A/G2KMRggCwq4YAUsIkRJCxPwBf+cNv7zxHwC+fUZkY98EHYjiSNlpi5oaGhqVeDzOdT2dZVg+n58AIBKJML/fh1AoxHTDEABgGoZIp3UMDPRbbifz+/108qtOCW848cTmK6744Z5M5/M4KMfxhF2D//73vvPdp57613+7rkZAwP6/gJ7W3zA0PPySJInJoamx8ffE6GSyw124XwHgNzf/VvU4Ijh9w3J+DjvlbAVQ75BDnxMdG56+C6ffhJzP+H72s/838pubbuybcoefhiibGDxojDSxBQsWqJFIRInFBs3BwRgHgMMPP8x/4oaTmhoaGmoHBweHd2zfHjMMg1/86c+MAlix7eWXj/vq1770XuEXq0SNqOFtHNYCC7yJg9dwAITIHWGrPt7Qf/nl3/mHZZkNv/rVL0f/678v3gsgbcEaUqD0ABgEEHdSUgmnLn2wxzdqHKctnHYIOnVLDgkknc9524ocAtp5yikn7xBChAkw/H7/C57X7oqPxO+59dZbHvzWNy4byCEHBQA7ccOGyJe+/KU3tbS2HhWPx3f99tZb//ST667vdEhteOcre9KTJomlCxf5P/u5zx39oQsv+LXzaRof6APDw8Obe7q7NxOROHzl4ecBAFMUrmmaIUhwcER1XV9JRBAEa5SPJvvSfT/s6ura/fwjzy/uaFnQXx9tiAPgHJxxcAhwFYA60NW/5DOfvnglgEUQCAYCAePKq695JhqN6g6zx+PxuP6jq69sPeecc7WOVQstBYq/p7sn+KOrrlzedbCrjjTUihBCIsoDVh3380ZLMdtNCt0fgvaKBiEEuOC2mhCCQ8AQQqQFxNDNt/zuPgCXA9hxRmQjr9CBtKFK61HcKMnvd519lPl8PgpHwlRTU6MAQENDg9bU1OzrPLA/FR8dtQL+AAuFQ0o4FGY1NTW+cDishmrCfl/A52cBplkKZ8TBDcPgjmZjAkIQiGrraut///tbL3jHOe+qG0oO/+9VP75is96lm3gIBxyCUAAscRxO8q9//bN+429/tZ10ysSjThovQxSc88f6+vrPkyRROQKBQE1NNLrFJQai8SRBRHt/fePNG0dptCEswpbTP9KOY1roRM5tdQ11S77y5S+e/oHzP/iXaH3tozrpLCqibmRLjhOrcxyc1t/fF4jH43u6Ort2d3YeGOzp6Uns3bs31dvbY4yMxEU0GiE3yMgXmHhTPW76JxKJMPtnH5SQyvbv3Gd4VUApkvD7/RTRorRixQrf2rVr65YsXdoSCASC6VQ6NTQ0NMIUxtra2tsaGxtX+v3+JtM0R9LpdD+EsDoWdrB77r17yQ2/+flrRI1Yzlt4rbXYYuYyE1arBauOQ/gEQEDTVY1C264JCBgCwnB8Q0oIYZz5/jftP/uN53YrQklEwhHzttt+x9JpPfaWt74tBYgwQDWChPqbG39df++9f1sOssn7uGOPS37lq1/fPTI8ojv1rQMiTWDGjp3bfQpY9JijVh+I1kT/tGrlEX8VQihkZztARIlAILBFCEGWZSmGYagQgoaHRzZ3d3dvEUJgxYoVb1QUJZw9IpDJD4tkMvn8Ccev/bgQYmjP/n18wiRRE4myy7/1rZYPXXThvdyyisxqyE8wxIgLIaK6YSz2aRqIXMMmpEXa/POTdxmf/OYnkrCQYKMsTimWJA5LaEIIv1CFTyhgCKh7VcZGWAQCIY+SSAcCgZEPnH9+1+DAQOR3v/ttGAAjkJp8TTJMFlOIg6BAEX4oPMIZb+DEazmz6izwGgtWDUfzVU3wbfXZzsy5uODCBQSsVUeu0r/8la89w8G3Heg+sG3n9u3DG047+eY3+984lImoRx9gToQ2CiBxRnijCQDYUHm6xVUDABCOhKmhvkENBPwMAGKxIVPVVFqyeEmgrb09VBON+iPRaCgQCPoNQzf9fr8/EAiEY4OxvlQ6ZYRCoYDP5/P5/YHggw/fv+iZrU8vHzAGWkWNqFXqFf+Kow4fOvLoo3oDfn9yX+e+2t7BniZd1wMHevev0A29FoAPBhRKk6UI9R+nn3jG1a979euf7xAdPr8ILPjJ9dd+tH1Bx+62Be17fvTzK6+zmi1o27UMKbhfHZWWIY2//vXuC08//bR93/rW5Rd9/OMfv7iqJPF45SRx5Pmrzt9yw9Yb3J9XffCIuq2/fDlW1oc3TB1J1C+r/+Rbz3zrr+964M4blH7lBCLKJgjnZ5csBASikeiz/3X9xT/xDar/9vC9jzz+7vPe+6yAaBTgy6//ybVvevTJRzdAEYAGiICACAssWr34hSX7l/Qfs3r1HiJSTjvtjL577v7rUffd9/djD+zf3y4cJ7Nq1ZFb3/LWtz3U3t6xMz4y0tk/0H9wcHBwWFEUFo/H9e6urlHLsoSmaYxzLlRNY4wx6u3tSXceOJAOBIOso73Dt3DhwnAkGvXp6TT3+f2spaWlXlEUre9g38DWrVv6U6mUZZgGhoeGzVQqxXPIktXU1qgtLa3+RQsXRhcuWtRR39BweCgYWswY+TkXScuyRhljPk3TWlVVbbEss/bPd92VOuvNbxlkjKlGo84v+tiHVvMa0WAtsgLmMpOZi01YzRZ4hENoIhPatV7WgsDmAASEY8qOpxCCJ05JKmyYTCSJkwUdAoYgYYXCIXH+BRf0b3rgvuCWbZubwOzt3QWBEbe7BLiTgRHOvwAWCQAmFNJJhQ6NUqS++MxmClIQKpQsPyWEiDGmDBBESogCTriQMCMSiqIMHbZs+an77RScqJQkCACaG5vYT39xw1d03fiKqqrQNA0N9XWJ+rrahKb5rEgklEokkmHGGHTdCJmWGdI0DaqqQlVVaKoKVdOgqgpyScIUJu7bch8//6oPwGyzBAlw0knAAoQKiKCA8Akm/AIsxqj21zUCIiOhxw+UE4hAAgAdvOygAotAAiScjJ0IcnD7nhCqyBhB2zfbEHjJP1bxXHhVhevchNlm8mBb0Er0JUZhILVy8RH9//O5S+8hE/t8whf+1Cc++ZrYYCz01je/dfCd73nvCwwU6+rq2v+nu27ffM9d9wyOjAzzcsjhNa99bWTDhpPafD6fQiAKR8LhQCAQUVVNM01DHx0dHQKA+vr6jlAo3KSqalhRlDAxCnHOE08//eTRJ5540t50Wu+xLCvNGFPu+Msfz9r0yH2NvI4Lq4n7rXYzYDVZPl7LVREQTPjAoAgCnPoSIDC3VgXAiShJYCMMao8i1G4VLMaIpRlIEOADeITDauIwFhqo/2VdNkFwkSGKXLKAAHoPHlxQTZK4/fbb3/X29rf/yvuPbWe3fg2Er4ABJ59yMv548e0Zgz/8osOeU5l6LCMGxhgs04JlWRCGqN/26+0xAFh47oI1nPNnXPvovqOHvCTx4Q9/eNlPf/rTqp533bCq/qt8Ib9QNArGQ4JEHUf05mimH40jCoyl+GIfjEHdp0EZZHZigQNCAYTKIQICPCQgghwiLMBrOHgtR/1363PcS5GgXgCf+eznrluwaGGvaZhxRVF8lmXpyWSyT1EUlRGpXAiTyE6zDA8P9w0PjwyFw6FwbU1tSzAUalRVNWRZls4YU3w+Xxtj5Eun9e6R4eE9AkKoqhYwDGPUNA13byxSmMJAxHyaFvT5/bU+n69ZCSgLDcVo6Yi0133o/A90DI8M48Mf/sjOV7/mtSCiAISo/eAH37fA9tHEjzzySPHUiqc14RcKb+KK1W7CbLPAoxw8xMdN8u34v3YENgeyAh7XjnsvPQg2zEBpsjUYgyALEIrtWIXP6VeaAAQB5HzlAHEAnMZGDAggC4BBoDTA4gxKr4JNv3wAi7RFCFJgrO8IAd0wYBgmTNOEYRgwTft7bnHL5/fFGZERCgVHBReIDQ+Hk8mkdvBgfySdTiuG87ef+9R/BV85sD+dyyhekii5TmLf3n1PtLa1ZX4eGYmHkslUyCYCBS55uN+XCwLhyMOPZAgQzOUmrDpLyYz3M0AotkN3h14abqr3Gm9m1D7TOWjsvvoKY+x1xdgYv1BE9ng/AIUxKIqSIQhONjkQp0xjGC0mxd89qiRGkwpLkIYE4aXEi80fuuoDR7A4ERtlHBFw+En86Yk/Gbc/fvur/T5/7OQTTuleuXZl92lvOuNA0BfsF6bQAXASMC3TSlomTxOBMcEE58LyaVqQFFoUjITCBulaAgnrL7+86/DzP/QhU1G0tBDCME1zwLKsBNOo/tlnnl6SNtMrfnnjDa3n/fs7+EmnnHLfz/74szMWHrf44XA40nzXX25/y0P/fEjwCLf4ai7MBSYzO0xmNlvE6zgJn7CNmADBxNiQmfBkUJ02IZNAKYKZIGKDCpQ4Axt1epMmwKMcVpTDqrOg3KiMkYQQEJSl0rIMHQS0tDT/rLf34IV5HWVD/cmKopzU1Ny0/u1vO7t/7969X7zppptGAOBH11z9ka9//evrLvjQhclzzjvnzhPXn/j31raW93/0ox/5KW5HhiRaLmjZa3VYi+C3degjg4+g5bIW0fuFXlp42YKvpw5PHcugQOUKmMUgDAHOOUwyByFAS9+9ZA0n/gwI4IyDBKH1fS3Careu6PtO/8UAMBoYfaLl8OZo7/aDCy78yIW19QvqP3rgwIGT9u3fu//zl37ht2e95qyHAOCaW370iRt+dcPrTznllMd/dcOv9g5sH7yxUB8xTzQvshZazGq2IEICPCyQ2ngQbf/ZlkUUWWMTjnNPHZ+GsswEi9vtBgCCAUJzAiWfgPA7l09ABITdD/IRQ95/EvjhD773UaPd4Fd8/codqlBe+uolX1rT1NTUc8nnvvDyRy668MQzzngdM3Wr89SNG7sWLFjYvWABDE1TmxRFbfT5fKFHH3loeU1Nbe+qI4+Kc8YbEsOjIhKJtgaDwaVEFGCMRTjnaQCGcOJALrjlBLX04ksvNHT3d9c88vxDHbvMnfX+F/wqAGKM4Wc/+2n9o48+gq1bthAIjDHGnPoRL297GekPpEhoAA9zWzmE7OAx3/syx0fkkoQQAvphOmACZJE7XE2Oj7G/MsdbsZykCx97DnEPeThhLyUJyqAC304NfeZBdGjlJyS44Eo8Hq81DRM9vQebTNOESwqWZY37e8YYOOfeGVfZvjqPksh8EwoEqaG+PvCDq68ZdclAc1RCIZLIpyQUlcGnaWDEMkqCg6Pb7MYJn1mH0VMSMNoNiIDImsAl2Fh5l75nSX6j9ZCD+/Pum/eUXaGLvrUQwS3BokriwPWdIMNhf4NAOgCdwNIESjBQnMBGGUgHyLDVECwI0slCiiyWJINSZFCKLJiw1h+7Xn/Via/ufmXHnkCsdzB43tvfvUMRSvLqa644Ydvul308wtXGwxrVbtGjKIOMfM/7OADl3//9/XtPP+N1nRddcP5G4wjDtni/PQuDh+3OTipIMKe1VQA+IXgNJ6uOw2oyYdVx8DDPELCAKHvEhDjZHUInmzQMysw9c0ldaALLz1+Wt0O5dZt1OWQCYJhzfisRHUNEJwOA1WyBks4zGAQUcCcYEx47IMe0KdM9FeDLX//K3V//3tduMpusX/MmC1a97QjgExA+AD6B2to6jMRGQCAwwcAsBsYJSJOdC2Ac0XujUPep4Jzbl0NyfZf0Q4kxNPKmgfNf/cFPXPWrq35Dup3ugUWeieICtpoVmeAn0xXtjR8EmY7X5RCwsE34RdpcZq6xWizwOg4ecRyYBghVIHJvBI2/asibcnLrZdcvdtu2atHYvEGnnYUi7DZjIjOHSZDAkncvLq0kRPbvh98xDNbPBBtlHEkSMGGR7mQFUmBkkAKLiCzgEx/770fXrVwv7vnrn9fc+ttbA97ZOMecuZqef/Q5kEn4z49/cufq1cfF0qnkwtv/dFvdmuOO79f8PvM73768wUnZEJhgIiAUHhWKtcBi5gqDor+KeutBkCeO9PoHAuHArzptQ9I8bVIAiy9fhNCWUHba1Pl+5y93ZSkBb2Bl17c3pB1fjyQKpOrTBGVAwZK+JbjmHT/G8cHjEaFwWUoicxlj5GB4/s378yc/9h++3r4+c/yQRGElkTWfN5FKwp/wT/rULcrTAgSCBg3MYLYhqxhj8jyInxVH7V9rxxlvPiWBCpaNMKZklATnPBP1ukpi/2UHwKOWzfLeBuZ29ECG4zhNApkATCI3oiCdGBmkUYICLEWCdAJ0Eo/oj+CRFx5dSCZxBqJNt2xaSgYxUQ+IDkG8zqJ99fvBazl4kKPpxYAAQDfffNMRt9z8m1WMMST+LQnidk6ZOxEhVNshkSDb8BkAVdgRU5CPRY+seKcomGFgAvDZ0ShEtoELGrunwpRxspyLsbrNkIWn0wGoYYx92Pu8xKsTYCPM7hg+QUK1h9XtTklOGTxJRyLbEasCX3j482fy14szrQYLvNaySVQTGUIjAD2sB9RBmTYl4ThVz8ys6GNRELOdMLNZFT1f64XZbsDUCV2JrobLD3z7N3QqgQw3feBEhRA2UbsOmXmIgxzS5Znw3zZlRRyZaa+A066OE3ed/MibRtB8U1N22gnZSkJozvvmUwKU/3umsLLS2WKsgpA4KQmWYEQpUkgnwIJKut0vKE1gCZt0yQB++Mj3XhP8dlAICDDGsh72RPAJKOsYKEm44v4frqD7HV9MwD33/a0dAHBsJn0A4RfgUU5WI4fVZsJstaD9Wwrhv4fduqB8AaT7Mw/w7Pcv4jOImF03+QIf1x5ZxU5xrN/kgzpGIioU2/aqDNMwLhuJx3khBVEq3ZRZlDFURi59olBJgWIqbmcp2lAD5wyi4W8N+UmCcgipIpIgMMbcWQNjToxsNaEv1QtakYCwZ5s7kQS5ctGz4oMEuXKUMl/H8pEMAqA0KWSSY/wcQgN4wIn2FeDgD/uo7bOtWe+oH61niECoHgdEIqvnu4QwLtUmJs38BQ3cdTbezkQiu25zlURu1EogJF+VAks7jk+1FYBgwiEGGpuNnpHFjm92Ag4RsNUND4zlmbPKnIcoSVDWxgtCteW4+1kShPQRabttLQJqOcik7BSC91U87SJYkXFF7+oElpMezS2rAPZesQ/LP7tsvIoof17JODtQFKVkqklkSwmYraaTX6exKNpy7NtRMqTbderf4aPwY2HKd9/USSmwOMsEW05dEZjTqG46lDxtHODgYWGnjIIcQ+8ZRs2mGuQqh1w/kRW0ivJ9RCZXnzMZYypApl13i1oWwUd+MLDMxIRqIZVO355MpbxWIvJ8DzVfmsn7M+ecALziTHWcFEQmXHKMklQohgJFZ7aRFcuzBfn4SCefYqkwQiZnsDIrOnCc2P5L9pcdEUDJI88daQi/pxPlaxIge0eYnMiRhzgUpmR91mowx8tYQpUYYHJwlYR3gFpwka0mRLZ0zxftmgvMMcfActJivMirevYEyER6ZdqFt969DoKIwDnHgS90jpGko3zHKWBRqDeV1UnK+luzycyUK5+SmFC7uSQhyhu4dhVLPvLICpIc4lSHlYwd597bXGBm1LnXjrOyMSxnjJGNKUOQraqZwsYTQgFFUamPyEsSUwHnHRknLG5fAh/5wKZg890LP/SBZ3PCxoxX8k5kUot0scz3QvAHAby/6s6EFDBLATPY2DK6Yg0YAViClSYHUYkBAIzYOOclhEBiZXLS/jbwcgCpVSnbkEtJ/yIYOSuO2rtrMu9bNCqdYTDGMk7AS7xZaqIMJcF9vHBdKRPoeBOJ6HKUZvKIMmyCij8/uDWA5KrUpMsae8MQGu9ryE8SYmLtVqw8+YKgos/JVZtKTkrL86tM+gcT6x8ZUooQWLIEUVDlPsJbx4LsYHfKlIRw1JjJ0BRtgo98GRVRKgCoMECgIpaXqSW1SFNk9v6wTOs5TasuSZC9hAFRNYq4PgJmMljCKvqZvrf2of237ZW9ahnlIObktx0DEEIg3aBP2AAWfmchQluCWblb9/t9/7cP6UV6xWXtf28/Gu6tz5Q5uDVYoAryR0sEYHRlouJ3CW8LFbevPM9xc/i5KadcpZaJxAqQxEScZ/DlYN4RsPzFzu9I7OfYJVKTaoYk9MnaRE6buc965et7kV5U+fq/7nd2o/n+pmwH5qr1CZQzK90kylMSlfqkcSktUYbDrACD58TQckszcqPhcURRSUrak23IrEdxgoZKyxfeFi5KfKOHj9q+iBOYwdBa2wKNtLJVIlUmk6icWlcLEYP3SiaTLwSCwern3UBYtnAZesyeTMVkIu58JHF6Pzp+31G8ciqWkmNyPTPdE4SDbzk4oXc68sOrbGNylbvIluFLv7oUXRd2Y/iUyqfUK0zJvN+S7y4uGCXl266BQHjhuhcrfubyHy4vWG/jnk+ZmUhwZolnEW++NFO1JfvS7y7J7/jz1Y93GqnXDnLJjdlf+97WP6EyrbroiLF0SR4s+9pSdF3QjaFXDU04+s8iiglWaVZKhUo4HFF5WosckpjKXZ8HXz+I9t+25W33XNut2F9VYfvuFVcsL5j98NanXq9j//sOwM8C0EjLEESpurMnyVmVkkTRm6olbkAA6MILPvjQbbffWf3cNSlYfcRqPLH/CTCDyoocxgzZloGTjz5ofOMTMLhhsOIo4bDLVoxJdoG8SgIAFtzQgeFXVU4SIiqgJJT8RlbKcU8w5cKIjR/Syqq7/B2IyCEKl3iJskkiJ79brRSRN50xrkw59WL/TJl0gvv3mSgxp25jJ8UqLtOKbyzPHk8q0LEX3NCBoZMrJwke4lCSSnbUTBOru4z9FLIZz33dlEulz/H2j6lKleaOXeYlicn6iAmWu2BKj7wEL+CP+bH86mUIvikIhZQspWjPWmd57YgybrusgnlHefK9GcGZQ0DlqInJKoZ8UohAOGzxYfaYBLfn3ufddNxzpRamQERgjPJGghkDKPfKURQTuodzhTpDYIyNvxR7MY7C7IsxhsXXLqr4/sOvGrYX9jAFTGH5n8WYnUd3JLJdV87A2wTeidx6ZjT2vXN52yC3Dr0/ewdY89aNUyfu5dbTRMpbqE7y1Ys93jBeRRQq/4RtQmFFL/d9F1+3uOL7D5w0mF8NTaSt8/UnltP2jDLjNESV2ZSzqi3T7t5rIuUtdKUX6+Pbnzx2UGFbesckxmUgqlHHBfoUEeHdTe+GSuqYkoAomHZyf1/OdFnO+UPl+niWhxyA/PuSoxpEkftv9eF6KAYDS7OxHGeRa/85B0pW9GQMYKKNH9keHnOCxDIdKddJuf9e+0Jt5SRx3Ei2s6Pxxp9xamy8g66a4yhCDPlIdzwJs+yy5dSVW08TIok89eE+01svuWUrFE1PJnCIbA9nt1Oey+t46yZgE0Orh/LWfbXbupBDqzQgK0Tg1SSJrnM7x7c5q24gmRVvV7GOc5/jIx9UKFBIyZoCWygVWO40WcMwHipXDKhF8lSFDhiq3pgEEY4/di3Y7+wdOYiXfsH4ijimqizjxhAqQPMDzVljG17pWK2cZmpBynGwleVNJ/PcSj5b6DzygqmorHrP/v2Ey8vKf/+8zhVjqbFi6aeybYJR2cHTREwvuSBZtXx5pfeotK/YGxMyTPU0vPhho4XTOlX2F9Phh4JKKCtNWyhdVsk6iqGh2MMYfwBS3lyVWmo8olpKopDRaKSC6QxMV0ouqCu7gSqxQVHg3hXasZpS8zpDoAj5VPgMK2DZ0dtE60dMb0fJNfjiOf/qlLdcQiiHWMeRXBVsonjZJ2ATfiv/M6ZhOvREZvfY9js95S1a95PwEZMpdyl78PqJlSvtCQ9+ZzEdF1ZREiDP/0rhn/987MU8giB35FHkI4l85MAAkGVZD2ua9upqN6QCFcxdxm+VZ3T9J/Sj8cnGqjVcNe4R3RnNb/vFzusQVTb8Un8/Dc+rhCyq3QaTVT4lo7oq2US133km6m6iztZLvlNJEgMnDqLxyYZZWc+l2sANoqLRaJZCEHAWpFbhob/8xc+HUfi406zpCmXNbnJIYt9URCMqqWBpxZ7dJMqr9M7Xd806kihk/FWLZqrRyWd4sV3uFNOp7oDVSglMVEnMqNOZrraeQEQ+Hcqn6w1daPpX4yFdz+vWrbMDaVIy5GAJC4wYNGiTT+Tk/368jy7jQwSAUqnUi+FwuOoVoZACZhKYzsZ2rCzRt/U6feobbgoisXGOcboj+1myIrvs95gh5TNdqYX5RhKE6UuFTouPmOJ6Xrt2recxIkMSChRwmvSWegzZmwFNauAaAGhwcODFxsbqHr5FIJskdAYy2NgU2BmIbqaj8cd1kOl22rOIJA7J8kolMTV9bbb3hRkqd3t7R5avFELAggVTmPCRrxpKgspRFazEDTLXxf/9yUenoiIYGMK+MJi7Y6RV3vS0ztd1FW+4Cqe3TeoeYhKGOh3PmannYY6V91CyCTFLy1vN955pHzHFNtHe3p6lJDg4TGGO28NpgmMUVEAQjCMKViRPlY8spoQklnYss9WESVBS5S2i6jpDkoQkCUkShxRJVOk+SnKW+AhMn326g9dcOAdfeQiiwv2aYBjGowX8OhXKS5XLOFMy8ZgRw+pVq22S4IT2v7dPr4OXJCFJQpLEIaUkOmaLj5hCm8gdv+SCw3KmwLqpJw6elyBKKYtEMvEoKljmwMogh6oqiXy7fR625PDMmETLY81l30uv1yEhITG/0PJIy7zzEd592dyV+hM9rS4Wi71UiU8vNiZRKH9VddSGa+xjTM3K9p3Zd9a+qWN3qSSkkpBKYlYqiVnjI6Yx3eR+ViU1s+FfsdRUMWx+6aXNlQiAUlSUu1Zi/+T62PjNqQiEtceug5Jm9kZ/AIJdwbIqPLZqSKabJElIkpiHJDErfASm1z5VUuFn9urrYiqiVLrp2h//aH8egphwuimLKAxDf2kqZJRKapaSWPTnhdPXQSRJSJKQJHFIDVzPGh8xhTbhndnkwkc+BFkQGtPKCsbLCP5RiiCA/IdgFko7USKR3FxO3qzoC+RZaatAARksc6ZEdHe07EqPHRmTJCFJQpLEPFMSs8JHTClJdIzzrQopdkBdJLankj5/fIaokjGJQq+Rudn+/fv+WTQTVg5J5DldSXU2+SOTVVz5nRu75JiEJAlJEvNtTGI2+IgptAl3S45yxxkyf+ccVVCG3y9GEKKSMYkskvji5y95vLiSYMV32yxwpoRCCpjBwPSx3zc+01hWpSdbk1JJSJKQJDEPSWLGfcQU2oR3S45K0/egstNNFSuJUuMSJXSMyHuCU14lkVNbjOx9m9yBawBYdPckco6SJCRJSJKY02MSs8JHTKFNuDvAVgpGxbcKNwxjc4lhhYpJothgR/4bljjsIy9JwB6PIA9JlLvyGgLo3dArSUKShCSJeaYkZtxHTKFNrFy5ckIqQjCRtSI7F6lUagsqXPtWUbqp1E2FsJmsGEHk2w+diHD0yqPBdDahBtj3hv1yTEKShCSJ+TYmMdM+ArPLPhljUFB8DcXw8PAWlDn11YVaoYooQRICxBiI84K/B+wl5oLG9hwhEFavOhaPbn4s6+8X3bMQ+14/gaUZvAo1zqfBCfJpdrrT/bwZKO+292+b1CNX/nrl3LAJPgvbSFS/vDPqI2ZZnyIimMIqelZL54H9W0sQhMhtLRVjZ5tWId0knD3jWcGXgBg/gM3A0NHSAfZc9udanmjBvteVZwBWwLLlZyljrIZBVzMyne7I/FDCBMo7sih+aNef3Cq8Isyoj5hlfYoxBmEWPwP6q1/98hNFfLkoN90kipADJZPJJ4opCYAKnsOcmcmUh0QWtHaMTzdVIie9hiLTTfM33TTZS6abDq1000z6iFmUbiIiMMbARUUzm8ojnwr4kQBQLBZ7orjNiKKD1wopUEjJUhNEhOOPXQtmji+3L+Yrq/L7j+mvjsFJkpAkIUnikCKJGfMRU2ATZR3rW4AkKDOzicrNCFE5mohVIJ4IAO3ctePJwi9ovyRjhddLEPJP0VKZmldJLPr7BKa5SZKQJCFJYs5PgZ1xHzFFNpFvS47SqSYCkT3eS+WRRDGCqHgxnZdx6Btf/9q/iuoIITKsVgnc/ZtyUbe9ruwGSLQkJUlIkpAkMc+UxIz5iNlEEsQAYY/vlkESld27giGYsnJZnFdOEpmxCpNNqiH2n75PjklIkpAkMd/GJGbKR0yRTeRuyVFOBM8YgxCinHRVKT+eq7cKToHN90rlzat1CskYy3xfHluxgiRRt70WscOGSt5jZGG8PLor1/inwwlOt9M9lCDmYXnk7KYJYUZ8xBTV89q1FZIEEYgRhFXiRLpE4kkUH5PIewO1wtcuvVYCAhACjBG8yyVKncXKyHPoUG7OcdMixFYMTW/DSZKQJCFJ4pAp74z4iCmq52g0UjlJUGklMdDf/6+JpJsqWUxXHkk4BVVIgYA1Rhxl5NTyjUkAgG/YV3Zj9B/dL0lCkoQkiXmmJGbER0xRPa9ceURFs5zIHbTmxT+zbdu2p8r148VIQhSRH2Wlm9wZTq4Ecomj1Fa3DAzHHnkstj2yLf94Rpl1tu/U/dUxXEkSkiQkSRwyJDEjPmIW2Ghm2qsoPX328m9d9hQqWEQ35pvz/5EooihodDT+VLFa40IARJlFc0SUd2O/3Jddc/TxBX/f/lh7WQNDls+Ss5tmy/MwA+WVA9fT29azZeB6JnwEZkd/Yp5gvIyMULHV1nlLWemYBABgeHh4W21t3bpiKSeyPX+OFCmuJjpaOwr/7p/t6NrQJaNGqSSKYt2Va6VNzFYlMcX3mXYfMVuUBDEImJWQRMmMUCmSKPT6GRbq7e3dtmjRYhQjCZvhWGbb2nJOVlrQ1jF7GkSShEw3SZI4tNJN87BPMSKAyl6pXe6sJlEOSYgCNyAA1N3VVZSuhbBTS4xY+cfugbDu+PVF/8Y37IMe1aenkSVJSJKQJHHIkcS0+ojZoCQYAwGVrpGo6E3YRMr13e9++5mSJGEPS1S0qI6VKE7H4+3Tl4OWYxLyPIlD2Sbm4ZjEtPuIKbCJSk6k8y5aFgLlrkvzEkVZY9GsjNcvJlsKp5ucHWGJyuehUgd4N25plCQhSUKShNy7aXb4iCmwiUpOpMsmCV709iMjI0+j+IB1QZQzcC3KlCvjiYLcsQhRFZKYtTJapptkukmmm2ZP2uYQHrusZLU1Of8RKD0mcbC395kSvlsU+Jp3nQSVIUNKL6iDsA8YYgQIVuZLl+af6IEIRjriU9/IkiQkSUiSOCRJYtp8xBTUc6VKAnCWF5QgicGBge4CqaaSSqLSdFPZB1YIZ/VfJeMS5SiJhY8skukmmW6S6SY5JjHzPmIKbKKSLTnIPbdHlB6OeOmll7ZXmDUqmm4qdSMCQJZlxVVViRT+kBjTB5T974UUQzlKItQXnDtRvlQSUknMJyUxTeWdNh9R5XILISpINzkJH0JZSuKGG36+E6UX0lWkJHK5bxxRjI6O7ij+wg4hEJArJIqtvC5rm1ypJKSSkEpCKomZ9hGYOfvMOo5BVLxOoixyyEcSokwJQgDQ09P9bP5M1BgrjokJymzNUerFyyGJlhdapt4IJElIkpAkcciSxLT4iBklCcfb5iUIKpcgysKEp8C++MLzz+Y6eHcPkQxJ5EkjuSuwCyESKT1PuOOpdqkkJElIkpAkMbM+YoaVRObxnoV0BEBRWD6iKGfPporWSYgiqScAwJVXXvHceJJQskgiQxQVDF6XM7qv6IokCUkSkiTkOomZ9REzRBLurCbQ+I39iLFCvnZCW3IApQeuC90gDysJKCx7Qz8vuxHZE3q54CBR8EXKPrpPSSv2bo5T6RCmwwlOt9M9lCAHrmd/3c3iLben3EfMsI0Kx8d70/juMabegpmWFS9BDpOaApvvhnl3ERTCZjF3GmumoGLsTzPrJwoxZAWHJnU80y7HJKSSkEpCpptmzkdU2SYikfKmv9qD1sh7joTC2LjpsPF4fGc+n43ik5PKIoli+aq8SgIAmMKyiCOX+SxhlRzALmekvuWlllkVZI60jUBCYj7ZRKIhOavLN9t8RClUspAuy0GLMRXBFGWc4+3q7Hx+ogRRLN1UDl+PUxJCCCiKAtO0PMph7K85eMmB61kj9Sq894RkbYXPUHRFppsOofLMqE1MQ93pkXRFz1HSyvS3tTh0bHTduvVlKwlkEk08QwqswCzS555/7vkcn10o1ZSXNFgZaSZRJOWUrROEsNks66QkkaUkuOAl007lnu8a7A/OGhnZe1TvlEv10EBQppsOoXTTTNpEtDsy5XXXf1h/RfcPDoSmNd005T6iyummcpSEdyzXTjeNjQMzRclsG+7FNVdfVY6SmPRW4XmJYnBw8HnvH3EunFlOLEMKWb93lETmXNZJYtGTC2cNSYy0VLZXTGxRrOJn1L1SJ0niECKJmbSJSFe04nvFFsUqK+/CoYruH+2OTDtJTKmPqCJJCCHK3ibcJQrOrcyO20QERVEKbfZHJURAUZQ7JpEXnZ0HXsh+UTuVpChK5tNued0psYTqEIQdLUVnz8C1qCxHu3Pjrorv37izUZLEoTRwPYM20bSz8i2zd27cVXZZEw3Jiu8f7Y5OO0lMqY+ospLIN7PTElZBJSE8/7UzOMzeMnz8c6gAUWAiJCHKTDsRAOo72Nc7Pk0koDhzdXPTTQSCpmgl10ysW7eu7JTTVDV+4wQ62ZY3bSmryHte9cqEylqVMQlJEhPGoWQTvrhvQvfb86pXyirvljdtmbmIfDrsaBask9AtvWhAbftY+7aMMTAicJ73IaX2a5rUwHXRnNX+/ftySMLe/ZVUlkk5uZ8iIqiK6uxJVYok1uPpp58ur+PuakT/8v6qO4SO59sndN+n/v1prPz74Yj25I+aNp+1Bcn62T0rRKLKNvG+p7Hy3kPDJvqX9yO2KIY1tx6X//cr+rHn5Fcqvq9iKDP2TlPlIyaCba/flu29OYOaUhEaCOKp3qewvGY5anw1eYNk8gxMu6l8Idz98XKWHhQmikLUJSolCZQhR+jaa3/84gfP/1CWkuBOoRXGMks9AAECg0pqWUcWVbJd7qJ/LUT/suobQCYSKxMk7DnLJAjbT9th785IAtGDkfG56QlEQ4ueWlidyPxQwiwrb6U2keUcXje2U3O0d3psonHnxJyjpVp46t+frmq7LHpy4ZS2dbHMw8InF0yJj5hIuXPbnVkMvrgPakpF3IhnSKDYLFByzpBwppSCkR2UcyEyKf8SSqKiUqsTEFJlNBaBKQzcys6PuQPWouQo/xHlRyju8vsJG1dhA4v0RBAvNfgoAOIEZjEwi4EsZ1BJ5eAqR7xptCrOrmVry+Q7kSiD6GC/TzmdbyKo5Mzz2Uhq0Z5IxQPS4xxFc7wq79a8pbnoLMEljy4u7BwdRU+cQNzxIwIQTGS5FfdnQZMrcOOuxqq3dSHbzNqmgqjqPoKyzz6YHDjALAIzCUElCJVUMGLgKL5UwB3bFbAPdiNGgMXHpZsGBgZeLJIlKktNTGR2U9GtOWwms9mNGGWvlcgQRXGsX79+ShxUpVh57+FjHUpQ1uXWBAmCYirwJTQEB4KI9EYQPhhGcDBoRwhpJcvpTiiCHfVNmBiy9tAqQG6KrkBNq9ASGvxDfgRiAQSGAvCP+Cp+TtFnFvnbcj47G7Dy7yun5sZ5QjCvneV24VybKFSHbvDCTGa3t2l/rxqK3d7DfgRiQQQHgggNhBAcDMI/7Ic2qkFNK1BTKpjBMp/L2H8lxNobqWo95dqI953f/Oa3mPnqJcvuc/py6auCfjURFSIIZBH8ih+M2Nh2Rt7twPP8nJn6ypgTfI8vU19f324Unv5a1guoFZJDyT1pOR87ttQelxiLYF16GBvUrg4WPbUQ+9buL8683DFu7nQ+Jx0EXryxwwdDSNamxqJsQVlRFTMZtJRqd7L+EC7+0Gf0H/3oap8RMpCqTyFZnwAiOrjGx6Iy5uQUy+xrq/90zKSiq4zROSqHWY7DcDq/mlKFklaEltSEmlZpxaIVvL+/jw0lhtzPln22eTmRXjlqQggB4jTpCHYqEBwMIllXnTEE1y6JA/l8b1ZI5fn26D8eVdbOBcf8/mi8fOa2LJXILIKiq9CSKrSED2pSFSccewKeeuZfZGkcps+E5Tdh+TgsnwWuWbBUDq5xcMVWyIIJ+6LSdlwWsZajckVhlSuEwBve8Abx2lM3Dt9xx58axqWcnliAzjVdGfXkkkXm2QSQ8Jzf7P6KBOz1avnHCCarJIjbBBFQAtCYZgfXTv8YUwsifxVnFtGxggcP7du7d7fHesoZUq94g798HyrKQBnlQADLESqVpBqEM/e3LNm9tRn7jt9f0LjIIiiGAkVXbMfIGQTZRk5mccI6/O7Dse3M7WAWswmGO9bkVIKdU9QQ7A8hfDCEleqqwWs+ex379pWXNe7bu19ooyolG5Kkhw1YPou44uloiijpBFu2tUyKGLw/a6OaSwpQDCbUhMa1hGZpSVVXE6r58Q9+ItEUbR7WmCYACj7w8H3hJ597UiGCD0DAUZ5srFtVTgblBghEBDWlgCvCrqsKyCL3/hWluMrAUX89Ek+9++nJ3cRVoa5dWvbCKDd4cZ1hJihxbY6A+j11OQ6ykJclMJ2hfk8dLI07aQ0mmKlATalcS6hcTar8u9/4YdpMGca/r/+AYTEz+Jvbbqx9cccLMAM2QZh+C5bfguU3YQYsmAETpt+E5bMgSrRPOfZbiiRIeBRQWs28ezgcQTw+AiEELr308+mm5tYhIZDmnDfkEm3j1kYMLhl0FJWTGuYe3yncfm1/FYQMCZLO8tqUEALMHPMlFROEG7RahNbGNmhMg0JKVmre88BxdizgrLJmBMGFfeWUc9++vQeRf3M/UW4LqGUoCFSiJLLWQzA4HJiro0unnMolCTF+g6jMxlfMYmCG7RT9Iz744n5oSRXMUAASsDQLSloZu4cAzwneCACWbVqK2OIhx8DGIgxBAHGApRX44hpqqRZc509wneMz/3GJmka6fsDqq9ufPlB7+4O31ff0dqtGwGRm0GB62IAZMGCpvKiBLXp64YTJwf3e/VpzIAo1oQk1oXA1pepKUklEtWjsi5/5ci8M6hUG9uqj6X6FVNI0rfnNr3pb43te997Giz/1300A6olREIAfgOo0rE+Mxb/02lM39pxwwgnDggvrkUcepmOOWU2GYaZO3bgx2N3VWfftb3+rdWQkjlLNSkS45prrdp95yxuWGSEDRkiH5USx1SDMiaiaXBx59ypsOXNrxakF1zZJkJ3iG9UQTUV5R20Hdb5ygGzHZOepbSUFCMYd8gC4wvHhFR/R3/Kpt+5/6KGHUoqi6AQEY0MxsWTJEuzbty94z913Lxgaiql2+hdofbZVJJoSnHEmyCKDOJnMYOnXbHhN4u1vPa9zoKv/ns4DnU8lRhOJ+ub6jvee+b7X1dXXnX7HX27v+PsD9zKhClg+Du7nNkGEDehhA3pEhxE0bNWhjamLrAj+qQXOCZUTI2riNpGq6bE+LITAj665bjSVSiYsi8csy+oVQgylUikBIM05X+QlCOFIhNpXaqHoCsi0A0XyqgmPonCdvlDsr0qK5Q26iAhaQoOlWVnqqnyTsDsRsxiWL10OlanZCrJEnQkh7K3BnbLzPOmm66+/7qWJBvyVKolCYxLo7+97qa2t/eh8OUB33/PcPkYVjPcUIotcZ+gf8UEPGWN5dief6hvxwT/iQ2AogHA6sv+id/3HZT7F5w/4fUu27Nry1meGnl7WO9QrAFgA+MojjvjJG97wxmdUVdUURQkqiuJjjCk6dH+kLlwbDUejjz76CKmqmmhf0DGcGE0c6Onq2aWSJhrrGxu7u7pDAAQRmN8fqAn5Ik1L2bKm/9z4yZY77/nTiVt2b47qUSOYaEgoyfok6WHdjsjyRGJrbzm+ZEqhFDFAjJ2BW7uzVigphStpJfmB95/feexRa54eHhraG+8e3TsSH+np6ek52NPTM6xpmtLQ0BBubGisr62ra/7Cl77SoShKRNf1vp6enm1trc2n/uIXPz+1q7MrICACAHwLFiw0Tj31tD/ER0Z2mJapn7jhJFIURVEV1b9r164WTdOaPvs/l6jf/c7lF46MjCAQCJif+eznhpYtW6Z++MILog41CwDi/e//gBhNjNa+Ovia2FMH/lWTrE+wVDQNM2jaREGFB1IrJYRsWy3vPkIIBAYCaHuhDd3HdBccFM5NabgpE3ccyD/iR3AgiP8651OxFl9Lzfce+LbCFTsqZ9yeBPHZSy8Z2PTg34NPPPl4EACuufTal5Op1MN79+5LtLW195mGMWxZlhmJRi1uCVqx4rCWSz//xRMu+dxnznIzwAQyzjnh3K4zz3rTdXv27EnV1tauVZiq7X3llT++45xzHxsZGfay7xZo2BSpiyof+/DHl33rC9/5j2AoeNof//SH9oceexBc1cADfhghE3o0Db1GRzqqZ9SFm5ISTOD4m9eMDYCXUo95fu3Wk5bUEIwFEBgIIjAcwNVXX/PKyMhIF+e8P51O708mk7vT6dQgt7iwONc/dMFFvxwcGBxubGpsaGpqXq5pWuSJx//ZsfEtGxkjVXQf6NpvJ93IsizLtCxLF1ykTNM0bv3tby4fGOxvhqMkTjj5RJxx3hl/Ja7+TWEs/uSTjzds2nTft913CneHYYQNGEEDZsAE1yxwpTzv5mY5yCIsbluMgBooSKZ5VTkAxmh8ny8eyFc0/RUF8szkGdRWAGhO9BgCEAYQcb6GAfivvfb69564YcM7VFWBqqrw+XwIh8Pw+/2ZRXWKokDTxqa/ZgZZPLKKaGxghoiwdu3xWT+XcopD7UPYf8IBKGlnQG7EB9+wD/4hv1BHVRFFzccXtix6MByJaKFQSPH7fCoApHXdHB4aMgzD4PaYChd+v1/x+/1KMBRSfD6fGggEFIUxxoUNIiJN01QAGOjvH928+aXhVCrN29vbfeFIROPOFIOamhotHAr5wzWRUF19XV1tTW17MBo6vKYtuv7K3/1g7fPxF3zJxgRLh/VM53IPNl976/ETIIYMK4zlKAXQ3t6Oy7/9nU279u7eA04JwcVoMpHo6unt3fn8c8/ue+6554YPHDhg6roudD0tfD4/+Xw+am1tUZYsWepfumxZtLa2NjAwMJB48YUXhk3TFGuOP772mGOOWXbEEUes7u7uiRLRgVde2fPC4//8575du3amBgdjXNd1EY1GaOmy5YGTTzq5tbm5uVHz+fzDQ7FVRx9zzBK/P3A0Y6z17/feU3v33X9lTmcwv/+DKxOc89SwOWR97cqvtg1FY8FEQ1JL16TJdkRWJqqG5ysEsObW4wqlm0Q+e8+1rdx0WCnn1r90APtO2jemFIQ7Y4gy+ebM4LFFYIYCxVCgJVQEhgL4+Ns/2buqbZUvyILMMi31c5d8xk6DcqLrr/vZaGw4Npw0kjvTidQzyxYuTTzx5JMvCiFEOpVOxYZiw0NDQynLsrhlmpwYo0WLFtUffvjKk+vq6s7q7u5qbWtrf2THju1/+uc//7l969Yt8YaGBq2utk595JFHRrq6Os2CL6bZdeX3++nCCz68YP3x69dHotElxKhOMO7f3bnzzP93009bjKgBI2ogHU1Dj9qqz/RbOPr2o/LWbSE8+47nxk2qUAwF/rgPgcEgzjvxvOFTj9i4yxy0XvTzQJdhGEPpVGpgYHCgs6urq3dwYCBpmibSum51d3enh4eHzMNWHBZasnRpjc/n0yzLskxn51G3L5uGIQzTtFKplJFOpXg6nbYAgCkKAUA4FFICgYCmappiGoalKEribW8/uweAcfm3vhHr6upCfEEcesRAui6NVH0KelSH6TfLUhQkCGpSRbgvjM+/8fM4/9TzUe+vz9igd7cK74QfNxDXDSOTYjJMA4lEEslkEqZp2pdhYv36tecB0AEkAYwCiDtfRwGkAKQBmAB4IWVBRcjDzT9rTj466BBD1EsSF334P9Z87GMf/6pLEpqmIRwOIxDwQ1UUgOwN/3yaZ6U1jY3EFyKJ449fk1mQV8i4vKpFCIFXTnkFviE/AkN++IZ8I3/+7V/POfvMtx0NE89cffW1D739bW9dAAA+n498Ph8BgK7rIh4fGZfHcB1lNBohVdMIAEzDEOm0Dl3XMxXpOlbvZ9zfu8+IRiPU0tKqLV26NHj0Mce0tHa0LmcRtnrzwItn3/rILa2p2pSWjuhk+Sz44z6s+MeKSamHTL0I4P8uu+yR2ODQbxLJRGx4eHhw7969B++9928Hd2zfbpQT7fj9fvK+l66nRTqdFtFoDTvyyCP9Rx55ZLSuvj4QHxlJ/eUvfxko5nj8fj9t2LAhtGbN8Q0rj1i1rLm5eXUwGDxcVdXGSDgUvPHGX9O5570znkwmO03THFRUFjLJWvDlyz9/tF6jN+s1ut8IGorpt2yJr1l2Gkp1CFYAq+7KTJ+2nMu0LwJRlk0r5K5AKqEy8o/xjAVgRsjA9jfsyB7/MhQoBoOSVu10ie6OiSlQ0nZu/e2vO3v41etOPagIpQ+AyYhpo/GRUP9An1i8eFmacz6kG+ndg4Ox5/fs3v3SC88/3z0Yi5ncMkV8dNQaHh62RuOjwrVDn89Hy5Yt87397LNXtrW2Hb715a3PXH/ddbv7+/sq245WAyEIBhUEEwImBAwIv99P7zz7XY3r1q8/zB8K1PoCvubb7vzt5dsObIMZMqHX6DADFtpeaHU8C2GsyxdPnWx509axAWSnDrWkCv9QQHzq7E8/VM/rX1aSyubYwNDeocHY4PDwcDI2OJh6Ze/exJ7du1IjI3GR2x8jkSirb6hnPk0j3TDGOT+3PwNAPB7n7ue8PsDbjzm30r//wx/73Ia/+693ffXO++58+Kg1R73u6f1PXxLvGMVoyyj0qDNRpcQ4GgmCllQR6Y3gV5/5NTa0b0Ctr3YsUBFjO7pSjl1yLmBaJjgXEJzDMAyMjo4ilU6XIomRHJLQJ0MS5CgJ1UMSkRwlEVi2bHn97/9w28+9JBEKhRAMBqAqin0QEWNQVSUzCk/ONK9iJHHRRRfhqaf+lbVhYD6n6DpDAYHYoiH4hjS8603vfuEy5bJjx73VJeiYyVkxfr+fFi1erK4+ZnV45aojmuraazvSgdQnbrjjF8fpYSPYsKueFF1lpdK3XgeVRRAeBXHqqRtx4oaT3rd169ZXdmzfPnj//fcPV+wsKiARlzzK+Ux7e4d6yimnRFetOrK5ta2tNRwO1WuaLwIAyWRyoK/vYOfAwMBQKBQKdixcsKyuoW7917/5lZMD9cGOd77v3Q90D3S+9o577mixfCYsv0WWz4KlWiBOaH2+lQMwrv7RtQMAuu6680/JeHx037+d+cZd0Wh0GIC+Y/vL//HjH1+zgIhCANj69SfQ//zP/3xy/4Gua894cqOV+K/khptuvPFz11zzo3O8dXzLrb/7ZWdn1yCAhueee3Z5MpFYccKJJwQVRVM6D+wLf/6Pl7JkXQqqrkBNajYxpFWohoKoFsVXLv3fmy3deu1Xvvil9nPPfufgies27EiMJh7o7+97EQBCoXCToigBALAsKx2Pj/S+smfPnsefeOLgy1u3pgYG+i0ASKfTwu/3U776dsn7iScen9z0K5coAMB02dD+etThR2nHHrcm2tLcHGpubak79vjVF13yxf85j1lOrp8oe/C1DKLoOrY74xDdNFMEEfHRcz7+DXPI2pfoH927d9crPVu2bIn3Huw1RuOjwnXs5dpdFaDj2+jL94uX3re54d8+8vr+4SUjSDYnYPqtkmqCuD2mEemJ4NbP34r1besR0SKe/kyZ9RKMWGY2k0sSlmWCCwFucei6jtFEAunxJPEORy0kHRVRjCQwGZLw55CESxRBAL6nnn72Fi9JBAIBhEMhmxiYAjBAVRQo7hnYRIBn/UQ+krj22mtx/fXXg7HC6abceeGmauH4Y47HzcfcnP+9Lp1ZkvA61vb2dmXx4sX+toUdwdNfe1pbLDZ4VldX1wYiUomIEYgGBgfWdHd1oau7K6v5vEvyXWK46MKL7uWCfqzruj4SHxnt6ekZ3rNnd+Lxfz4+mpNznhWIRmvYokUL1aamJq2xsUmrqanxcc7F4OBgeuvLW5M93T1WJBJha9asCb76Na9dumTpkjWqpjYMDA5s6eru3BeJRusee/zhd768a+s5XOGKYIIEhPAP+VM///kNT4/ERx8B8GcALzgdhBwVXAcgdN21P7r15ZdfbiOi8A9+eFUrgJEzntioA8B9Jz7AAIT+7+v/+6HBwYGrhBC46aabv9F7sO8hpzOFAdQDaAWwWghxpGVZoZ9c/+NVL7/8MsyACaEKMIsh4o90nXHaG66qCde8EAgGgosXLnlNMBQ83tD1XXfecccVN97464PT6OQqJwoPOeS2X2NjA3MVcntHR6SxsSkSDodCp772tSdcddWVX3r66aeyCAPeWSHOl7XHr8WCBQt27tP3pwEhhABqIzXimCNWP/jSM1t+MzQQS3Z3did2bt+Z7OnusaaZFMaTxOX5SQIA/nHegyeffdnbHh1tS8AIG+AqL58kvpBNEu5ANBccCrGMz/T6PdOywDkHtzjSehqjownoup6PJHRPqinuSTmlABiTJQlWhCQihUjC7/cjHA5DUxUwhxwUhWWlm7IGDfOQxI033ojvffe7AFHmfIosknCjZj52RgXnHFu3vlwsDu+YTX3Q77flbCQSZdFohEKhEAOAQDDIIuGwUlNTq9TU1vpqolHtggs+dNrvfvfbT999993tXpL89Kc/c83vf/+Hq5OplOCWKVKpNI/HR6yenl5rKpTDVNeFGynnqq9TXnVKfXtHR+TA/v0jL21+aSQSDitHHXV0zdKly1obGhvbgsFg/YED+5qOPfa4XX5/4A4Avaefduo4g990/z+YY8/iVSdvaH30scf3uzL7jNM3Zv7+vk0PEADasePlZYcddsR+hxjISWG56roewDGmaRwdj49GLctMpJIpTVHVg7quJ5LJxEBfX3/Pzh3b+3bv3jW6cNHi4CmnnHJMTU1tx09/ct2fHnzwwVEc4nCVZGNjA6upqVXq6mpVpqikqgr953/+55G3/eH3n3/mmWdOdPv52nXrsHr16rv2vLL3/5KJhD40NGTEhmLm8NCwmUqluGnaaaFEIsG7urqsWUaguhCir5gq+n8/+3/3f/9739voLib2+rR8wa57Pffc8+PS58LxcZnP5ZCEZVmwOIdlWUindYyOjsIwjAxJdHV2bXnjG//tq46SGPUoiTiAhEdJWNUgCV8OSbjjEiEA/qeefvZmL0n4fH5EwiFomlqUJFw1kY8kDMN42O/3vwGA2dXd/eobfvHzH9xy8y1r3EjaW8Gccwgu8I1vfvOK88499+JDhSTKJRCfz0d+vw+qppGbXzUNQ4yMxIU3B5vPyc51uCSyceNpDaFg0NfT27v5lpt/U/Tc0E33/4MAwEsKxeAQBsvpRC7ZtPT393Xs2rmrNq2nU8lkUk+nUlYymdT7+vpSe/fuTe3cuVOPx0f4osWL1VNfe2q9oqrsJ9df1z1X2yN3XM/n81E4Erbz+0Xs9xCw25IkAQDr1q0To6NxeyU0UWb3Cfdzh604DOece+7X1q1b9+tVq1btA+DjnI9URhKAZZkZkkil0kgkElkk8dhjj/3hYx/9yK0OGRQiCaMaJKF4lETYQxJuysmXSxKa5kMkEoJP0zIkoaqKd5pDFpvmIwnnCjlSyPIOqtx2220//PKXv/QpIcaUxPr1J8Ruuumm+hKN3AGJOYtotIaNjAwfFEKki8r8Ki2uu2/TAwyA9re/3RN56MEH6+PxuJVIJrg7IJqbM3fTjOm0jqIziyQOaZIYjMXWbDjxhGcyJMEYTj/99NjXvv5/ZzfU1z+A8TNIC5KEO6Qj8pEEt2w1YVpIppJIJDwzm0wTv/7Vr374/e9/7zEPSYwUIYmCaybK2ZYDmOBRpuWgjO467kbnnHPOxQAuXrXqCME5xwknlEUQEnMc0z32csbpGzmAdFtbG3V3d/tL/X06nRZ79uyR5DDHUV9X9+xgLHb2iSes/yNjDF/+yldvf+973nP21Vf/KO/f//jHP66t5P42QWUfCy3ynCPxhz/8fitKbxFeEqV2gS2134cAgN6enq0dCzpW5ebayiEIUXz/k6I3efSxf9YDQEN9fUyapkS5mIKdbYWs1fmDcpRofV3d7QDouuuu+9R73/OeK4r97Zvf/ObVkwiiCzrKPXv2JPL8WcVEMdFdYLNWXv/tb/f8LV9HHLfSusp76DTU18ckQUhISMwmgvDiox/96BWlfHpjY+OrJxf1AIIXPUfC67Nz10NM+IxrUeDf8i64+OEPf/DMVEdrEhISEnNR2BqGsTc/IRUmqnFbpef8zejoaF+JQL8sgihHSZR1aisRsc1btm4fHh7JKfhYWSo9N+CFF144BbPjpGUJCQmJKSEIAKirq7uRc753fKDtcbTjzs8Y+4PcAe/BwRhe8+pTvkTFxyPK9quswhfKRxBQFMX/h9/99kHLsrB/3/7MC8I585pznrncFzp48CAOdHZi6+bN2LF9O2KxGLo6O5//yfXXn6eqasuxxx77fKWMJyEhIXEIEoVQVfXYYCCw+Mknn7wyHo9jcHAQL7+8FVs2b0Zvb29mqj93prwKwe1dXz2ThFKpFPr77JMIfZoWJsaUMgP9ov51IrvA8pyfSVWUwN//9rfhiz/9Gfh8Pmzfth1HHX2U/TIAFMEwPDyMl7e+jM6uTvfoISgKQygUQjQShaIwrFmz5iLDMA5yzjkw7vw+SRQSEhJzligM09RPfe1rr7vjzjtr62przx+NjyI2FMPmF19yyMBOQa1evRrLli+HZVnglk0cqWQSPd09CIXDME0TmqrWmKbpne6Xz3eXBbWSlyhAFPaRHfbmafAHAvD7/ejq6rKXp5omUil7d8J0Oo1QMAjGFCiKAr/fj5raGtTU1OKVvXuvTOt6nHNuTPRlJCRgL/xMz8AzJSQmRA6uTxVCcMM0028+66yr9h84cP6O7TvQGmjFyEgchmmAWxaEENizZw+6u7sRCoXg8/vBmAIuBGrrasEtjocfe+xF2Odf51vCwAtkaCo+dKjYC2U5cCEEtywrbVlWErDPW/X7ffD5fNA0DYrCwC0LyWQSqWQSFhdQVQWapkFVVSQSCTQ3N8ePOurIXwohvEvEJUFISEjMJ7LgQgjTtKz0pZdeeu5ll33zD7t27sCy5cudPZkMcCHg0zSEgkEEAgFwAKZpQtcN6LqOdFrHY48+usO0zITg3PL4bD5VSqKQgsh6oGVZhmGaw+6HiJitFHw++J0tw2tra2GaJoQAmMKQSiaxf/9+LF+xAs1NjWeK7OXhXBKExAThh72qdLqfKSFRKTFQjm/ljg80b7jhhlfe9KazvrNu3drP7du3D8ced5ydvuccimLvbkFESKV1pNMpmKZ9qKYQAn+/955thmkmuBBWKd+NKp1Ml0+uZDGTEMIyTDNxYP/+vSsOO2yx97mMGFTVfozP58Ptt/0R0ZooFEXtPO+8c7+Y1vVOMbYToZVHSUiykKgE6jx5psTcUxJZZ6C8853vuFNV1cfefNZZJ33ik5+8ZKC/H4sWL8Zxxx0HAOBcONNhs7NFhmmOWJZlFPLXqOLspnznoXrZzhv1c865PjQ81OddQWeXxP45mUzirjvvRH1DPZpbWpLnnnvO/+q6Psg5925Xa8p0k8QkwebJMyXmHlFwD0kYAAzLskb//Oc/P/uxj370i62treju7MIDm+4veiPDNBPCVhFef80nGoBXOruJFyIKwYU1ODB40J2+68U9d98DRVHQ1taGxsZGrF277lOmZQ5yzhOwt6rVkb2vee4LSLKQkJCYyyqC5yEJXQiRNi0rvnv37r2xWOzxhYsWbojFYvjzXXfhuDVrUN/QMM5Ncs7TRQii4nT+RNJNVp6LCwjee7D3YOYDQuDJJ56AYRior69DQ0MDGuobcNjhh33EsqxhIUTKQw7F0k0SEhWBiJgQgk/Xs2SNS0yCIHLHJawCRDF6zjnnXPvnv/xFLF+27KRwJIpt27ZjKBbDEatWIVpTa6+ts9dTWHlIp1Aqv6SPpTJ+n+9cCfes61oANRg7gCigqWrkxptu/g4A1NbWoK6+HnW1taiprcGCjo6LACSEEN5Dud2ta5PIPk7PQvUX08mtwucHEkKI2DSRRB3sc1Uk5j50oPDJdBM1IWSfBKrBPtAqgLGjGTKngRJR8Pvf/8Fp55x77vlDsRhisRhisSEkEqN49tlnH/jud7/zR86560vd7cGHnWsE2VuEl6UqKkk35TKTmUcFmKZlpRobG6FpGiKRCMKRMAYHB7etWnXEd5zCpXO+etWElafQ1VQTnYdEeFHBvldE5AfQOM3lq6geiWi6yTkEIDaNz8Jsrv9ZqPRmQwA3m+rQqyi4x7/qjp/UnEsVQrBPf/riB3509dXP3nf//Vcoigq/P4BEIoHt27dv4ZybOUrERPZ4b8XBdzl7N3m/HzewknOZQgjj7rvvvjEcicAf8OOSSz532cknbfgOxsYe0jlEoXsIQqaaJKrliPxz4RkS8yLlhDwpJ8PjL1OeKw1A37V719CypUv+4+DB3m3BUBDhcBh//ONtL3mIYZxvnqh/pTL/Jve864An5eReISfl5HP+zmVGt8BpJ6WUcK5Rz/fuy8vZTXNTScxISmaqI+4ZUEjANKbSpJKYvirxBO2un9UwdiJoyPG37pHRIed3fudv3WM/ucfXuun8CR1ZWmm6KTftlDWo4hTI5xSUeQpLHumke0jCvbxKQpLD3EZyJkiCiGqFEENTde8ZrEuJuacm8g1gu75T8VyU87daHpJIeTI23mxNvtmjVV1M5zr9fHJIcwjCLbyaQxLpHJLIJYgJFV7ikFFG6WofOFUmwkSUEEIYVSYIzYnqZqQupUXNabLITTkxTwDOPMrDG7S75GF5SCKVhyDyjfmWRLkD15RHSbjOX/WQApzfFyOJfC8gt+OQmCo0E9HBahGFQxDNslolplBN8Byn750BBY9q4B4lQTlKIpUnGOcTydaoE3gR7wi8m/9int+bnvsKjB+ASTrfF2M3SRRzDynYY1kzRRS6EGJS0xeJqAkzu+NrSprRvCALlwSQQxDeQ4RcteGm+r3+Nu3xs5NO56sTLLyrJrxSCB7yUJB/TKJQjkyORcx9DM0gSQCAzxlornjgdxathRiSZjRv1ISXCIqRhJHH3+bztRMOxisdk8gtoEsA7r97C+1VFq6ayN2CIx+7SaKYi9YvhDVD4xK5CBFRyBPUpBw7dO3YjcwCmGV7Mjn78UjMP0Vh5fw79xCCVsDfpsvwtVVXEshx5FYedssliWKL7/LtIyIJYm7DcIx6toDh0FktbUjzmXdqwvWhub/PTfl7Jw15g/d8i5Qr9rXqBAsvchjO+7NSRHXk20NEYv6gH0CbrIYJ152EJArkkISSo3itPP52UpOC1Em8RG7hXRbzTtXykgTPU2CZZppPli8EnyUpp0Oy7mQtSKJAdrpJyeNvczdh5ZhkSl+tcsGZR/rkSiNvYXNX+kmCmD+IAaiT1VBxnUlIosgNrt2psrkL7HJ97aRS+mqVCk55Co08RJFve1pJEPMrIk44s4UkKqgzWQuSKDz/xsvwtwJVmjWqVqngIqewlEcp5GMySRBSTUhIFSFRvr8VGD8lNh9JoFoBuVqlgpf6t3wFlAQh1YSEVBESlfnbfD6VCvjVqgTk6hQWvNhnJCT6Mc271x6idSQhgTykUC4BTNrfsioVXFTx7yTmR4TsnsMrkR9cbuYnMQlfWjV/q1ZydsFcVAizcUrmbJ8mWsXydUMeKVuwbuR04VkRzBwKymJKIQ9xl5hpHJRVIOtEYvZCkoTETMOAfWKWhI0E5BYcEpIkJCSyEIMcn4BTBzFZDRKSJCQkxqN7nhMFd+pAQkKShISEJApJEBKSJCQkJFFIgpCQJCEhMSVEMR+O6kxJgpCY7VBlFUjMUgwA8GPursruh316mISEVBISEhNEGkAn5lb6iTvvJAlCQioJCYkqoXuOqAqpHiQkSRxqmOXL7ktiHm3d4KqKqHMdShhxLgnZ7yVJSEhMk8MNYfafSRGDXE0uIUlCQmJGkHAuBjsNpc2Schmw00pyBbnEnABJ2TXHG3h+7STKANQ4KmO6CWtYEsPsg/RvkiQkJEqRZMghDV+Vbql7VIyEJAlJEhIS80RJMakEJElIjMf/Z++74+S6qvu/574yffuutKtuy5JlucvG2FQbQi82hITeQ0lCCyQkvxBqCARCSwgtEHpopgQIxWBsMC5ykS0XyZYsS7L69t3p89675/fHe2/mzezM7MzuzGrL/erzNLuzU967975zz/dUtUkoKCgoLF0lyIDrj9Pgholr3rFY4HhH3nu0oErhKygoJVxBEQmFZaOIqEFQUFicEHBdaeEASViu8MlGDq7bT1l+FRQUkVBQREJBEQmFADQAq1botR9X01+XMIQBxLB4sn0WEywAaY9kKIKhoGTxIpHFSn9UAFS6tYLCQiqL/WoY1DrwSEMCy9vD0EoYmFl/x4Fbm0eRCwUlixUUFJFQUFj26Ifq3bJSlZaYd6j5bx20CnIh4Xot0opYKChZrKCgiISCwnJCD5T1eSUh5Cm5as4XlrAF28w4cKv0q/5eCkoWKygoIqGgsGTRCTeURWF5I+YpscrSuTigodToWMINg0qrYVGyWA2DgoIiEgoKSwVRT8FUWJ4IAehW5GHRQ3hKZKdHKiagPBVKFisoKCgioaCwyJXMLjUMy1Ip7YKybC7l+fM9FTm44U8qp0LJYgUFBUUkFBQWDYJhFQrLA4Y3p8r7sHwQBrDaIxJjUI3ylCxWUFBQREJBYRFAlRZUBEJh6cAvB6oIhZLFCgoKikgoKJz2jUspnYpAKChCoaBksYKCIhIKCgoNowuqM/FyUCYHlAKiCIVHKIahciiULFZQUFBEQkGhzUjArQyisLSVDzWHCkFCsRpABm5StoKSxQoKCopIKCi0HFGUGmEpLD0YULHUCvXv7yiAEahwJyWLFRQUFJFQUGghNKjSgksZXVDWS4XG0A/lnVCyWEFBQREJBYUWwY+lVliac6dyIRSaRRRu2ViVO6FksYKCgtpEFRTmBVUVZGkiBDf2Xc2dwlz3zdXeOlJQslhBQREJBQWFptEH15WusLQQhWpQpdAa9EKFxSlZrKCgiISCgkKT6ARgqmFYkiSiSw2DQgvRpciEksUKCopIKCgoNKOMxtQwKBKhoKDIhJLFCgqKSCgoKDSKkFJGFYlQUFBkQsliBQUFRSQUFJqBBhVbrxQOBYX6ZEIlYCtZrKCgiISCgsIMqNKCS1O+KYVDYSHRq/ZVJYsVFBSRUFBQqNy41L2yNJU6BQW17pQsVlBQaBNUQzoFhfroAmCoYVhyiKl5mxUSgO0dTsVzwT3CV9w073ddKXN1YXjrL62GQsliBQVFJBQUVi4SUAmUSxEa3LKQCi4yALIA8nN4b6PvCQGIqPuliE4AuQBBU1CyWEFBEQkFhRWEqLd5KSxNJW4lowBgYoGV2Lx3TAbIXDdWdo3/TgDj6nZUslhBQREJBYWVBQOq0s9SRQhAeAVetwQwBsBaJOfjABgN3E8rMQk57K3HvLotlSxWUFBEQkFhZUBAVQVZylhplsvFRiCqwQJwcoUSioQiEkoWKygs9xtVQUGhBLVxLV2EsLJCadKegm4tkfP1CcVKSkI2oXpLKFmsoKCIhILCikAf3NhuhaWJyAq61jEAU0v03Ke881frUkHJYgUFRSQUFJYFurCyE0OXA1ZKVZcxLP1wmfwKIhOq2pCSxQoKikgoKCzzjV5t9kpZWwqYxPKJuQ9WeVLrU0HJYgUFRSQUFJYcQlBVQZSitjSQ8Q51TWp9KlmsoKCgiISCwmmGBreKjMLSx0oIhZhW16XWp5LFCgoKikgoKCyOta+qgiwPrISqOGm4pV6XIyRWRiUnVb1JyWIFBUUkFBSWCXrV+l82WAnW3py6PrVOlSxWUFBQREJB4fSjC25zLAUlx5YCJJZ/U7M8lq/HRe23ShYrKCjBpqCwTJCASnxcbljuioi9QubRVutUyWIFBQVFJBQUFiui3ualsLygL/Pry6+QecyrdapksYKCgiISCgqLEQZUaUElxxQU1DpVslhBQUEJNgWFJte5qgqisFRRUNepoGSxgoKCIhIKCqcHauNSUFBQULJYQUFBEQkFhabQB7fZkYKCgoKCksUKCgqKSCgoNIQuqNrtCgoKCkoWKygotAXEzDOfJFIj00JUG+PFht/d8HsBt6qIP/kcOCQAfspVT+bTeZ3BdVnruwKviQHoVKtv0dwDx9u4LoaW+fCNMfOyr9xERCG4zcnUfbC85lXJ4sWFhtbg9b+7kTx9QHiPVEU/kP7Ps+kHCktTN1REYoEnuta4LfbF8rsbfq95G3g8IDQkAAtuAmTee7QAOADkVVc+adFeFBGFAfSo1auIhCISikgoIqFksUI5kailk/zuht/7ZEGDa1g0AYS9R8N73icQdoVu4OsHjv95zegJs+mdzNxS3bQVup0iEopILOuJbYJEmAA2AjgbQMQjEr6gKADIAUgCmA4cOU9oSAC8mEgFEWkAVqm9QhEJRSQUkVBEQslihdnXoEcghEcUwnCNit0AOuB6k8IBIkGejmB5ukAawBSASQApABmPZEgEPBbNEosWrL+26XOt0pEVkWgQZ27YGPywWj9zjZ+LOHD4ELfxxmqHgk6L2Wof8EI85je/ue6pP/rhtS+cnJhYy/7wsysEurq6Hv3Cl778Hx6BGAVwCsC4JziyvjXiqiufJBfBxiUADEDl/iw5BWqeMmdFEIkVYOBZ9kQCDYaVtBNeyAoAoB3hKJ7lWMnihb55QqEyAZHP53k2WRwgEAZcQ2In3Mpaq73Hrje94fVvm5ycXAeAfK2NQIjGYuMvfslLr/2TP3nawx6BGA0caU83CHorLFSEQ7WSYDSic3nX27Lva9c9VEN/xnx06Vbp0FU5QyuJhHfRFBAeVHFUi7VDxaIqW2BVfq585LkOUFCg+pjrAvMXVeA6/YPhuftOB7EI5D74RweA9YZhnP/b6379ui996YvneUJEMDi49JjBDIbD4MKrXv2am8bHxqfPPvvse3dccukBj0wkPUIxDGDsdBMnIloFVRVEEQlFJBSRUEQiuMcF914R2J+Dce6yYq9tSOQG9nEK7nFKFi88iTDNEMXjcQEAhUKBU6mkrEYmmPl4gECEUPI+9ANY9fDD+zft37fvchA6v/61rz6ZQAIEoqDKRkVWIQHIl7/iFcee9/xrvm9Z1qSnF6Thhj3l4Roc03C9F5nA88GwadvTk2Qdva+eQk1V1mM1HbRWDigqfq71vcF7CcF7Z66EIqA3Vzv3avdZrWuqdl3VdGr/+TmRi7YRCW8gtAqFVatQqEWFMKt28bKJn6W38Ipx+/6gMPMOiy3ymHOCwWc57CBjZTqydu7CHOfO1kgbkQX52kP3PDruna+oWEyNLGSqEM6Gd2NGUIor1L33F7ybKXiTyafEW8tmr0/dqHmCYRDAZgBbvM05xpDa1NS0+f4P/tOVo+Mja6DBZJM1yhIVW0ExECAURTIBwGJwDowMg5MDAwOH3/Tmv9p1zjnbkwBOArgZwMOtvp6G8Rj0eGO+7K1NtSxNzVirGkEz3xMKhainp1dLpVIymZye6Z26vb4CdX3qxkoFpygXnhJ/Mq96zsD7Abyqo6Nj4znbt2PDhg33hEKhyd9df/3vDx8+nGDmI450jgBALpd/IJfLTS8nIoHbsexDm/CY5U8k+vv6MiBc6O1NGwFsXLduHa56ylOelM/nuw4fPnzh0SNHcPTo0UMAfkJEH/j2d743VUPRQBUlIajsaN6e5Me5h1AKUSFPefPDV33rsVPFiFfrs7WK/d4BMPXc5zwrlMlkQkq7BzX9+mlIX1abZohM0ySfGLiPrkzO5/Psv66np1fr7+/X1qxZY/b19YVD4bBIpVL2yZMn8+NjY9bIyIjjvz+RiNNX/vtrI95a6IRbknf1kSNHhj7+8Y88cXh4+FwiWsU6d5JOYQ6x4AiDowDHJTjK4DDAIQZ0BoSvKRCHd4bsVWLVifd/4J9v7OzsdAKG1FyAUGQC5CEjIbMCYtrTizKB10qU51xUEg0KrD3TO/z1CJQbsw3vef/Rnxdff7S9wwp8jxPQMYN5I8HQrryny2V27LioLxwO3wAgxMy3aELcbhjGpPc9+7zrc0/oDroLAM580cbgvaQH9NBKo3sjP6OGcaDycALXawNwmiUTbSESARIRAhBh5shrX/e6dS95+cue29vb+1jDMAaq0Ufm0sUnk9MPHD50+M7bbrttz79/+tOHUMMr8cpXvarvz1/6kievWbPmSsMwBoQQUpCQJIizyCJEIdZIK16Qbdu9ju0MeQuIJbFjs13IyVymgEImZ+U+8sDde/4PoG6TzagOPQRA16DZKHkSZAVLLQpzB44vQDUNmgkgkkwmI/feu7svOT214cc/+tHa6eR0vL9/IHfZZY89/pznPm+ss7MzSICmAUygFCbkBBaBCCz+MICwDcsEyBAQOpX+ZgDQTpw4aR46/Ejv3bt2rb71tltXQecICUpAIB7viodi3fHQibETJofY4JA0OMpCJiSchKTInWFoI1qRQJQ9+r8ySwAOg20wLAZbALJgpF792tc+8vSnP/MIgD8A+C2A0QUlFI9BAkBiqRME0yxX9v1NpLunW0QjUREOh4Xt2Dw+NmYnkykOvi4UKlVW1A2DTMMgAAhHIkLXdAqHQ8IMhUQ4FCbDMIQW1jShacXvk47DUkp2HIcBQErJQgiSUnI6k5bJ6Wk7lU45Bcti0zAo2hnThwaHQpvPOKtraNWagUQi3k9C4NHjhw/8/Bc/O7T7znuyLhvx7uEaRMIjEFGP/Bre+veFev6v/+rN2yYmx2+vZSut8KKV/c5gSCnfPzY2/l+KSCgicbrQ29vzF0KIvyFQR4U1F1V/r0AikXjaF7705Vu9PdbII2+EEPIti3bQmBZQnPw4906U4tzjcKvZ6d5rfQtx0lfgHDgSgNSgVfNWUICc+KQkmIgrpqamjJHh4dypU6eO33//faduv33n9IkTJ5xmjRJzNWY0+vqahpUQZn5GHs3vZU2SCN+j0NPdLVZ1r9YHBgaM3t7ecCQS0QBAMnM2k3Gmp6cL6Uxa2rbDkXCYOru6zFWrVsX6+voSXV3dPbFYtJNImMyykMvlMtlsNpnL5XOObdsgonA4ZO7YcUkObjnenl9d94u1X//aV89lnddDQx8MdHKEY4jClAlJ3MmQnRJOlwTHGRyT4DCDTQA6gwOmn66vdrJx2HDXIcMeWrOmkJyetqanpy0ABU93KFx+xRXJiy6+eHrjxjOGO4c6pMaapUGXBMoAyAtQ3lvXOU8vKrCrtDsB3Ugjd91FAIQkOEiQ5dTUlPzFz3/eu/P229aOjox0dCQ6+LGXX17YvGXLsQvOuyAVTyQ0KhEdVHhF7ApCIQLrnwBYBJGEG+Z9AsDwjh0XXRIOh78OQGf2RqWkWxd0XT+u6/pYFaWcpCOFZCmklMKyrOGRkZGd3/za13/xja9/faTC6F70QLz17W/f+NjHPvacDRs3XJJIdGwv6e6ltRpctJZlDY+Njt32nW9/+2f//ZWvHCWijDe2+WbJRMuJRCIep0QsrhmGYf7317563uVXXPFpAAmWsom4yLm564nAJITUNE0KIaRNNuvQdatgDUkpe4PXUbweIikhpcWWnZFp+39+9j+F7/74O4WDjx5Mk00ZKlCKCpSCjQwcsoiR7+zoyvf0dGfWrl3PkXhEbt221br0isfQkaNHtGw+az744N5IJpNO3Lnrjo6R+0Z0b2FHwYgFrD++tVUCKITD4exVT3nq8edffc14PB53Atag/F133ZH43H9+ti+Xy2kADAIJAPqaNWu0DU/dGO6IdBQO7D9Ax44diySnkxEAOhE0EAR0aNChc4gFm9A5zBpHJHGYhYwycUQSRxgywiTjEjIswSFG99e6YD5sziQRLoEIPsfef+zlUDgMlmB3I/vKV7/2SCQSPQZgP4A7ATwEYCKPXCGEsJ+YlXlK7Mmty6e4DFFPKJ4W5b+SBPjKfxC+NQgA4vG4iMVj1NHRoYVDYWGGQiISDpNpmiISjeoh09QM0ySW0g0REIJisVgoFouZmqZphXy+MDE5mc1mMo4jJUfCYaHpujBNU9c0TYRDIU03DF3TNM0wDI100g3d0EgjfWR8ODY6NRpng/W1m9Y5kURUQEhdggWD2SEHYJKSHYcYkgnCdWuTIIJOQoClBIH49zffeO7efXseX8jne0EwIKGTQ/p5551vscM3Wpp9vREz7jp26NjIiX0nsumvpo4AkK+0Xk2vKrzad6l3eBaxbo9MGAAcB06WwdN//ddv+sdUIXWNDDFElkA5KpOQgXyeMhIRfD7w87Rt2+8Yn5j41ZIkEjtXAJG4bPkQiZ7u7mfouv4pEDo87wOC8eU1f66xJUYikd986b/++90AOkdouCuCKEIcKgiILICcBq3g3QkagJiE7ATQS0CPBCfGx8a6/venPzk/k0kPSJbn7Lz9tjJfeigWHj/ngnP+8JrXv+6mLOXC6+X6XBWvhG/c8r0boYAlmEZGhqP37t7dzyx59eqhybXr1k1IKfNSyqzjODnbtrOWZaVyuWw6k85MTSenM9PT09lUMpmbmpqycrmcAwCGYQgpJU9NTzvjY2NWJpuRtmWx7hlHZshewyBdN0g3dMplszKTychkMsVBuWuaJiUScYpGoyIeT2jhcEgITS/7vEg4TLFYTO/s7DRs20Y6nbZGx8as8bEx69ixY3ahUGDfI9AM0almLAruAx0dnfpAf7/Z29cX7h3o7ezp7O2Ix+Pd4VAorul6hIg0ZnYcxynYtpW2bccGwIJIN0OhmGmaXYZhdGua1q1pWhSAwcwFZs4zywIAW0pmIYgA6HqHUchlMx1/+Zdv2sQGd3CIOxBBQiZkWHawwZ1SyB4J2SUhOyRkjMFxCRl1vRDs2eVZK5e/Ax/rR+jBkKdCe4qlqyewpydIT0Y7nkIq89sLoCyY8uR0RDpz61avS2/ZssV2LEfccfvt5smTJ/NgWMzsQMAOhUOFP/uzF09c9tjLp+DSGhOAlsmk9Tvu3Bm77jfXrZ6emgoHPBOuB4FBIG87YDgAOYOrV/MlOy7Nrl41mBpcO5gJhyLWmrVr5IN79vIdd95uZtJZOn7sqDYxMRmanpwKg2FAQgNDJ0kmJELMrG3dslV7zatfq73oT/9MEAL/uFzx9h+FEJOmaR4hIoslkyMdTUoppOOISiN7E36CZpRnJqLpm/7wh3e84fV/ca9lWYVsLudMTE029CGtJBIEAL3d3RSLRo3b7rjj+aFw+AORcNhhyQKYqzG6/HullFomm40XCoWY7TghZg4TCWiagCYEhBAQmgYhBFhIGMKArukQopxABIgEGAybbc5whn9z52/k2z/4Vna6peQwS2jswCYpCiTJJgkbEkwOGAKCGTqIdQYbIAgGNAjWICBYsAYyHzbY3GMyAB1cdPcG3WzBsCknYH1FmfeFSuzTIxICAKZeN2WCCSQDA0Xkrlr3fFhGWEBnZgPEYQk2GTLEYJPBBgMCYINdIaABLBirP7IKob2hMuWLmWcjFlzFcyEfc9ll8q1vffshK2pPnhw7md1z733mD7//w47UdDIHBykAIx/92L/e3rOq7+ZpSu7/rf6bqcN0yNnAG/np1jPMHu5ZZcI8a/++fZv6+/vNDRs35qempqZQqg7hV4gY/8bXv5b77ne/k5hLqE/zVsU+7cwzzzQHBgYM/zlN08gwDBGJRPRYLKabpqmboZAgb8HlczmnUCjY2WzWsWxbRsJh0dHREYknEuGOREdUN/SQYZimoesGCWEYuh7WNM0AkQZm23Ecm8FS13RT0/UYEWmO4+RyueykZVk5TWgkNGEKoQki1zP2q+t+uXnPgw9sGB451QcDzCEmDrPBETZlhE2OsM4RGeIoaxxiAyY01iGgQUBn183qOm6JhWcB0bxVKRhgEhDsCmYmgmCCBMEBgQlwQGQRKEtMebJFljIRGT31wqe96Gfnb7ngcASR/KG9BxN77r1/zYN7HtyRSqaemEomywMmTLhrNiLBCYbT6SB8XxjaqFafPDTwnP/z9nO244EHHgCD0dHRidHRkadNTU0/sByIxOv/63UXXrxjx6u2nLXlcCQSvudP//RPNz7xyU+8+pqrr7nnxRtf8v5a79v6yi1dJOgGIrpQCDFJRD8h0GcATDL4bcz8apbcJVnew5KvfOgb+yZrfdb1qevf/rn//M/n33LrLV+/9tprD/X29m284YYbLrjrrju//uW/+Mo9y4FIxHtja3rP6PtV0pkOcRihcy86V9y/5z5AQMAAKE0w95nlXgcqJwzVnisjFaggzQDSV2UgJggiKUA5gYQZRzycuOXsLWfffe455584e9u2goTsvPf+3Zt+cO33nj4xPd7LwpP3mmtJhgZ4exkQch85zO4RlYh/L96g+sJN6Trd3d3DF19yyR3Pfe7z73AcJ+vYdr5QKGQKViFr23aOiEgIoXtW1EImk0nncrkCM7Ou6ySE0HxNFf4GSaI4WOlMOpdKJvPpdDqfzmQcAOjo6DAikYiZiCfC0Vg0HA5HIoZhmEKQxgwppWP732sYZsRX4AHAse1cLp+fTianx9PpTNq2LalrOoGINCGE7dh2Pp+3C4WCVcjnpe890DStzJgqiEg3DNI1XdMNXTdNUw+HI6FwOBwNhULxcDjcYZhGFwz0mobZbZIZFkKEAVBHR0foyKOH5cjIqHXGmWdmvGR2XQhhEFEEQISIDAA8OjLc+653/k1XgPw57/rbvzvR29c3tXHjJirk8x0f+81Hh+65726TDTY4wgbHWJMdLLhDktMpwR0SsoMhI773IaA7+OSBMCPgbfBDqxHeE64qnwM/M4PJ/3Hi9ZMk0t5+YRGoQO4LbTAkGEwuGSFmpqLHTUKwuzcJEBMECASNCQJgKmpQVDxPhqvYk3cijrdkpBeYJeF7V5i4SDkA6f5MDjEY7l5nA1QgIosIBQLlQJ/+13/H4y5+HKIiihCFoEP3TopmEAlmhuNIONKBlBKOIyFl6XAcB1IyhKAcEVnhUCgZCoUyhq5bcyYPFXo2CZLZbE6X0vnYjgsv/HY2l7dHxkZlIx/cCiJR/INhGOju7BSRUNh47z//y9vj8fhHiAiaJuAr+0JoEIKgCQ3kPQpBEELzXkfQNK34KHxy4L2m/LWi7HE+RMJhBznkMGKN4Ikvfjxba204q2zIBBNHJLP/cgmACSDPhecrOz4rJxBr7Fl13HHsf18/KEv1SCPP4pBhApXi3qjoUsPxL50ovptk4L2SwDqXRc2x5pEF34irc3maUSCybuifBxHZG5lBHIJkYlZi4X2utclC/oI8KE+MAjEViMmChAUJmxyyICHJoQKcJz/uyvxTnvTUUbZpqiPakbvl9zf1Xfu9H6yCJCIJhvRCwBh2oiNh9fX3jz71qU87efnlV0wQw5qanibHdlL5fH40nU6dmpyYGpmcmkilp1K56WTSKhTyDgDorENoGgXDdyzLkql0WkrHZtt2WNfdMB+h6RSPxUQ8kTC6OjvNvr7+RE9vb3c8Hu8ydD3MBF3CkQwmArEpTI2EMDRNC2uaFhJCmL73SUppeZa4jGPbBRAJ0zRjuq4nNF2LE1FYCNIBUDKZCu3efc/AeRee1zE0NDiRymQykmVhcmJCfuD9733us579nAef9vRnnARQcBw76Tgyw2BmZvmjH117zu133XahxZbOJkuOMMuIJI4xyYQUskNqMiEhE1KTMSYOs2CDiU0mGAx2/VmltSK43JFaEsquMOUKZ29wRTsAOQSyABQIIkeglIDICIi0AOUJIu9tGA5BeAKddQYEgUMMNiU4wpAxhow7kDFG13c6YR40ZyowXIM4lHvS6r7W/7xkMrUtm80uxtyKsVUDA+8G8L6PffzjX3/V1le9ttYLV/35wGuh4ZMQ6ITwZJ9niiA3IHKaQH92/D9P/Dr4vk1v33gzCXGF+3IBDZo75URF8wc7DMnuZsdgSJZ/fORzB58Q/Jz1L1p3ITPfwMxdM+bAfZwE8I6TPzn1tRkn/1iXSHz2i5/9zAc/+IE/lVJ+ZfTE2HsXI4kID4S6Itsjf5Rd3MEdUsgIE8clYMJVvEw3jpyjjNj/xRDeFSonDVUeZxCIKrVYGIyRfxhxSURGQGQIlCfAJpAX+MH+PentAT55YAHAcBXDokHJ9MiEKwe8c2cMvKu/tSSiinpiGEZu2+Xb733+s55/b1eiJyMgpIAwBAlTCMIfbvpD/NrvfW/jP733fdd3dnYzEQzTNHXbtnv+eNNN+e3nnjfd0dEhhRBFj79tWxnbdtK2ZWUksy2ITDMUimuaFtV1vUMIERaCwkRCZ3dT8ysJkRBamIkjmtCigoTBzI6UMielnLJte0JKmWGWTCR0IYRJRP5rCgAsN/rX28NdcqMHFHry+IQgIo2IDCEoJIQWAiHEgiMWWdECFcw/7r6pc9dP7+waOzXaMT09rRXfT6Vk4Je97OXDj3/Ck0YKhUIiZBpdv/jF/3X/7Kc/NQJLSCCgUwcMlJj6y2kNAmCTiQ13jbq5DxIyzJ4M9taIzg0Hjqz55yFXj5jNWxyQycc+dRywAfLXr0WubiNdvcu9WiqtHXK5RRGap3uxRwREwHTL/t+8z+KSLPP3reJ3+Xsel38XJBUD28khb38DKCtABYKYFhATAp95z2ewufMsDBqDSIgEohSdN5GQsvToOBLMsvxRSjiy/L3Se674N6fKc4Ejm81+9H3/8O4P5guFwtjkhLQsa1amMh8iUXUZ9XR1UyQcNt74l3911tZt59y3GIiEpmnQhKhJJFySKZHjHMbsMVz9V8/DiegJFDZasAdtOB0OOMLlC9BbX8UFGlCiKpWu2E0x9H6xZ26kkWbwxrK/HfrO4Zmv5Sqfwc1FjK39yFpE90SKN3ctAlGTWACQYYmxd45DJmRRMECiJBws9walPIEKcDe+gqtwkq9YWnBfZxGT7b3G9d8wM5gYEhISDAcSDEkWWXAgkYcDm20UyIYFB05YD+dW9a9Og4EzNp2R6evtty66YEc6HovZLGGBYbmmdWJBpAMkBAsmkM3MtmRpP7x/f+xHP7p20+T0RN8lj7lE/OlL/3zSJmcyY2f4yMhh45e//8Wa/Y/s69Uf1h2yiQBoz3vu85w/edrTJ7u6eyZs2yZmtqSUWWZO7dnzQPSXv/m/rUcmHl2dSqVi/npiwYDuWf4NgAXTK177yokHH3zQvn3X7f3kegawZs3azDve9s5HDh89uPq/v/aVvnQ2DQgqKgcyzMxRzxUdk5BxSTLKkAnpWpcMJg571iXPV1Ykm8HghfkWB/KENTneGvDnOk8lYWx7P1NAsGsM1t1HaTBgeo8asOpTAwg/GJ6VRNR8rCC8Myxl3vPbzjnn+zt33va+TKY6oeju7tquado6IcR2mHickOKy4odQ6erZlRsSBPnMZz0zuX7dhut27rzt+N133312V1fXYzriHYkjx4745+AbDYT/+OxnPHt669atP/rkpz7ZSYJe5L9izdo1uPH3v9+RuCuxCwBWvX6gh03+OYf58qJF2VcW/UwqjQOpfO56IUnZz773P5/7jr99+7OdHucd5BBIEIgJJF3ZLBzvd2/O2IuWZ0hIYrCQkJpE9O7o3z9y28Ffn3nGGSUC4R8V488mI/3MDCAYlBUQSXpEG9ceO/rhsRE8FqEPfvGDl/7s1p/edPDAwaLvlm3+/etf9fqj+w/tf/4f/vCHOKhC9Al3DccSMRAonUwmd/X39D/4jGc/o+Phow8/59bbbo3NWNMU8A0DjALugY29Ms+3yLw8NP3A9N1VCcSZ4Z7VT1z97tHOkZfJOJPskOAYIzj2vrXfLzfCBkOb1DDwnn5oGa15MlGxTh/94hGQ5ZH1onJD5TVnhPcOUX5PFw1fWvnfSgYx1yS77hVr50YeGE0RkMzjshA5YmSIE3ocb3nDW09uGNx48NOf+OSmfQ/t64AEM8M6/9zzT7zohS/Ce//xnwZ8pY6ZCQzdvcvcKzGNkH3GmWccu/yKxx26dMelk6YWigghYkRk6LpuTk6M9/7mul+v+unPfmoGVFFt27ZzRq+++gVHBs5ehagRNbpinX3f+urXh2688UZd07TsS1768t07Lr5k0muwFyJBXgwP28xsl60mgFKpFN1//32hRw8fNvbteygEgE+cOB7L5/MmAGLBAgKCNNLZYI3DLGRc6rJLCtkjhUgKCu0MsReREJQSXEU/oGpurGqklEA4+blTJeOo4e8/nuz196M57AHrPrIW0b3R8jUS0BEqFWow8MjXD3oKPVWv04kK42fwnqgIoC/qYtX0ocqnJbmv99U3ptnXNQf0mhxBpAW0SQ36KQ0fedNHcVZ4CzaaG9GtdSNMYejFTRaLlkgcO3r08Z/42EfuLBQK9sjYmGzkrp4Lkag3uqRpGjricREyQ+KT//Gf1+q6/tzTRSSgMXTSoWs6SKBkTatBJCy2MOlM4rXveQ12Z+5BYUMB1hoLdq8DGXVzB5iqsPEGbrD1b1sHfURv2mJT0xrl/e3Atx9pi3Vt/b+uQ/TBaHWPhG/dreOdyG7LYfjvh0vuQ9+CEEzX86fAvxElSlY0h9znLW9DtEuPvmHATbOiciXVTYVisuG6RfPEsAlkgeEQexut9LwbgCQmB9L7WXokR5INxEIx/M1b3jl++OCRiet//ZtVJ04e7/ItMmxAsMnCyzchGWPiqARHmDzrI8V+FpX6Ub1syjo6OuiZz3xW7oILLjz1wx9ea+666641To+D3KX5MmsKa66yAQOeAliKQy1aSork1SO3nvfJfZ0XmqBzyRUdkkWXNOslRaFoYZqNfLbqd18AV2wUJGvcSJ7/mQUXlRoQsOYjJWvXbF6GWl61mo9z9BTnz8+DcsJV6CTKYs698ebAZldBNSo2OaZK4wUF54fI8zr6luSQO9cyxq73xl2P4JBrVXSJg2e90wLKpOb57n3Z6FnyCP4cuR4MYvd+I+nF+rKntBK7pMIzojAx+r/dB/OgCWbXY1EkDj558ORIYXMBY3817nqsCgFyaQPIu7KACuR+r+3d79Jb6zJgVfQthZ7Cw0ErJBW9xUVyGlQ6uKIAJBXVP28ynOL1su+Fdu9N13Pn3lvumBcJm+Hdf74yjnLLKKP0/Op/XoXInkh9EkH1t/OHv3HAVXyqFMokptK+VelVDPzOXtA4vOiRyu/c+NINLSEK9d7PYAz/44jrqbRdDyZ5XkzvHmEqkBuGwq512vdkkkUMC0QOQBYR/H1EFuPgsX3jucMvvexlk8ePHV373e99Nzw9PV25u4rK3Tb3uBwo7eZjuYYub59xQ4rR19efvvr51zy64zE7Eu96598MpdJpLpNdQYU0uF6pGOhMRc9QiMEhJhllcIckPyfB6ZKQCYnuT3ZBH9erkoGGjI8Vf/f/duTbR9014J9Xk/pNLWz42HpXj6hUNquQCf+5/d94GEsK7Bo7RV5AJAW0cQ1r7bX4q+f+NbaHt2NTaFORSCx2j4Rt2ze946//8qn5Ql6mMxlZcL0RPJuZoBpn0Bu3j8983nEcTE5PczgUkoV8/t91XX/u6Z9nDsRgUE2FXZCAThouOOcC3H/rfRCOG2xXNoxzbKUz9qpxDH5qdXMKSjWBsEBl430CF7zByxZ/LY8EgOQTkhh+w0jlSqttEfBdiuzNkQzEKgYVTFm5QVa4OGWRULjx+rb3XrvkriQr8B7PZlSqfE1cDF1zgGwhh3+84x87wNjoFmdESfHWXbLAuq+k8wyFP39BXnR+swPRW6OlWOZUGtf+4AfRa6/9wSY3bErA6XWQvTJbvsaEF17gW4N8gkEBy4koxXlysHq0l15ZtCIRysLcyjxmTay/lv1OFZ47zIydrattUGmNappWVfmvRX4bJRMzlB9ubKyyT82VFGHfQ0mekiB8QVOsbOLe0na5e50qrci+sk4VibfeevAth/76K+Y/hdhbq4E1RDPDAYipbC58xZOCZn4KxBQH/y7LCWNRYY0AJNzrEizchmRMZR6J1BPTGHvDWFmWWNFjVWkgkCiXCQEbLBOXyI+sIBEoEW8W1a2WM0guav6dysixVk5Qghb8auu71v128p9OYeBL/ei4qaOcQBDVl/3BdeqTE21+4Ub1XqsJrS3hTJUewMLmQumecLy1IIs/uy4x6Rmc/DXheL9zqQAD2eTLeHL3EMbdx+5efeBDD6/2vy54TbWuI/uEHERWuETCv7d9z7hDOEpHY5/d9x/bsI+BHZUWcQQXa/lC8HIL/DXkh5Ah5N3D0UBOQlSCdSD5miR6P907q6GxIWIRICFstK/bc1GPqGXwwRLu5hzMtZCu7BSOwNqBtYiKCELChE562XwwFu+15nK5D04lp2Uun+fAnFCdXbCm1NTnSiL8n5kZ2VwOr3vNK2/8zvd/eNoGhap492YjExrpuHj7xfjOH74Dkdfcw3aZG8u5E4n0RWnYm2yEHg01ppxQ/ZtzrhbThokEiTIBUFMZq3hu+vHTGH79yJyUUl8Jqatg1lq2QYLhk0abZrguZ7hJqcw7Qq4yEzipykK/lZZFEUg401AqROcpFxNvmwSFCbE/xGpaiOyIDXutXW4NKlO6y037ruJU//eGxnyJym7/vAVp0IRWJpgrrVtzyfGpVGya8khszxdD9sos4pVtvzyrr6+YF5mxpBneHHICSnBQqgfrvgXWIFN5SMoMK3SFp4iZq/5eNgbU5LrRXKJXy3M5/cQkRt8wOnNquXzci+t6ttAG1CGtwXui2vbHVbZKnzgFcixr73gNWm7rjNvwX4xAkIbOm2chE7UU+AW4lzWtRUSiihci+LyMyKpzHfSsFA18lXHuAuXx61Ty9pEEECqRh5rnXfG0tdkqElrXQEDlnwkqhYPKKj4NrpThJY8PMaqS0eK97P/uGYUyj82ia5MD87A5qzeiGTKxUHrEDKNPDZm99MiE56m1CaIgEDNiMCkEg0xo0CDgRtv48mw+ZKKdROT1r3nljY6UtQjEbMHz5USiwXyIWcWpIyXB7SPwxNPliZiNPJTrh25CYXesG5oloFkaRDFhreRKnatXYPglI9jw8fVzJkQLqgwGLAleRQj3RqeZ5MF/LPQWcPJ1p9orCGZrAxicd7MieZa5bMlTRc7VrMoAV1FSZgvnATD25nFEH4pCH9GrC3VNQIbkLHdchfCl+r83q8gsRbhhjqJm/O2sHoka63iGtbcJyLgsyYigEltLWnL1OZo1PrdZ0lj5XTzL2uD5rR3yFIhKIgEGCn0FjPzFSEOGlIbW9dwtTbPuZM1WIJoPTr7uJOL7YzDHzJLcr1QMqYZCtgD3ttBEU2Mwl7GrqUhS+VooXxdVXRyulb1C9ZFRLl3HrKkdXq5fwimRB66hPlGN32WF8any9yoJw5Uewsp7efxVExj68GBVL1WtcsF1n6f2rR8iN9KjzOgVNIpxKaRySRIJP2LCK2pADkFYhMHeQYQpDIMMaOSSCGYO2C4a00lr3UvtIBPM/AdPZ+caZqea5lyvKmXZc3oTIriaOC77m+M4f9A0cVqIRDMT5VueNNKwdfPZ0C0dtmVDFDSQLUBSugrnPM4nszWD9I4MOu5J1N8AqLXXNjdLAoG8nK4gifC/tzKxmplx7C3HT8u9HHo0hMQfE4jsDbsenypKYH59AbltWUw/IYnC+kLZ0HPji2T252pMy/DfDGPde9ZVfY0mxIKFrC0nkBAQmpjhFg/+Xo8w1PRezINIFEPOaI5ritpvdVoQkucZIqqRtxNvO3na5ETHHxOI7I2Ue4YDyK/PI7sti+nHJ5Ffv/BtOo7+9TFs/tCZRSWsUimrsvkv2LlV9Ugw5q/gcBvWfI37ys+9rM0/Zj7J2jyYmjbL72jsHILInZ1D9tIcErviDROGasR0IXQJcmvxzvgu9qrDB0lE08R9MZEJAMIWEDZBOBo2r9sMk0yYZEKQVgydJy43cDern/oEhECQcFo6c1I6f0D9bCxC/diQsuf0JlQlmu0xm83+wTSN0zO/AZc9F4scUH32zAImGTjnrHOwO73bWxh+lRIqxjXOFcPPGUbn7o6GSENDTQDbaUkQVEpt8BIA/Y2LUIqTZmZMXjGJ3JrcglkTOm/pxOqvrJo5FqL6DRo9GkH0aATdv+kuPnfq9acw/bjkgpxvfl0BqSem0OGHLgTmP7Y/hq2v3dKc4K9hqaxppfKeu/8L7W+LcO6bts+N8FP1tV9vc/STjoOEwP+9pietzmM11/tc8pnaeR9sfd2WuuujIaWhWvMzr/1McExrPVYlapWPnhWZ2TNAMDBxxSTya/MLKCc6sPorq2dX8DxEjkUQORZBz29LVfZOvu4kpq5YmArAuTU5TF0xhe7bumed4+J8MBbGI0Gi5rpvZH9taL9u871DaCC0CQt3L88V41ePl+kRdb0TNWRUmSxoox5RTY8hKk+bLNm8aUHG+7w3n9twk+Vaa7XQW0D6rAyS5yWROjvlVXAS6Il1I0IRREQEBhluWFMgRNInBLXmqd66rAy1lGhdH99CwboXtX3Z1CCZQDUi0SiJqEkkXvvqV9z0wx//7+mxWNaJL601SYLc8KbV3YO4b/I+CEuDKIhiPe5ious8NorJK6bQc1v3vM0tRO0XcjVvNkKxODkRYfjZIwsiAKL7otj4iQ0lZaCWNYtn3yiGvjqEoa8Cj/7tEWS2ZNp+7mPPHy8qCLNahZpQEGdYLuu9ZiEUDiHmuKqrKU0EasK6X0Z2Kzxp9YhFK7wRCzW+mtAaIgnNrp/iY5UY/TJZWknUam14gXH3Xz/y3AWUE//myQnR7BRyFTkxhMPvenRB5MSpZw+jZ2dP44oOLcy6C1qWZ5Vfc1DMFkZGUXmIViP3+iIkEvm1eUw/PonuW7qaNiZUfQ23b7xrGR9qEYzFvEcFZWB4IozwzjB6dpb29OTZSUSujMCkEEwy3NAmv/9OYKCl11+k2n1DdSaEA/9KpKI1fol77919E2YG6dUjFdWkT/H3ZkKbqIGfISXfq2k4/7SQiUDCdSOKgYCATgYG+wYhHtIgLOGGNjkCxLLoqp/P3B1/4XH07uyZvzLf7pGrIgDKFQrXqpA6K4VCT6HtZ9R9WxfWfn1tTa/DrASihht+4yc24Pirj2Py8qm2nr/VayF7dhaxfbGmK3DVjHElmpNC2W4hXR5xwfXJcIvXvR+PWkkuyhTgYIjebGunwYpNCza+FbHqzcx3I+ulGmmoSljrEYpgLpL3wcktKVg9VtvHp+u2Lqz9+pqGwkiawRmf3ISjrzqGycsn23r+hZ4CMlsziO+PYzFhrspX9egrPi17HBHNKNCwVHHqz07V1CMaHU86DZvE6dFnap9DM+czI5SwwniVeDCBNzzxjbgwdiFstiE8K0bJC8Ez+hcR1ddNq3kyWl0FipkP/9vHPjqF2UObqpGJqtBrbI/UAImo+jfbtm/SNG3BiURl1aYSK6z/Ho00XHjOhfif3/8PtIKAyAuv2Q+BNJp3AqATdjBy5SgGbuyf/43YNpfk7ALAVyBSZ6XbbkXQshrWf3N90RtUbR79cIqqcxwsUVnlZlz7jbVIXpCCE3Haeh2ZrVkkHk7MWbDWTbxvxHq/EJZLqjwPmtdnzUEoVlV6g5awGV4LzFw7QTLS8LmeZmvajHAFamBFzebhmmUOZvVQeE+ltyyUnFg35+p6dZUHAtZ9cy2SFyTbLieSm1Mz5MRiuK9btZegGpFfiGth17PSlAK9SDmHE3YwdtU4+m/oa0JO1TDgtFGPqLVuaub3LOq1PPv7duzYgYtjF+No/igMMqCTDuH9k3DqyG1uSI8FAMf7HAENDux500Ep5X0odaaqRh7qkYmqXom5JFvXJRL5fP6+UCi08KyzQS9E8PV+aNOF513kkoiCKOVItHChH7v6GFb9fqAlgnGhbrbKG9//e2pzqu03f/+NfWUbgJ+s1QjB8pXE2awwfTf04tQzh9tLJM5KN2nZm91y35RwXISbYqstVM240sutSuUDNKfzWvBNsM76mOeaqR56UFsmBAlFtdemN7efSPTd0Nf29dR3Qx9OPfNUW68jtTm1yNddEwSs2c9sc45EZTnSsnuFlw6RAIDjLziOgd/3z3/+TsM11jyfRUwkaq1x3zhFRBgcGgIArDHXYMKeKOog0mvJXpY03eR5uEnWsqQHtWiwbNu6D9WdB7Xq9zXskai2JdUjEDU9FGNjo/d3dHScHiVlDlxNgwaTTMSMOPKFPETOy5OwCPCahLUCR68+irU/WTu/Bd+um44bOxdmRuqM9hOJxMOJGWFVqGY9rqJENboGEg8ncIrbSyRSZ6YbUtDaJhyXkJCebzJcs58TXFNzroazBOJ75zLONXMhiBoe79SZCyEn4jUTw1ulACcejuMUt5lInJFq7vyXk4GgrR6JCuWt2bLJixDHXnAca3+8ZnEq77zI5n8ea7SaXKj0xjIzBgcHi3+PiAg00gIJ1/NX/oXnOLDhtIxITE5O/RGz50fUIxRNl38l1C+EOYNYvPMdb7v/Rz/5GZYCgh2uNw5txOT0BMh2PRIkvUdtfgnXPoafMIKh64agZbWFvVFbfSMuwDmEJkINWUPn+x2LTdFupXV1oeZqscXAVtsEZiuluSiVoAUe77mu09MZslBNTrT6uhdKTiy2ddeudTZjvfAiu45FTiRGnjCCoV8PLmk9Yims5dn2FADYseOSst910oueCL+8LYMhWUKQqFuwopZ+Wh6aTXXDohrFX77pL27G7BWbqun7das2UUPXVN8TUfa84zh/1DTx+KVCJnQycN7W83DvzbuhFQS0nOeRCGFeTekqceR5R7HxexuWtgBYgHMwx822b2yLkUi0/DOXWVO6Vm4CLZmXJbZ+FnQtLhCRaHf+6EolEgu2ntudI7HMiAQAHH3+UWz47oa53+Os1vJc1m1laNOOHTvKXqORBrD76JdqlSyL5KLVIUpzgeM4f0RjZV+bmSVq1m9OjRz5fP7mpSLYBAQ00nDm+jPdHAlLuC5Rrw16Kxf72CVjKHQXoDD7TTvbsZyvbble+2Id8+W+Xpbrumnl2Kj7SmGpYOyScVg9llrDpxnxeLxCOXbH3ycOEhIOHNhsw2YbDjvFUrBzlnnztJzkcrmbG9Xj63CAGdCbeHEjORMEAKMjI7ckEvFFvxCKHa6hoSfeA2F5Cdd595FCbnjTfCs3BXHkeUdw5tfPXLrsfZFYEFaiRXm5WnuW7FpS47usxuZ0eldW7Lprc7L1cvRILAs9Yhms5S1bZjaWFSRKnbulG9bksAMBAYcc6AGV+3R4JkZHR29BY/0jMMtryv4mZrkPUYWdzEoo3v62v75lKW0eggQuPPdCkCVAloDwy79KuKFN3Lpj8pwpJM9Izv2ma9exGM6BF1iwLKdrWYnXBzW+amxW4LWosW3fdfDSOJa8HrEM1vLFF++YeTnskgffIyEhyzwSfilXv5JTNULRToLx6OFDRzC7B6Kajl/5fDmBaoDUz0Yuqp6U4zj3LwkiAXIb0wkD287cBs33RtgEsgnxg3E3xKmFC/vIc48uLgGgNjFFJBSRUOOrxkYRCUUk2nIkDsRb/plLWo9Y4mu5mjciaJguFn71SsBKyGJYU7XwpiB5aFfjQGae+uQnPn4UjYU01SMXM6DP4XwaalJnFQoPGIZ57lLY8wQJ6NCxumc17h3zvRICkITEI3FoeYGJ7ZMtS+zLrs5i8pxJdO3pav6mWwwKwnJSBJe7oqugxleNzfK6FjW2S+584o8koGU1TJ4z1bLPXNJ6xBJfy/F4opayXuofwVzMiyC3gVFZ5aZg9+raw8NVf54LbNt+APWLHtcs7zqrDj0HAtEImaBMJvPA4lmrPMuFuR2uB/sGIQpU7CNBXnO6tf+3tvXWhOccndtNp6xhS8capjwSy19ZVuOr5ISSwYt3bBfR+az7+TqlRyyDtVytYpMPjTS3qpPflM47AeHVNRIV9Y1m8z4E/94I8aiHTCZzCxpoKj2Xz55L1aZaZKLs95GRkUVDJGbreu2WgNVxwfYLQJYodrkmi8AEmJMmenf1tnRxFzoLGLt4bPHcdGoTU0RCEQk1vmpsFJFQRKIt52FOmOi9S+kRy2EtX3zxxVWfd9iZ8b0CAjrpLsmokhdBxf4Qs+ux8wl7OnHyxK2YJZKohq7fciJRi1jMOLG/+9t33rYUPBL+5AgSuPi8iyEscqs22QStIECOe2nr2uGVeNbRRSPk1CamiIQiEmp81dgoIqGIRPvORekRy2Mt1wptCnocfAJhChMaaTDIgCBR1DkbJQW+J2K+uRN/966/ua0OeaA5zFwZkWh2qGdLwC4ehULh1sW1t1W/VCIv4ZoMxI04yHbzJMgW8Cu/ajkNA7cMtHSBOyEHw1cMKyKhFAR1fUpZVkRCyQk1tstVsYXSI5bTWq6VbO03rRMkYJCBsAi7B4XdhnVoPpnaJx3zCWuyXF28XmI1KvT4pmZxrh6JhhpapFOp0+qV8AfeT4CpB0Eue9w0dEapMZ0DQJbGdN0v2mBNeMbRpSUA1CamiIQiEmp8lZxQMlh5JOZ0LkqPWNpruVrZ16AeSeTm3BrCQEiEYJI5I7SpWT02+G8uyOVyezD3JnSzQrRobKt6JY4ePTJnIkFEEELMu6FXowPv50mce865EJZwy8Bawu0lEcC6X7ZBCDzz6KIRcmoTU0RCEQk1vmpsFJFQRKJ957Hi9YgltpaDhuha3ohKD0IwbN4PeZoLkRAkoAkNbuGnuenDU1NTe1pNHhohEs1MQ83Qpocf3n9srryEyCcT87/Wypq+tSZfkMBQ/5DXkM5NuA56JABg4NYBmBNmSxf68GXDcMKO8kgoIqGuTynLikgoOaHGdhl7JJQesbTXciKRmKtWOweDutedndyKUMVY+yZx8NDBvWisAd1sM9Vyj0S98lEEgP77K18+xpKn57a63AH0j7lOnM8k67mFfOaoQcOagTUQtvDCm2iGRwIAhm4cPD2uSbWJKWVHXZ9SltXYKCKhxnZJ5kgoPWLpr+VaFZvagRmROTw3XfhjH/2XvZi97OtpD22q6Z0oFAp757S+vAUgSEAI10MxV/hdBWcLcxIkcNH5F4Esr2KTJdyu1hXovacXkZORli72sfPHkFmdVURCEQl1fUpZVkRCyQk1tsvYI7Hi9YglvJZr9ZBoB4koHkDdiJp6yOfzO9F4SBM1MGNtIRJ1kzemp6d3znWFsddjb665EkEvRDC8qSbz8xKut5+1HWQLCHtmaFM7rQknnnh88Vtv1CamiIQiEmp8lZxQREIRiXmfx4rVI5boWh4cHDwt3gjpNbibC6anp3bW8Ua0JE9CrzG1VOf3pojF4UMHd65evXqOHgkuMjIhBJib/Qz3Db43gpndNuU1avISCLrQEQ8nICyCli/1kahE10NdSByKI7kh1bKFM7llCskNSSQOJ5rggqdBQVhOiuByV3QV1PiqsVle16LGtn2fzQt7LitWj1iia3mhiIRrN3d1X1ePZRALMOymtf5Dhw7txMyciGb0ep5t1vQmyMJsU16N2dD73vdPd/zq17+d2xrzyrb6ZML9vTlGJ1mC4D7ORiL8yk1nbTgLt+y/2Qttqv35a69bh72v39vSBXTkT47inC9vU0RCXYu6PjW+uOsfd53WS9zyrbNqKyRKTqjzUWM7b6xIPWKJruV6pV9bSyRKYU1SylnbF9TDr3/1ywcDujkHdHVuwYww0PociSChKB7ZbPb2uREJl0wQ4OVJNJcrQXDr+fp1fWcLjyK4jekuPO8CCMtLtnZqvyd6KoLee1vb8j47kMXklsnaU6bc6q0VYiq0SYU2LebxPd2HWnsqtGkpj+1iOh+lRyz5tbxjR/sTrV09V0AIt1+0ZAkpGQyn6c+yHfvYLbfcnELtMKZ6na0bHj29iemmOlNTswQsAMoX8seiseicVpmbYOInXTOkbD5OTIPmnWH9ClB+h+stZ2wFOQRR0DDb3A39YRBj54611prw1KPo2te1cOyd2/RaZQ1T16fGd2Veo5ITat2d7mvhpTO2K06PWEJrOegNiMcTbf++YOsD6Qg40nEjauaAXC5XyxtRLzciqOc3NEOihdNcjekQAJqanHxwbhMYCG/C3BvU+Q1BBIliCFPtARHoSnS5HgmbqlZtCsKcMjFwR2tb3hc6Chg7b2xxWhKUNUx5JJRHYuHGV3kklJxQY7usPRIrUo9Yomt5tmZ0rSESvjeCirm9bkM7aroXRTI5/SBak1TNcyUSPIcPrsZ26MiRRx+aDxv0k6TFHLpdNzvwfhjU9q3bIQqibmhT0ZpwUxvqQT/lqCISStFW16eIhCISSk6osV2GfSRWtB6xBNfyQvSPcKuHuhVEQSUjOgGzGsGr4cDDD9+Bxis1zUXnr0sk5puEURZ39c8f+uCd8yFBfpJ1WXMOmu2dza+gYmM60nDBORdA2I0RCS2vYfCPrRUCjung+ONOKCKhFG11fYpIKCKh5IQa22XskVhxesQSXMvt9kaQRyRICJAAwG6BIWL357l0xg7o3i0r9TobkeAWkYpq7AeZTOaOeXkkvKpLRa8EZk+cnttkukRiaGAI1CCRAIChmweh5bTW1oO+4gSckLO4rDdqE1NEQhGJlUMkWK09RSQUkVio81gxesQSXMttz4/weqYVw5rYzQme6yV4Onc1AkENeh1my5Pg2TwStd5Qb2oqTzR4iInx8TvnLGu41EiOvIEmUT4WjXSubmguPbfS0Ko1EDU6W9cTAq2+CcqsCWoTU4q2uj5FJJRHQhEJNbbLziOxovSIJbiW29nR2vdGCOGGNgX13rmWfk0lkw+hfkdrqkMgapGItnW2xixMhwBg3/59cyISbsI1IMvCm9zyWMFcCUFizi3EZw6KwMUXXOyWf22CSAzcNQBzymzpTTB80TAKHQVFJJSira5PEQlFJJScUGO7THMkVpQeoYhEpQXbLQZU1Gu56b5plRgZGdlXxbAPtCHESTQ55bMykxoMiB568MET85E2ZV6JIpmg4CuKVZnmx4TcCTWFifPPPh/kNMe11t2wtvXWhCtOKCKhFG11fYpIKCKh5IQa22XukVgResQSW8vt7Ghdyo3wvBFUqlg6nws4derUccw9rKkp6A1Mc73s7ka7XdOPf/TDE296018mhdCbDjSrdPEQuYknkiRQQSZ8n8R8CIWfJ5GIJEAOit21G0HXw12InIog259t2UIbO3sMA3cNALKNwrxRSCwfLKdrWYnXp8Z3YRS9lT42Up3PkrwWuYjOp8n7aNnrEUtkLfs659DQUPu+hFxtVXidrFn6+u78Olp/9CMfvgvNeyG4gZ9nJRLViEPwuWYo0oyciWw2u88wEjvmOqHsxzlBuE07BBXPxi8R25p5dYnEWZu24Lbbbmv6/et+vxb7Xri/pWvtxGOPLw4LsGqGpK5PYcHGd8dnLlZjo65Fje0KPJ9lrUcssbV88cVtzI/wiISf98soVSqdK49IpVJ3YWYjumq6ea1Z4WZmqdE+EvUqNzXc6XpsbPSu+TBDl6EFElPITbr2f3e/0P0331wJQQI7Lri4qRwJH4mjCXQd6Gype25y05Ryq7dDiKnQJhXapMZXjc1SuhY1tss+tGnZ6xFLbC23r/QrlUq+IpBkLXle3oix0dG70HjFpnqj1ZCHQm9yyuuRiFlzJh58cO+uTZs2zZFIAFIGQpcIxTYdfvc/EFoW2kQgbNm8dU5EAgAGdw65N+1yswopa5i6PgU1vkpOqPNZ7NfCS39sl60escTWciIRbw+NIFfjLFZq8giE5PkRib0P7t2FGq0Y2jEjYg7T3mhfiRlM6OMf+9dd81mlxQQU5oBXgkreCZS8Ei3giehIdAA8t8+KjkTQu7d3+SVUKmuY8kgoj4QaXyUnlAxeCmO7mM5H6RFLdi23I7SJirprqXAQY34lX338+le/3N8geajlFGjqBMQ8RUAjDKYsvCmbze6fz1e6JV7LJ8LvdM0tloAaabjo/Avn/P51N61VREIpCEqZU0RCEQklJ5QMXgKK+2Icz2WpRyyhtdzW/hFetaZgNoNfrWmuZMJxnNS9996bqvBIANXzn+vp8g2fQLMN6eZCIsrIRDKZ3Den9cZ+7JicQSb8UrB+NadWTbCAwEUXzD3ZUctrGNg9oIiEUhCUMqeIhCISSk4oGaw8EkqPWGJruV2lX4veiIDjoBUeiUwmsw/Ve0fMR9evC73GB1GN3+uFNnEdElF8LplKnVw91zXHwepNALmdxEshTdzSHhsQJNCRmF9b9HV/XIvh84YX/6bfjtcuBWVnuSu6Cmp81dgsr2tRY9u+z16kY7vs9IgltJYHB1tf+jVYHIgBkNdMudTqYO6fPTI8fLendzOqhzc1ku/MzZAL0cQ0cx0eOduyKLKjPQ/cf/d8VmqJrXmdrr1/ggRArV2VBMKWs+afrb/u5rXKI6EsjadHsCuLuRpfNTbL61rU2K4oj8Sy1COW0FresaM9Jbj9kHwKnm4LGtE98MADd2P2/AjG7KFNDVM+0WJxUI1AlP38qU9+4p55fRFjJmMjP19CoFbfuGbzJ8gry3XRhfNfRAP3DkDLa4pIKAVBKXOKSCgioeSEksGLVXFfxOO5rPSIJbSWW59oTTPye93kCBSb0M3HI/GpT/7bPWg+tKmZSqzzJhJzmarKi6Hp6el75i53/ITr0leTx+moBgnzScRcyIQggS1btsw7i35RWxPUJqaIhCISanzV2CgioTwSi3pMl40esQTWMjMjMc/Q9uqeiFITuuA4zJdAAEAmk3m4ihI8F89ES6o2zVe01SMUdOrUybkTiUCeBJd5JITH8FrOHVuymHr39cJMmVBQUFBQUFBQUHrE4kZ7GtF5eqpPJthXouefaD09NfUwZu8bUS8toa19JKoRhGY4X5lHYnxs7GR9xlaqxFT1VHzmxuVf7r6+/H3zmRzf9dSq8l/rblkG1gRlDVMeCeWRUOOr5ITySCyFsV0s59NCLAs9Yoms5VaXfi2GMwXqi5byI2rrqcVeabNYyqeTyZNoPqSpHomYc9WmuZKKWl8644Luv/++A1c87nE1GYdLJETNcq7FQS+eivcq8nMbgn8vhTTNxVlBoJbFyHUd6kLieBzJwdTSVhCWkyK43BVdBTW+amyW17WosW3fZ/Piv85loUcskbXcDo+E382aARRjmThYsYlnkghBADMES0hZW5O9/777dtfTvevo8Y16J6rOmGhyqmtVbqr88lp8kADQN7/5jQOzfZk7eJrbrCP494oSsMFvoOIklYaucmLm0rRuaKh15b/W3rZO5UgoS6O6vuWiBKnxVXJCyeDFObaL6XxajCWvRyyRtRyPty5HIuiNqBwERvX8CCJACAFNEwFduPZFfeYzn9qN2h6JWiFNXOPnhumePo/pxywniCokoqjvT05O7u7u7r6g6oez+zIhCAQxQ/l3SUQ1N5Af2uT2lJAsIVmCiSFYgJlBROBiYvYsE+/V5mplQ5LoWARdhzsxuX5KWRDUtajrU+OrxkZdixrbxfLZvDSuc8nrEUtkLe/YsWPehXZmEomSnluMmmHU9Eb475FS1k3GnpyaCpKIRsu/citmQsxhyus1rqj1XGWHa5w4cWJ33a/ylH6hCQghqrwiUL0pMCFU8U0SsizMye870SxaWQJs3VK2JizAuRTihbYLiEK8oDwSyiOhxncJj82KlRPLZGwX5FoWy/m0AeuWg1diEcvQVup8tXIbuKjuMlA1pMnzRhB5f659QSdOHN9doW/XG/FadG5OoybmwRXrhTnN9n66997d99b84EApLHcgtRlkosjmGEWCEPRcuAPPcNgpeSbAcwptajUzNVMmevf3qtCmGkc+nm/7/pWP5xWRUERCje8SHpsVKyeWydgmVydV+deVqkcschnKzBgaGmzpfFUWASrTW3mmbkpERd2Xiz0man/+2OjoMJpPsm6m5CvP1yPBdR5nIxRVvRLXXffrR2abSD8USQgBTVRkrAeTU1AiE/43MDMkJBzpwGFnzgTCRyIRbxmRAIB1t69dkgIgcTLe9vNJrk4twCaWavt1JE7GlaKriMSKHF8lJ9onJ9TYNnbETyYWzz3dJixVPWIpEInBwdblxvq6a/HRIxDFiBouL0EqhEsifL231GOi9gXde++9B9BYfkQjYU1NjaCY49RXIxONNLUoXuC+hx5K246TrvUVbuiS9AZVQHjMzOcSRZdQjXFgcNELIb1ugWVko9EF4L1+y5atLRUAWkHD4D2DS04AxE8k2n4+w2cPt30TGz57uO3XET+RwGmFUnTV+J4mKDnRPjkRGYuqsW3giI5FlrVHYinrEUtBhjZT+rVetEu1sKZini7D01NR0lGJQOQnWAe9EfUb1n3nf759EM01o0OrRk3Mcx3PRiZQj0wkp6drV28KJJ8QAK3olRClqQhUb+KKyWQwmFyvBIOLpWTnE9qEwGS3AkO7B7HUkDjVfiu7Yzo49LjDbfv8Q487DMd0lsVYKSgoObGy5ETXkc4FGdsDVx5Y0mPbdaRrRdxrS1GPWNT2IU/Ha5RI+KSglpHaT5iuJBRS+pEyVKZXuiFNwq1a6vYy8P5eW/ecmJi4F1Vykevo6S2luHMlEvWIQqNkgo4fO3ZfvcmUkt1MdQDkeSU0v1Gd742oCG2iwKS4JISgC73YzIMw99bX7agpvO6OtUvKmpA4mXA7a7b5fMbOGMO+p+1r+Xjve9o+jJ0x1vbzN1MmEieVR2J57zhqfJWcWHg5kTiZgFbQ2n5uk2unsOc5e1s+tnues7ftY9v1aOfiuqfbjKWmRyx2GZpIzH5PSpawpFXXuFwrydqtCEqBaBmfUnhhTUJA+NWaPF24ng37WEmXpib08WbyI+pCb2CaqcbvPAvTqXaCwc+ie3bfc//5F1xQn+sVcyVQ9EZIKd1PKmtKNxMaaYCGIpmYD4kILi4/d6MVGNg7gFNnD6MQW6AqGS2ygBy6/HDbvyc5kMJdL9+F3kd6sfGWDfOzgF1x2N28sDCCfVFYiVR5UjW+Sk4sSzkxsGcAJ84/0fbzy3ZlcdfLd6HrSCc23rrRJTBzgGM6OHT5IUyum1qQsR3cPbS47uk2X+9S1CMWowz1SUFlKDsjmJPLcKRsWA+s9hqfQAj4ZMJTjr2cCCE091ulBEvpVXSqPVi777n7ftQOY6rXJ6JeT4mGZ0pvcsqpBrloJgO86Hb5/Of+875XvvJVdSdVylJ+gyACBao3uXFlgdJZVJo4AeF6IlhAIw2CxLwX2Y4dl2DXrl0tJxMLteG2Cr0HenFq6zCy3dm2CxgCYXzjOMY3jgMAIpMR9D7Sg/ipBKIT1WNgM91ZpFYlMXrGWPk5LpDQikxE0HugVwlpRSRWNBZETgQwtmkMY5vGivdg3yO9y1ZODN07iOGzh+EYzoKc6+TaKdzzIre6pGZp6DrSich4BJGJKEJp0/U+wS0bW4gXkO3OItOdxeS6yfJzXICx7X2kt+acL6V7utkw6sHdgzi8hPSIhRrvu162q+73CykgbAE9r8NIGwhPh3H2eWfjxqM3Yl1iHXrDvYjqUehCr3nO1XqTBcOZignT3j8igiCBYBkg//WunkuuF0IyJM9ebXTv3r3DqN8/YrbwJp7PrOjzXAL1qjbN5lwiAJRMTh/s6OjcVP1G8vMkpPspXliTRgDLUvhS6X5jlAKc3InyH2tNdnNEYge+9KXWEYig4Dt19sJtuK3A5t+fifuuvr+ln0nshqzNeAy8Jh/P49gFx93KXOT+kStftAjGZjmCmGbcR9Ua6LRjk5yL1UdhecqJRpDtzuLIjqOLfmzmcx9suGUDHnnSIy012tSNQfAgdYnxTRPApglXBi8iaJaGdXetXVq6dItkYe+BHgwvMT3itO9pKOkaJAHhCJAkrF29DoYwYAoTGmmuUdvTQ33vxIzPafT74DsYZFkTOhJukrUI7GWygSRr27bTN9zwu+EG9PTZqjY15YVoBZGo5ZWo9eU1yUQqlR6uRST80CY3PqzUcI4gwBoXyQSq8LViPgQFFaH5EeChoaEZAqBlXol7B3HgiY+cJkHWvDAzUgY23LJh/hYQ9m4u6d/MBGELCMe1EpB0nyMGmADWGFKTkJos/syC3fWwCDa1jbdtgJk2F8dGxA3eyUElgstJA0maQfKK40ztJwgLvRk3RUyUR2JWmGkTG2/dgEOPPawGI0gCbt0AI2XM6zO6jnRicPcgTp53smwXnNFTyfu9eI8H7mfhiKKxhgI/ux9IJWNN8BEAi/JHP1aBRblRZ6Fl8pbfbJlz+FU772l/GBqRU/ORZYO7V+ORJx1cMnrEoum1JAFIAjkEYRMSkQRMzYQm3GgWTWjQSIOEhJSy6GEoeh24kjCgaoL1jEvngL7qVWsilAoNcQOJ1tPT0361JmpwtGfLl2gaegunolHWU9bCe3j41MGhoaHL6t1UpepM7OZJCFc0Sq88rP+3yjVc3nfCVUQxj5t0aGiopeShbFM42oXEqTiSA6nW3SBBphygfv6mMpu7bDah0HOgG2DG4cc+Wv49ZQLU3YzKFNCgcPUUVmG7xEGzNOg53T3yGq5+6guToyeHYzt37hQQrjVMGg5s04EdtmGHbTiGA8dwIHWXXARoaMkCsAAb2sadG9D7SG8bBTU391pZYSnh8nEvkgNJRRLnH/58EIPJKf7sMnl2J5YFg0snRY0o4u0mGq26Nxs6T0UkGoJ/Txy6bJGSCUZN+TVr1DHqvL6KNZ+JseG2Deg50D3v3kYAsPreVbBCFiY2TpTJ2vJr8+Df257VVbMF/Hu7dL+TZzzwzo4YLBhSY7Am3UfhPydLBhwCWLh/98dBarIke70dv51e5C3XnzX3kKZ23NNcMshAVpcp9eQMM+NlL3u5vOTSy0be8fa3rGpE9nUe6UT8ZBzpgXTVvbil10flWh3xaR7vuUB6xjIJl0Q4BLIJ28/ajrAWhk6l3Fq/sbEPP9Klqi5Vs5M1V/3dzYsoVRYNVi2dzSNx9MiRYH5EkFDMlhvRsnIAeoNTXU081mq13WjDCwDA3bt2PXDhhRfVZ7my1HiO4ZWa8hrVNUKjip4JZoBoXsrMJZdcgrvuuquosLSSWKzdtQ57n7F3bgIraG2qohjOeEtR+DPgzN1S0n2gG+a0iYNPOlT8XleAIshc6lhqfCuAgFbQYGR0GBk35tbI6nhM/FIZ2RrLvurCV2s3/uGG0C9/+0uSIQd22GYrYsOKFmBHbFgRG45pk2O4RIOFe43FTQzscpY2bWZbrj8LieHWVWlqdI3We51maeVkwbO4EBM0q+jtYVHQWLM0CFuwsIXULMHC0qSwBQY6++X2refZ27eeKzXSmAiIRKN0w++vN+7cfYfwiITwD3IrIhAzU7usbvU20nZ9bjUIWxQtsIstvG4xkgkzZWLfU/YvLvJQSaRryK2ZRhCqSRbKXl9hnT/jxjMQH4m19B5Ye/saRMciGN80ASFFGZkgx1WD3HtfQLM8b29BQNgaawUN3v2Oyy+5nJ/2lGcUsukcAIZkpt33363d+8Bu7cT4CcGadA05uksYpC5d8qAHSEaAbEhDlhGOovc4cFTzdiwG+TtnWVFpnGEUyVqtOa98jhl4wQtewE972jNy6UzGdhzbKL6Ga5Nc/zVrbl+DR556ACRFeYhwhXd5xlpugDjMmCPyypeCQXbz8pcknT75yeWET3j74/rB9QhpIRjCgC70YqEeIk+/8UiT70Wo1pGaauwbQdIRbLrs50ZwUenlGTnCtbDr7l0P1DF7NFr6dc6J1o0SidnIRb1k63pJHASAvvjFLzzwmte+ru5XufFpXPImELkhTqJ8UmaQh0rLtFeTdz7YscMlEu2wNkfGw+h9pAdjm8YbF1iedVk4oqiQC8dVyoVDELYGYbubSFFgkKtUuxuChCiIGqyXUd++5iI6HMW2H5+NExeehDQc97skBUhNaSPlgOWCPTrqWsAJmqVBy+kemTCg5TWs1ocOGkLXUYB42mXP4D+57OmIJaKRe/fe23Fy8mQo0htxTqROiPBAWJuwxvU/3n2TPjY6Tt6G51rNNUnSD4kyZPmGVkY2moeZNnHOr7fN2Z3eCsJQa3OKjEfc9WD5Fkdi93eNhUMOWUJqBeGQLQrCEnlhU+Gcrdutpz/9GbnVfauzds5JEYuMAOXAxEIIg4hMylPoxZe/LPTap74+tG/3g8ZXvvLlEAATQISINFeukOmRC99CIgKzTigv3EBly41Qe9Pk2iLTHQfCXHl9o16UJz3pydi16y6EkmZAoQooStS6TbGVxGih80gqzz1+Ko4Lrj0fe5/x4GmrLhMM2SOH3ERLT7nWLIHOaBdSE6mS8cWTWf7P7vOeTPP7FwmuWKeB93jv0woa1u1cB2ELdy/DLOGITd4D3Q93I34sjuRQyl1+JSXS/ecQyCFJklg4JIUtHGELJknOi//0Jc7jrnhiLpPKpJFHyiFnXEqZAcCrz39m4pkXPauXCT16SEsMj5yK/d91P9fv23MfOBhW6j36XmFX/rrEwjEkHNPxvMnS9R57Bh+XfDCkkHMiFmbaxLZfnQ3d0lu0aOdBHrjk8SmuKZewwUgbxfth8+bNeM1rXmf39ffbd911l9ORSPDJkyf17p7u/PZzzp2cnJrMAODp5LRrCGdYUsqeeucavLdDEyYGdq9Cti/jkhiHXA90kTCXK/Hli5Vr66NUemlxrgIhbiIvmpZXek4v34sDoXLtJhdlxlbH05Ecge5ED0JayA1tIq2qkcoPnS9GPDTokaicPPL2Kzdkn4rtDBiY1RPh44tf+PwDqO87bWui9VyIRDXvRL2TRQPuExobG31gYGDV9jpUopjxDrCneXjMsCwPgn2nQ43E6vl7DxKJeFkHwlYrCYP3DWLMq1BUzdNQJrACuQRaXoNW0KDndeg5DVrBDQ3SLA1hiqSiRiR5wXkXQrLs2HX3rlg6l4LUmKUuScsIt6SuGylYq7wv4vH4KdM08z09vWOrVw9aF154IYEg9j30UHjXrl19/QcHkNbSkUwo3bNh7QZk0hkcOXykbLUwGJFoFJs3b7a6e3ommVmePH7cOn7yhLWqf5Wzdt1aOXJsGKeOnqJ1Z6yfTk+nr9OEpnnnJQEgk8zqQ91rjbV96+I2nOiZ3ZtjWc7Gc0Y+sv3y86IwOHHtz37Qc2LkuCY11qUhNcd0hGPaZIdtsk2H/JAo38JWJsQaxMbbN6D3YO+c57rZ11YnDJWm05JQ63qkE6IgWLM0kE1SWEKSQxY5lIdDmQvOPT99yUWXTmw7+9yJfDY/Lh2ZZodT0nGm0yezSStfmM4X8ul8vpAFM+uGrpmmGTEMM2IYRjw/nY+uHlwTe+/7PhgLhUIdPT3d8Yf3748yEAqHw/p99+42pJTO9PT00N1379KSyaQOQAOgkXvzaAD0gFdD82Xy3/7d3z/U29t3wrKsccdxpqSUeV/++F4P71EnIkPTtIgQIiyEiAAIExEZurb1A+9/35pkKll1PIeGhjA4OIgTJ07g+PHjfpRWUaAQlcu5RCLBH/7wR6x8wRo/c/NZhX137Ftvmw7skE12yA2zK1ps9QCpWCSYbQ02K8/mQnK0goZzf7odY5vGcfiyFuVXVduhuLayJxyCsFzZ6IdSGlkDTzz/SeObBs/QehM9sW989Wt6Npv1aK+n6KCUlOnL4p7eHnT2dCGby+D4yeNl8+0rXQPpfvy/N77neMc1XQcKhUIBQEFKmWXmvJROVkq2mNn25Bt7C5GJSBBRWNO0mK7rq/L53MD73vue8yt3XyKX1ugZnbsf7pKO4TisMSdiCef88y5wEonEMU3TtNUDg9TV2WULCN6yZWtycnxqOJ1O758Yn7jvf3/wk4ceeOD+iQfufyA7Pj7m5PN5Lu15HaJnoFsbHBwyt194bvfjL3zS5j99xp9fHolEzo8n4mfed989XbffuTN6z+57qChHhZvP5noiGGxKOF5YqhNyD1cGe8TCdOAYpdw3n5jXIxYbdm5A78Ge6orcXMkzN7n2uJSgq1kahOVW/9ELGvScAT2nQ8trCE2FsHnzZrztbX8zns3lUlJKe2JiIr9x46a0lHK6o7Nr2nHsyaPHjqWZ2WJmv9SVlFLa27adI488+mh8zdo1cu3adTI5PU179uzRNm7aaG7YsFEnIfSR4eHew4cPmSdOnEDX/k6EpkwvdEdgw9r1iEfjePTQEeiaPmEIIw8A6zdsGL/w/AsLzMx79+6VI6PDxuT4RC8Dcmpqch3KHHTlIWpMAAKGE5ERYMl45jOfNU2CJvc88IA8eepkRy6X66lFiiNjkSKh9A2bwflvq8c3oJkWyYRN6O/sR1gPwxRmsQcZ4IYySciyvIYajpvZkxX8kqMEL7k6ILRkqchQMBm7GrLZ7EgdT8Rs7RnqrfymhDvN4XVUYWX0FQANgOGRE8M7fEulfxiBw3+P9rWvfeO1288999lCCLiHW0fXf9R1DYZhIGSa0HUdmqa5Ge4BEuF2A9Tc5BhBM86aAkbPSmYZ/HtwbQRLd/mPd955J97whr8osdKK17RCSTx20XGMbh6dwZh9q5kouALLJw5a1icRGmt5HZolEEH0B099/J981tBNPWSGhK7putCEpmu6EJrQvO0RtmM527edO9Tf09e1d8+eDSOjI3Lv3r3yoYce5Hg8cWjz5s17urt7MwAgNCFM09SIhNB1TRckhG7oGhEJIYSmaZrn0SOSYCHZkQRiKSWE8ALSSGgQrBERMbOUjiykkunU9NRkanRsNJ2eTltG2NC7El1GNBYzQmbINExDAIBt28ySWWhCGIahhUNhUzf0kGboId3Qw0KnkNBEVNP1OGkUj8Wj/aMTI2ftvOvWjfftuy+StJOmHbFNK2pphViBCjGLfCXQJxW+laWeAth7sAcbdm5oq2JXzd1dizBUvj4ej2PLli3I6lk50D1gxSLx8bO3nD2+7eztp8ZGx0YKhcK0ZdlTtmVP5nO5yWwuO5XJZKampqZS09PT2cmJidz09HQhmUo601PTdi6XkwCgGzrFYzHNDIVET3ePEYlE9ERHh9nZ2RmJx+PRWCwWM00zTCR027YKuVwuNTY2NjkxMZFJJZNWJBrVenp6opdeesmmfC5/wf0P3Lfh0cOP9tx11106XHlqXPG4x2evvvoFh1Kp1KF0On08mZwen55OTuVy2YJlWbZtWazpJfuHJoQwDNOIxqLheDwei0QiXYZhxjRNM3wvSF9v9ws+/elPXZZIJJDo6Nz9rGc9Z7qjI9EFUKcQIgRAPPTgnsSXvvRF360kKg0lW7dutd/97v8nJ6cmJYA8MwoHMgesb/7ga91Hp49G7IilWTGLrIhFVsgmO2yXb4pClu0wQa9FvU3you9c2HpLXIOyqvJ1rfCeVeLwZY9i/Izx2pZW1AjD4IrwIrhlHBnshZR4cc8AIL2wBennYQnX0JLVYeR09BsD9qv/9HVjnXpHNKbFDVOYorerW3zpS1+gXffsYk+Zces9uN9LkISXvPglfNHFO6YLdsEpSCvvSDudSqXHfnf9bztSyeltw8eH+QN//8E7RscmfuwbQpjZdmy7ULCstGVZ+UI+n3Mcx3Icx1UZXBrBYGYSJEKhkBmJRDo6O7vWRCKRjYlEYttNN/1++w+v/UGfv51dcsmlctMZm0YuuODCPYlEx+927959/+jI6EQul7Uj0ajR3d3TEYtFOyPhSAcAJFPJkbvuvPPhH/3oR6PJ5LRsavEY3kq1wKF4SGw5a6v5lD956uD2bdvP7+vpu0jT9TW6oUf6+no79+x5oPvBB/cm0rlU5+j4qOGQxMOH9iOVT8ExHddLYcoSqTAdOKbrvXAM9+/FkCitRCy6D3dh/c71bfG43f3n9zRGIgK5ZJpVMuIZWQNGVoeRMThOcWzfeC62bdg2+oQLn7QvN50fdcmjLEgps1LKlG3byUKhMJHP55LZbHYyl8tlrYJlO55lD8xs2ZYs5POFVCpVSKVSVjabtSORiD6walW0q6s7EY1GYqZphohIMDNLyQ6zdBw4CO69glzFyCeqjuMwS5YMltKRjuM47EjpOI7j2LYlmZlZMlu2RXfvuusxqVTyzK1nn42zzz5bAKDHPf7xhyYmJsf2Prj3CBHpGjQmkGRmaVu2EwqHcueff8EoABuA9U/v+X9vTCan3xkcyonNE3BMCWm6eY9OyCmuDcd0ShEEGrfcMOOHVfvGBDNtIjwZxlv/7K14+o6nYyg+hE6zE4YwiuvLn5ZKgV00LvsRM3XkIjPDcSQc6XifR0X3pmQJx5GwbRuFQgGWZcG2bTiOBHt/Kz5KiSNHj95xzdXP+ygAxzNE2ACswFGoclje6/zDf6+cq5eimTuPqhAJ36ooPALhHz5pMKsQCTNAODQA2ic+8annPPFJT3p1LSKhaaJEJAzDax8uSkyOUKzLKzQBzes1QVQR3kSi1Anbe2yWSADARRdd5LmjqOZrG9lQZyqL7u+27mD/0/d7AkpAWJrrXchr0PI69KxW9EAIS7CwBJNNkiTJD7z3g2/s7Rr41ute++oh3TAIAEzDoHAkInRNJ13XZ8x5Lp+TtmVzJpuZdVMxDYN03SDd0CkcCgtd19zvCIWEobs3nEco4DhO8QIt2yrtRbpRfE0un+NMOuOkUilnZGTEKRQKDACmaVIsHqNoJCp0QyfbstklExb73+9fj65rZIZCIhaNiUg0qnd1dpqJjo5QItERjcajHYlEvMcMhfr0kL66oOVXIYp1t+29ZfMvb/1FpxW19ELMEnbIJsd0yDGcmUmExBC2wPo71qHzWGfbla6y5+oQhuDPL33pS6euuuqpvzz86JFHHMfJMXPedmyHGJbjOLZl29lcLpucmpqaOn78+MShgweThw8fyh85ctQuFPIctEDWQygUKrtQ0wyRaZrU3dMtOjo6tHgspglNJ+nYnEqnnfGxMTuZTLE/r729PaKnt1cfGhwy165dG+vr6090dXclQqFw1DB0w7LsQi6Xy4yODE8cOHBgcs+eB9LNnGMoFKJ4PCHWrFmjn3nmmZHevr5QV1dXOBqNRjo6OmKdnZ2rotFYfzgcXm0YxqCmad2apnUTIRSPx0O77rrT/Pa3vyWSyaS/JVjvfNe7nHXrN2Ysy8p41sICANiwdZtt89Dxg7Gvffcr/RmRjToRO2RFLM0OOZodtsgxHaqWqBoMCfCtuEGvmB/nft4Pz23EciQr7PBcYZ8XVFqgNQ1m7fBINHofTK+ZxpFLj7o9ByqSn6kyLCNADIrP+4mS3nN+TLqwPQLh/U3zDDAiL6AXdLz2Ja8fO2PNZjuiRaROui1YSE/xEgQSx449anzi3/6NHLdEICcScXrZS1+OSy59TCE5ncowZM5x5GTByp8sFKxT+Vz+aDqTHk5Np0YnJyeSmXS6UCgUbP86HceR2WzWSafTVi6Xc1LptCzk89K2bdZ1nWzbLhuwjs4OfXD1YPisLVv7V61atbanp2dbKBRaR0Qxx7En0unMg48+enj3fffdd+zBB/emDh86bKVSSdno/dw0gTBq6AyWu+ZCoRDFYnGxecNm48KLLurcvGXz2q7OrtWhUDimaZrJxCEIRIbWrj7z5p1/vPLHP/9xX6qQhNRlSaEMOZAh99EJ2UVy0b+3H51HO6rHnreIHN93zf1l91/Ze2WgMIgXNqxZAnrOJQ+XbXts4fHbn3DIyJvDMYqN6dI4JRwxwRZPsi2nbdvJWlYh5ziOlc8XcoV8vpDOpHNTk5PZ6enpwujoaC6dTslUOl3WHMTfm9OpdFGOJhJx6ujo1Lq6OvWOjk7NMIxioyzLsmRw7y0aXSr2Zcu2YNvuz9Kx2bYd9nUB27YYAHTdqDmw4XBY+Puv/5wv+23b4VA4lH/Pe947UmkNn56aeMV73vOP/w0AVtwC61z04johCTtqwYp5R8SGHXFJZtm+3EIioRc06FkDoVQIoakQvvC+L+CMrjOwOroaCTNR7EMWLPtavkVzqahBUA+sod/5REJKxwtz9PZ5LyfCkQ4sq0QkHMepSSTuuPPOH7z5TW/4nkcGnAoi4ZOGfAWJsCrIhKxDJLgZcjAfIhH0SMxGJMxqROL1f/GG8974xje9rx6R0HUdpmnCNAxoulYiEn6smpczIYRbqqsY1xaoUOR3xg5O6FyIxItf/Od46KGHZpT3akSY1SIPlec1vSaJbHfGJQ45DVrOJQ/bzjjngf3373vVg3/+UP1EjXdjaDYlMIhmN556nzWXz5vPd+fzefafM033MR6Pi1g8RgP9A8aqVavMVatWRfr6+hOdPZ3dZizULcLUjxB6D48dfO73f/X9QSfsGI7pGNJ0hB1yyNEdIibqOJFAzyM981K6GvY8NEga/J9f+MIXZp7//Gu+uvP222/N5/PZbDabSaVSmYmJiczxY8fS+/fvyx45ctRu2urYgvmZbf5DoRCZZoji8bjo7u4SPtEFgFQq6Zw6NeyMjY06rTqfdevX6xs3bgxv3Lgp2tfXF+vr6+tOxBPdkUikywyFujVNiwshIkRkel4KAtiWki0pZdq27alCoTBt21basuyCGzqlR81wqFvTtR49pA/eseu2wf/95U8GWecOaXJEGk5I6lLv7Okq9Az2GPsO7tNZk+TGhPvkwg35YFEiG8UkIknY9IeNviiXcHPx+MlPvtI5ceJ4HoB86KGHbE+NkwAcECwvHMXq6EjkL7vsscJxnPgdd9zedfz4CYOoKKd9bzKoymLu6OjAli1b0d3dnQSAiYmJxIkTx3Hs2LGGQ+6GhgZx6aWPSWmaltm58zZtejoZTSanI2XbE5XCzBKJBG/ZspW+tvermNwwBRayRBaKoZylpGE3/ts/vL9LAfLKRp+/7Xz75LGT1tjIWIQkmKTwYqEhX/C8P0099jFXTBMjyQ7GpZQT0pETUsocAAhBOkCGEML0iJgIVChzpHRyjiOTtm1P5/P5kWRy+tTk5NT4iRPHJ4ZPncocOnQom0olnYmJyeK95yuB/s+Fwsx7JHjf+PdIb2+POPfc86Lr1q+Px+Nxc3xsLHPrrbdMHjhwwGqnnK1JJHTvZz2gP9hg2AHhZZV+DokQduy4JHLueed1dHZ2hiORSDgcDptmOBQ1w0b0vPPOveB3N17/2h/86Ps9fhiUn0+hWTrCUyF33oJ7bWVp9zryuBlZ/cgTDpYFSlGQRHjJ08ItTAGtIKAVNH7Ok587eWb/ll8Ytj5hSGMceYxbucJ4NpkbT6fSqcmJiczE5GQ+m8nYuVzOSadTMpfLy1wuJ32CkEqlpLsu5mbU8fe9amuqUbRhLRXwrxht5g1bv7/lzDPP2/yzB44/sK3QmUe+I49ChwUrasEJtZZMBD1KRsZAKGmiM9eJz7/vC9jYuREDkQFEjSgERFlxHRSjksgNdQrokn5S9gy2EXivlC5h8HtEIFChSUoJ23FgWZZHJGxIWZtIfPGLX/jAf/3Xl+6rQiQKVYiEVUEm7MD7JJoslDRfIoEqoU0iQAxqEYlQhUeijEzcceeu79YjEpqmwzQNmIYBXdchNJdIEAkv+do1vgkhoGmlmLYKiVKc4GJ2/ByIxOte9zrcddedcyIS9chD8dFTKHOdObckX4Hw5Mc/eepDH/jwlQNf6r+7oS/5+5lEYiXCF7bxeEJ093SLnu4efWBgwOju644kOjrMSDwSNsJG6Mxtm5790+t++oL9e/ZFjYxhkEMmgXSgmFFFzd1K9ZMpaxEGf+4T8QTO2nIWVq8eHLFtexTMcmDVquSWLVt2j46NX3f48OGx5PR0bmpqKj88PJz1vQsLShoMUFBhWAproaenV+vv79d6enuNvt5eo7Oz04gnEuFIJKKbpmmGQmHDMPRi5rxVsGzfajgyMpIdnxi3MumMAwCdnZ3a0NBQZNXq1R0DAwP9HR0dg5FYZO2DDz245vDhg2tf/qpXyFMjw0fS2cyjuVz2VMEqZDeesf6KPQ/tedxvbrjurFOjp8jzTpCXU0EsGJLcEA6SxB1HOnyhbj3zmc/KXH3NC05ms7kkgCSAYwAOe48nAaS8DcKXxwgaeaLRSOS3v/n1P137g2sHQAh5MlkHSOvq6pz+7ne//7I9ex/c5X1ODoD9lNufzABw/WNuJO8zwwBiZ2zauOUd73jbtw8ePLS2MuTuaU9/WvqlL3vFe8fHJ5KBfcL03+s9RgDEAXQCGADQw8ydAIfC4bC44XfXd33/+98T0pDI9GZhRQvFfDC/E61fYMInGoMDg7jyyVcdveSiS687sO/gzSEzFI9Go4PRSHRzoiN+3i9+/vNVAwOrpy+44MIxy7KOZDPZ3ceOHt21b99DRw4fPpw6NXzKymWzMhyJiFUDq4y+vr5wR0eHqRuG5nsTACCXy1mTExOFRw4+kvU9AO00nviEohkls+2Eohk5EPBW+PdfOBwWHZ0deiKe0Drc8MhQNBELb9y4sW/b2Vv/5Nabbz1/+NSpDhBRLBaNHT58eMP+ffuRTCXrkoiiJ4vmJqen1k2V/hLIFiSGVz4XICl42+az+arHP+W6qZPJ/yYWNudlLp/N5zKpTG5ybCIzMTGRP37ieCHokQ0q+ad9HhcGBXy0OSLh44FX7On54Bc+cPjGvTfG8915FBIF2FG7mLQ/74IWfr6ULaAXfCIRwubEWfjwWz6MjZ0b0RfpQ0SPFBsbV/NIsNeGgKUECQEBV2etRyR8wiClLCVVe5VJHemGNflEwradukTikksufnENb0SQTNTySDh1PBINhzW1gkgEQ5uCHgmjgkjUypUoEolf/PLX7121atU5NYmE0GD4RMIwoHmvIxJevgQghHA7A4oaeQtlfSW4IvencSLx+c9/Hl/4wuerEolqZKKmF6KiS2Lw0ScUsXgM//qvH/vAVVdd9f4mbxVFJOoQCz8kJ5GIUzQaFeFIRIRDYWGGQiIeiwnfVWwYhhCaRkIIMnRdGKZJhmFohq5roXBYM03TeMLjH79F17Wz7r///gsOHz58xc6dO+OpigTfGVbbCu/D4OAgnvnMZ9111pYtn/7Ndb/ZL71gV8nMlmU5mUzGKeTzzuTUpD09NW2PT4zbE+MTslVW+5W2BnwLnmmaxcdQyEQ0GhVBl34mm5G2ZfHY2Lj0FQFfCfDXUk9Pr7Zp0ybzzDPPjK1du66jv7+/NxaPdxKRZlmF7NjY+MipkyemxsbHc4aui46ODrO3ry/R2dkZj8ViHblcbvVDDz147tjY6LqTJ06eMT09tdqyLBOAHBpaY11wwfnJP3/xS387PZ3cCWA3gL0AxgE4vqJfCU/xp4BhxyMNoKHBVU/88pe//HcPPHD/muPHj8cEiX2f+NRnnhDYTBwAXPnZgc/05b1459+87VdSyicODQ1h+/Zzp9761rf+18MHDn7Bk+8IbE4C5XlzYQAJAL0A1gEYklL2FQqFBACWUlo9Pd2rf3Pdr8+/+eabzePHXU+IYRj5js7OkwODA4f7+vqPbt169gPRSHQ4nU5PplPpZGo6mZqYnMxKKbm/rz8+ODQ40N3dc2Y0Gl2raSJmWfbkyZMnd/7wh9fec+stN6dXiEK3ZORwPJ7QfIIRiUb1aDSqGYahCSIiIUgQ0WWXXTaYz+fe853v/M+OEydO1PRSVNMB4vEELrvsstSGDRtuOffcc3ebZujEr6+7blehULDyuZxj2bZjWZZjFQps2baUUrJ0HJbS7X7rhwXlcjlnamrKmZycsCcmJmUqlZKLgugtEyLh477n3Pf2177mNZ9Kp9LFEPbKQjuVzYcbCX2rTGL2KyS96U1vwpvf/OaqRt5Kj0SlQZCq6Ji1iYTfKdutSMre79LLj8gXLNhWAbYXAlWNSExOTBx+ylOufDdKuRFOhechSCQqvRTV8iMWhEiUefpQPeG6ESIRqiASOgDta1//xqvOO+/8Z9QiEkK4eRKGYcA0jWJSdZFI+DkSok4CdJ34yGaIxKOPPop/+Id/8IiLG1aVSqfxyIED9S0eAeWxHnnwycVFF1+Mz33u8xd1d3XdM4d7UBGJeWxu1f4eVDrd17uKp64b5MeLmqGQ0HWN/DyQiy66qOMpT7lqKwAcOHCAP/vZz4KZEQqH97DkKduxOZfNyoJlsW1ZAYuVWx7TD4coParNarGvoXg8IRKJOOmGQaZhUCaTkUGrpP/3aDQq+vr6jO7uHr1/YCDc39cfjycS0XA4FCYSggjEkuXAqoEDg4NDjwDIXHXlk+Y097+74fdBmY3ghvGUq548r/V0/e9u9D8z6KGmAJFA4O8U8JL4ZKIPQE8mk+4ZHR3rArNjO7YlJVuOY9vF5FHHkdKRju3YhVwuX8hmMvnp6amcH18+NjZmj0+M2+lUmkMhE+vXrw+dddaW2Jq1a3u6Ors6HCntu+668/B3v/M/Y2qlLj2i78tcH/795YdFkqDOfC63jYjoGc94Bp72tKeBiOj663/30N133z3tOA77eQF+Xkoul5O2bXEmk5G1ZG4lFjpUdCkTCWYenU2pnw0Tk5Mb//LNbz549927yolElWI3ZaHqVE/VZZxx5pmIx2LF5m+SJf7fP/w/bN++fW5EgmY09qhJJII9IoJEwnEc2JZHJGyrmEtRjUgcOfLonVc//3mfCHgWKolEvuLRmoVIzLkcbKuJhNYEkTCDROLfPvHJZ1155VWvqEckdF33iIQJ3XvOJxJ+mJP7HBoiEsEGdc0QCSnlo7qun1vPLXTy1KmNd9999/NvveWW54+Ojjz57nvuQSqZnEkm/Pg4lLdE/7M/+/ND73zXuy7q7uqanONNrIjEaSAh5cRj5nOVMayKFChUrqOenl5t3bp1hq7r9NBDD+XHxkaHmTk/n88N1kFvdz8Jn1hUIygB0uHvHb6XIvTIIweid915Z4/tODKfy0nLtqVtWdJPHvUVwUI+L3O5vEylkk4lSQveT729fdqqVQNaX1+fEYvFxdjYmH377TuzapUtf/nbiOxV8ndpEAkfH/rQh+7+5je/caFPIGqSCu+5eCKBszZvxrZt59xz4UUXff2iiy7639WrVh2q0GHLjBuFQuGXuq4/vhkiUUys9qo18SxEwtMhPQIhS0RCukSiYFkoeETCzaeoTiRuv33nD9/8pjdeGyASdhUiYcENU63mkXBmIRIN3xvzIRJokkj4BCJc8XcNgH71Ndds+qd/et+HaxEJIlFWBlbTNWiVREKIoleiasfpsljKwGg1SSS8RduBOcSXjU9MdN18882fevff/e2ry7wQHpk466wt+OCHPvSaHRdf/LV53sSKSCgoLA+MtYJILEZ4xIIA0Ec/8i/h+++/v7eaRXiuSmDQuq28eQoKS5dIAMDE5OST3/ymN96wa9euUmJzgEh86lOf/smlj3nMa3q6uydn0XerEglmTlbNW52NSKBKD8kqRMI36NQiErZjo1CwimVf6xGJz/3nZz/8la98+YEAKahVqakRIuFX/8NCEonKiahMuK5FJKolXRe9EjfddPOn4olEXz0ioet6oJ/ETI+E+xzV2k2rEongkDVKJA4dOvSsTZs23YhATDGacAuNT0x0fetb37zhs//xHxdeddVTJh/zmMf85JoXvOAD3V1dh1p0EysioaCgiMSSARGF4OZMKCgoLDMi0UpjxsTk5MYf/+hH77v99tuv/t3vru/667e85Z6Xv/wVV9YgEPX012LO1+HDh5+0fv36XzZDJNys7caIRPAzqhEJRzqwbaes7GstIpHL5TOPvezSNwbIgE8O8jWIRNBTYaO+R2JW/bUdRKJWCdh6RKIy6VoDoH3uc1944eVXXHF1LSIRLANrGLqXJzEztKnYkG4WIlE2Wk0SiUwm8y+xWOxDaEF8WZugiISCgiISikgoKCicFiIBzC/ZutUipo7+KsbHx1/Z3d39xaaIBNXJim2WSDgOLK8RnduErjaRuOfue6579atf+c0KIlEtybpRIjEv/VW0cJKqxVfNdpRN6je/+Y0/zvolgXCg2qfRegY8x/FQUFBQUFBQUFA4vairk4XD4fVtNJLMcmKVebL1P+/HP/7RH1G9uWilji1n0c1bAjHPiajWSbUR8lCV9dx66y3jt95y809zuTxyuWwNIhEs3VWb8dV8s/c4n1Fk5qkf/OAHn61DjBQUFBQUFBQUFBYnqSg7fvjDH/6nlPLR+X6Yp6TW1E3r6af1/l4oFJDL5XDLLbf89H//9ydH65xGLV28mYTqpvTZVnsk6l2ArHGhPmMTQgj9rW99y3XXX3/9r7PZHCYmJjE2NoZCoVDO3QKszWVxwZJaXN7wg8urIRVdSf6B+p2HfUgpp0dHRz/+4Q9/eKMQYu2rX/3qyfkOvoKCgoKCgoKCwunFK17xiklN07Z/5CMf2Tg6Ovpx27aPzqr0BnTIekelLurrqRzQhKuRCMsqYGJiEpOTk0inM7j11lv/8Na3/PV1QgidiLRqujQa80YALQzDp3m+p1rCtZ9sHexwHcyRiKCiFCwRmUKIsK5pMU3T4qtXr+772je+9Q5N08DMsAoF5PM5rFu/HrFYrFgG1tA1kNBAgaYkwRwJIoJlWThx4gROnjiByckpZDKZMrYoBEHTdOiGjkgkAgDo6OxEV1cXPviBD7zkpz/96UO27aRs205LlgVmDma8L9b8CEDlSCgoLBeoHAkFBYWlhsWWI1FLf51RfZSITEHC1HUtqut64pqrrznr3f/w9/+dTqVjyeQ0pJTI5XKwCn5SdKm1CBNgGib6+/swODiI1YODMAyjekM6oNhDwu1obcO2LaRSGTx6+DAi0QhMwwSI4DgO3vG2t35+7549Ry3HTjmOk5ZS5pi5Wu+IXMXPlfkRLelo7UOfw0QwasdlzcaIaj3nVfAiXRNaaGJ8Qjvy6KPHN27aNKRpGvRIBGYohLHRMYwMD6O3tw/xeAxCCC85JY9cNotMOoPRkeHixErJgYYhbnkwTdPc5nXCTd42zRAikTBM0wRA6OvrRSwWS734xS+5ZufO205JKbOSOc/MQfJQLaQLi4hEKCgoLB+Y3qawEq5TQUFBoV2o1F/938t0UmZ2HHZsacmcbdv43ve/t+fQ4cNXf+vb3/pmT2/P6pHhEcTj8WK4kZsg7RQjXhzp4MSJk/A7r/vlaTWhQWgC/f0DiMWiCEeiMEMmDN2AlBKpVBqjo6PQNA2dnZ3QdA2ASyKOPPro8QMPP2wLTYSFpJwEiSo6d6WOXU3f5hp6+5z1V70Nk9RIaNOMi5PMjpRsSSkLzNK+5eab923ctGnIVfg1hDS/ipNb3jWbzZYSWJgRMk0IIRAOh2BZbh1ey7bB0mvCJLzO114jO01oxS7ZU9PT6OzsQm9vL3K53N0bNm58o8f0cgEWJ9F43oeCgoKCgoKCgsLiJhW1wvKlSyi44EiJm2+5+dSZZ5zxvAOPPPLFM84446KJiQmMjY9hqLcXVqGAQsFym8pJpxRaL92PIiGgazpM04CuG25EjWkAzLAKFqyC5faZEIS+vj5Idg3hjuPAcRwQEXbfc88hZmlLKQtSSkuydFDbUD+rzt3KgdRbMBGNkIhahMLLTWEG4DjSycNGGgTjV7/8xd6XvvzlT/bZnNvZWvP6R2jQNA1G4GchhFceyx14x7ZhOw5koJurJvzysG7I1IEDD4NEHOvWrUNnZxduvPHGj77whS/4iRdGYKE8fKleGNO82JyCgoKCQktz9hQUFBTqEYhqz3OFvufADXdymNlymGnTpk1v+uEPf3TNVVde+feRWBRjY2PIZLPYtOkMCKIikXC8vAgAEF40jF6hs0qvf4RjO7Adp1j2tVT+1Qt/Ysb11//2Qdt2kpZtpx0p88xsc6nqUDM6N7eaVOhtmqTKC5CzHcwspZQ2M+dBSJ08dVKMjo4Mr149OFD66FLugxCud0HTdRi6Dl3Xih6KYiya965MOoOTJ09gdGQEuVweZshEZ0cnxsfHb/n5z352/ac/85mdjuNkmDmLUmOPYJ1dpwqpUBWbFBQUFgIhAMkVcJ2GmmoFBYUFJhVBBVMGHh3PuOE/2gAEM1sveME1/0tEv9aEFnvZy1927jXXXPO8UCh0xfT0NPK5PMLhEPr7+7FqcBDRaLT44ZVlYG3bAWwCMyDY75Lt67Gl1xUK+fzevXuO2badsm0755GIRnTsRonDvHRYvcUTUi+syZntYr2BsR3HyRGg5fOFzMyPn3npfpty/3AnyMatt9yC8fFxGLqBUDiEeDwOIcTxv3rzX372yNGjpxzppBzHSTNzNuCFCCZTBwlFox4JBQUFhVbCVNepoKCgsCCkwicT5Ol+/s+apw9qHqEgRzrim9/85n3/8+3/eUTTtK+sW7e2/zP//u9v1TRt6MiRI9i/bz9s20I8nsATn/wkaJrmkQSvVwSVvrpUsWmmajkyMnrStu207ThBEsGzkIjZjN8t02H1eQx4vYQV6TG4ahdWy8If9ExYNpA9ePCR/Rs2bNiIGW3JA9Qi8DciYP/+/di3bx8EEUzDRG9vL6LRKGKxGL717W9/+bP/8dnbHelkpJQZZs55BCJIInwiYdWYiHreCEUuFBQUWg4iijJzZjlfn5plBQWFBSQNVENvqxXiZHl/Fz65YGbBHhzp2AcPHcpec/U173/LW/76MS9/+ctfn0qlkM1mkcvm8Nvf/AaFfAFnbdmCs7edHfjmWg2Wy5orO7bjZKWUVoBENKJfO5jptQh+eEsKBektnJDKiQmevNPAoVWQCZuI7FKdXhQJg983AgDGxsZw8JFHMD01hXA4jHAkgr6+PkSjMUTCIYTDYezbt++2K6+66mtSygxLzjPLPJdKYwVLZ1WSCbsK6VFkQUFBYaERA5BZ5tenoKCgcLrJBQcUbieg1wZLxQZ/BjMTu4qrI0k6n/r0p//wmX//9zt+/KMfvWbr1q2PzWazyOcLyGQzGBkdwZHrjiCXy6GjsxNnnHEGOjo7i/pt+aPrqSgU8mkv9N+ZhTw0Go5fj0w0bwhq0Xtr1ePVvcNAqadE2Ps5jFJ/Cb/HhBl8DxHp73//B5/67Oc852pd1+E4DqamJnHi2HE4joNwOIxQOIRIJOIe4TDC0SjC4RAi4TAe3Lv31qc9/elfZeaCf1QQB//wPRKVngmnCplYKt4I1UdCQWF5YXI5eiU8b0SXml4FhWWFxdhHolE9lgJ6rBbQZ43AYaK8J5oZ0HNNIvIP48c//vFLLrnk0qtyuRyyuRxy2SyygSOXyyGfz0MTGvoHBtDV3Q3TNGHbNm684YZfv+tdf/MzrwWBHy1jV+iv/pFDeT+JAmYaxlve/4xaNAnBx2BzOr0KmQgFHoOkwm9cZwRerxGRLoQwn/2sZ2/7ize88S+Y2S0HGwohHA4hFHLJhGmaCIVMMCP7bx//+Oc+//nP7QWzzaUBt1HueShUHJVeCafKwC/W5nMK7TZVcPumeCU04mLm421WRhMAEst8GUoAw55re7mQCAFgAMu/YlOSmVdCwvxiXWeNvnQlNEU8rlZEQ2SistGyjlLD5SCZMAJ6rVHx6BrFAQNE2ote9KJN//qxj7+TiCL5fB6FQgH5fB75XB65vEsmHNst97pz587f/su//PMv3ZYIHGwkZ1XosPWIRJB41Iqumbdngto8ARrKO10bFUQiFCASZgWj8wmIRkTa0NBQ4uvf+Nb7wuFwpNjZ2tC9mrw6brrppp+/9jWv/llgsKoNfJAs5FE/pMnvHVGNwUERCUUkFJFYVERipXRFLjDz6HK5GCLqw8pIsl4R3ckVkVBEYhkQCdQhE0HPhF6DPFQ+F9RnfTKi/cd/fPapT3nqU58jhIi4vc9sWJYF27aRy+Wyr3zFyz5w/PjxVKAZcqU+m69CJIKeiCCRcNAmb0QriETlwKMOk/OPUB1CEapge3pg8gQA8e6//4fHPuEJT3isbdvZH//4x7/7+te++hCqx4sFSUGhCpGoJBCz5UVIRSIUkVBK8OIkEt449mNllBBdFmRiBZEIi5lHlBRVREIRiWVFJoKEwqhBKir1WQPl4VICgHj1q1+z9RnPfObliUSi56Y/3LTzox/9l1ur6LWV+myQNAQ9EUH9tlpIU0u9Ea0mEsGBrxZjFhz4amFOlR6JIIsLTmTw+2oldFfzRFQjEpUxZ7MlqSgSoYiEIhKLl0jEAHSukCXpMPOpJarUCQD93r6wEjDFzGklRRWRUERiWZGJaoTCxMywp2pEotJIXkzcDuiWHNBFq+m0QY9EZb5vZRuDtobnt7JqU7WT8ZV8vx5vNbJRixT4g6cHmVvFd3Ed1laZlFKtvKuN6l4IBzNLvSoSoaCwuMlKmohWCpHQiGgIwDgz55aQQhcG0LPS1qW6OxUUFv+tWqFfEsp7S6BCF6zsJC0Dyn81fdQI6LQzom0qdOJ6RKJenm+1Zsptz/HV2zABlYMtazA9VCEElZMQ9EhoNQa6HpGoTDaxKiYkyNYaLZWlSISCwuJFEss/6TqIHiKScGPwrUVMIAy4ll6xAtejgoLC8iATVIdI+DqogerRMb5nQqsgE80SidnC9JtppNwSXVZv40QET9qpQR7qEQEL9UObgu+vxQBt1Pc+1GJssuI7Wj7wCgoKbRA+zEmvgtNKggDQ74VvLKowmhUWblZ1Paq7UkFhSZOJavpfUIcVVXRZHSXvg/8Y1GmDHgnfSC4aIBLVIm0qjeWzJVa3XIfV2zj4VHHCtZq5ySqTEAxpqiQS1d7r1CETTpMEot6AKxKhoLD4MbWCldfOQHhXEkB6IcvFevkPMawsr1C9daigoLC0yQSq6LKEmT3F6nWarvRC1CISlefgVOjF9QzkNk5Tjq/exsHnKkp/I26h4ID7IU31XD/1uvxVIw9OHfKgSISCwlLfAdxciShWRgWnekgASAQSTR2Uao1bXpfUuRIGv6y331hUUyuvDJbKjVBQWPJkAmjMQF5pDPcJgq+HajUIhKij36JCX600its19FxZQ69tW3h+O0ObUKGUU43n/YvWAhNg1Rho1CEjsoK9STTufVAEQkFheWEcwCo1DGXQAES9o5lKNgpzW38KCgrLg1BUM5AH9dogyQjqo6JCl9WqPBckEZXfI2vot7WM406FXgwsQANlfYEGvlbCivQGMcjigiW2qAZbQwURqeZWqnZUIxBQJEJBYZlJfmaHiCYBdKnRUFhgTM7H26OgoLCoyUQjhEIGdNcgqah2VOZHoIIAVDOW1yoQdFoKBekLNPC1XEJUZaAqB7aSRFTzSFQbcEbj3gdFIBQUlh+ZyBCRCc8Cr6CwAMgwc0YNg4LCsiQTqEIoCNWjb7iOTlvphajlkain29bTbxe02qi+AAM/m0uoksXRLAfqDHSjBxSBUFBYEWRi0is9aqjRUGgzLGaeVMOgoLCiCAXX0Hub1W+rkZTKNIBG9dsF1W310zzoXGUQaw0s1flsrjHwjXgfFIFQUFjeZGKEiFZBJQQrtA8OM4+oYVBQUISiQr9FDb12Pjou19F7F1y/1Rd40OvFmKHOwFIDk4lZSIMiEAoKK5dMnCKi1Vh5DdEUFoZEnFLDoKCgCEWDpKLy9Y3ouNyAznta9Ft9EQ54cNB5loHmJn9XBEJBYeWSiZPKM6GgSISCgsJp1m+r6bTN6riLRr/VF9GAzzYA3MTnKvKgoKBQjUycIqI+AKYaDYV5osDMo2oYFBQUauias5GKZaHj6otowJsddLRgUhQUFFYemRj1uj/H1GgozBFpZladqxUUFFa8jqsv8kGvNviKMCgoKMyXTEwRUR5AjxoNhSYxDiCnGvopKDmq1K/56LgBGULNvG+xQV8iC0Gt1jZBbYZqnFbw+OUAnATQD5U3oTA7HAAjKHWMVVBQUGgFEVvSOq6uplJBQWEFQwI4BTfMqVMNh0INTAFIq2FQUFBQUERCQUFBoRJpAFkAvVDN6xRKsACMQXkhFBQUFBSRUFBQUKgDCTd0xfAIheo5sbLXwphHJBQUFBQUFJFQUFBQaAgW3NwJRSgUgVBQUFBQUERCQUFBQREKBUUgFBQUFBSRUFBQUFh4QqHBLRerciiW19yOw63IpKCgoKCgiISCgoJCW+CX/wSAhHcoLE0kvUNBQUFBQREJBQUFhdOiiAq4XgpTDcmiRwGu90FVYFJQUFBQREJBQUHhtEMCGPV+1uD2ogirYVk0yMHtAaFClxQUFBQUkVBQUFBYtHDgWrx9xOCGP6kk7YUldkmo5nEKCgoKikgotB+BFu0KpwlEpAZheSIdUGiFRyxiili0nDj446xClhQU1J6voIiEgoKCwrJUeCsTfEMAIgCiangaRgZuB/K8GgoFBQUFRSQUFBQUViry3jEZeE6Dm2MRwcpO4C54hCEHld+goKCgsGhBys2loLCEb2AVFrWSoMH1YhgeyVjK/SwsjyxYHplSZEFBoUko/U1BEQkFBQUFhXYQSQNuLobmHfBIiA8d88vVkADswO9+qJHjHRKqS7SCgiISCsse/38AMbaVvoiGgkIAAAAASUVORK5CYII=\" />\n    <br/><br/><br/><br/><br/>\n    Sorry that page could not be found..\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-viewer/project-viewer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-viewer/project-viewer.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button [routerLink]=\"['']\" class=\"btn btn-dark\">Back</button>\n<iframe #iframe [src]=\"sanitizer.bypassSecurityTrustResourceUrl(tile.url)\" frameborder=\"0\"></iframe>");

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
/* harmony import */ var _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project-viewer/project-viewer.component */ "./src/app/components/project-viewer/project-viewer.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");






const routes = [
    {
        path: '',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
    },
    {
        path: 'viewer/:id',
        component: _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ProjectViewerComponent"]
    },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.toggleMenu = false;
        this.scrollTop = 0;
        this.navItems = [
            {
                active: true,
                label: "my tools",
                anchor: "skills",
                position: null
            },
            {
                active: false,
                label: "about me",
                anchor: "about",
                position: null
            },
            {
                active: false,
                label: "projects",
                anchor: "projects",
                position: null
            },
            {
                active: false,
                label: "get in touch",
                anchor: "contact",
                position: null
            }
        ];
    }
    ngOnInit() {
        this.currentYear = new Date().getFullYear().toString();
        // VERY HACKY TEMP SOLUTION TO STYLE .SIDEBAR::BEFORE BACKGROUND-POSITION-X
        let style = document.createElement('style');
        style.setAttribute('id', 'skjdfjhsk');
        style.innerHTML = '.sidebar::before { background-position-x: -242px }';
        document.head.appendChild(style);
        window.addEventListener('scroll', (event) => {
            let scrollTop = event.target.scrollingElement.scrollTop;
            let finalValue = '-' + (242 - (scrollTop / 80)) + 'px';
            let style = document.querySelector('#skjdfjhsk');
            style.innerHTML = '.sidebar::before { background-position-x: ' + finalValue + ' }';
            var itemsPassed = [];
            this.navItems.forEach((item) => {
                let $element = document.querySelector('#' + item.anchor);
                item.position = $element.offsetTop;
                item.active = false;
                if (scrollTop >= item.position - 30) {
                    itemsPassed.push(item);
                }
            });
            this.navItems[itemsPassed.length].active = true;
        });
    }
    gotoAnchorTag(event, name) {
        event.preventDefault();
        this.toggleMenu = false;
        let $element = document.querySelector('#' + name);
        if (!$element) {
            this.router.navigate(['']).then(() => {
                setTimeout(() => {
                    //$element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                    window.scrollTo({
                        top: $element.offsetTop < 200 ? 0 : $element.offsetTop - 150,
                        behavior: "smooth"
                    });
                }, 100);
            });
        }
        else {
            $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            window.scrollTo({
                top: $element.offsetTop < 200 ? 0 : $element.offsetTop - 150,
                behavior: "smooth"
            });
        }
        //window.location.href = '/#' + tag;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
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
/* harmony import */ var _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-viewer/project-viewer.component */ "./src/app/components/project-viewer/project-viewer.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _services_tile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/tile.service */ "./src/app/services/tile.service.ts");
/* harmony import */ var _services_skill_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/skill.service */ "./src/app/services/skill.service.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_project_viewer_project_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ProjectViewerComponent"],
            _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
            _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
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



/***/ }),

/***/ "./src/app/components/index/index.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tile.service */ "./src/app/services/tile.service.ts");
/* harmony import */ var src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/skill.service */ "./src/app/services/skill.service.ts");





let IndexComponent = class IndexComponent {
    constructor(router, tileService, skillService) {
        this.router = router;
        this.tileService = tileService;
        this.skillService = skillService;
    }
    get tiles() {
        return this.tileService.tiles;
    }
    get skils() {
        return this.skillService.skils;
    }
    ngOnInit() {
    }
    openTile(index) {
        let tile = this.tiles[index];
        if (tile.url.indexOf("https:") > -1 && tile.title != "USBMusic") {
            this.router.navigate(['/viewer', index]);
        }
        else {
            window.open(tile.url, '_blank');
        }
    }
    gotoAnchorTag(event, $element) {
        event.preventDefault();
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        //window.location.href = '/#' + tag;
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__["TileService"] },
    { type: src_app_services_skill_service__WEBPACK_IMPORTED_MODULE_4__["SkillService"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.scss */ "./src/app/components/index/index.component.scss")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page-not-found/page-not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/components/page-not-found/page-not-found.component.scss")).default]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/components/project-viewer/project-viewer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-viewer/project-viewer.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  position: absolute;\n  top: 32px;\n  left: -106px;\n  z-index: 100;\n}\n@media (max-width: 767px) {\n  button {\n    display: none;\n  }\n}\niframe {\n  display: block;\n  height: 100vh;\n  width: 100%;\n  background: url('loading.gif') center center no-repeat;\n  background-size: 130px;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXZpZXdlci9DOlxcUHJvamVjdHNcXHJpY2hhcmR3aW5jb3R0LmNvLnVrL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXZpZXdlclxccHJvamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC12aWV3ZXIvcHJvamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0hKO0FESkk7RUFESjtJQUVRLGFBQUE7RUNPTjtBQUNGO0FEQ0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC12aWV3ZXIvcHJvamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICBsZWZ0OiAtMTA2cHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbmlmcmFtZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2FkaW5nLmdpZicpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMzBweDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufSIsImJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMnB4O1xuICBsZWZ0OiAtMTA2cHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuaWZyYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2xvYWRpbmcuZ2lmXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEzMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/components/project-viewer/project-viewer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/project-viewer/project-viewer.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewerComponent", function() { return ProjectViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tile.service */ "./src/app/services/tile.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let ProjectViewerComponent = class ProjectViewerComponent {
    constructor(route, tileService, sanitizer) {
        this.route = route;
        this.tileService = tileService;
        this.sanitizer = sanitizer;
    }
    get tiles() {
        return this.tileService.tiles;
    }
    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        this.tile = this.tiles[id];
    }
};
ProjectViewerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_tile_service__WEBPACK_IMPORTED_MODULE_3__["TileService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
ProjectViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/project-viewer/project-viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-viewer.component.scss */ "./src/app/components/project-viewer/project-viewer.component.scss")).default]
    })
], ProjectViewerComponent);



/***/ }),

/***/ "./src/app/services/skill.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/skill.service.ts ***!
  \*******************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillService = class SkillService {
    constructor() {
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
};
SkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SkillService);



/***/ }),

/***/ "./src/app/services/tile.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tile.service.ts ***!
  \******************************************/
/*! exports provided: TileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileService", function() { return TileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TileService = class TileService {
    constructor() {
        this.tiles = [
            {
                title: "Betterbowl",
                thumbnail: "../assets/img/mw29.jpg",
                language: "Angular",
                url: "https://dev.richardwincott.co.uk/betterbowl"
            },
            {
                title: "Chat",
                thumbnail: "../assets/img/mw25.jpg",
                language: "Angular, Socket.io",
                url: "https://dev.richardwincott.co.uk/chat"
            },
            {
                title: "Slime Football",
                thumbnail: "../assets/img/mw28.jpg",
                language: "p5.js, Socket.io",
                url: "https://dev.richardwincott.co.uk/slime",
                githuburl: "https://github.com/richwincott/slime"
            },
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
                url: "https://dev.richardwincott.co.uk/usbmusic",
                githuburl: "https://github.com/richwincott/usbmusic"
            },
            {
                title: "Spikes",
                thumbnail: "../assets/img/mw24.jpg",
                language: "p5.js, Node, Socket.io",
                url: "https://dev.richardwincott.co.uk/spikes",
                githuburl: "https://github.com/richwincott/spikes"
            },
            {
                title: "Mario",
                thumbnail: "../assets/img/mw23.jpg",
                language: "Canvas, ES6",
                url: "https://dev.richardwincott.co.uk/mario",
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
};
TileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TileService);



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