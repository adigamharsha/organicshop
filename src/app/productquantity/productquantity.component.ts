import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-productquantity',
  templateUrl: './productquantity.component.html',
  styleUrls: ['./productquantity.component.css']
})
export class ProductquantityComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('product') product: any;
  // tslint:disable-next-line: no-input-rename
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingcartService) {

  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addTocart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    var item;
    if (!this.shoppingCart) { return 0; }
    if (this.shoppingCart.items) {
      item = this.shoppingCart.items[this.product.key];
    } else {
      item = this.product;
    }
    return item ? item.quantity : 0;
  }

}
