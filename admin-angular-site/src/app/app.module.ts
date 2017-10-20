import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// services
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';

// these specify the apps forntend routes
const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'orders', component: OrdersComponent},
  {path:'product', component: ProductFormComponent},
  {path:'category', component: CategoryFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OrdersComponent,
    LoginComponent,
    ProductFormComponent,
    CategoryFormComponent,
    SearchBarComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
