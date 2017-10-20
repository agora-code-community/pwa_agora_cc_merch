import { Component, OnInit } from '@angular/core';

import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  // form varaibles
  name: String;
  description: String;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  /**
   * Sends submitted form data to categoryService
   * @param fData This is the form data
   */
  onFormSubmit(fData) {
    this.categoryService.saveCategory(fData).subscribe(data => {
      if(data.success) {
        console.log("successful");  // use flash messages here
      } else {
        // if not saved
        console.log("failed");
      }
    });
  }

}
