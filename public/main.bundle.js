webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/deeppurple-amber.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<!-- displays flash messages -->\r\n<div class=\"container-fluid flash-message alert-dismissible\">\r\n    <flash-messages></flash-messages>\r\n</div>\r\n\r\n<app-header></app-header>\r\n\r\n<!-- content goes here -->\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_store_front_store_front_component__ = __webpack_require__("../../../../../src/app/components/store-front/store-front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_check_out_check_out_component__ = __webpack_require__("../../../../../src/app/components/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_categories_categories_component__ = __webpack_require__("../../../../../src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cart_cart_component__ = __webpack_require__("../../../../../src/app/components/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cart_mo_cart_mo_component__ = __webpack_require__("../../../../../src/app/components/cart-mo/cart-mo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_product_product_component__ = __webpack_require__("../../../../../src/app/components/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_product_admin_product_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-product/admin-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_categories_admin_categories_component__ = __webpack_require__("../../../../../src/app/components/admin/admin-categories/admin-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_admin_category_form_category_form_component__ = __webpack_require__("../../../../../src/app/components/admin/category-form/category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_admin_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/components/admin/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_admin_edit_category_edit_category_component__ = __webpack_require__("../../../../../src/app/components/admin/edit-category/edit-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_admin_edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/admin/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_admin_details_page_details_page_component__ = __webpack_require__("../../../../../src/app/components/admin/details-page/details-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















// Admin components







// Services









// Design
// import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_store_front_store_front_component__["a" /* StoreFrontComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_12__components_check_out_check_out_component__["a" /* CheckOutComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_14__components_orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_15__components_categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'product-details/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_product_product_component__["a" /* ProductComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_16__components_cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__["a" /* RegisterComponent */] },
    // admin routes
    { path: 'admin/products', component: __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_product_admin_product_component__["a" /* AdminProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/categories', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_categories_admin_categories_component__["a" /* AdminCategoriesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/category/create', component: __WEBPACK_IMPORTED_MODULE_23__components_admin_category_form_category_form_component__["a" /* CategoryFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/product/create', component: __WEBPACK_IMPORTED_MODULE_24__components_admin_product_form_product_form_component__["a" /* ProductFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/product-details/:id', component: __WEBPACK_IMPORTED_MODULE_27__components_admin_details_page_details_page_component__["a" /* DetailsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/category-details/:id', component: __WEBPACK_IMPORTED_MODULE_27__components_admin_details_page_details_page_component__["a" /* DetailsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/category/edit/:id', component: __WEBPACK_IMPORTED_MODULE_25__components_admin_edit_category_edit_category_component__["a" /* EditCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin/product/edit/:id', component: __WEBPACK_IMPORTED_MODULE_26__components_admin_edit_product_edit_product_component__["a" /* EditProductComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_store_front_store_front_component__["a" /* StoreFrontComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_check_out_check_out_component__["a" /* CheckOutComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_cart_mo_cart_mo_component__["a" /* CartMoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_categories_admin_categories_component__["a" /* AdminCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_admin_category_form_category_form_component__["a" /* CategoryFormComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_admin_product_form_product_form_component__["a" /* ProductFormComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_admin_edit_category_edit_category_component__["a" /* EditCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_admin_edit_product_edit_product_component__["a" /* EditProductComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_admin_details_page_details_page_component__["a" /* DetailsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_admin_admin_product_admin_product_component__["a" /* AdminProductComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_register_register_component__["a" /* RegisterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["BootstrapModalModule"],
            __WEBPACK_IMPORTED_MODULE_35_ngx_carousel__["a" /* NgxCarouselModule */],
            __WEBPACK_IMPORTED_MODULE_32_angular2_flash_messages__["FlashMessagesModule"]
            // AngularFontAwesomeModule
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__components_cart_mo_cart_mo_component__["a" /* CartMoComponent */], __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_28__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_29__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_30__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_31__services_validate_service__["a" /* ValidateService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/assets/header.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "header.3d88e8e271748ea56796.png";

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-categories/admin-categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-categories/admin-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Dashboard component html -->\r\n\r\n<div class=\"container\">\r\n    \r\n      <div class=\"row\">\r\n        <h3>Agora store <small>Admin panel</small></h3>\r\n        <div class=\"col-md-12\">\r\n          <!-- plug-in for the search-bar conponent -->\r\n          <!-- <app-search-bar></app-search-bar> -->\r\n        </div>\r\n      </div>\r\n    \r\n      <h4 *ngIf=\"!categories\">\r\n        There are no categories to show, please click <a [routerLink]=\"['/admin/category/create']\">here</a> to add a new category.\r\n      </h4>\r\n    \r\n      <!-- if products exists in the db, table shows otherwise it wont -->\r\n      <div *ngIf=\"categories\" class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2\">  \r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Category overview\r\n              <a routerLink=\"/admin/category/create\" class=\"btn btn-sm pull-right\"><i class=\"fa fa-plus\"></i></a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <table class=\"table table-striped table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Category #</th>\r\n                    <th>Name</th>\r\n                    <th>Actions</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let category of categories\">\r\n                    <td>{{category._id}}</td>\r\n                    <td> \r\n                      <a routerLink=\"/admin/category-details/{{category._id}}\">{{category.name}}</a>\r\n                    </td>\r\n                    <td>\r\n                        <a routerLink=\"/admin/category/edit/{{category._id}}\" class=\"btn btn-sm btn-default\">\r\n                          <i class=\"fa fa-pencil\"></i>\r\n                        </a> |\r\n                        <button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\" [attr.data-target]=\"'#del'+category._id\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                        </button>\r\n  \r\n                        <!-- confirmation of delete modal -->\r\n                        <div class=\"modal\" id=\"del{{category._id}}\">\r\n                          <div class=\"modal-dialog\">\r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                                <h4 class=\"modal-title\">Confirm delete</h4>\r\n                              </div>\r\n                              <div class=\"modal-body\">\r\n                                <p>Are you sure you want to delete this category permanently?</p>\r\n                              </div>\r\n                              <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(category._id)\" data-dismiss=\"modal\">Yes</button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div><!-- ./modal -->\r\n  \r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table> \r\n    \r\n            </div>\r\n          </div>\r\n        </div> <!-- ./col -->\r\n        \r\n      </div>\r\n    </div> <!-- ./container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-categories/admin-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCategoriesComponent = (function () {
    function AdminCategoriesComponent(categoryService, flashMessage, router) {
        this.categoryService = categoryService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    AdminCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // on init request all categories from db
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    /**
     * Handles deleting a categpry
     * @param id The id of the category to be deleted
     */
    AdminCategoriesComponent.prototype.delete = function (id) {
        var _this = this;
        // send request to service to delete category
        this.categoryService.deleteCategory(id).subscribe(function (data) {
            if (data.success) {
                // show success alert
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigateByUrl('/admin/categories');
            }
            else {
                _this.flashMessage.show('An error occurred during the process, please try again.', { cssClass: 'alert-warning', timeout: 3000 });
                _this.router.navigate(['/admin/categories']); // redirect to category page
            }
        });
    };
    return AdminCategoriesComponent;
}());
AdminCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-categories',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-categories/admin-categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-categories/admin-categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AdminCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=admin-categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-product/admin-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-product/admin-product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Dashboard component html -->\r\n\r\n<div class=\"container\">\r\n    \r\n      <div class=\"row\">\r\n        <h3>Agora store <small>Admin panel</small></h3>\r\n        <div class=\"col-md-12\">\r\n          <!-- plug-in for the search-bar conponent -->\r\n        </div>\r\n      </div>\r\n    \r\n      <h3 *ngIf=\"!products\">\r\n        There are no products to show, please add some by clicking <a routerLink=\"/admin/product/create\">here.</a>\r\n      </h3>\r\n    \r\n      <!-- if products exists in the db, table shows otherwise it wont -->\r\n      <div *ngIf=\"products\" class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1\">  \r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Product overview\r\n              <a routerLink=\"/admin/product/create\" class=\"btn btn-sm pull-right\"><i class=\"fa fa-plus\"></i></a>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <table class=\"table table-striped table-hover \">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Product #</th>\r\n                    <th>Name</th>\r\n                    <th>Actions</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let product of products\">\r\n                    <td>{{product._id}}</td>\r\n                    <td> \r\n                      <a routerLink=\"/admin/product-details/{{product._id}}\">{{product.name}} </a>\r\n                    </td>\r\n                    <td>\r\n                      <a routerLink=\"/admin/product/edit/{{product._id}}\" class=\"btn btn-link btn-default\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                      </a> |\r\n                      <button type=\"button\" class=\"btn btn-link btn-danger\" data-toggle=\"modal\" [attr.data-target]=\"'#del'+product._id\">\r\n                        <i class=\"fa fa-times\"></i>\r\n                      </button>\r\n                      \r\n                      <!-- confirmation of delete modal -->\r\n                      <div class=\"modal\" id=\"del{{product._id}}\">\r\n                        <div class=\"modal-dialog\">\r\n                          <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                              <h4 class=\"modal-title\">Confirm delete</h4>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                              <p>Are you sure you want to delete this product - {{product.name}}- permanently?</p>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n                              <button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(product._id)\" data-dismiss=\"modal\">Yes</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table> \r\n    \r\n            </div>\r\n          </div>\r\n        </div> <!-- ./col -->\r\n        \r\n      </div>\r\n    </div> <!-- ./container -->"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin-product/admin-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminProductComponent = (function () {
    function AdminProductComponent(productService, flashMessage) {
        this.productService = productService;
        this.flashMessage = flashMessage;
    }
    AdminProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get all the products from db
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
    };
    /**
     * Deletes the product from the db
     * @param id the id of the product to be deleted
     */
    AdminProductComponent.prototype.delete = function (id) {
        var _this = this;
        this.productService.deleteProduct(id).subscribe(function (data) {
            if (data.success) {
                // if successful
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                // show error message
                _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeout: 3000 });
            }
        });
    };
    return AdminProductComponent;
}());
AdminProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-admin-product',
        template: __webpack_require__("../../../../../src/app/components/admin/admin-product/admin-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin-product/admin-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], AdminProductComponent);

var _a, _b;
//# sourceMappingURL=admin-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/category-form/category-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/category-form/category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n  \r\n      <h3>Add a new Category</h3>\r\n  \r\n      <div class=\"col-md-10 col-md-offset-1\">\r\n        <div class=\"panel panel-info\">\r\n          <div class=\"panel-heading\">Categery details form</div>\r\n          <div class=\"panel-body\">\r\n            <p>Fill in the form accordingly. \r\n              <strong>Note:</strong> All fields a required.\r\n            </p>\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"onFormSubmit(catForm.value)\" #catForm=\"ngForm\">\r\n              <fieldset>\r\n                <div class=\"form-group\">\r\n                  <label for=\"inputEmail\" class=\"control-labelcol-md-4 col-lg-2\">Category Name</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control\" id=\"prodName\" placeholder=\"Name\" required>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"form-group\">\r\n                  <label for=\"inputPassword\" class=\"control-labelcol-md-4 col-lg-2\">Category description</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <textarea class=\"form-control\" rows=\"3\" name=\"description\" [(ngModel)]=\"description\" required></textarea>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" style=\"text-align: center\">\r\n                  <button type=\"submit\" class=\"btn btn-success\" value=\"Submit\" style=\"margin-right: 16px\">Create Category</button>\r\n                  <a routerLink=\"/admin/categories\" class=\"btn btn-primary\"><i class=\"fa fa-arrow-left\"></i> Back</a>\r\n                </div>\r\n              </fieldset>  \r\n            </form>\r\n          </div>\r\n        \r\n        </div><!-- ./panel -->\r\n      </div><!-- ./col -->\r\n      \r\n    </div> <!-- ./row -->\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/category-form/category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryFormComponent = (function () {
    function CategoryFormComponent(flashMessage, categoryService, router) {
        this.flashMessage = flashMessage;
        this.categoryService = categoryService;
        this.router = router;
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
    };
    /**
    * Sends submitted form data to categoryService
    * @param fData This is the form data
    */
    CategoryFormComponent.prototype.onFormSubmit = function (fData) {
        var _this = this;
        this.categoryService.saveCategory(fData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/admin/categories']); // redirects to categories page
            }
            else {
                // if not saved
                _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeout: 3000 });
                _this.router.navigate(['/admin/category/create']); // redirects to category form
            }
        });
    };
    return CategoryFormComponent;
}());
CategoryFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-category-form',
        template: __webpack_require__("../../../../../src/app/components/admin/category-form/category-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/category-form/category-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CategoryFormComponent);

var _a, _b, _c;
//# sourceMappingURL=category-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/details-page/details-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/details-page/details-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <!-- for categories -->\r\n      <div class=\"col-md-10 col-md-offset-1\" *ngIf=\"category\">\r\n        <h2>Category Details - <small>{{category.name}}</small></h2>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">Details</div>\r\n          <div class=\"panel-body\">\r\n            <ul>\r\n              <p><strong>Name:</strong> {{category.name}} </p>\r\n              <p><strong>Description:</strong> {{category.description}}</p>\r\n            </ul>\r\n            <div class=\"back-btn\">\r\n              <a routerLink=\"/admin/categories\" class=\"btn btn-primary\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div> <!-- ./panel -->\r\n\r\n      <!-- for products -->\r\n      <div class=\"col-md-10 col-md-offset-1\" *ngIf=\"product\">\r\n        <h2>Product Details -\r\n          <small>{{product.name}}</small>\r\n        </h2>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">Details</div>\r\n          <div class=\"panel-body\">\r\n            <h1>Image carousel here</h1>\r\n        \r\n            <ul>\r\n              <p><strong>Name:</strong> {{product.name}} </p>\r\n              <p><strong>Category:</strong> {{product.category}}</p>\r\n              <p><strong>Price:</strong> {{ product.price | currency: 'ZMW'}}</p>\r\n              <p><strong>Description:</strong> {{product.description}}</p>\r\n              <p>{{product.images[0].image_name}}</p>\r\n                <strong>Images:</strong> \r\n                <ul *ngFor=\"let img of product.images\">\r\n                  <li>{{img.image_name}}</li>\r\n                </ul>\r\n              \r\n            </ul>\r\n            <div class=\"back-btn\">\r\n              <a routerLink=\"/admin/products\" class=\"btn btn-primary\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back\r\n              </a>\r\n            </div>\r\n        \r\n          </div>\r\n        </div>\r\n      </div><!-- ./panel -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/details-page/details-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsPageComponent = (function () {
    function DetailsPageComponent(categoryService, productService, router, route) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        // get id from URL and store in var~id
        this.id = this.route.snapshot.params['id'];
        this.determiner(this.id);
    };
    /**
    * Determines which details to display based on the current visited url
    * @param id the id of the category or product, used for in the service to get appropriate data
    */
    DetailsPageComponent.prototype.determiner = function (id) {
        var _this = this;
        var currentRoute = this.router.url; // is the current url
        console.log('current route ' + currentRoute); // kept for debug purposes
        // checks which route was visited
        if (currentRoute.includes('/admin/category')) {
            // if category, call categoryService
            this.categoryService.getCategory(id).subscribe(function (data) {
                _this.category = data; // store the retrieved data in the category variable
            });
        }
        else if (currentRoute.includes('/admin/product')) {
            // if product, call productService
            this.productService.getSingleProduct(id).subscribe(function (data) {
                _this.product = data; // store the retrieved data in the product variable
            });
        }
    };
    return DetailsPageComponent;
}());
DetailsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-details-page',
        template: __webpack_require__("../../../../../src/app/components/admin/details-page/details-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/details-page/details-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], DetailsPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=details-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-category/edit-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-category/edit-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <h3>Edit Category - <small>{{name}}</small></h3>\r\n\r\n    <div class=\"col-md-10 col-md-offset-1\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">Categery details form</div>\r\n        <div class=\"panel-body\">\r\n          \r\n          <form class=\"form-horizontal\" (ngSubmit)=\"onEditSubmit(catForm.value)\" #catForm=\"ngForm\">\r\n            <fieldset>\r\n              <div class=\"form-group\">\r\n                <label for=\"inputEmail\" class=\"control-labelcol-md-4 col-lg-2\">Category Name</label>\r\n                <div class=\"col-md-8 col-lg-10\">\r\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control input-sm\" id=\"prodName\" placeholder=\"Name\" required>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"inputPassword\" class=\"control-labelcol-md-4 col-lg-2\">Category description</label>\r\n                <div class=\"col-md-8 col-lg-10\">\r\n                  <textarea class=\"form-control input-sm\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\" required></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" style=\"text-align: center\">\r\n                <button type=\"submit\" class=\"btn btn-success\" value=\"Submit\">Edit Category</button>\r\n                <a routerLink=\"/admin/categories\" class=\"btn btn-info\"><i class=\"fa fa-arrow-left\"></i> Back</a>\r\n              </div>\r\n            </fieldset>  \r\n          </form>\r\n        </div>\r\n      \r\n      </div><!-- ./panel -->\r\n    </div><!-- ./col -->\r\n    \r\n  </div> <!-- ./row -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-category/edit-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCategoryComponent = (function () {
    function EditCategoryComponent(router, categoryService, flashMessage, route) {
        this.router = router;
        this.categoryService = categoryService;
        this.flashMessage = flashMessage;
        this.route = route;
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the id from the url
        this.id = this.route.snapshot.params['id'];
        // get the category from db
        this.categoryService.getCategory(this.id).subscribe(function (data) {
            _this.name = data.name;
            _this.description = data.description;
        });
    };
    /**
    * Handles the submitted form
    * @param fdata The data from the form
    */
    EditCategoryComponent.prototype.onEditSubmit = function (fdata) {
        var _this = this;
        // calls the category service to handle the update request
        this.categoryService.updateCategory(this.id, fdata).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                // direct back to cv form
                _this.router.navigate(['/categories']);
            }
            else {
                _this.flashMessage.show('Oops! Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    return EditCategoryComponent;
}());
EditCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-edit-category',
        template: __webpack_require__("../../../../../src/app/components/admin/edit-category/edit-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/edit-category/edit-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], EditCategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n      <h3>Edit Product - <small>{{name}}</small></h3>\r\n\r\n    <div class=\"col-md-10 col-md-offset-1\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Edit form</div>\r\n        <div class=\"panel-body\">\r\n          <form class=\"form-horizontal\" (ngSubmit)=\"onEditSubmit(prodForm.value)\" #prodForm=\"ngForm\" enctype=\"multipart/form-data\">\r\n            <fieldset>\r\n              <div class=\"form-group\">\r\n                <label for=\"inputEmail\" class=\"control-label col-md-4 col-lg-2\">Product Name</label>\r\n                <div class=\"col-md-8 col-lg-10\">\r\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control input-sm\" id=\"prodName\" placeholder=\"Name\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"inputPassword\" class=\"control-label col-md-4 col-lg-2\">Product description</label>\r\n                <div class=\"col-md-8 col-lg-10\">\r\n                  <textarea class=\"form-control input-sm\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\"></textarea>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"price\" class=\"control-label col-md-4 col-lg-2\">Price</label>\r\n                <div class=\"col-md-8 col-lg-10\">\r\n                  <div class=\"input-group\">\r\n                    <span class=\"input-group-addon\">ZMW</span>\r\n                    <input type=\"number\" name=\"price\" [(ngModel)]=\"price\" class=\"form-control input-sm\" id=\"price\" required>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"inputEmail\" class=\"control-label col-md-4 col-lg-2\">Product category</label>\r\n                <div class=\"col-md-8 col-lg-10\">\r\n                  <select *ngIf=\"categories\" name=\"category\" [(ngModel)]=\"category\" class=\"form-control\" required>\r\n                    <option *ngFor=\"let category of categories\" [value]=\"category._id\">{{category.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\" style=\"text-align: center\">\r\n                <button type=\"submit\" class=\"btn btn-success\" value=\"Submit\">Edit Product</button>\r\n                <a routerLink=\"/admin/products\" class=\"btn btn-info\"><i class=\"fa fa-arrow-left\"></i> Back</a>\r\n              </div>\r\n            </fieldset>  \r\n          </form>\r\n        </div>\r\n      \r\n      </div><!-- ./panel -->\r\n    </div><!-- ./col -->\r\n    \r\n  </div> <!-- ./row -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProductComponent = (function () {
    function EditProductComponent(productService, categoryService, route, router, flashMessage) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the id from the url
        this.id = this.route.snapshot.params['id'];
        // get the category from db
        this.productService.getSingleProduct(this.id).subscribe(function (data) {
            _this.name = data.name;
            _this.description = data.description;
            _this.price = data.price;
        });
        // gets the categories from the db
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    EditProductComponent.prototype.onEditSubmit = function (fData) {
        var _this = this;
        // calls the category service to handle the update request
        this.productService.updateProduct(this.id, fData).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                // direct back to cv form
                _this.router.navigate(['/admin/products']);
            }
            else {
                _this.flashMessage.show('Oops! Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/admin/products']);
            }
        });
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/components/admin/edit-product/edit-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], EditProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n  \r\n      <h3>Add a new product</h3>\r\n  \r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">Product details form</div>\r\n          <div class=\"panel-body\">\r\n            <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit(prodForm.value)\" #prodForm=\"ngForm\" enctype=\"multipart/form-data\">\r\n              <fieldset>\r\n                <div class=\"form-group\">\r\n                  <label for=\"inputEmail\" class=\"control-label col-md-4 col-lg-2\">Product Name</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" class=\"form-control input-sm\" id=\"prodName\" placeholder=\"Name\">\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"form-group\">\r\n                  <label for=\"inputPassword\" class=\"control-label col-md-4 col-lg-2\">Product description</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <textarea class=\"form-control input-sm\" rows=\"5\" name=\"description\" [(ngModel)]=\"description\"></textarea>\r\n                  </div>\r\n                </div>\r\n                <!-- <p><u>Product details</u></p>\r\n                <!-- should be able to add multiple \r\n                <div class=\"form-group\">\r\n                  <label for=\"inputEmail\" class=\"control-labelcol-md-4 col-lg-2\">Available colors</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <input type=\"text\" name=\"colors\" class=\"form-control\" id=\"prodName\" placeholder=\"Colors\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"inputEmail\" class=\"control-labelcol-md-4 col-lg-2\">Available sizes</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <input type=\"text\" name=\"sizes\" class=\"form-control\" id=\"prodName\" placeholder=\"sizes\">\r\n                  </div>\r\n                </div> -->\r\n  \r\n                <!-- add current directive -->\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\" class=\"control-label col-md-4 col-lg-2\">Price</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <div class=\"input-group\">\r\n                      <span class=\"input-group-addon\">ZMW</span>\r\n                      <input type=\"number\" name=\"price\" [(ngModel)]=\"price\" class=\"form-control input-sm\" id=\"price\" required>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"form-group\">\r\n                  <label for=\"inputEmail\" class=\"control-label col-md-4 col-lg-2\">Product category</label>\r\n                  <div class=\"col-md-8 col-lg-10\">\r\n                    <p *ngIf=\"!categories\">\r\n                      There aint any categories yet, please add some <a routerLink=\"/category\">here</a>\r\n                    </p>\r\n                    <select *ngIf=\"categories\" name=\"category\" [(ngModel)]=\"category\" class=\"form-control\" required>\r\n                      <option *ngFor=\"let category of categories\" [value]=\"category._id\">{{category.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n  \r\n                <div class=\"form-group\">\r\n                    <label for=\"pics\" class=\"control-label col-md-4 col-lg-2\">Product images</label>\r\n                    <div class=\"col-md-8 col-lg-10\">\r\n                      <input type=\"file\" name=\"pictures\" (change)=\"fileChangeEvent($event)\" id=\"pics\" multiple required>\r\n                    </div>\r\n                  </div>\r\n  \r\n                <div class=\"form-group buttons\">\r\n                  <button type=\"submit\" class=\"btn btn-success\" value=\"Submit\">Create Product</button>\r\n                  <a routerLink=\"/admin/products\" class=\"btn btn-info\"><i class=\"fa fa-arrow-left\"></i> Back</a>\r\n                </div>\r\n              </fieldset>  \r\n            </form>\r\n          </div>\r\n        \r\n        </div><!-- ./panel -->\r\n      </div><!-- ./col -->\r\n      \r\n    </div> <!-- ./row -->\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__("../../../../../src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = (function () {
    function ProductFormComponent(productService, flashMessage, categoryService, router) {
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.categoryService = categoryService;
        this.router = router;
        this.pictures = [];
    }
    ProductFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // gets the categories from the db
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        });
    };
    /**
     * Handles submitted form
     * @param data Is the submitted form
     */
    ProductFormComponent.prototype.onSubmit = function (data) {
        var _this = this;
        // console.log(data);
        var files = this.pictures; // add the pictures to the array files
        // console.log(files);
        // Can only process the form if images are not more that 5
        if (files.length > 5) {
            // throw error
            var msg = 'Error with files: You can only upload upto 5 image files. Please try again.';
            this.flashMessage.show(msg, { cssClass: 'alert-info', timeout: 4000 });
        }
        else {
            // create a new FormData object
            var formData = new FormData();
            // adding all form inputs to formData
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    // append key and value to formData
                    formData.append(key, data[key]);
                }
            }
            // append the image files to the form data
            for (var i = 0; i < files.length; i++) {
                formData.append('pictures[]', files[i], files[i]['name']);
            }
            // send the data to the backend
            this.productService.saveProduct(formData).subscribe(function (reply) {
                if (reply.success) {
                    _this.flashMessage.show(reply.msg, { cssClass: 'alert-success', timeout: 3000 });
                    // re-route to dashboard
                    _this.router.navigateByUrl('/admin/products');
                }
                else {
                    _this.flashMessage.show(reply.msg, { cssClass: 'alert-warning', timeout: 4000 });
                }
            });
        } // end if-else
    };
    /**
    * Upon change we add the images to the pictures array.
    * @param fileInput the file input
    */
    ProductFormComponent.prototype.fileChangeEvent = function (fileInput) {
        this.pictures = fileInput.target.files;
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-product-form',
        template: __webpack_require__("../../../../../src/app/components/admin/product-form/product-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/product-form/product-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ProductFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart-mo/cart-mo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart-mo/cart-mo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n            <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <p>{{message || 'Are you sure?'}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cart-mo/cart-mo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartMoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartMoComponent = (function (_super) {
    __extends(CartMoComponent, _super);
    function CartMoComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    CartMoComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    return CartMoComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
CartMoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart-mo',
        template: __webpack_require__("../../../../../src/app/components/cart-mo/cart-mo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cart-mo/cart-mo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object])
], CartMoComponent);

var _a;
//# sourceMappingURL=cart-mo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-top: 10px;\r\n}\r\n\r\n.centered {\r\n    text-align: center;\r\n}\r\n\r\n/* CSS for thee cart-image */\r\n#cart-img {\r\n    background-color: #90A4AE;\r\n}\r\n\r\n#total {\r\n    color: purple;\r\n    font-weight: bold;\r\n}\r\n\r\n.table>tbody>tr>td,\r\n.table>tfoot>tr>td {\r\n    vertical-align: middle;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    table#cart tbody td .form-control {\r\n        width: 20%;\r\n        display: inline !important;\r\n    }\r\n    .actions .btn {\r\n        width: 36%;\r\n        margin: 1.5em 0;\r\n    }\r\n    .actions .btn-info {\r\n        float: left;\r\n    }\r\n    .actions .btn-danger {\r\n        /* float: inherit; */\r\n        text-align: center;\r\n    }\r\n    table#cart thead {\r\n        display: none;\r\n    }\r\n    table#cart tbody td {\r\n        display: block;\r\n        padding: .6rem;\r\n        min-width: 320px;\r\n    }\r\n    table#cart tbody tr td:first-child {\r\n        background: #BDBDBD;  /*#B39DDB, #BDBDBD, #7A4B7A*/\r\n        color: #fff;\r\n    }\r\n    table#cart tbody td:before {\r\n        content: attr(data-th);\r\n        font-weight: bold;\r\n        display: inline-block;\r\n        width: 8rem;\r\n    }\r\n    table#cart tfoot td {\r\n        display: block;\r\n    }\r\n    table#cart tfoot td .btn {\r\n        display: block;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <h4 *ngIf=\"!cart\" class=\"centered\">\r\n      Nothing to show in your cart. <br> <br> \r\n      <a routerLink=\"/\" class=\"btn btn-info centered\"><i class=\"fa fa-angle-left\"></i> Continue shopping</a>\r\n    </h4>\r\n\r\n    <table *ngIf=\"cart\" id=\"cart\" class=\"table table-hover table-condensed\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width:50%\">Product</th>\r\n          <th style=\"width:10%\">Price</th>\r\n          <th style=\"width:8%\">Quantity</th>\r\n          <th style=\"width:22%\" class=\"text-center\">Subtotal</th>\r\n          <th style=\"width:10%\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of cart.items\">\r\n          <td data-th=\"Product\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-3 hidden-xs\">\r\n                <img id=\"cart-img\" src=\"file/{{item.image.image_name}}\" class=\"img-responsive\" alt=\"item image\"/>\r\n              </div>\r\n              <div class=\"col-sm-9\">\r\n                <h4 class=\"nomargin\">{{item.title}}</h4>\r\n                <p>{{item.description}}</p>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td data-th=\"Price\">{{ item.price | currency:'ZMW' }}</td>\r\n          <td data-th=\"Quantity\">\r\n            <input type=\"number\" name=\"quantity\" [(ngModel)]=\"item.qty\" class=\"form-control text-center\" #qty=\"ngModel\" [min]=\"1\">\r\n          </td>\r\n          <td data-th=\"Subtotal\" class=\"text-center\">{{ item.price * item.qty | currency:'ZMW' }}</td>\r\n          <td class=\"actions\" data-th=\"\">\r\n            <button *ngIf=\"qty.dirty\" class=\"btn btn-info btn-sm\" (click)=\"updateItem(qty.value)\">Update</button>\r\n            <button class=\"btn btn-danger btn-sm\" (click)=\"removeItem(item._id)\"><i class=\"fa fa-times\"></i></button>\t\t\t\t\t\t\t\t\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr class=\"visible-xs\">\r\n          <td class=\"text-center\"><strong>Total {{cart.total | currency:'ZMW'}} </strong></td>\r\n        </tr>\r\n        <tr>\r\n          <td><a href=\"#\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\r\n          <td colspan=\"2\" class=\"hidden-xs\"></td>\r\n          <td class=\"hidden-xs text-center\"><h5>Total <small id=\"total\">{{cart.total | currency:'ZMW'}}</small> </h5></td>\r\n          <td><a href=\"#\" class=\"btn btn-success btn-block\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = (function () {
    function CartComponent(cartService, flashMessages) {
        this.cartService = cartService;
        this.flashMessages = flashMessages;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch cart from the db on init
        this.cartService.showCart().subscribe(function (data) {
            _this.cart = data;
        });
    };
    // TODO: how will it work when there are many entries in the cart
    /**
     * This function updates the subtotal amount went the user changes it
     * @param qty This quantity typed in by the user
     */
    CartComponent.prototype.updateItem = function (qty) {
        console.log(qty);
    };
    /**
     * Removes an item from the cart. If that item has a quantity greater
     * than 1, then it's quantity is reduced by 1.
     * @param id Is the id of the item being removed for the cart
     */
    CartComponent.prototype.removeItem = function (id) {
        var _this = this;
        this.cartService.removeItem(id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                _this.cart = data.cart;
            }
        });
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__("../../../../../src/app/components/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cart/cart.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], CartComponent);

var _a, _b;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Categories works\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/check-out/check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  check-out works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckOutComponent = (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
    };
    return CheckOutComponent;
}());
CheckOutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-out',
        template: __webpack_require__("../../../../../src/app/components/check-out/check-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/check-out/check-out.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckOutComponent);

//# sourceMappingURL=check-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n    background: url(" + __webpack_require__("../../../../../src/app/assets/header.png") + ");\r\n    width: 100%;\r\n    height: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.header {\r\n    height: 200px;\r\n    margin-top: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header bg\">\r\n    <p>hello</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* CSS for the login modal */\r\n#login {\r\n    padding: 16px;\r\n}\r\n\r\n.footer {\r\n    margin-left: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n          <h4 class=\"modal-title\">{{title || 'Confirm'}}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <form id=\"login\" class=\"form-horizontal\" (ngSubmit)=\"loginSubmit(loginFrm.value)\" #loginFrm=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"inputEmail\" class=\"col-sm-3 control-label\">Username</label>\r\n            <div class=\"col-sm-8\">\r\n              <input class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"inputEmail\" placeholder=\"Username\" type=\"text\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword\" class=\"col-sm-3 control-label\">Password</label>\r\n            <div class=\"col-sm-8\">\r\n              <input class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" id=\"inputPassword\" placeholder=\"Password\" type=\"password\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <a routerLink=\"/register\" class=\"pull-right\" (click)=\"close()\">Create account</a>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <div class=\"footer pull-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n              </div>\r\n            </div>\r\n        </form>\r\n\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent(dialogService, authService, flashMessages, router) {
        var _this = _super.call(this, dialogService) || this;
        _this.authService = authService;
        _this.flashMessages = flashMessages;
        _this.router = router;
        return _this;
    }
    /**
     * Logins a user into the system
     * @param user The data from the login form
     */
    LoginComponent.prototype.loginSubmit = function (user) {
        var _this = this;
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                // we authenticate the user adn store relevant data
                _this.authService.storeUserData(data.token, data.user);
                // flash message and redirect
                _this.flashMessages.show('Welcome, you are now logged in as - ' + data.user.username, { cssClass: 'alert-success', timeout: 3000 });
                // redirect to page
                _this.router.navigate(['/']);
            }
            else {
                // not successfull
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
        this.result = true;
        this.close();
    };
    LoginComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    };
    return LoginComponent;
}(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogComponent"]));
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n/* CSS for multi-leveled dropdown for admin links*/\r\n\r\n.dropdown-submenu {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-submenu>.dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -6px;\r\n    margin-left: -1px;\r\n    border-radius: 0 6px 6px 6px;\r\n}\r\n\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n    display: block;\r\n}\r\n\r\n.dropdown-submenu>a:after {\r\n    display: block;\r\n    content: \" \";\r\n    float: right;\r\n    width: 0;\r\n    height: 0;\r\n    border-color: transparent;\r\n    border-style: solid;\r\n    border-width: 5px 0 5px 5px;\r\n    border-left-color: #ccc;\r\n    margin-top: 5px;\r\n    margin-right: -10px;\r\n}\r\n\r\n.dropdown-submenu:hover>a:after {\r\n    border-left-color: #fff;\r\n}\r\n\r\n.dropdown-submenu.pull-left {\r\n    float: none;\r\n}\r\n\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n    left: -100%;\r\n    margin-left: 10px;\r\n    border-radius: 6px 0 6px 6px;\r\n}\r\n/* ./multi-leveled dropdown*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Agora logo</a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <!--left navbar items-->\r\n                <li>\r\n                    <a [routerLink]=\"['/']\">Store front</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!--Right navbar items-->\r\n                <li>\r\n                    <button class=\"btn btn-default padded-top\" (click)=showConfirm()>Show Cart</button>\r\n                </li>\r\n                <li [routerLinkActive]=\"['active']\">\r\n                    <a [routerLink]=\"['/categories']\">Categories</a>\r\n                </li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\">\r\n                    <a [routerLink]=\"['/cart']\">Cart\r\n                        <span class=\"badge badge-info\">{{ getCartCount() }}</span>\r\n                    </a>\r\n                </li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n                        Admin <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu multi-level\" role=\"menu\">\r\n                        <li class=\"dropdown-submenu\">\r\n                            <a tabindex=\"-1\" href=\"#\">Products</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a tabindex=\"-1\" [routerLink]=\"['/admin/products']\">Manage products</a></li>\r\n                                <li><a [routerLink]=\"['/admin/product/create']\">Create product</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li class=\"dropdown-submenu\">\r\n                            <a tabindex=\"-1\" href=\"#\">Categories</a>\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li><a tabindex=\"-1\" [routerLink]=\"['/admin/categories']\">Manage categories</a></li>\r\n                                <li><a [routerLink]=\"['/admin/category/create']\">Create category</a></li>\r\n                            </ul>\r\n                        </li>\r\n                        <li><a href=\"#\">Orders</a></li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a href=\"#\">Separated link</a></li>\r\n                    </ul>\r\n                </li>\r\n                <li *ngIf=\"!authService.loggedIn()\">\r\n                    <button class=\"btn btn-default padded-top\" (click)=\"showLogin()\">Sign In</button>\r\n                </li>\r\n                <form class=\"navbar-form navbar-left\" role=\"search\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\r\n                </form>\r\n                <!-- /.dropdown -->\r\n                <li *ngIf=\"authService.loggedIn()\" class=\"dropdown\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                        <i class=\"fa fa-user fa-fw\"></i>\r\n                        <!-- user names here -->\r\n                        {{ getUsername() }}\r\n                        <b class=\"caret\"></b>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu dropdown-user\">\r\n                        <li><a [routerLink]=\"['/profile']\"><i class=\"fa fa-user fa-fw\"></i>My Profile</a>\r\n                        </li>\r\n                        <li class=\"divider\"></li>\r\n                        <li><a (click)=\"onLogout()\" href=\"#\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\r\n                        </li>\r\n                    </ul>\r\n                    <!-- /.dropdown-user -->\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_mo_cart_mo_component__ = __webpack_require__("../../../../../src/app/components/cart-mo/cart-mo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = (function () {
    function NavbarComponent(dialogService, authService, router, flashMessages, cartService) {
        this.dialogService = dialogService;
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.cartService = cartService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.showConfirm = function () {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__cart_mo_cart_mo_component__["a" /* CartMoComponent */], {
            title: 'Confirm title',
            message: 'Confirm message'
        }).subscribe(function (isConfirmed) {
            // We get dialog result
            if (isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
        // We can close dialog calling disposable.unsubscribe();
        // If dialog was not closed manually close it by timeout
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    NavbarComponent.prototype.showLogin = function () {
        var opts = {
            closeByClickingOutside: true
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */], {
            title: 'Login'
        }, opts).subscribe(function (isConfirmed) {
            // We get dialog result
            if (isConfirmed) {
                console.log('accepted');
            }
        });
    };
    /**
     * Gets a user form local storage
     */
    NavbarComponent.prototype.getUsername = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.username = user.username;
        return this.username;
    };
    NavbarComponent.prototype.getCartCount = function () {
        var _this = this;
        this.cartService.showCart().subscribe(function (data) {
            _this.cartItems = data.itemCount;
        });
        return this.cartItems;
    };
    /**
     * Logs the user out of the system
     */
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        // flash logout msg
        this.flashMessages.show('You have succefully logged out, later!', { cssClass: 'alert-success', timeout: 3000 });
        // redirects to home
        this.router.navigate(['/']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["DialogService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_cart_service__["a" /* CartService */]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  orders works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/components/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/orders/orders.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Image carousel CSS */\r\n.bannerStyle h1 {\r\n    background-color: rgb(202, 186, 221);\r\n    min-height: 350px;\r\n    text-align: center;\r\n    line-height: 300px;\r\n}\r\n.leftRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    left: 0;\r\n}\r\n\r\n.rightRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    right: 0;\r\n}\r\n\r\n.bannerStyle h1 img {\r\n    width: 370px;\r\n    height: 370px;\r\n}\r\n/* ./ Carousel CSS */\r\n\r\n/* Card CSS */\r\n.card {\r\n    /* Add shadows to create the \"card\" effect */\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    transition: 0.3s;\r\n    padding-top: 1px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.product-title, .price, .quantity {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n.product-title, .price, .description, .quantity {\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.price span {\r\n    color: rgb(175, 13, 175);\r\n}\r\n\r\n.action-btn {\r\n    text-align: right;\r\n    margin: 0 0 16px 16px;\r\n}\r\n\r\n.form-control {\r\n    width: 20%;\r\n    display: inline !important;\r\n}\r\n\r\n/* ./ Card CSS */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n\r\n    <!-- Error message -->\r\n    <h4 *ngIf=\"!product\">Error: This product doesnt exist.</h4>\r\n    <div *ngIf=\"product\" class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <!-- 1st half -->\r\n        <div class=\"col-md-6\">\r\n          <!-- <h1>Images</h1> -->\r\n          <div>\r\n              <ngx-carousel [inputs]=\"carouselBanner\" (onMove)=\"onmoveFn($event)\">\r\n                <!-- for-loop comes on the ngx-item -->\r\n                <ngx-item NgxCarouselItem *ngFor=\"let img of product.images\" class=\"bannerStyle\">\r\n                  <h1>\r\n                    <img src=\"file/{{img.image_name}}\">\r\n                  </h1>\r\n                </ngx-item>\r\n              \r\n                <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n                <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n              </ngx-carousel>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-md-6 card\">\r\n          <h3 class=\"product-title\">{{product.name}}</h3>\r\n          <p class=\"description\">\r\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \r\n              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \r\n              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into \r\n              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of \r\n              Letraset sheets containing Lorem Ipsum passages, and more \r\n              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n          </p>\r\n          <h4 class=\"price\">Price: <span>{{ product.price | currency:'ZMW' }}</span></h4>\r\n\r\n          <div class=\"col-md-6 col-sm-5 col-xs-7 quantity\">\r\n            <label class=\"control-label\">Quantity:</label> <input type=\"number\" name=\"quantity\" [(ngModel)]=\"quantity\" class=\"form-control\">\r\n          </div>\r\n          <div class=\"action-btn\">\r\n            <button type=\"button\" class=\"btn btn-lg btn-info\" (click)=\"addToCart(product)\">Add to cart</button>\r\n          </div>\r\n        </div><!-- ./2nd half -->\r\n      </div>\r\n      \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = (function () {
    function ProductComponent(productService, cartService, route, router, flashMessages) {
        this.productService = productService;
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Getting id from url
        this.id = this.route.snapshot.params['id'];
        // initialize quantity
        this.quantity = 1;
        // Get product from db
        this.productService.getSingleProduct(this.id).subscribe(function (data) {
            _this.product = data;
        });
        // Initialize carousel obj
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: 4000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            position: absolute;\n            width: 100%;\n            bottom: 20px;\n            left: 0;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 999px;\n            background: rgba(255, 255, 255, 0.55);\n            padding: 5px;\n            margin: 0 3px;\n            transition: .4s ease all;\n          }\n          .ngxcarouselPoint li.active {\n              background: white;\n              width: 10px;\n          }\n        "
            },
            load: 2,
            loop: true,
            touch: true
        };
    };
    /* It will be triggered on every slide*/
    ProductComponent.prototype.onmoveFn = function (data) {
        console.log(data);
    };
    /**
     * Adds a product to the cart
     * @param item the product being posted to the db
     */
    ProductComponent.prototype.addToCart = function (item) {
        var _this = this;
        // add quantity property to the item object
        item.qty = this.quantity;
        // sends request to add item to cart
        this.cartService.addToCart(item).subscribe(function (data) {
            if (data.success) {
                _this.router.navigateByUrl('/cart');
                _this.flashMessages.show('Item has been successfully added to your cart', { cssClass: 'alert-success', timeout: 4000 });
            }
            else {
                _this.router.navigate(['/product-details/' + item._id]);
                _this.flashMessages.show('Oops! An error occured, please try later.', { cssClass: 'alert-warning', timeout: 4000 });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/components/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], ProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Error text color */\r\n.error {\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n      <div class=\"col-md-8 col-md-offset-2\">\r\n          <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">Registration</div>\r\n              <div class=\"panel-body\">\r\n                    <div [hidden]=\"errMail\"><h4 class=\"error\">{{ errUser }}</h4></div>\r\n                  <form class=\"form-horizontal\" (ngSubmit)=\"onRegisterSubmit(signUpForm.value)\" #signUpForm=\"ngForm\">\r\n                      <div class=\"form-group\">\r\n                          <label for=\"usr\" class=\"control-label col-md-3\">Username</label>\r\n                          <div class=\"col-md-9\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" id=\"usr\" #usrname=\"ngModel\" placeholder=\"Enter username...\" required>\r\n                          </div>    \r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"usr\" class=\"control-label col-md-3\">Name</label>\r\n                          <div class=\"col-md-9\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" placeholder=\"Enter your name...\" required>\r\n                          </div>    \r\n                      </div>\r\n                      <div class=\"form-group\" [ngClass]=\"{'has-warning': errMail}\">\r\n                          <label for=\"usr\" class=\"control-label col-md-3\">Email</label>\r\n                          <div class=\"col-md-9\">\r\n                              <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email...\" required #mail=\"ngModel\">\r\n                              <span *ngIf=\"errMail\" class=\"error\">{{ errMail }}</span>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"pwd\" class=\"control-label col-md-3\">Password</label>\r\n                          <div class=\"col-md-9\">\r\n                              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"pwd\" placeholder=\"Enter password...\" required>                                \r\n                          </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                          <label for=\"pwd\" class=\"control-label col-md-3\">Phone</label>\r\n                          <div class=\"col-md-9\">\r\n                            <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"phone\" id=\"Confirmpwd\" placeholder=\"Phone #...\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"pwd\" class=\"control-label col-md-3\">Address</label>\r\n                        <div class=\"col-md-9\">\r\n                          <textarea class=\"form-control\" rows=\"3\" id=\"textArea\" name=\"address\" [(ngModel)]=\"address\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                      <div class=\"form-group\" style=\"text-align: center\">\r\n                          <a routerLink=\"/\" class=\"btn btn-default\">\r\n                              <i class=\"fa fa-arrow-left\"></i> Back\r\n                          </a>\r\n                          <button type=\"submit\" class=\"btn btn-primary\">Sign Up</button>  \r\n                      </div>  \r\n                  </form>\r\n              </div>\r\n          </div> <!-- ./panel -->\r\n      </div>\r\n      \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessages, authService, router) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    /**
     * Handles registration form submission
     */
    RegisterComponent.prototype.onRegisterSubmit = function (user) {
        var _this = this;
        // Required filed validation
        if (!this.validateService.validateRegister(user)) {
            this.errUser = 'All fields are required';
            return false;
        }
        // email validation
        if (!this.validateService.validateEmail(user.email)) {
            this.errMail = 'Please enter a valid email';
            return false;
        }
        // registers the user
        this.authService.registerUser(user).subscribe(function (data) {
            // if registration happens
            if (data.success) {
                _this.flashMessages.show('Your are now registered and can sign in!', { cssClass: 'alert-success', timeout: 3000 });
                // redirect to the login page
                _this.router.navigate(['/']);
            }
            else {
                // if not registered
                _this.flashMessages.show('Oops! Something went worng, try again', { cssClass: 'alert-danger', timeout: 3000 });
                // direct back to register page
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/store-front/store-front.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    min-height: 200px;\r\n    background-color: #ccc;\r\n    text-align: center;\r\n    line-height: 200px;\r\n    overflow: hidden;\r\n}\r\n\r\n.leftRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    left: 0;\r\n}\r\n\r\n\r\n/* Carousel card CSS */\r\n\r\n.item img {\r\n    max-width: 100%;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.item:hover img {\r\n    -webkit-transform: scale(1.1);\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n/* carousel tile area CSS */\r\n\r\n.tile-content {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.cart-btn {\r\n    text-align: center;\r\n    margin-right: 5px;\r\n    margin-bottom: 5px;\r\n    color: purple;\r\n}\r\n\r\n/* end carousel card CSS*/\r\n\r\n.rightRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    right: 0;\r\n}\r\n\r\n\r\n/* CSS for merch line end image */\r\n\r\n.line-end {\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store-front/store-front.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Ordinary merch -->\r\n    <div>\r\n        <div class=\"container\">\r\n            <a class=\"\">\r\n                <img class=\"img-reponsive\" src=\"../../assets/merch-line.png\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <h3 *ngIf=\"!products\">There isn't any merchandise to view currently, please check at a later date. :)</h3>\r\n    <ngx-carousel *ngIf=\"products\" [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\">\r\n\r\n        <ngx-tile NgxCarouselItem *ngFor=\"let Tile of products\">\r\n            <div item-width=\"245\">\r\n                <h1>\r\n                    <img class=\"img-reponsive\" src=\"file/{{Tile.images[0].image_name}}\" width=\"230\">\r\n                </h1>\r\n                <div class=\"tile-content\">\r\n                    <h5>\r\n                        <a routerLink=\"/product-details/{{Tile._id}}\">{{Tile.name}}</a>\r\n                    </h5>\r\n                    <label>\r\n                        <h6>{{ Tile.price | currency:'ZMW' }}</h6>\r\n                    </label>\r\n                    <button type=\"button\" class=\"btn btn-sm cart-btn\" (click)=\"addToCart(Tile)\">\r\n                        <i class=\"fa fa-shopping-cart\"></i> Add to cart\r\n                    </button>\r\n                </div>\r\n            </div> \r\n        </ngx-tile>\r\n        \r\n        <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n        <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n    </ngx-carousel>\r\n</div>\r\n<div class=\"row\">\r\n    <!-- Game jam edition -->\r\n    <div>\r\n        <div class=\"block\">\r\n            <a class=\"\">\r\n                <img class=\"img-reponsive\" src=\"assets/merch-line2.png\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <ngx-carousel [inputs]=\"carouselTile\" (carouselLoad)=\"carouselTileLoad($event)\">\r\n\r\n        <ngx-tile NgxCarouselItem *ngFor=\"let Tile of carouselTileItems\">\r\n            <h1>{{Tile + 1}}</h1>\r\n            <h4>{{Tile + 1}}</h4>\r\n            <label><h6>ZMW {{Tile + 1}}</h6></label>\r\n        </ngx-tile>\r\n\r\n        <button NgxCarouselPrev class='leftRs'>&lt;</button>\r\n        <button NgxCarouselNext class='rightRs'>&gt;</button>\r\n    </ngx-carousel>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"line-end\">\r\n        <div class=\"block\">\r\n            <a class=\"\">\r\n                <img class=\"img-reponsive\" src=\"../../assets/merch-line-end.png\">\r\n            </a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/store-front/store-front.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFrontComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_cart_service__ = __webpack_require__("../../../../../src/app/services/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from '../../services/auth.service';



var StoreFrontComponent = (function () {
    function StoreFrontComponent(
        // private authService: AuthService,
        router, productService, cartService, flashMessages) {
        this.router = router;
        this.productService = productService;
        this.cartService = cartService;
        this.flashMessages = flashMessages;
    }
    StoreFrontComponent.prototype.ngOnInit = function () {
        var _this = this;
        // gets products from db
        this.productService.getProducts().subscribe(function (data) {
            _this.products = data;
        });
        // Initialise the array with this many items
        this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        // Carousel properties
        this.carouselTile = {
            grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
            slide: 2,
            speed: 400,
            animation: 'lazy',
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            easing: 'ease'
        };
    };
    // Pushes more items into the carousel when user clicks the arrow at the end of the slider cycle
    StoreFrontComponent.prototype.carouselTileLoad = function (evt) {
        var len = this.carouselTileItems.length;
        if (len <= 10) {
            for (var i = len; i < len + 1; i++) {
                this.carouselTileItems.push(i);
            }
        }
    };
    /**
     * Adds an item to the cart
     * @param item to be added to the cart
     */
    StoreFrontComponent.prototype.addToCart = function (item) {
        var _this = this;
        // give a default value for the item quantity
        item.qty = 1;
        // uses service o add item to cart
        this.cartService.addToCart(item).subscribe(function (data) {
            if (data.success) {
                _this.router.navigateByUrl('/cart'); // route to cart-page
                _this.flashMessages.show('Item has been successfully added to your cart', { cssClass: 'alert-success', timeout: 4000 }); // success message
            }
            else {
                _this.router.navigate(['/product-details/' + item._id]); // redirect to product page
                _this.flashMessages.show('Oops! An error occured, please try later.', { cssClass: 'alert-warning', timeout: 4000 }); // error message
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return StoreFrontComponent;
}());
StoreFrontComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-store-front',
        template: __webpack_require__("../../../../../src/app/components/store-front/store-front.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/store-front/store-front.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], StoreFrontComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=store-front.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(authService, router, dialogService) {
        this.authService = authService;
        this.router = router;
        this.dialogService = dialogService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.showLogin(); // shows the loggin modal
            return false;
        }
    };
    /**
     * Shows the login modal
     */
    AuthGuard.prototype.showLogin = function () {
        var opts = {
            closeByClickingOutside: true
        };
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */], {
            title: 'Login'
        }, opts).subscribe(function (isConfirmed) {
            // We get dialog result
            if (isConfirmed) {
                console.log('accepted');
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Check this line
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = (function () {
    function CartService(http) {
        this.http = http;
    }
    /**
     * Returns the logged in user's cart
     */
    CartService.prototype.showCart = function () {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        return this.http.get('api/cart/show-cart', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Adds a product (item) into the cart
     * @param item is the product being added to the cart
     */
    CartService.prototype.addToCart = function (item) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/cart/add-to-cart', item, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Removes or reduces the quantity of an item in the cart
     * @param id is the id of the item being removed from the cart
     */
    CartService.prototype.removeItem = function (id) {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        return this.http.delete('api/cart/delete-item/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Clears the cart of all entries
     */
    CartService.prototype.deleteAll = function () {
        this.loadToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        return this.http.delete('api/cart/delete-all', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Gets the token from local storage
     */
    CartService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CartService);

var _a;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    /**
     * Gets all categories from db
     */
    CategoryService.prototype.getCategories = function () {
        return this.http.get('api/categories/')
            .map(function (res) { return res.json(); });
    };
    /**
     * Requests a single category for the db
     * @param id The request category's id
     */
    CategoryService.prototype.getCategory = function (id) {
        return this.http.get('api/categories/' + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Sends the category-form data to the db for insert
     * @param data this is the form data
     */
    CategoryService.prototype.saveCategory = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/categories/create', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Sends an update request to the api to update the details
     * of a category
     * @param id The id belonging to the cataegory to be updated
     * @param data The data of the posted form
     */
    CategoryService.prototype.updateCategory = function (id, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/categories/update/' + id, data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Sends a request to delete a particular category
     * @param id The id of the category to be deleted
     */
    CategoryService.prototype.deleteCategory = function (id) {
        return this.http.delete('api/categories/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    // removed http://localhost:3000 on all routes for deployments sake
    /**
     * Gets all products from db
     */
    ProductService.prototype.getProducts = function () {
        return this.http.get('api/products/')
            .map(function (res) { return res.json(); });
    };
    /**
     * Requests for a single product
     * @param id The id of the product to be retrieved
     */
    ProductService.prototype.getSingleProduct = function (id) {
        return this.http.get('api/products/' + id)
            .map(function (res) { return res.json(); });
    };
    /**
     * Sends a post request to create a product and save it
     * to the db
     * @param data is the form data to be posted
     */
    ProductService.prototype.saveProduct = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json'); // not really needed but wont get rid of them just yet
        // removed the header
        return this.http.post('api/products/create', data)
            .map(function (res) { return res.json(); });
    };
    /**
     * Sends a request to update a product
     * @param id The id of the product being updated
     * @param fData the updated info to be stored
     */
    ProductService.prototype.updateProduct = function (id, fData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/products/update/' + id, fData, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /**
     * Deletes a product
     * @param id The id of a product to be deleted
     */
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete('api/products/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username === undefined || user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map