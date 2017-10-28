import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './../../services/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any;  // holds the categories collected from the db

  constructor(
    private categoryService: CategoryService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    // on init request all categories from db
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  /**
   * Handles deleting a categpry
   * @param id The id of the category to be deleted
   */
  delete(id) {
    // send request to service to delete category
    this.categoryService.deleteCategory(id).subscribe(data => {
      if(data.success) {
        // show success alert
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        this.router.navigateByUrl('/categories');
      } else {
        this.flashMessage.show('An error occurred during the process, please try again.',
          {cssClass: 'alert-warning', timeout: 3000});
        this.router.navigate(['/categories']); // redirect to category page
      }
    });
  }
}
