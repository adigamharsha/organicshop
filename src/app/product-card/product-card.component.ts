import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ActionSequence } from 'protractor';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: any;
  // tslint:disable-next-line: no-input-rename
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingcartService) {

  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addTocart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) { return 0; }
    const item = this.shoppingCart.items[this.product.key];
    return item ? item.quantity : 0;
  }

}
