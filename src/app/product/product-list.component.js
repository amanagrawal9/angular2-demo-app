"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("../services/product.service");
var router_1 = require("@angular/router");
var ProductListComponent = (function () {
    function ProductListComponent(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService
            .getProducts()
            .then(function (products) { return _this.products = products; });
    };
    ProductListComponent.prototype.gotoDetail = function (productId) {
        this.router.navigate(['/product-detail', productId]);
    };
    ProductListComponent.prototype.createProduct = function () {
        this.router.navigate(['/create-product']);
    };
    ProductListComponent.prototype.editProduct = function (productId) {
        this.router.navigate(['/edit-product', productId]);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: './product-list.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map