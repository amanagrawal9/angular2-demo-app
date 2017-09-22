import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, ParamMap, Params, Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    product: Product;

    constructor(private activatedRoute: ActivatedRoute,
                private productService: ProductService,
                private location: Location,
                private router: Router) {

    }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((params: Params) => {
          this.getProduct(params.get('id'));
      });
    }

    getProduct(id: number): void {
    this.productService.getProduct(id)
      .then(product => this.product = product);
    }

    goBack(): void {
    this.location.back();
    }

    editProduct(productId: number) {
        this.router.navigate(['/edit-product', productId]);
    }

    delete(productId: number): void {
        this.productService
            .delete(productId)
            .then(() => {
                this.router.navigate(['/products']);
            });
    }

}
