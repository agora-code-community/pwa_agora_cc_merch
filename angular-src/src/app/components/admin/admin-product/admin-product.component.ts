import { FlashMessagesService } from 'angular2-flash-messages';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  // holds all the product objects
  products: any;

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // get all the products from db
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  /**
   * Deletes the product from the db
   * @param id the id of the product to be deleted
   */
  delete(id) {
    this.productService.deleteProduct(id).subscribe(data => {
      if (data.success) {
        // if successful
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
      } else {
        // show error message
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeout: 3000});
      }
    });
  }

}
