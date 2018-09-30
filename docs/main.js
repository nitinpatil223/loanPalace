(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/ContactUs.ts":
/*!************************************!*\
  !*** ./src/app/Model/ContactUs.ts ***!
  \************************************/
/*! exports provided: ContactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return ContactUs; });
var ContactUs = /** @class */ (function () {
    function ContactUs() {
    }
    return ContactUs;
}());



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _refer_and_earn_refer_and_earn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./refer-and-earn/refer-and-earn.component */ "./src/app/refer-and-earn/refer-and-earn.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"] },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'referandearn', component: _refer_and_earn_refer_and_earn_component__WEBPACK_IMPORTED_MODULE_7__["ReferAndEarnComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _refer_and_earn_refer_and_earn_component__WEBPACK_IMPORTED_MODULE_7__["ReferAndEarnComponent"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer> \r\n<!-- <nav class=\"navbar fixed-bottom navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Fixed bottom</a>\r\n  </nav> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'loanpalace';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [{ provide: _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-head-area contact\">\r\n  <div class=\"overly\"></div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <h2>Contact Us</h2>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n <!-- Start contact Area -->\r\n <div id=\"contact\" class=\"contact-area\">\r\n    <div class=\"contact-inner area-padding\">\r\n      <div class=\"contact-overly\"></div>\r\n      <div class=\"container \">\r\n        <div class=\"row\">\r\n          <!-- Start contact icon column -->\r\n          <div class=\"col-md-4 col-sm-4 col-xs-12 wow fadeInLeft\">\r\n            <div class=\"contact-icon text-center\">\r\n              <div class=\"single-icon\">\r\n                  <i class=\"fas fa-mobile-alt\"></i>\r\n                <p>\r\n                  Call: 8830764438 / 9370264113<br>\r\n                  <span>Monday-Sunday (9am-7pm)</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Start contact icon column -->\r\n          <div class=\"col-md-4 col-sm-4 col-xs-12 wow fadeIn\">\r\n            <div class=\"contact-icon text-center\">\r\n              <div class=\"single-icon\">\r\n                  <i class=\"fas fa-envelope\"></i>\r\n                <p>\r\n                  Email: info@loanpalace.co.in<br>\r\n                  <span>Web: www.loanpalace.co.in</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Start contact icon column -->\r\n          <div class=\"col-md-4 col-sm-4 col-xs-12 wow fadeInRight\">\r\n            <div class=\"contact-icon text-center\">\r\n              <div class=\"single-icon\">\r\n                  <i class=\"fas fa-map-marker-alt\"></i>\r\n                <p>\r\n                    Loan Palace, Fortune Business Center, <br>\r\n                  <span>101-A, Kaspate Vasti, Wakad - 411057</span>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n          <!-- Start Google Map -->\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12 wow fadeInLeft\">\r\n            <!-- Start Map -->\r\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4771154114696!2d73.77178791489396!3d18.597597887364117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9137e8fce11%3A0xb1e40a75882582b3!2sFortune+Business+Center!5e0!3m2!1sen!2sin!4v1536855536611\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n            <!-- End Map -->\r\n          </div>\r\n          <!-- End Google Map -->\r\n\r\n          <!-- Start  contact -->\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12 wow fadeInRight\">\r\n            <div class=\"form contact-form\">\r\n              <div id=\"sendmessage\">Your message has been sent. Thank you!</div>\r\n              <div id=\"errormessage\"></div>\r\n              <form action=\"\" method=\"post\" role=\"form\" class=\"contactForm\">\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"contactus.name\" type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 4 chars\" />\r\n                  <div class=\"validation\"></div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"contactus.email\" type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" data-rule=\"email\" data-msg=\"Please enter a valid email\" />\r\n                  <div class=\"validation\"></div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <input [(ngModel)]=\"contactus.subject\" type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" data-rule=\"minlen:4\" data-msg=\"Please enter at least 8 chars of subject\" />\r\n                  <div class=\"validation\"></div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <textarea [(ngModel)]=\"contactus.message\" class=\"form-control\" name=\"message\" rows=\"5\" data-rule=\"required\" data-msg=\"Please write something for us\" placeholder=\"Message\"></textarea>\r\n                  <div class=\"validation\"></div>\r\n                </div>\r\n                <div class=\"text-center\"><button class=\"btn btn-danger\" (click)=\"sendMessage()\">Send Message</button></div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <!-- End Left contact -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End Contact Area -->"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact h2 {\n  margin-bottom: 0 !important; }\n\n.contact-area {\n  padding: 50px 0; }\n\n.contact-area .single-icon i {\n    font-size: 24px;\n    width: 50px;\n    height: 50px;\n    border: 1px solid #c82333;\n    line-height: 46px;\n    border-radius: 50%;\n    margin-bottom: 20px;\n    color: #c82333; }\n\n.contact-area .contact-icon {\n    margin-bottom: 40px; }\n\n.contact-area iframe {\n    width: 100%;\n    height: 100%; }\n\n.contact-form input[type=\"text\"], .contact-form input[type=\"email\"] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  color: #444;\n  height: 40px;\n  margin-bottom: 16px;\n  padding-left: 20px;\n  width: 100%; }\n\n.contact-form textarea {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  color: #444;\n  height: 140px;\n  padding: 20px;\n  width: 100%; }\n\n.contact-form #sendmessage {\n  color: #3EC1D5;\n  border: 1px solid #3EC1D5;\n  display: none;\n  text-align: center;\n  padding: 15px;\n  font-weight: 600;\n  margin-bottom: 15px; }\n\n.contact-form #errormessage {\n  color: red;\n  display: none;\n  border: 1px solid red;\n  text-align: center;\n  padding: 15px;\n  font-weight: 600;\n  margin-bottom: 15px; }\n\n.contact-form #sendmessage.show, .contact-form #errormessage.show, .contact-form .show {\n  display: block; }\n\n#contact .form .validation {\n  color: red;\n  display: none;\n  margin: 0 0 20px;\n  font-weight: 400;\n  font-size: 13px; }\n\n.form-control:focus {\n  outline: 0;\n  box-shadow: none; }\n\n@media (max-width: 767px) {\n  .contact {\n    padding: 20px 0; }\n    .contact h2 {\n      font-size: 25px;\n      font-weight: 500;\n      line-height: 35px; }\n  .contact-area {\n    padding: 30px 0; }\n    .contact-area .form.contact-form {\n      margin-top: 30px; } }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Model_ContactUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Model/ContactUs */ "./src/app/Model/ContactUs.ts");
/* harmony import */ var _send_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./send-email.service */ "./src/app/contact/send-email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(_service) {
        this._service = _service;
        this.contactus = new _Model_ContactUs__WEBPACK_IMPORTED_MODULE_1__["ContactUs"]();
        this.contactusEncrypted = new _Model_ContactUs__WEBPACK_IMPORTED_MODULE_1__["ContactUs"]();
        this.sendMessage = function () {
            debugger;
            this.contactusEncrypted.name = this._service.getEncryptedValue(this.contactus.name);
            this.contactusEncrypted.subject = this._service.getEncryptedValue(this.contactus.subject);
            this.contactusEncrypted.email = this._service.getEncryptedValue(this.contactus.email);
            this.contactusEncrypted.message = this._service.getEncryptedValue(this.contactus.message);
            return this._service.sendEmail(this.contactus);
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_send_email_service__WEBPACK_IMPORTED_MODULE_2__["SendEmailService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/send-email.service.ts":
/*!***********************************************!*\
  !*** ./src/app/contact/send-email.service.ts ***!
  \***********************************************/
/*! exports provided: SendEmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendEmailService", function() { return SendEmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SendEmailService = /** @class */ (function () {
    function SendEmailService(_http) {
        this._http = _http;
    }
    SendEmailService.prototype.sendEmail = function (contactusEncrypted) {
        var model = {
            name: contactusEncrypted.name,
            subject: contactusEncrypted.subject,
            email: contactusEncrypted.email,
            message: contactusEncrypted.message
        };
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'Account/SendEmail', model).subscribe(); //.map(x => x.json());
    };
    SendEmailService.prototype.getEncryptedValue = function (model) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Base64.parse("e84ad660c4721ae0e84ad660c4721ae0");
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Base64.parse("e84ad660c4721ae0e84ad660c4721ae0");
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(model, key, { iv: iv }).toString();
        return encrypted;
    };
    SendEmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SendEmailService);
    return SendEmailService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"footer\">\r\n  <div class=\"container\">\r\n    <p class=\"footer-block\">© Copyright 2018 loanpalace.co.in. All Rights Reserved.</p>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- Start Footer bottom Area -->\r\n<footer>\r\n  <div class=\"footer-area\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12 wow fadeInLeft\">\r\n            <h4>Quick Links</h4>\r\n          <div class=\"footer-links\">\r\n            <ul>\r\n              <li>\r\n                <a routerLink=\"home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">About Us</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"products\" routerLinkActive=\"active\">Company Profile</a>\r\n              </li>\r\n              <li>\r\n                <a routerLink=\"products\" routerLinkActive=\"active\">Products</a>\r\n              </li>\r\n              <li>\r\n                  <a routerLink=\"products\" routerLinkActive=\"active\">Customer Feedback</a>\r\n                </li>\r\n                <li>\r\n                  <a routerLink=\"products\" routerLinkActive=\"active\">Refer & Earn</a>\r\n                </li>\r\n                <li>\r\n                  <a routerLink=\"products\" routerLinkActive=\"active\">Online Application</a>\r\n                </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- end single footer -->\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12 wow fadeInUp\">\r\n            <h4>Reach Us</h4>\r\n            <div class=\"reach-us\">\r\n            <div class=\"footer-contacts\">\r\n              <p><span><i class=\"fas fa-map-marker-alt\"></i></span> Loan Palace, Fortune Business Center, 101-A, Kaspate Vasti, Wakad - 411057</p>\r\n              <p><span><i class=\"fas fa-mobile-alt\"></i></span> 8830764438 / 9370264113</p>\r\n              <p><span><i class=\"fas fa-envelope\"></i></span> info@loanpalace.co.in</p>\r\n              <p><span><i class=\"far fa-clock\"></i></span> 9AM - 7PM</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- end single footer -->\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12 wow fadeInRight\">\r\n          <div class=\"footer-content\">\r\n          \r\n              <h4>Follow Us</h4>\r\n              <div class=\"footer-icons\">\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"https://www.facebook.com/loanpalace/\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i> Facebook</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"javascript:void(0)\"><i class=\"fab fa-twitter\"></i> Twitter</a>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"https://www.linkedin.com/company/loanpalace/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i> Linkedin</a>\r\n                  </li>\r\n                  \r\n                </ul>\r\n              </div>\r\n         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer-area-bottom\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <p class=\"footer-block\">© Copyright 2018 loanpalace.co.in. All Rights Reserved.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar header-top fixed-top navbar-expand-lg  navbar-blue\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/img/logo2.jpg\"></a>\r\n        <button class=\"navbar-toggler menu-web\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <i class=\"fas fa-bars\"></i>\r\n        </button> \r\n         <div class=\"collapse navbar-collapse menu-web\" id=\"navbarText\">\r\n            <ul class=\"navbar-nav ml-md-auto d-md-flex\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">About Us\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"products\" routerLinkActive=\"active\">Products</a>\r\n                </li>              \r\n               \r\n                <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" routerLink=\"referandearn\" routerLinkActive=\"active\">Refer & Earn</a>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"contact\" routerLinkActive=\"active\">Contact Us</a>\r\n                        </li>\r\n            </ul>\r\n            <!-- <a class=\"btn btn-warning\" href=\"#apply\">Apply</a> -->\r\n        </div> \r\n\r\n        <div class=\"dropdown top-menu-mobile\">\r\n                <button class=\"navbar-toggler dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fas fa-bars\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu movedown\" aria-labelledby=\"dropdownMenuButton\">\r\n                  <a class=\"dropdown-item\" routerLink=\"home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">About Us</a>\r\n                  <a class=\"dropdown-item\" routerLink=\"products\" routerLinkActive=\"active\">Products</a>\r\n                  <a class=\"dropdown-item\" routerLink=\"contact\" routerLinkActive=\"active\">Contact Us</a>\r\n                  <a class=\"dropdown-item btn apply-btn\" href=\"#apply\">Send Enquiry</a>\r\n                </div>\r\n              </div>\r\n    </div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\r\n   \r\n    <!-- Indicators -->\r\n    <ul class=\"carousel-indicators\">\r\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li> \r\n    </ul>\r\n  \r\n    <!-- The slideshow -->\r\n    <div class=\"carousel-inner\">\r\n       \r\n      <div class=\"carousel-item active\">\r\n          <div class=\"overlay\"></div>\r\n        <img src=\"./assets/img/slider-b3.jpg\" alt=\"Los Angeles\">\r\n        <div class=\"hero\">\r\n            <h1>Best Home Loan Service</h1>\r\n            <h3>Get a best home loan service with our polite executive.</h3>\r\n            <button class=\"btn btn-danger btn-lg\" role=\"button\">Get a Loan</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n          <div class=\"overlay\"></div>\r\n        <img src=\"./assets/img/slider-b2.jpg\" alt=\"Chicago\">\r\n        <div class=\"hero\">\r\n            <h1>Free Home Loan</h1>\r\n            <h3>Loan Palace offers \"Documents Pe Loan, Zero Matalab Zero\".</h3>\r\n            <button class=\"btn btn-danger btn-lg\" role=\"button\">Get a Loan</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n          <div class=\"overlay\"></div>\r\n        <img src=\"./assets/img/slider-b1.jpg\" alt=\"New York\">\r\n        <div class=\"hero\">\r\n            <h1>Refer & Earn</h1>\r\n            <h3>1 Min = Rs. 5000.</h3>\r\n            <a class=\"btn btn-danger btn-lg\" role=\"button\" routerLink=\"/referandearn\">Refer Now</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- Left and right controls -->\r\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\"></span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\"></span>\r\n    </a>\r\n   \r\n  </div>\r\n\r\n\r\n  <!-- Start About area -->\r\n<div id=\"about\" class=\"title-margin about-us\">\r\n    <div  class=\"container\">\r\n      <div class=\"row wow fadeInDown\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"section-headline text-center\">\r\n            <h2>About Us</h2>\r\n          </div>\r\n          <p class=\"about-text\">\r\n            At Loan Palace we make the process of home loan simple ,\r\n            quick &amp; hassle-free.</p>\r\n            <p>   Loan palace is a authorized service provider for SBI HOME\r\nLOAN &amp; HDFC HOME LOAN . It was started in the year\r\nJanuary 2012. LOAN PALACE is the first organized company\r\nin pune to work for the benefits of our customer in terms of\r\nmoney and service. Being a successful company with\r\nsupport of our 2000+ happy home loan customers we are\r\nable to launch new offers and benefits to our customers.</p>\r\n<p class=\"last-p\">Loan Palace helps you in checking the legal clarity for your\r\nproperty.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12 wow fadeInLeft\">\r\n          <div class=\"about-img\">\r\n            <img src=\"./assets/img/about-us.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12 wow fadeInRight\">\r\n            <div class=\"about-content\">\r\n            \r\n              <h4>Benefits of Loan Palace</h4>\r\n              <ul>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Work around the clock\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Reduces time consumption\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Proper guidance\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> One spot solution\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Transparency\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Effective work force\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Saving home loan process charges\r\n                </li>\r\n                <li>\r\n                  <i class=\"fa fa-check\"></i> Time to time updates of interest rate which saves your money\r\n                </li>\r\n               \r\n              </ul>\r\n            </div>\r\n      \r\n        </div>\r\n        <!-- End col-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- End About area -->\r\n<div class=\"our-profile\">\r\n  <div class=\"container title-margin\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"section-headline text-center wow fadeInDown\">\r\n            <h2>Our Profile</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n                <i class=\"fas fa-chalkboard-teacher wow fadeInUp\"></i>\r\n                <h4>Vision</h4>\r\n              <p>\r\n                To be the best home loan service provider in  whole pune. Making home loan process hassle free  Sourcing the genuine customers for our bank.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n              <i class=\"far fa-money-bill-alt wow fadeInUp\"></i>\r\n              <h4>Mission</h4>\r\n              <p>\r\n                Delivering excellent loan service  Brand awareness of LOAN PALACE in minds  of customer which looking for home loan.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n              <i class=\"fas fa-laptop wow fadeInUp\"></i>\r\n              <h4>Value</h4>\r\n              <p>\r\n                Reliablity, Creative, Loyalty, Ethical\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n<!--partner-->\r\n  <div class=\"partner\">\r\n    <div class=\"container title-margin\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"section-headline text-center wow fadeInUp\">\r\n              <h2>Authorized Partner</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"partner-wrap\">\r\n              <div class=\"partner-logo wow fadeInLeft\">\r\n                <img src=\"./assets/img/sbi-logo1.jpg\">\r\n              </div>\r\n              <div class=\"partner-logo wow fadeInRight\">\r\n                <img src=\"./assets/img/hdfc-logo.png\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- apply -->\r\n  <div class=\"apply-area\" id=\"apply\">\r\n      <div class=\"overly\"></div>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"apply-text\">\r\n                \r\n                <div class=\"well-text text-center wow fadeInUp\">\r\n                  <h2>Get instant call back from our executive</h2>\r\n                  <p>\r\n                   Just fill below application form for apply online home loan.\r\n                  </p>\r\n                  <div class=\"apply-form\">\r\n                      <form>\r\n                          <div class=\"form-row align-items-center\">\r\n                            <div class=\"col-auto\">\r\n                              <label class=\"sr-only\" for=\"inlineFormInput\">Name</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"inlineFormInput\" placeholder=\"Name\">\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                              <label class=\"sr-only\" for=\"inlineFormInput\">Contact</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"inlineFormInput\" placeholder=\"Contact\">\r\n                            </div>\r\n                            <div class=\"col-auto\">\r\n                              <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\r\n                              <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Your Email\">\r\n                            </div>\r\n                            \r\n                            <div class=\"col-auto\">\r\n                              <button type=\"submit\" class=\"btn btn-warning\">Enquiry</button>\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel .overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: rgba(8, 13, 21, 0.28); }\n\n.carousel .carousel-item .hero {\n  width: 80%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  color: #fff;\n  text-align: center;\n  text-transform: capitalize;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.75);\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0); }\n\n.carousel .carousel-item .hero h1 {\n    color: #fff;\n    text-align: center;\n    font-size: 3em;\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n    z-index: 1; }\n\n.carousel .carousel-item .hero h3 {\n    font-size: 24px;\n    margin-top: 20px;\n    margin-bottom: 10px; }\n\n.carousel .carousel-item .hero .btn {\n    margin: 20px auto; }\n\n.carousel .carousel-item img {\n  width: 100%; }\n\n@media (min-width: 992px) {\n  .carousel-inner .carousel-item {\n    height: 100vh;\n    min-height: 300px; }\n    .carousel-inner .carousel-item img {\n      height: 100%; } }\n\n@media (max-width: 441px) {\n  .carousel .carousel-item .hero h1 {\n    font-size: 20px; }\n  .carousel .carousel-item .hero h3 {\n    font-size: 14px; }\n  .carousel .carousel-item .hero .btn {\n    font-size: 14px;\n    margin: 0px auto;\n    padding: 5px 10px; }\n  .carousel .carousel-indicators {\n    bottom: 0; } }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.renderer.addClass(document.body, 'home-body');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'home-body');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"our-profile\">\r\n  <div class=\"container title-margin\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"section-headline text-center wow fadeInDown\">\r\n            <h2>Types of Home Loan</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n                <i class=\"fas fa-chalkboard-teacher wow fadeInUp\"></i>\r\n                <h4>New Home Loan</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n              <i class=\"far fa-money-bill-alt wow fadeInUp\"></i>\r\n              <h4>Balance Transfer<br> (Take Over)</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n              <i class=\"fas fa-laptop wow fadeInUp\"></i>\r\n              <h4>Resale Home Loan</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<div class=\"clearfix\"></div>\r\n  <div class=\"product-head-area\">\r\n    <div class=\"overly\"></div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n              <h2>Products</h2>\r\n              <ul class=\"nav nav-tabs\">\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\"> SBI Home Loan Products </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#menu1\"> HDFC Home Loan Products</a>\r\n                </li>\r\n              </ul>\r\n          </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"products-details\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"tab-content\">\r\n            <div class=\"tab-pane container active\" id=\"home\">\r\n                <h3>Term Loan</h3>\r\n                <p>It’s a normal home loan products which\r\n                  is offered by every banks in which there is a specific time\r\n                  period in which the borrower have to pay regular emi.</p>\r\n\r\n                  <h3>Maxgain</h3>\r\n                  <p>It is same as term loan but the additional\r\n                    feature of this product is that it works as a overdraft\r\n                    facility. In this products borrower can put their extra funds\r\n                    in home loan account and can save a lot on interest part.\r\n                    Whenever borrower feels to take out their extra funds they\r\n                    can withdraw.</p>\r\n\r\n                    <h3>Privilege</h3>\r\n                    <p>This products is same as term loan but\r\n                      specially designed for the government employee with\r\n                      increased loan tenure upto 75 years and this helps in\r\n                      increasing their eligibility.</p>\r\n\r\n                      <h3>Shaurya</h3>\r\n                    <p>This is also same as term loan but designed\r\n                      for Young generation in which their eligibility is increased.</p>\r\n\r\n                      <div class=\"enquiry-btn\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n                         Enquiry with SBI\r\n                        </button>\r\n                      </div>\r\n            </div>\r\n            <div class=\"tab-pane container fade\" id=\"menu1\">\r\n              <h3>Term Loan</h3>\r\n              <p>It’s a normal home loan products which\r\n                is offered by every banks in which there is a specific time\r\n                period in which the borrower have to pay regular emi.</p>\r\n                    <div class=\"enquiry-btn\">\r\n                      <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n                       Enquiry with HDFC\r\n                      </button>\r\n                    </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n<!-- Testimonial Section -->\r\n<section id=\"testimonial\" class=\"section\">\r\n    <!-- Container Starts -->\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n              <div class=\"section-headline text-center wow fadeInDown\">\r\n                <h2>Happy Customers</h2>\r\n              </div>\r\n            </div>\r\n          </div>\r\n      <div class=\"row wow fadeInUp\">\r\n        <div class=\"col-sm-12\">\r\n          <div id=\"testimonial-item\" class=\"owl-carousel\">\r\n            <div class=\"item\">\r\n              <div class=\"testimonial-inner\">\r\n                <div class=\"testimonial-images\">\r\n                  <img class=\"img-circle\" src=\"./assets/img/img1.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"testimonial-content\">\r\n                  <p>\r\n                    Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.\r\n                  </p>\r\n                </div>\r\n                <div class=\"testimonial-footer\">\r\n                  <i class=\"fa fa-quote-left\"></i>\r\n                 Nitin Patil\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"item\">\r\n              <div class=\"testimonial-inner\">\r\n                <div class=\"testimonial-images\">\r\n                  <img class=\"img-circle\" src=\"./assets/img/img2.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"testimonial-content\">\r\n                  <p>\r\n                    Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.\r\n                  </p>\r\n                </div>\r\n                <div class=\"testimonial-footer\">\r\n                  <i class=\"fa fa-quote-left\"></i>\r\n                  Deepak Walunj\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"item\">\r\n              <div class=\"testimonial-inner\">\r\n                <div class=\"testimonial-images\">\r\n                  <img class=\"img-circle\" src=\"./assets/img/img3.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"testimonial-content\">\r\n                  <p>\r\n                    Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.\r\n                  </p>\r\n                </div>\r\n                <div class=\"testimonial-footer\">\r\n                  <i class=\"fa fa-quote-left\"></i>\r\n                 Rachana Kathare\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"item\">\r\n              <div class=\"testimonial-inner\">\r\n                <div class=\"testimonial-images\">\r\n                  <img class=\"img-circle\" src=\"./assets/img/img4.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"testimonial-content\">\r\n                  <p>\r\n                    Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.\r\n                  </p>\r\n                </div>\r\n                <div class=\"testimonial-footer\">\r\n                  <i class=\"fa fa-quote-left\"></i>\r\n                Mahendra Patil\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"item\">\r\n              <div class=\"testimonial-inner\">\r\n                <div class=\"testimonial-images\">\r\n                  <img class=\"img-circle\" src=\"./assets/img/img5.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"testimonial-content\">\r\n                  <p>\r\n                    Quisque mollis lacus augue, a hendrerit leo tristique vitae. Mauris non ipsum molestie sagittis elit ac vulputate odio.\r\n                  </p>\r\n                </div>\r\n                <div class=\"testimonial-footer\">\r\n                  <i class=\"fa fa-quote-left\"></i>\r\n                 Sachin Deshmukh\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div><!-- Container Ends -->\r\n  </section>\r\n  <!-- Testimonial Section End --> \r\n  \r\n      <div class=\"clearfix\"></div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Enquiry</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleFormControlInput1\">Your Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Nitin Patil\">\r\n              </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"exampleFormControlInput1\">Your Email</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"exampleFormControlInput1\">Your Contact</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"9855667799\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleFormControlInput1\">Loan Required</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"25,000,00\">\r\n              </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Send Enquiry</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.scss":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#testimonial {\n  background: rgba(248, 248, 248, 0.8);\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  overflow: hidden;\n  position: relative;\n  padding: 50px 0;\n  text-align: center; }\n  #testimonial .testimonial-inner {\n    text-align: center;\n    padding: 10px 30px;\n    border: 1px solid #ddd;\n    margin: 5px;\n    transition: all 0.25s ease-in-out; }\n  #testimonial .testimonial-images {\n    margin-bottom: 20px; }\n  #testimonial .testimonial-images img {\n      width: 70px;\n      height: 70px;\n      margin: 0 auto;\n      padding: 5px;\n      border: 1px solid #c82333;\n      border-radius: 50%; }\n  #testimonial .testimonial-content p {\n    line-height: 25px;\n    margin-bottom: 15px; }\n  #testimonial .testimonial-footer {\n    font-size: 13px;\n    font-weight: 600;\n    color: #c82333; }\n  #testimonial i {\n    margin-right: 5px; }\n  #testimonial a {\n    color: #aaa;\n    margin-left: 3px;\n    font-weight: 300; }\n  #testimonial .owl-pagination {\n    margin-top: 30px; }\n  #testimonial .owl-page span {\n    border-radius: 4px;\n    width: 8px;\n    height: 8px;\n    background: none;\n    opacity: 0.5; }\n  #testimonial .owl-page.active span {\n    opacity: 1.0; }\n  /*partner*/\n  .loan-type .partner-wrap {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px; }\n  .loan-type .partner-wrap .partner-logo {\n    border: 1px solid #ccc;\n    width: 130px;\n    height: auto;\n    margin: 0 10px;\n    flex: 0 0 auto;\n    padding: 10px; }\n  .loan-type .partner-wrap .partner-logo img {\n      max-width: 100%;\n      max-height: 100%; }\n  @media (max-width: 441px) {\n  .product-head-area {\n    padding: 30px 0; }\n    .product-head-area h2 {\n      font-size: 30px;\n      line-height: 30px;\n      margin-bottom: 30px; }\n    .product-head-area .nav li a {\n      font-size: 15px;\n      margin: 10px; }\n  .products-details .tab-content h3 {\n    font-size: 20px; }\n  .products-details .tab-content .enquiry-btn .btn {\n    font-size: 17px; } }\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/refer-and-earn/refer-and-earn.component.html":
/*!**************************************************************!*\
  !*** ./src/app/refer-and-earn/refer-and-earn.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"refer-head-area\">\r\n  <div class=\"overly\"></div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <h2>Refer & Earn</h2>\r\n            <h4>For any Query / Details Please Feel Free to Call Us @  8830721283</h4>\r\n        </div>\r\n  </div>\r\n</div>\r\n<div class=\"clearfix\"></div>\r\n<div class=\"our-profile\">\r\n  <div class=\"container title-margin\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"section-headline text-center wow fadeInDown\">\r\n            <h2>How it Works</h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <div class=\"contact-icon text-center\">\r\n            <div class=\"single-icon\">\r\n                <i class=\"far fa-handshake wow fadeInUp\"></i>\r\n              <p>\r\n                LOAN PALACE has launched this scheme for the benefits of both the\r\n                parties i.e. referrer &amp; referred . In this schemen referrer gets Rs 5000 by\r\n                referring 1 lead and the one who gets reffred is also eligible for the free\r\n                home loan. The scheme is valid for the loan from 30 lac and above and\r\n                after the completetion of loan process of the reffered one. This schemen is\r\n                applicable for all type of home loan I . e. NEW HOME LOAN , RESALE\r\n                HOME LOAN &amp; TRANSFER OF HOME LOAN. Referrer gets time to time\r\n                updates for the lead provided , So its easy to track and get updated.\r\n              </p>\r\n              <p class=\"note\"><strong>Note:</strong> Scheme applicable only for PUNE &amp; PCMC</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"apply-form\">\r\n            <form>\r\n              <h4 class=\"text-center\">Referrer</h4>\r\n                <div class=\"form-row align-items-center justify-content-center\">\r\n                  <div class=\"col-auto\">\r\n                    <label class=\"sr-only\" for=\"inlineFormInput\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inlineFormInput\" placeholder=\"Name\">\r\n                  </div>\r\n                  <div class=\"col-auto\">\r\n                    <label class=\"sr-only\" for=\"inlineFormInput\">Contact</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inlineFormInput\" placeholder=\"Contact\">\r\n                  </div>\r\n                  <div class=\"col-auto\">\r\n                    <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Your Email\">\r\n                  </div>\r\n                  \r\n                  <!-- <div class=\"col-auto\">\r\n                    <button type=\"submit\" class=\"btn btn-warning\">Enquiry</button>\r\n                  </div> -->\r\n                </div>\r\n                <h4 class=\"text-center\">Referred</h4>\r\n                <div class=\"form-row align-items-center justify-content-center\">\r\n                  <div class=\"col-auto\">\r\n                    <label class=\"sr-only\" for=\"inlineFormInput\">Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inlineFormInput\" placeholder=\"Name\">\r\n                  </div>\r\n                  <div class=\"col-auto\">\r\n                    <label class=\"sr-only\" for=\"inlineFormInput\">Contact</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inlineFormInput\" placeholder=\"Contact\">\r\n                  </div>\r\n                  <div class=\"col-auto\">\r\n                    <label class=\"sr-only\" for=\"inlineFormInputGroup\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"inlineFormInputGroup\" placeholder=\"Your Email\">\r\n                  </div>\r\n                  \r\n                  <!-- <div class=\"col-auto\">\r\n                    <button type=\"submit\" class=\"btn btn-warning\">Enquiry</button>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"form-row align-items-center justify-content-center\">\r\n                    <button type=\"submit\" class=\"btn btn-danger refer-btn\">Refer Now</button>\r\n                </div>\r\n              </form>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n\r\n  "

/***/ }),

/***/ "./src/app/refer-and-earn/refer-and-earn.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/refer-and-earn/refer-and-earn.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".our-profile .note {\n  margin-bottom: 30px;\n  font-size: 16px; }\n\n.apply-form h4 {\n  margin: 20px 0;\n  padding: 0 15px; }\n\n.apply-form .refer-btn {\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/refer-and-earn/refer-and-earn.component.ts":
/*!************************************************************!*\
  !*** ./src/app/refer-and-earn/refer-and-earn.component.ts ***!
  \************************************************************/
/*! exports provided: ReferAndEarnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferAndEarnComponent", function() { return ReferAndEarnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferAndEarnComponent = /** @class */ (function () {
    function ReferAndEarnComponent() {
    }
    ReferAndEarnComponent.prototype.ngOnInit = function () {
    };
    ReferAndEarnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refer-and-earn',
            template: __webpack_require__(/*! ./refer-and-earn.component.html */ "./src/app/refer-and-earn/refer-and-earn.component.html"),
            styles: [__webpack_require__(/*! ./refer-and-earn.component.scss */ "./src/app/refer-and-earn/refer-and-earn.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferAndEarnComponent);
    return ReferAndEarnComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  services page\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:63520/api/'
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My_WorkSpace\nitin\loanpalace\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map