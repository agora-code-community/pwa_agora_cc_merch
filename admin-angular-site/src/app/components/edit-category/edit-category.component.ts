import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from './../../services/category.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id: string;  // to hold the category-id from the edit url
  // form variables
  name: string;
  description: string;

  constructor(
    private catService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get the id from the url
    this.id = this.route.snapshot.params['id'];
    // get the category from db
    this.catService.getCategory(this.id).subscribe(data => {
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
    this.catService.updateCategory(this.id, fdata).subscribe(data => {
      if(data.success) {
        this.flashMessages.show(data.msg, {cssClass: 'alert-success', timeout: 3000});
        // direct back to cv form
        this.router.navigate(['/categories']);
      } else {
        this.flashMessages.show('Oops! Something went wrong', {cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
