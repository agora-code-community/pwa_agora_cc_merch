import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Holds result from db
  products: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    // Get all products upon initialization
    this.productService.getProducts().subscribe(products => {
      this.products = products;

      console.log(this.products);
    });
    
  }

  /**
   * Handles deletion of product
   * @param id This is the id for the product being deleted
   */
  delete(id){
    console.log("Delete product" + id);
  }
}
