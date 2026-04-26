import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:'login', component: LoginComponent  },
  { path:'signup', component: SignupComponent },
  { path:'home', component: HomeComponent },
  { path:'products', component: ProductsComponent },
  { path:'navbar', component: NavbarComponent },
  { path:'cart', component: CartComponent },
  
  { path:'', redirectTo:'login', pathMatch:'full' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
