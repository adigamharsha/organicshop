import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { Authguard } from './authguard.service';
import { UserService } from './user.service';
import { AdminAuthguard } from './admin-authguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'ng-angular8-datatable';
import { ProductsFilterComponent } from './products/products-filter/products-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingcartService } from './shoppingcart.service';
import { ProductquantityComponent } from './productquantity/productquantity.component';
import { OrderService } from './order.service';
import { ShoppingcartSummaryComponent } from './shoppingcart-summary/shoppingcart-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductsFilterComponent,
    ProductCardComponent,
    ProductquantityComponent,
    ShoppingcartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule
  ],
  providers: [
    AuthService,
    Authguard,
    UserService,
    AdminAuthguard,
    CategoryService,
    ProductService,
    ShoppingcartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
