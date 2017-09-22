import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private router: Router, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .then(products => this.products = products);
  }

  gotoDetail(productId: number): void {
    this.router.navigate(['/product-detail', productId]);
  }

  createProduct() {
    this.router.navigate(['/create-product']);
  }

  editProduct(productId: number) {
    this.router.navigate(['/edit-product', productId]);
  }
}
