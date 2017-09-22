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
var common_1 = require("@angular/common");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(activatedRoute, productService, location, router) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.location = location;
        this.router = router;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            _this.getProduct(params.get('id'));
        });
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .then(function (product) { return _this.product = product; });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent.prototype.editProduct = function (productId) {
        this.router.navigate(['/edit-product', productId]);
    };
    ProductDetailComponent.prototype.delete = function (productId) {
        var _this = this;
        this.productService
            .delete(productId)
            .then(function () {
            _this.router.navigate(['/products']);
        });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: './product-detail.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        product_service_1.ProductService,
        common_1.Location,
        router_1.Router])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map