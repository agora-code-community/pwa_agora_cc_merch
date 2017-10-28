import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreFrontComponent } from './components/store-front/store-front.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { CartMoComponent } from './components/cart-mo/cart-mo.component';

import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [

  {path:'', component: StoreFrontComponent},
  {path:'checkout', component: CheckOutComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'orders', component: OrdersComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'cart', component: CartComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    StoreFrontComponent,
    CheckOutComponent,
    DashboardComponent,
    OrdersComponent,
    CategoriesComponent,
    CartComponent,
    CartMoComponent,
    ProductComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BootstrapModalModule
  ],
  entryComponents:[
    CartMoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
