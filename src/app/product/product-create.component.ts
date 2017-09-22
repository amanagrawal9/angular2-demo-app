import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {
  product: Product = new Product();
  isEditMode: boolean = false;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      if(params.get('id')) {
        this.getProduct(params.get('id'));
        this.isEditMode = true;
      }
    });
  }

  saveProduct(): void {
    if(this.isEditMode) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .then(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  private createProduct() {
    this.productService.create(this.product)
        .then(hero => {
          this.location.back();
        });
  }

  private updateProduct() {
    this.productService.update(this.product)
        .then(hero => {
          this.location.back();
        });
  }
}
