import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

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
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { DetailsComponent } from './components/details/details.component';
import { StoreFrontComponent } from './components/store-front/store-front.component';

// these specify the apps forntend routes
const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'product', component: ProductFormComponent},
  {path: 'add-category', component: CategoryFormComponent},
  {path: 'product/edit/:id', component: EditProductComponent},
  {path: 'category/edit/:id', component: EditCategoryComponent},
  {path: 'product-details/:id', component: DetailsComponent},
  {path: 'category-details/:id', component: DetailsComponent}
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
    CategoriesComponent,
    EditProductComponent,
    EditCategoryComponent,
    DetailsComponent,
    StoreFrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
