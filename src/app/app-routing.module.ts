import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Iphone11Component } from './product-info/iphone11/iphone11.component';
import { FossilComponent } from './product-info/fossil/fossil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginLComponent } from './login-l/login-l.component';
import { AirpodsComponent } from './product-info/airpods/airpods.component';
import { BeatsComponent } from './product-info/beats/beats.component';
import { BikeComponent } from './product-info/bike/bike.component';
import { FerrariComponent } from './product-info/ferrari/ferrari.component';
import { OneplusComponent } from './product-info/oneplus/oneplus.component';
import { SpeakerComponent } from './product-info/speaker/speaker.component';
import { TvComponent } from './product-info/tv/tv.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PayComponent } from './pay/pay.component';
import { AfterPayComponent } from './after-pay/after-pay.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'iphone11', component: Iphone11Component },
  { path: 'fossil', component: FossilComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'airpods', component: AirpodsComponent },
  { path: 'beats', component: BeatsComponent },
  { path: 'bike', component: BikeComponent },
  { path: 'ferrari', component: FerrariComponent },
  { path: 'oneplus', component: OneplusComponent },
  { path: 'speaker', component: SpeakerComponent },
  { path: 'tv', component: TvComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact-us', component: ContactUsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'register2', component: Register2Component},
 { path: 'admin', component: AdminComponent },
 { path: 'admin-login', component: AdminLoginComponent },
 { path: 'change-password', component: ChangePasswordComponent },
 { path: 'login-l', component: LoginLComponent},
 { path: 'pay', component: PayComponent},
 { path: 'after-pay', component: AfterPayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
