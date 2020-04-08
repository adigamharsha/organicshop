import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: any;
  filteredProducts: any;
  subscription: Subscription;

  constructor(private productService: ProductService) {
    // tslint:disable-next-line: max-line-length
    this.subscription = this.productService.getProducts().snapshotChanges().subscribe(products => this.filteredProducts = this.products = products);
  }

  filter(query: HTMLInputElement) {
    // tslint:disable-next-line: max-line-length
    this.filteredProducts = (query.value) ? this.products.filter(p => p.payload.val().title.toLowerCase().includes(query.value.toLowerCase())) : this.products;
  }
  ngOnDestroy() {

  }

  ngOnInit() {
  }

}
