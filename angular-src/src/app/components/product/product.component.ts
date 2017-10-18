import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Create  a variable to hold the parameter
  type: String;
  private sub: any;
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      //Initialise the component with parameters received from the route
     this.sub = this.route.params.subscribe(params => {
        this.sub = +params['apparel'];
        console.log(this.sub);
      });
    }
  
    private ngOnDestroy() {
      this.sub.unsubscribe();
    }

}
