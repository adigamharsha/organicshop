import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ShoppingcartService } from '../shoppingcart.service';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/AppUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  // orders = {
  //   dateCreated: new Date().getTime(),
  //   items: [],
  //   shipping: []
  //   userId: ''
  // };
  items = [];
  userId: any;


  async Submit(f) {
     let result = await this.orderService.placeOrder(f.value, this.items , this.userId);
     console.log(result);
     this.router.navigate(['/order-success' , result.key]);
  }

  constructor(private orderService: OrderService, private cartService: ShoppingcartService, private authService: AuthService, private router : Router) { }

  async ngOnInit() {
    (await this.cartService.getCart()).valueChanges().subscribe((cart: any) => {
      if (!cart) return;
      for (let item in cart.items) {
        this.items.push(cart.items[item]);
      }
    });

    await this.authService.user$.subscribe((appUser:any) => this.userId = appUser.uid);
  }

}
