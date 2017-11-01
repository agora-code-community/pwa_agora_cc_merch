import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../../services/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories: any;  // hold the categories from the db
  // form variables
  name: string;
  description: string;
  price: number;
  category: string;
  pictures: Array<File> = [];

  constructor(
    private productService: ProductService,
    private flashMessage: FlashMessagesService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    // gets the categories from the db
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  /**
   * Handles submitted form
   * @param data Is the submitted form
   */
  onSubmit(data) {
    // console.log(data);
    const files: Array<File> = this.pictures;  // add the pictures to the array files
    // console.log(files);
    // Can only process the form if images are not more that 5
    if (files.length > 5) {
      // throw error
      const msg = 'Error with files: You can only upload upto 5 image files. Please try again.';
      this.flashMessage.show(msg, {cssClass: 'alert-info', timeout: 4000});
    } else {
      // create a new FormData object
      const formData = new FormData();

      // adding all form inputs to formData
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // append key and value to formData
          formData.append(key, data[key]);
        }
      }

      // append the image files to the form data
      for (let i = 0; i < files.length; i++) {
        formData.append('pictures[]', files[i], files[i]['name']);
      }

      // send the data to the backend
      this.productService.saveProduct(formData).subscribe(reply => {
        if (reply.success) {
          this.flashMessage.show(reply.msg, {cssClass: 'alert-success', timeout: 3000});
          // re-route to dashboard
          this.router.navigateByUrl('/admin/products');
        } else {
          this.flashMessage.show(reply.msg, {cssClass: 'alert-warning', timeout: 4000});
        }
      });
    } // end if-else
  }

   /**
   * Upon change we add the images to the pictures array.
   * @param fileInput the file input
   */
  fileChangeEvent(fileInput: any) {
    this.pictures = <Array<File>>fileInput.target.files;
  }

}
