import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { Authguard } from './authguard.service';
import { AdminAuthguard } from './admin-authguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [Authguard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [Authguard] },
  { path: 'admin/products/new', component: ProductFormComponent, canActivate: [Authguard, AdminAuthguard] },
  { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [Authguard, AdminAuthguard] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [Authguard, AdminAuthguard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [Authguard, AdminAuthguard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [Authguard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
