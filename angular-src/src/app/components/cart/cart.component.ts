import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // variables
  price: number;
  quantity: number;
  subtotal: number;
  total: number;

  constructor() { }

  ngOnInit() {
    this.price = 100.00;
    this.quantity = 1;
    this.subtotal = this.price * this.quantity;
  }

  // TODO: how will it work when there are many entries in the cart

  /**
   * This function updates the subtotal amount went the user changes it
   * @param qty This quantity typed in by the user
   */
  updateSubtotal(qty: number) {
    this.subtotal = this.price * qty;
  }

}
