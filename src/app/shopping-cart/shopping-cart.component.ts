import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartItem } from '../models/shoppingcart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[];
  items: ShoppingCartItem[] = [];
  @Input('product') product: any;
  @Input('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingcartService) { }

  async ngOnInit() {
    console.log('called');
    (await this.cartService.getCart()).valueChanges().subscribe((cart: any) => {
      this.items = [];
      if (!cart) return;
      for (let item in cart.items) {
        this.items.push(cart.items[item]);
      }
    });
  }
  getTotalPrice() {
    let sum: number = 0;
    // tslint:disable-next-line: forin
    for (let item in this.items) {
      sum += (+this.items[item].price * this.items[item].quantity);
    }
    return sum;
  }

  getQuantity() {
    let sum: number = 0;
    // tslint:disable-next-line: forin
    for (let item in this.items) {
      sum += this.items[item].quantity;
    }
    return sum;
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

}
