import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

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
      if (data.success) {
        // show success alert
        this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigateByUrl('/admin/categories');
      } else {
        this.flashMessage.show('An error occurred during the process, please try again.',
          { cssClass: 'alert-warning', timeout: 3000 });
        this.router.navigate(['/admin/categories']); // redirect to category page
      }
    });
  }

}
