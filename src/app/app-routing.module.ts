import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { RogisterComponent } from './rogister/rogister.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: "overview",
    component: OverviewComponent
  },
  {
    path: 'product/:productid',
    component: ProductComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path:"rogister",
    component:RogisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
