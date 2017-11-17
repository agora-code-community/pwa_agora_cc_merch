import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { FlashMessagesService } from 'angular2-flash-messages';

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

  cart: any; // holds the cart retrieved form the db

  constructor(
    private cartService: CartService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    // this.price = 100.00;
    // this.quantity = 1;
    this.subtotal = this.price * this.quantity;

    this.cartService.showCart().subscribe(data => {
      this.cart = data;
    });
  }

  // TODO: how will it work when there are many entries in the cart

  /**
   * This function updates the subtotal amount went the user changes it
   * @param qty This quantity typed in by the user
   */
  updateItem(qty: number) {
    console.log(qty);
  }

  /**
   * Removes an item from the cart. If that item has a quantity greater
   * than 1, then it's quantity is reduced by 1.
   * @param id Is the id of the item being removed for the cart
   */
  removeItem(id) {
    this.cartService.removeItem(id).subscribe(data => {
      if (data.success) {
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.cart = data.cart;
      }
    });
  }

}
