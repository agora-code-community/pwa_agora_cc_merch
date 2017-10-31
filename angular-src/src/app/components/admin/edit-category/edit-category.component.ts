import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id: string;  // it of the category being editted
  // form variables
  name: string;
  description: string;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private flashMessage: FlashMessagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get the id from the url
    this.id = this.route.snapshot.params['id'];
    // get the category from db
    this.categoryService.getCategory(this.id).subscribe(data => {
      this.name = data.name;
      this.description = data.description;
    });
  }

   /**
   * Handles the submitted form
   * @param fdata The data from the form
   */
  onEditSubmit(fdata) {
    // calls the category service to handle the update request
    this.categoryService.updateCategory(this.id, fdata).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        // direct back to cv form
        this.router.navigate(['/categories']);
      } else {
        this.flashMessage.show('Oops! Something went wrong', {cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
