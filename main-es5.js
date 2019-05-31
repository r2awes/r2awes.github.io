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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n<app-cli></app-cli>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/cli/cli.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/cli/cli.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"cli\" placeholder=\"Enter some text\" [(ngModel)]=\"searchText\" (keyup.enter)=\"goto()\">\r\n<ul class=\"terms\">\r\n\t<li *ngFor=\"let t of terms | filter: searchText \">\r\n    {{t}}\r\n  </li>\r\n</ul>\r\n<p>Try typing</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/contacts/contacts.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/contacts/contacts.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p> Contact Me </p>\r\n\r\n<div class=\"social\">\r\n\t<p class=\"title\"> Social Networks </p>\r\n\r\n\t<a class=\"ascii\" href=\"mailto:\">\r\n\t\t<pre>\r\n       ..--\"\"|\r\n       | .---'\r\n (\\-.--| |-----------.\r\n/ \\) \\ | |            \\\r\n|:.  | |o| E - M A I L |\r\n|:.  |_  __   __ _  __ /\r\n `\"\"\"\"`\"\"\"\"|=`|\"\"\"\"\"\"\"`\r\n           |=_|\r\n\t\t</pre>\r\n\t\t<p> Email - r2awes@gmail.com</p>\r\n\t</a>\r\n\r\n\t<a class=\"ascii\" href=\"twitter\" >\r\n\t\t<pre>\r\n  .--.  \r\n /( @ >    ,-. \r\n/ ' .'--._/  /\r\n:   ,    , .'\r\n'. (___.'_/\r\n   ((-((-''\r\n\t\t</pre>\r\n\r\n\t\t<p> Twitter - @mch_webdesign</p>\r\n\t</a>\r\n\r\n\t<a href=\"http://linkedin.com\" class=\"ascii\">\r\n\t\t<pre>\r\n ___\r\n|___|\r\n ___   ______\r\n|   | |   _   \\\r\n|   | |  | |  |\r\n|   | |  | |  |\r\n|___| |__| |__|\r\n\t\t</pre>\r\n\r\n\t\t<p> LinkedIn </p>\r\n\t</a>\r\n\t<!--<a class=\"ascii\" href=\"tel:\">\r\n\t\t<pre>\r\n   ____________  \r\n /   ,,____,,   \\:.\r\n |__| [][][] |__|:  :\r\n   /  [][][]  \\   :  :\t\tPhone\r\n  /   [][][]   \\   ..\r\n /    [][][]    \\   \r\n|________________|\r\n\t\t</pre>\r\n\t</a>-->\r\n\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/guide/guide.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/guide/guide.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p> Try typing </p>\r\n<p class=\"sugg\" [class.active]=\"clicked\" >{{activeSuggestion}}</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/project/project.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/project/project.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p> Projects </p>\r\n<p>hi</p>\r\n\r\n<ul>\r\n\t<li *ngFor=\"let project of projects; let p = index\">\r\n\t\t<p class=\"name\">{{project.name}}</p>\r\n\t\t<p class=\"date\">{{project.date | date: 'yyyy MMM'}}</p>\r\n\t\t<a href=\"{{project.link}}\" class=\"link\" *ngIf=\"project.link != ''\"> See it live </a>\r\n\t\t<p class=\"desc\">{{project.desc}}</p>\r\n\t\t<img class=\"img\" src=\"{{project.images[0]}}\" alt=\"\">\r\n\t</li>\r\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/comps/text/text.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/comps/text/text.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p> About </p>\r\n\r\n<div class=\"team\">\r\n\r\n\t<p class=\"title\"> Team </p>\r\n\r\n\t<ul>\r\n\t\t<li>Richard McHorgh, owner</li>\r\n\t\t<li (mouseover)=\"giphy = true\"  class=\"hover\"> <u> No one else, yet...</u>\r\n\t\t\t<!--(mouseleave)=\"giphy = false\"-->\r\n\t\t\t<!--<p [style.display]=\"giphy ? 'none' : 'block'\">\r\n\t\t\t\t<i class=\"fas fa-arrow-up\"></i>\r\n\t\t\t\thover here\r\n\t\t\t</p>-->\r\n\t\t</li>\r\n\t\t<iframe [class.active]=\"giphy == true\" src=\"https://giphy.com/embed/3oKIPzLXQYb2Bn5PLG\" width=\"480\" height=\"204\" frameBorder=\"0\" class=\"giphy-embed hidden\" allowFullScreen></iframe>\r\n\t</ul>\r\n\t\r\n</div>\r\n\r\n<div class=\"bio\">\r\n\r\n\t<p class=\"title\"> Bio </p>\r\n\r\n\t<p>\r\n\t\tHi, I'm Richard, an amateur photographer, devoted automotive enthusiast, and most importantly, full stack developer, who has worked in the industry since mid-2014.\r\n\t</p>\r\n\r\n\t<div class=\"container\">\r\n\t\t<p>\r\n\t\t\tI've <a routerLink=\"/projects\">built and designed tons of websites</a> for clients \r\n\t\t\r\n\t\t\t<u class=\"world\" (mouseenter)=\"world = true; coords('u.world')\" (mouseleave)=\"world = false\">\r\n\t\t\t\tall over the world\r\n\t\t\t</u>\r\n\t\t\t\r\n\t\t\tand for all sizes of businesses. The challenges presented by these experiences have led me to learn a wide array of programming langauges and frameworks.\r\n\t\t</p>\r\n\r\n\t\t<div class=\"hidden hover\" [class.active]=\"world\">\r\n\t\t\t<p [style.top]=\"(pos.top - 40) + 'px'\" [style.left]=\"pos.left + 'px'\" >from Indonesia to Britain and Canada to Argentina</p>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t\r\n</div>\r\n\r\n<div class=\"rates\">\r\n\t\r\n\t<p class=\"title\"> Rates </p>\r\n\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<th>Product</th>\r\n\t\t\t<th>Pricing</th>\r\n\t\t\t<th class=\"hover\" (mouseenter)=\"ptime=true\" (mouseleave)=\"ptime=false\" >\r\n\t\t\t\t<u>Ptimetable</u>\r\n\t\t\t\t<p class=\"hidden\" [class.active]=\"ptime == true\" >\r\n\t\t\t\t\t(the p is silent)\r\n\t\t\t\t</p>\r\n\t\t\t</th>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Custom Site with less than 5 pages</td>\r\n\t\t\t<td>250USD</td>\r\n\t\t\t<td>7 days</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Custom Wordpress Theme</td>\r\n\t\t\t<td>400USD</td>\r\n\t\t\t<td>7 to 10 days</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Custom Wordpress/Shopify Theme with Ecommerce features</td>\r\n\t\t\t<td>500USD</td>\r\n\t\t\t<td>7 to 14 days</td>\r\n\t\t</tr>\r\n\t</table>\r\n\r\n\t<p> Hosting for one year is included in all plans</p>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comps_project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/project/project.component */ "./src/app/comps/project/project.component.ts");
/* harmony import */ var _comps_text_text_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/text/text.component */ "./src/app/comps/text/text.component.ts");
/* harmony import */ var _comps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/contacts/contacts.component */ "./src/app/comps/contacts/contacts.component.ts");






var routes = [
    {
        path: '',
        component: _comps_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"],
    },
    {
        path: 'about',
        component: _comps_text_text_component__WEBPACK_IMPORTED_MODULE_4__["TextComponent"]
    },
    {
        path: 'contact',
        component: _comps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]
    },
    {
        path: 'projects',
        component: _comps_project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/truncate.pipe */ "./src/app/pipes/truncate.pipe.ts");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes */ "./src/app/classes.ts");
/* harmony import */ var _comps_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/project/project.component */ "./src/app/comps/project/project.component.ts");
/* harmony import */ var _directives_dimensions_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/dimensions.directive */ "./src/app/directives/dimensions.directive.ts");
/* harmony import */ var _comps_cli_cli_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/cli/cli.component */ "./src/app/comps/cli/cli.component.ts");
/* harmony import */ var _comps_guide_guide_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/guide/guide.component */ "./src/app/comps/guide/guide.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _comps_text_text_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/text/text.component */ "./src/app/comps/text/text.component.ts");
/* harmony import */ var _comps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./comps/contacts/contacts.component */ "./src/app/comps/contacts/contacts.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _comps_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"],
                _directives_dimensions_directive__WEBPACK_IMPORTED_MODULE_9__["DimensionsDirective"],
                _comps_cli_cli_component__WEBPACK_IMPORTED_MODULE_10__["CliComponent"],
                _comps_guide_guide_component__WEBPACK_IMPORTED_MODULE_11__["GuideComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["FilterPipe"],
                _comps_text_text_component__WEBPACK_IMPORTED_MODULE_13__["TextComponent"],
                _comps_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__["ContactsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [_classes__WEBPACK_IMPORTED_MODULE_7__["Folder"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes.ts":
/*!****************************!*\
  !*** ./src/app/classes.ts ***!
  \****************************/
/*! exports provided: Group, Project, Social, Tab, Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return Social; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
var Group = /** @class */ (function () {
    function Group(id, name) {
        this.id = id;
        this.name = name;
    }
    Group.prototype.getID = function () {
        return this.id;
    };
    Group.prototype.getName = function () {
        return this.name;
    };
    return Group;
}());

var Project = /** @class */ (function () {
    function Project(id, name, date, desc, link, images) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.desc = desc;
        this.link = link;
        this.images = images;
    }
    return Project;
}());

var Social = /** @class */ (function () {
    function Social(name, link, pre) {
        this.pre = '';
        this.name = name;
        this.link = link;
        this.pre = pre;
    }
    return Social;
}());

var Tab = /** @class */ (function () {
    function Tab(name, section, link, state) {
        this.state = false;
        this.name = name;
        this.section = section;
        this.link = link;
        this.state = state;
    }
    return Tab;
}());

var Folder = /** @class */ (function () {
    function Folder() {
    }
    Folder.projects = [
        new Project(0, 'Inertia', '2017 Nov', 'A chrome extension that I built to replace my former new tab screen for my browser.', 'https://chrome.google.com/webstore/detail/inertia/jahcoafnlfbpepojimjkmbeigeganfbc', ['https://lh3.googleusercontent.com/E6gY65Uzex3ylCs2CCNumSVWaDpDS7LJnbyH3ZKPbsdVVf-23_e_6Knl2VWHbqOqCnP_8BEOmw=w640-h400-e365']),
        new Project(1, 'Hans', '2016 Aug', 'A prototype design for a news aggregator application that I began to build.', 'https://www.behance.net/gallery/47754323/Hans-News-Aggregator', ['https://mir-s3-cdn-cf.behance.net/project_modules/fs/3ed08c47754323.5883eb563ef80.png']),
        new Project(2, 'LifeWellness Career Coaching', '2017 May', 'A live site that I made for a career coach in Canada.', '', ['']),
        new Project(3, 'Digital Influence media', '2018 Jan', 'A live site that I built for a couple friends who do professional photography in Kansas City, Missouri.', 'https://www.godigitalinfluence.com/', ['']),
        new Project(4, 'Brown Sugar Softener', '2017 Jun', 'An ecommerce website that I built for a brown sugar softerner vendor in Canada built with WordPress.', 'http://brownsugarsoftener.com/', ['']),
        new Project(5, 'Three Sisters Catering', '2016 Mar', 'A simple site that I built for a catering company.', 'http://www.3sisterscateringllc.com/', ['']),
        new Project(6, 'US History Timeline', '2018 Feb', 'A personal project that I built to help students with studying for the Advanced Placement US History test built with Angular.', 'https://github.com/r2awes/APUSH-Timeline', ['']),
        new Project(7, 'Enly Native App', '2018 Nov', 'A fashion tech app that allows users to see clothing items on their own bodies built with React Native.', 'https://savvy-enly.firebaseapp.com/', ['']),
        new Project(8, 'rpIeyasu', '2019 Mar', 'A diy digital dashboard that I built for my 2001 MR2.', 'https://github.com/r2awes/rpIeyasu', []),
        new Project(9, 'Jack Black Pearl', '2018 Dec', 'A React website that I built for my SNAME Boat Design competition team', 'https://JackBlackPearl', [''])
        //new Project( 7, 'more coming soon', 201, '', '', [''] ),
    ];
    Folder.socials = [
        new Social('email', 'mailto:r2awes@gmail.com'),
        new Social('phone', 'tel:8162131499'),
        new Social('twitter', 'twitter.com'),
        new Social('instagram', 'instagram'),
        new Social('linkedin', 'linkedin'),
        new Social('github', 'github')
    ];
    Folder.tabs = [
        new Tab('home', '/', '', true),
    ];
    Folder.commands = [
        'projects',
        'contact',
        'about'
    ];
    return Folder;
}());



/***/ }),

/***/ "./src/app/comps/cli/cli.component.sass":
/*!**********************************************!*\
  !*** ./src/app/comps/cli/cli.component.sass ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closed .vertical {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.closed .horizontal {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  opacity: 1;\n}\n.opened {\n  opacity: 1;\n}\n.opened .vertical {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.opened .horizontal {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  opacity: 0;\n}\n.circle-plus {\n  height: 1em;\n  width: 1em;\n  font-size: 1em;\n  opacity: 0.7;\n  display: none;\n}\n.circle-plus * {\n  display: none;\n}\n.circle-plus .circle {\n  position: relative;\n  width: 1em;\n  height: 1em;\n  border-radius: 100%;\n}\n.circle-plus .circle .horizontal {\n  position: relative;\n  background-color: #34febb;\n  width: 1em;\n  height: 1px;\n  left: 50%;\n  margin-left: 0;\n  top: 50%;\n  margin-top: 0;\n}\n.circle-plus .circle .vertical {\n  position: relative;\n  background-color: #34febb;\n  width: 1px;\n  height: 1em;\n  left: 50%;\n  margin-left: 0.5em;\n  top: 50%;\n  margin-top: -0.5em;\n}\ninput {\n  border: 1px #586f89 solid;\n  border-radius: 5px;\n  background-color: #2E333E;\n  padding: 15px;\n  margin: 15px;\n  width: 90%;\n  box-sizing: border-box;\n  font-size: 1em;\n  color: #d6e9ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2xpL0M6XFxVc2Vyc1xccjJhd2VcXERvY3VtZW50c1xcR2l0SHViXFxyMmF3ZXMuZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wc1xcY2xpXFxjbGkuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBzL2NsaS9jbGkuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBzL2NsaS9DOlxcVXNlcnNcXHIyYXdlXFxEb2N1bWVudHNcXEdpdEh1YlxccjJhd2VzLmdpdGh1Yi5pby9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkM7RUFDQyxnQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUMxQkY7QUQyQkM7RUFDQyxnQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxVQUFBO0FDekJGO0FEMkJBO0VBQ0MsVUFBQTtBQ3hCRDtBRHlCQztFQUNDLGdDQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ3ZCRjtBRHdCQztFQUNDLGdDQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLFVBQUE7QUN0QkY7QUR3QkE7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3JCRDtBRHNCQztFQUNDLGFBQUE7QUNwQkY7QURxQkE7RUFDQyxrQkFBQTtFQUNBLFVBbENRO0VBbUNSLFdBbkNRO0VBb0NSLG1CQUFBO0FDbEJEO0FEc0JBO0VBQ0Msa0JBQUE7RUFDQSx5QkFyRE87RUFzRFAsVUEzQ1E7RUE0Q1IsV0EzQ1M7RUE0Q1QsU0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQ25CRDtBRHFCQTtFQUNDLGtCQUFBO0VBQ0EseUJBL0RPO0VBZ0VQLFVBcERTO0VBcURULFdBdERRO0VBdURSLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ2xCRDtBQzNEQTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZIWTtFRUlaLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNGUE87QUNxRVIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jbGkvY2xpLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb2xvcnNcclxuXHQvL3NvdXJjZWQgZnJvbSB0aGUgZHVvdG9uZSBkYXJrIHRoZW1lcyBwYWNrXHJcbiRiYWNrZ3JvdW5kOiAjMkUzMzNFXHJcblxyXG4kdW5vLTE6ICNkNmU5ZmZcclxuJHVuby0yOiAjODhiNGU3XHJcbiR1bm8tMzogIzVkOGNjMFxyXG4kdW5vLTQ6ICM1ODZmODlcclxuJHVuby01OiAjNDQ0YzU1XHJcblxyXG4kZHVvLTE6ICMzNGZlYmJcclxuJGR1by0yOiAjMzJhZTg1XHJcbiRkdW8tMzogIzQyNjc1YVxyXG5cclxuLy9mb250c1xyXG5cclxuXHJcblxyXG4vL21peGluc1xyXG5cclxuJHBsdXM6ICRkdW8tMVxyXG4kY3dpZHRoOiAxZW1cclxuJGNoZWlnaHQ6IDFweFxyXG4kY21sZWZ0OiAtNXB4XHJcbiRjbXRvcDogLTFweFxyXG5cclxuLmNsb3NlZCBcclxuXHQudmVydGljYWxcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcblx0Lmhvcml6b250YWxcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpXHJcblx0XHRvcGFjaXR5OiAxXHJcblxyXG4ub3BlbmVkIFxyXG5cdG9wYWNpdHk6IDFcclxuXHQudmVydGljYWwgXHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dFxyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcblx0Lmhvcml6b250YWwgXHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dFxyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcblx0XHRvcGFjaXR5OiAwXHJcblx0XHJcbi5jaXJjbGUtcGx1cyBcclxuXHRoZWlnaHQ6IDFlbVxyXG5cdHdpZHRoOiAxZW1cclxuXHRmb250LXNpemU6IDFlbVxyXG5cdG9wYWNpdHk6IC43XHJcblx0ZGlzcGxheTogbm9uZVxyXG5cdCpcclxuXHRcdGRpc3BsYXk6IG5vbmVcclxuLmNpcmNsZS1wbHVzIC5jaXJjbGUgXHJcblx0cG9zaXRpb246IHJlbGF0aXZlXHJcblx0d2lkdGg6ICRjd2lkdGhcclxuXHRoZWlnaHQ6ICRjd2lkdGhcclxuXHRib3JkZXItcmFkaXVzOiAxMDAlXHJcblx0XHJcblx0Ly9ib3JkZXI6IHNvbGlkIC41ZW0gI0RGREFEN1xyXG5cclxuLmNpcmNsZS1wbHVzIC5jaXJjbGUgLmhvcml6b250YWwgXHJcblx0cG9zaXRpb246IHJlbGF0aXZlXHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHBsdXNcclxuXHR3aWR0aDogJGN3aWR0aFxyXG5cdGhlaWdodDogJGNoZWlnaHRcclxuXHRsZWZ0OiA1MCVcclxuXHRtYXJnaW4tbGVmdDogMCAvLyRjbWxlZnRcclxuXHR0b3A6IDUwJVxyXG5cdG1hcmdpbi10b3A6IDAgLy8kY210b3BcclxuXHJcbi5jaXJjbGUtcGx1cyAuY2lyY2xlIC52ZXJ0aWNhbCBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmVcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcGx1c1xyXG5cdHdpZHRoOiAkY2hlaWdodFxyXG5cdGhlaWdodDogJGN3aWR0aFxyXG5cdGxlZnQ6IDUwJVxyXG5cdG1hcmdpbi1sZWZ0OiAkY3dpZHRoLzJcclxuXHR0b3A6IDUwJVxyXG5cdG1hcmdpbi10b3A6IC0kY3dpZHRoLzJcclxuXHJcblxyXG4iLCIuY2xvc2VkIC52ZXJ0aWNhbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuLmNsb3NlZCAuaG9yaXpvbnRhbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ub3BlbmVkIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5vcGVuZWQgLnZlcnRpY2FsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbi5vcGVuZWQgLmhvcml6b250YWwge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2lyY2xlLXBsdXMge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jaXJjbGUtcGx1cyAqIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNpcmNsZS1wbHVzIC5jaXJjbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uY2lyY2xlLXBsdXMgLmNpcmNsZSAuaG9yaXpvbnRhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ZmViYjtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY2lyY2xlLXBsdXMgLmNpcmNsZSAudmVydGljYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNGZlYmI7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMWVtO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDFweCAjNTg2Zjg5IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTMzM0U7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMTVweDtcbiAgd2lkdGg6IDkwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGNvbG9yOiAjZDZlOWZmO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2ltcG9ydHMuc2FzcydcclxuXHJcbmlucHV0XHJcblx0Ym9yZGVyOiAxcHggJHVuby00IHNvbGlkXHJcblx0Ym9yZGVyLXJhZGl1czogNXB4XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmRcclxuXHRwYWRkaW5nOiAxNXB4XHJcblx0bWFyZ2luOiAxNXB4XHJcblx0d2lkdGg6IDkwJVxyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuXHRmb250LXNpemU6IDFlbVxyXG5cdGNvbG9yOiAkdW5vLTEiXX0= */"

/***/ }),

/***/ "./src/app/comps/cli/cli.component.ts":
/*!********************************************!*\
  !*** ./src/app/comps/cli/cli.component.ts ***!
  \********************************************/
/*! exports provided: CliComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CliComponent", function() { return CliComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes */ "./src/app/classes.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CliComponent = /** @class */ (function () {
    function CliComponent(router) {
        this.terms = _classes__WEBPACK_IMPORTED_MODULE_2__["Folder"].commands;
        this.router = router;
    }
    CliComponent_1 = CliComponent;
    CliComponent.prototype.ngOnInit = function () {
    };
    CliComponent.prototype.consolelog = function (e) { console.log(e); };
    CliComponent.clicked = function () {
        CliComponent_1.click = true;
        return true;
    };
    ;
    CliComponent.prototype.goto = function () {
        if (_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"].found[0] != null && _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"].found[1] == null) {
            this.router.navigateByUrl(_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"].found[0]);
            this.searchText = null;
        }
    };
    var CliComponent_1;
    CliComponent.click = false;
    CliComponent = CliComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cli',
            template: __webpack_require__(/*! raw-loader!./cli.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/cli/cli.component.html"),
            styles: [__webpack_require__(/*! ./cli.component.sass */ "./src/app/comps/cli/cli.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CliComponent);
    return CliComponent;
}());



/***/ }),

/***/ "./src/app/comps/contacts/contacts.component.sass":
/*!********************************************************!*\
  !*** ./src/app/comps/contacts/contacts.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/comps/contacts/contacts.component.ts":
/*!******************************************************!*\
  !*** ./src/app/comps/contacts/contacts.component.ts ***!
  \******************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.sass */ "./src/app/comps/contacts/contacts.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/comps/guide/guide.component.sass":
/*!**************************************************!*\
  !*** ./src/app/comps/guide/guide.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\n  display: flex;\n}\n\n.sugg {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ3VpZGUvQzpcXFVzZXJzXFxyMmF3ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXHIyYXdlcy5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBzXFxndWlkZVxcZ3VpZGUuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBzL2d1aWRlL2d1aWRlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtBQ0NEOztBRENBO0VBQ0MsYUFBQTtBQ0VEIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ3VpZGUvZ3VpZGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlXHJcblx0ZGlzcGxheTogZmxleFxyXG5cclxuLnN1Z2dcclxuXHRkaXNwbGF5OiBub25lIiwiLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zdWdnIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comps/guide/guide.component.ts":
/*!************************************************!*\
  !*** ./src/app/comps/guide/guide.component.ts ***!
  \************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cli_cli_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cli/cli.component */ "./src/app/comps/cli/cli.component.ts");



var GuideComponent = /** @class */ (function () {
    function GuideComponent() {
        this.suggestions = [
            'projects',
            'about me',
            'contact info'
        ];
        this.activeSuggestion = this.suggestions[0];
        this.clicked = _cli_cli_component__WEBPACK_IMPORTED_MODULE_2__["CliComponent"].clicked();
    }
    GuideComponent.prototype.ngOnInit = function () {
    };
    GuideComponent.prototype.changeSugg = function () {
        setInterval(function () {
            var i = 0;
            if (i == (this.suggestions.length - 1)) {
                i = this.suggestion[0];
            }
            this.activeSuggestion = this.suggestions[i];
            i++;
            console.log(this.activeSuggestion);
        }, 2000);
    };
    GuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guide',
            template: __webpack_require__(/*! raw-loader!./guide.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/guide/guide.component.html"),
            styles: [__webpack_require__(/*! ./guide.component.sass */ "./src/app/comps/guide/guide.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GuideComponent);
    return GuideComponent;
}());



/***/ }),

/***/ "./src/app/comps/project/project.component.sass":
/*!******************************************************!*\
  !*** ./src/app/comps/project/project.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 400px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcHJvamVjdC9DOlxcVXNlcnNcXHIyYXdlXFxEb2N1bWVudHNcXEdpdEh1YlxccjJhd2VzLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcHNcXHByb2plY3RcXHByb2plY3QuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nXHJcblx0d2lkdGg6IDQwMHB4XHJcblx0aGVpZ2h0OiBhdXRvIiwiLmltZyB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/comps/project/project.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes */ "./src/app/classes.ts");



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.projects = _classes__WEBPACK_IMPORTED_MODULE_2__["Folder"].projects.sort(function (a, b) {
            var da = new Date(a.date).getTime();
            var db = new Date(b.date).getTime();
            if (da > db)
                return -1;
            if (db > da)
                return 1;
            if (da == db)
                return 0;
        });
    }
    ProjectComponent.prototype.ngOnInit = function () { };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.sass */ "./src/app/comps/project/project.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/comps/text/text.component.sass":
/*!************************************************!*\
  !*** ./src/app/comps/text/text.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".closed .vertical {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.closed .horizontal {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  opacity: 1;\n}\n.opened {\n  opacity: 1;\n}\n.opened .vertical {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n.opened .horizontal {\n  transition: all 0.5s ease-in-out;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  opacity: 0;\n}\n.circle-plus {\n  height: 1em;\n  width: 1em;\n  font-size: 1em;\n  opacity: 0.7;\n  display: none;\n}\n.circle-plus * {\n  display: none;\n}\n.circle-plus .circle {\n  position: relative;\n  width: 1em;\n  height: 1em;\n  border-radius: 100%;\n}\n.circle-plus .circle .horizontal {\n  position: relative;\n  background-color: #34febb;\n  width: 1em;\n  height: 1px;\n  left: 50%;\n  margin-left: 0;\n  top: 50%;\n  margin-top: 0;\n}\n.circle-plus .circle .vertical {\n  position: relative;\n  background-color: #34febb;\n  width: 1px;\n  height: 1em;\n  left: 50%;\n  margin-left: 0.5em;\n  top: 50%;\n  margin-top: -0.5em;\n}\ntable th {\n  text-align: left;\n}\ntable td, table th {\n  padding-right: 50px;\n}\ntable td:before, table th:before {\n  content: \"|\";\n  margin-right: 25px;\n  text-decoration: none;\n}\n.team p {\n  margin-bottom: 0;\n}\n.team ul, .team li p {\n  margin: 0;\n}\n.hover p {\n  padding: 2px;\n  background-color: #444c55;\n  color: #34febb;\n  position: absolute;\n}\n.container {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvdGV4dC9DOlxcVXNlcnNcXHIyYXdlXFxEb2N1bWVudHNcXEdpdEh1YlxccjJhd2VzLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcHNcXHRleHRcXHRleHQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBzL3RleHQvdGV4dC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcHMvdGV4dC9DOlxcVXNlcnNcXHIyYXdlXFxEb2N1bWVudHNcXEdpdEh1YlxccjJhd2VzLmdpdGh1Yi5pby9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkM7RUFDQyxnQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUMxQkY7QUQyQkM7RUFDQyxnQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxVQUFBO0FDekJGO0FEMkJBO0VBQ0MsVUFBQTtBQ3hCRDtBRHlCQztFQUNDLGdDQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtBQ3ZCRjtBRHdCQztFQUNDLGdDQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLFVBQUE7QUN0QkY7QUR3QkE7RUFDQyxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3JCRDtBRHNCQztFQUNDLGFBQUE7QUNwQkY7QURxQkE7RUFDQyxrQkFBQTtFQUNBLFVBbENRO0VBbUNSLFdBbkNRO0VBb0NSLG1CQUFBO0FDbEJEO0FEc0JBO0VBQ0Msa0JBQUE7RUFDQSx5QkFyRE87RUFzRFAsVUEzQ1E7RUE0Q1IsV0EzQ1M7RUE0Q1QsU0FBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQ25CRDtBRHFCQTtFQUNDLGtCQUFBO0VBQ0EseUJBL0RPO0VBZ0VQLFVBcERTO0VBcURULFdBdERRO0VBdURSLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ2xCRDtBQzFEQztFQUNDLGdCQUFBO0FENkRGO0FDNURDO0VBQ0MsbUJBQUE7QUQ4REY7QUM3REU7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRCtESDtBQzVEQztFQUNDLGdCQUFBO0FEK0RGO0FDOURDO0VBQ0MsU0FBQTtBRGdFRjtBQzlEQTtFQUNDLFlBQUE7RUFDQSx5QkZaTztFRWFQLGNGWE87RUVZUCxrQkFBQTtBRGlFRDtBQy9EQTtFQUNDLGVBQUE7QURrRUQiLCJmaWxlIjoic3JjL2FwcC9jb21wcy90ZXh0L3RleHQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbG9yc1xyXG5cdC8vc291cmNlZCBmcm9tIHRoZSBkdW90b25lIGRhcmsgdGhlbWVzIHBhY2tcclxuJGJhY2tncm91bmQ6ICMyRTMzM0VcclxuXHJcbiR1bm8tMTogI2Q2ZTlmZlxyXG4kdW5vLTI6ICM4OGI0ZTdcclxuJHVuby0zOiAjNWQ4Y2MwXHJcbiR1bm8tNDogIzU4NmY4OVxyXG4kdW5vLTU6ICM0NDRjNTVcclxuXHJcbiRkdW8tMTogIzM0ZmViYlxyXG4kZHVvLTI6ICMzMmFlODVcclxuJGR1by0zOiAjNDI2NzVhXHJcblxyXG4vL2ZvbnRzXHJcblxyXG5cclxuXHJcbi8vbWl4aW5zXHJcblxyXG4kcGx1czogJGR1by0xXHJcbiRjd2lkdGg6IDFlbVxyXG4kY2hlaWdodDogMXB4XHJcbiRjbWxlZnQ6IC01cHhcclxuJGNtdG9wOiAtMXB4XHJcblxyXG4uY2xvc2VkIFxyXG5cdC52ZXJ0aWNhbFxyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXRcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuXHQuaG9yaXpvbnRhbFxyXG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXRcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKC05MGRlZylcclxuXHRcdG9wYWNpdHk6IDFcclxuXHJcbi5vcGVuZWQgXHJcblx0b3BhY2l0eTogMVxyXG5cdC52ZXJ0aWNhbCBcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuXHQuaG9yaXpvbnRhbCBcclxuXHRcdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZylcclxuXHRcdG9wYWNpdHk6IDBcclxuXHRcclxuLmNpcmNsZS1wbHVzIFxyXG5cdGhlaWdodDogMWVtXHJcblx0d2lkdGg6IDFlbVxyXG5cdGZvbnQtc2l6ZTogMWVtXHJcblx0b3BhY2l0eTogLjdcclxuXHRkaXNwbGF5OiBub25lXHJcblx0KlxyXG5cdFx0ZGlzcGxheTogbm9uZVxyXG4uY2lyY2xlLXBsdXMgLmNpcmNsZSBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmVcclxuXHR3aWR0aDogJGN3aWR0aFxyXG5cdGhlaWdodDogJGN3aWR0aFxyXG5cdGJvcmRlci1yYWRpdXM6IDEwMCVcclxuXHRcclxuXHQvL2JvcmRlcjogc29saWQgLjVlbSAjREZEQUQ3XHJcblxyXG4uY2lyY2xlLXBsdXMgLmNpcmNsZSAuaG9yaXpvbnRhbCBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmVcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcGx1c1xyXG5cdHdpZHRoOiAkY3dpZHRoXHJcblx0aGVpZ2h0OiAkY2hlaWdodFxyXG5cdGxlZnQ6IDUwJVxyXG5cdG1hcmdpbi1sZWZ0OiAwIC8vJGNtbGVmdFxyXG5cdHRvcDogNTAlXHJcblx0bWFyZ2luLXRvcDogMCAvLyRjbXRvcFxyXG5cclxuLmNpcmNsZS1wbHVzIC5jaXJjbGUgLnZlcnRpY2FsIFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cdGJhY2tncm91bmQtY29sb3I6ICRwbHVzXHJcblx0d2lkdGg6ICRjaGVpZ2h0XHJcblx0aGVpZ2h0OiAkY3dpZHRoXHJcblx0bGVmdDogNTAlXHJcblx0bWFyZ2luLWxlZnQ6ICRjd2lkdGgvMlxyXG5cdHRvcDogNTAlXHJcblx0bWFyZ2luLXRvcDogLSRjd2lkdGgvMlxyXG5cclxuXHJcbiIsIi5jbG9zZWQgLnZlcnRpY2FsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG4uY2xvc2VkIC5ob3Jpem9udGFsIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5vcGVuZWQge1xuICBvcGFjaXR5OiAxO1xufVxuLm9wZW5lZCAudmVydGljYWwge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuLm9wZW5lZCAuaG9yaXpvbnRhbCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jaXJjbGUtcGx1cyB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNpcmNsZS1wbHVzICoge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2lyY2xlLXBsdXMgLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5jaXJjbGUtcGx1cyAuY2lyY2xlIC5ob3Jpem9udGFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRmZWJiO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jaXJjbGUtcGx1cyAuY2lyY2xlIC52ZXJ0aWNhbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ZmViYjtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxZW07XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xufVxuXG50YWJsZSB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG50YWJsZSB0ZCwgdGFibGUgdGgge1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxudGFibGUgdGQ6YmVmb3JlLCB0YWJsZSB0aDpiZWZvcmUge1xuICBjb250ZW50OiBcInxcIjtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50ZWFtIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnRlYW0gdWwsIC50ZWFtIGxpIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi5ob3ZlciBwIHtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0YzU1O1xuICBjb2xvcjogIzM0ZmViYjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2ltcG9ydHMuc2FzcydcclxuXHJcbnRhYmxlXHJcblx0dGhcclxuXHRcdHRleHQtYWxpZ246IGxlZnRcclxuXHR0ZCwgdGhcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDUwcHhcclxuXHRcdCY6YmVmb3JlXHJcblx0XHRcdGNvbnRlbnQ6ICd8J1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDI1cHhcclxuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lXHJcblxyXG4udGVhbVxyXG5cdHBcclxuXHRcdG1hcmdpbi1ib3R0b206IDBcclxuXHR1bCwgbGkgcFxyXG5cdFx0bWFyZ2luOiAwXHJcblxyXG4uaG92ZXIgcFxyXG5cdHBhZGRpbmc6IDJweFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICR1bm8tNVxyXG5cdGNvbG9yOiAkZHVvLTFcclxuXHRwb3NpdGlvbjogYWJzb2x1dGVcclxuXHRcclxuLmNvbnRhaW5lclxyXG5cdGRpc3BsYXk6IGlubGluZVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/comps/text/text.component.ts":
/*!**********************************************!*\
  !*** ./src/app/comps/text/text.component.ts ***!
  \**********************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextComponent = /** @class */ (function () {
    function TextComponent() {
        this.giphy = false;
        this.ptime = false;
        this.world = false;
        this.pos = {
            top: 0,
            left: 0
        };
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    TextComponent.prototype.coords = function (e) {
        this.pos = $(e).position();
    };
    TextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-text',
            template: __webpack_require__(/*! raw-loader!./text.component.html */ "./node_modules/raw-loader/index.js!./src/app/comps/text/text.component.html"),
            styles: [__webpack_require__(/*! ./text.component.sass */ "./src/app/comps/text/text.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/app/directives/dimensions.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/dimensions.directive.ts ***!
  \****************************************************/
/*! exports provided: DimensionsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsDirective", function() { return DimensionsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DimensionsDirective = /** @class */ (function () {
    function DimensionsDirective(el) {
        this.el = el;
    }
    DimensionsDirective.prototype.ngOnInit = function () {
        var x = this.el.nativeElement.clientX;
        console.log(x);
    };
    DimensionsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDimensions]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], DimensionsDirective);
    return DimensionsDirective;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe_1 = FilterPipe;
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (searchText == null) {
            return items;
        }
        else {
            searchText = searchText.toLowerCase();
        }
        FilterPipe_1.found = items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
        return FilterPipe_1.found;
    };
    var FilterPipe_1;
    FilterPipe = FilterPipe_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/truncate.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/truncate.pipe.ts ***!
  \****************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var v = args[2] != true ? this.shrink(value) : value;
        var limit = args.length > 0 && args[2] != true ? parseInt(args[0], 10) : 200;
        var trail = args.length > 1 && args[2] != true ? args[1] : '';
        return v.length > limit ? v.substring(0, limit) + trail : v;
    };
    TruncatePipe.prototype.shrink = function (v) {
        return v.replace(/ /g, '');
    };
    TruncatePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\r2awe\Documents\GitHub\r2awes.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map