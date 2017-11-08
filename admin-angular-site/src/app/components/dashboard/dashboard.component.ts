import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Holds result from db
  products: any;

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    // Get all products upon initialization
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  /**
   * Handles deletion of product
   * @param id This is the id for the product being deleted
   */
  delete(id){
    this.productService.deleteProduct(id).subscribe(data => {
      if(data.success) {
        // Success -> true
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('A error occurred during the process, please try again.',
          {cssClass: 'alert-warning', timeout: 3000});
      }
    });
  }
}
