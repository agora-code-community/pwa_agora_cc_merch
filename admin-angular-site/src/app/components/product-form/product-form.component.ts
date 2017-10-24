import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../services/category.service';
import { ProductModel } from './../../models/productModel';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  // variable to hold db categories
  categories: any;

  // form variables
  name: string;
  description: string;
  price: number;
  category: string;
  pictures: Array<File> = [];

  constructor(
    private catService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // on init get all existing categories from db
    this.catService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  /**
   * Handles submitted form
   * @param data Is the submitted form
   */
  onSubmit(data) {
    console.log(data);
    const files: Array<File> = this.pictures;
    console.log(files);

    // append the files to the form data
    for(let i = 0; i < files.length; i++) {
      data.append('pictures[]', files[i], files[i]['name']);
    }

    this.productService.saveProduct(data).subscribe(deta => {
      console.log(deta);
    });
  }

  /**
   * Upon change wwe add the images to the pictures array.
   * @param fileInput the file input
   */
  fileChangeEvent(fileInput: any) {
    this.pictures = <Array<File>>fileInput.target.files;
  }
}
