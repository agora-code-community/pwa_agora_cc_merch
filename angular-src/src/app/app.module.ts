import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';

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
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// Admin components
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminCategoriesComponent } from './components/admin/admin-categories/admin-categories.component';
import { CategoryFormComponent } from './components/admin/category-form/category-form.component';
import { ProductFormComponent } from './components/admin/product-form/product-form.component';
import { EditCategoryComponent } from './components/admin/edit-category/edit-category.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { DetailsPageComponent } from './components/admin/details-page/details-page.component';

// Services
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { CartService } from './services/cart.service';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

// Design
// import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

const appRoutes: Routes = [

  { path: '', component: StoreFrontComponent },
  { path: 'checkout', component: CheckOutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'product-details/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent },
  // admin routes
  { path: 'admin/products', component: AdminProductComponent, canActivate: [AuthGuard] }, // overviews
  { path: 'admin/categories', component: AdminCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'admin/category/create', component: CategoryFormComponent, canActivate: [AuthGuard] }, // create form
  { path: 'admin/product/create', component: ProductFormComponent, canActivate: [AuthGuard] },  // create form
  { path: 'admin/product-details/:id', component: DetailsPageComponent, canActivate: [AuthGuard] }, // view details
  { path: 'admin/category-details/:id', component: DetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'admin/category/edit/:id', component: EditCategoryComponent, canActivate: [AuthGuard] },
  { path: 'admin/product/edit/:id', component: EditProductComponent, canActivate: [AuthGuard] },


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
    AdminCategoriesComponent,
    CategoryFormComponent,
    ProductFormComponent,
    EditCategoryComponent,
    EditProductComponent,
    DetailsPageComponent,
    AdminProductComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BootstrapModalModule,
    NgxCarouselModule,
    FlashMessagesModule
    // AngularFontAwesomeModule
  ],
  entryComponents: [
    CartMoComponent, LoginComponent
  ],
  providers: [ProductService, CategoryService, CartService, AuthService, AuthGuard,
    ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
