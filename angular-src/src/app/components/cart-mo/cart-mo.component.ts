import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface CartMo {
  title:string;
  message:string;
}

@Component({
  selector: 'app-cart-mo',
  templateUrl: './cart-mo.component.html',
  styleUrls: ['./cart-mo.component.css']
})

export class CartMoComponent extends DialogComponent <CartMo, boolean> implements CartMo {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
      super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }

}
