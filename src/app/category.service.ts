import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: any[];

  constructor(private db: AngularFireDatabase) {
    this.getCategories();
  }

  getCategories() {
    return this.db.list('/categories',  ref => ref.orderByChild('name'));
  }
}
