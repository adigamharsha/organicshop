import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AppUser } from '../models/AppUser';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  auth: any;
  user$: Observable<firebase.User>;
  appUser: AppUser;
  totalCartCount: number;
  cart$;
  items: any[];

  constructor(private afauth: AuthService, private router: Router, private cartService: ShoppingcartService) {

  }

  async ngOnInit() {
    this.afauth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = (await this.cartService.getCart()).valueChanges();
    this.cart$.subscribe(cart => {
      this.totalCartCount = 0;
      if (!cart) return;
      for (let productId in cart.items) {
        this.totalCartCount += cart.items[productId].quantity;
      }
    });
  }

  logout() {
    this.afauth.logout();
    this.router.navigate(['/login']);
  }

}
