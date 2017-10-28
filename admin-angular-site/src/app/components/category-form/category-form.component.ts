import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './../../services/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  // form varaibles
  name: String;
  description: String;

  constructor(
    private categoryService: CategoryService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Sends submitted form data to categoryService
   * @param fData This is the form data
   */
  onFormSubmit(fData) {
    this.categoryService.saveCategory(fData).subscribe(data => {
      if(data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/categories']); // redirects to categories page
      } else {
        // if not saved
        this.flashMessage.show(data.msg, {cssClass: 'alert-warning', timeout: 3000});
        this.router.navigate(['/add-category']); // redirects to category form
      }
    });
  }

}
