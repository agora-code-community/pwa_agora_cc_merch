import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from './../../../services/product.service';
import { CategoryService } from './../../../services/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: string;  // id of the product being edited
  categories: any;  // holds the list of categories from the db
  // form variables
  name: string;
  description: string;
  category: string;
  price: number;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
     // Get the id from the url
     this.id = this.route.snapshot.params['id'];
     // get the category from db
     this.productService.getSingleProduct(this.id).subscribe(data => {
       this.name = data.name;
       this.description = data.description;
       this.price = data.price;
     });

      // gets the categories from the db
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  onEditSubmit(fData) {
     // calls the category service to handle the update request
     this.productService.updateProduct(this.id, fData).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        // direct back to cv form
        this.router.navigate(['/admin/products']);
      } else {
        this.flashMessage.show('Oops! Something went wrong', {cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/admin/products']);
      }
    });
  }
}
