import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';


@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {

  //Array to hold carousel items
  public carouselTileItems: Array<any>;
  
  //carousel
  public carouselTile: NgxCarousel;
  
  constructor(
    //private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    //Initialise the array with this many items
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    //Carousel properties
       this.carouselTile = {
         grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
         slide: 2,
         speed: 400,
         animation: 'lazy',
         point: {
           visible: true
         },
         load: 2,
         touch: true,
         easing: 'ease'
       }
  }

  //Pushes more items into the carousel when user clicks the arrow at the end of the slider cycle
  public carouselTileLoad(evt: any) {
    
    const len = this.carouselTileItems.length
    if (len <= 10) {
      for (let i = len; i < len + 1; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

}
