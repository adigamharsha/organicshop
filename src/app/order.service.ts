import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ShoppingcartService } from './shoppingcart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase, private cartService: ShoppingcartService) { }

  async placeOrder(shipping, items, userId) {
  let result = await  this.db.list('/orders').push({
    dateCreated: new Date().getTime(),
    items: items,
    shipping: shipping,
    userId: userId
  });
  this.cartService.clearCart();
  return result;
}
}
