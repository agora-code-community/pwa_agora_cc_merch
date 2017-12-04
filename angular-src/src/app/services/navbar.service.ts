import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

  itemCount: number; // Will keep an updated version of the cart item count

  constructor() {
    this.itemCount = null;
   }

   /**
    * updates the item count in the navbar
    * @param count new item count in the cart
    */
   setItemCount(count) {
     if (count > 0) {
       this.itemCount = count;
     }
   }

   getItemCount() {
     return this.itemCount;
   }

}
