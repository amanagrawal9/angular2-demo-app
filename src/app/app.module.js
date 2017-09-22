"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var product_list_component_1 = require("./product/product-list.component");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var product_service_1 = require("./services/product.service");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
var product_detail_component_1 = require("./product/product-detail.component");
var product_create_component_1 = require("./product/product-create.component");
var app_routing_module_1 = require("./app-routing.module");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var contactus_component_1 = require("./contactus/contactus.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService), http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, product_list_component_1.ProductListComponent, product_detail_component_1.ProductDetailComponent,
            product_create_component_1.ProductCreateComponent, dashboard_component_1.DashboardComponent, contactus_component_1.ContactUSComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_service_1.ProductService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map