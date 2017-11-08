import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;  // is the id of product or category from the url

  product: any; // holds the data for a particular product
  category: any; // holds data of a particular category

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // get id from URL and store in var~id
    this.id = this.route.snapshot.params['id'];

    this.determiner(this.id);
  }

  /**
   * Determines which details to display based on the
   * current visited url
   * @param id the id of the category or product, used for in
   * the service to get appropriate data
   */
  determiner(id) {
    const currentRoute = this.router.url; // is the current url
    console.log('current route ' + currentRoute);  // kept for debug purposes

    // checks which route was visited
    if(currentRoute.includes('/category')) {
      // if category, call categoryService
      this.categoryService.getCategory(id).subscribe(data => {
        this.category = data;  // store the retrieved data in the category variable
      });
    } else if(currentRoute.includes('/product')) {

      // if product, call productService
      this.productService.getSingleProduct(id).subscribe(data => {
        this.product = data;  // store the retrieved data in the product variable
      });
    }
  }
}
