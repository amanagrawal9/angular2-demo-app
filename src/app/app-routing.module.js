"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_detail_component_1 = require("./product/product-detail.component");
var product_list_component_1 = require("./product/product-list.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var product_create_component_1 = require("./product/product-create.component");
var contactus_component_1 = require("./contactus/contactus.component");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'product-detail/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'edit-product/:id', component: product_create_component_1.ProductCreateComponent },
    { path: 'create-product', component: product_create_component_1.ProductCreateComponent },
    { path: 'contact-us', component: contactus_component_1.ContactUSComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map