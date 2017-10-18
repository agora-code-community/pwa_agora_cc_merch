import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
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

  public carouselTileLoad(evt: any) {
    
    const len = this.carouselTileItems.length
    if (len <= 10) {
      for (let i = len; i < len + 1; i++) {
        this.carouselTileItems.push(i);
      }
    }

  }

}
