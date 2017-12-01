import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {

  // Array to hold carousel items
  public carouselTileItems: Array<any>;

  products: any; // holds products from dbs to be used in the carousel
  // carousel
  public carouselTile: NgxCarousel;

  constructor(
    // private authService: AuthService,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    // gets products from db
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

    // Initialise the array with this many items
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    // Carousel properties
    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    };
  }

  // Pushes more items into the carousel when user clicks the arrow at the end of the slider cycle
  public carouselTileLoad(evt: any) {

    const len = this.carouselTileItems.length;
    if (len <= 10) {
      for (let i = len; i < len + 1; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

  /**
   * Adds an item to the cart
   * @param item to be added to the cart
   */
  addToCart(item) {
    // give a default value for the item quantity
    item.qty = 1;

    // uses service o add item to cart
    this.cartService.addToCart(item).subscribe(data => {
      if (data.success) {
        this.router.navigateByUrl('/cart');  // route to cart-page
        this.flashMessages.show('Item has been successfully added to your cart',
          {cssClass: 'alert-success', timeout: 4000});  // success message
      } else {
        this.router.navigate(['/product-details/' + item._id]);  // redirect to product page
        this.flashMessages.show('Oops! An error occured, please try later.',
          {cssClass: 'alert-warning', timeout: 4000}); // error message
      }
    }, err => {
      console.log(err);
      return false;
    });
  }

}
