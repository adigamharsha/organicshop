import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  filteredProducts: any = [];
  category: string;
  subscription: Subscription;
  cart$;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingcartService) {
    this.productService.getProducts().snapshotChanges().pipe(switchMap((products: any) => {
      this.products = products;
      return this.route.queryParamMap;
    }))
      .subscribe(params => {
        this.category = params.get('category');
        this.filteredProducts = (this.category) ? this.products.filter(p => p.payload.val().category.toLowerCase() === this.category) :
          this.products;
      });
  }

  async ngOnInit() {
    console.log('called');
    this.cart$ = (await this.shoppingCartService.getCart()).valueChanges();
  }

}
