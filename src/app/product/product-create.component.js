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
var product_1 = require("../models/product");
var product_service_1 = require("../services/product.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var ProductCreateComponent = (function () {
    function ProductCreateComponent(productService, activatedRoute, location) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.product = new product_1.Product();
        this.isEditMode = false;
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (params) {
            if (params.get('id')) {
                _this.getProduct(params.get('id'));
                _this.isEditMode = true;
            }
        });
    };
    ProductCreateComponent.prototype.saveProduct = function () {
        if (this.isEditMode) {
            this.updateProduct();
        }
        else {
            this.createProduct();
        }
    };
    ProductCreateComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .then(function (product) { return _this.product = product; });
    };
    ProductCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductCreateComponent.prototype.createProduct = function () {
        var _this = this;
        this.productService.create(this.product)
            .then(function (hero) {
            _this.location.back();
        });
    };
    ProductCreateComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productService.update(this.product)
            .then(function (hero) {
            _this.location.back();
        });
    };
    return ProductCreateComponent;
}());
ProductCreateComponent = __decorate([
    core_1.Component({
        selector: 'product-create',
        templateUrl: './product-create.component.html',
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        router_1.ActivatedRoute,
        common_1.Location])
], ProductCreateComponent);
exports.ProductCreateComponent = ProductCreateComponent;
//# sourceMappingURL=product-create.component.js.map