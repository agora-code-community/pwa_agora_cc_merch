import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // variables
  id: string; // to hold the product's id from url
  quantity: number; // the quantity entered by user

  product: any; // holds data of the product
  carouselBanner: NgxCarousel; // carousel object

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    // Getting id from url
    this.id = this.route.snapshot.params['id'];

    // initialize quantity
    this.quantity = 1;

    // Get product from db
    this.productService.getSingleProduct(this.id).subscribe(data => {
      this.product = data;
    });

    // Initialize carousel obj
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    };
  }

   /* It will be triggered on every slide*/
   onmoveFn(data) {
    console.log(data);
  }

  /**
   * Adds a product to the cart
   * @param item the product being posted to the db
   */
  addToCart(item) {
    // add quantity property to the item object
    item.qty = this.quantity;

    // sends request to add item to cart
    this.cartService.addToCart(item).subscribe(data => {
      if (data.success) {
        this.router.navigateByUrl('/cart');
        this.flashMessages.show('Item has been successfully added to your cart',
          {cssClass: 'alert-success', timeout: 4000});
      } else {
        this.router.navigate(['/product-details/' + item._id]);
        this.flashMessages.show('Oops! An error occured, please try later.',
          {cssClass: 'alert-warning', timeout: 4000});
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

}
