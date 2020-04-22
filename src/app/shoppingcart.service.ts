import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { take, map } from 'rxjs/operators';
import { ShoppingCart } from './models/shopping-cart';
import { ShoppingCartItem } from './models/shoppingcart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(private db: AngularFireDatabase) { }

  create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  clearCart() {
    const cartId = localStorage.getItem('cartId');
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  async getCart() {
    const cartId = await this.getOrCreateCart();
    return this.db.object('/shopping-carts/' + cartId);
  }

  async getOrCreateCart(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addTocart(product) {
    this.updateCart(product, 1);
  }

  async removeFromCart(product) {
    this.updateCart(product, -1);
  }

  async updateCart(product, change) {
    const cartId = await this.getOrCreateCart();
    const items$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.key);
    // tslint:disable-next-line: no-unused-expression
    items$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {
      // tslint:disable-next-line: curly
      // tslint:disable-next-line: semicolon
      // tslint:disable-next-line: prefer-const
      // tslint:disable-next-line: semicolon
      // tslint:disable-next-line: prefer-const
      // tslint:disable-next-line: semicolon
      // tslint:disable-next-line: prefer-const
      if (item.key === null) {
        this.db.list('/shopping-carts/' + cartId + '/items').set(
          // tslint:disable-next-line: max-line-length
          product.key, new ShoppingCartItem(product.key, product.payload.val().title, product.payload.val().price, product.payload.val().imageUrl, 1));
      } else {
        let quantity = (item.payload.val().quantity || 0) + change;
        // tslint:disable-next-line: align
        if (quantity === 0) { items$.remove()};
        // tslint:disable-next-line: max-line-length
        console.log(quantity);
        items$.update({ title: item.payload.val().title, price: item.payload.val().price, imageUrl: item.payload.val().imageUrl, quantity });
      }
    });
  }
}
