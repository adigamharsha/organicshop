import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  result: any;
  product$;
  products;

  constructor(private db: AngularFireDatabase) { }

  save(product: any) {
    this.result = this.db.list('/products').push(product);
    return this.result;
  }

  getProducts() {
    return this.db.list('/products');
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId){
    return this.db.object('/products/' + productId).remove();
  }
}
