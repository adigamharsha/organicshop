import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-shoppingcart-summary',
  templateUrl: './shoppingcart-summary.component.html',
  styleUrls: ['./shoppingcart-summary.component.css']
})
export class ShoppingcartSummaryComponent implements OnInit {
  items = [];
  @Input('cart') Cart;

  constructor(private cartService: ShoppingcartService) { }

  async ngOnInit() {
  }

  getTotalItems(){
    let sum =0;
    for (let item  in this.Cart){
      sum += this.Cart[item].quantity;
    }
    return sum;
  }

  getTotalPrice(){
    let sum =0;
    for (let item  in this.Cart){
      sum += this.Cart[item].price * this.Cart[item].quantity;
    }
    return sum;
  }
}
