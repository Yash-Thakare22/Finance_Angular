import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConsumerService } from './consumer.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Iphone11Component } from './product-info/iphone11/iphone11.component';
import { FossilComponent } from './product-info/fossil/fossil.component';
import { FerrariComponent } from './product-info/ferrari/ferrari.component';
import { OneplusComponent } from './product-info/oneplus/oneplus.component';
import { BikeComponent } from './product-info/bike/bike.component';
import { SpeakerComponent } from './product-info/speaker/speaker.component';
import{AirpodsComponent} from './product-info/airpods/airpods.component';
import { TvComponent } from './product-info/tv/tv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginLComponent } from './login-l/login-l.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PayComponent } from './pay/pay.component';
import { AfterPayComponent } from './after-pay/after-pay.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    Register2Component,
    AdminComponent,
    AdminLoginComponent,
    ChangePasswordComponent,
    HomeComponent,
    AboutUsComponent,
    TestimonialsComponent,
    ContactUsComponent,
    ProductListComponent,
    Iphone11Component,
    FossilComponent,
    FerrariComponent,
    OneplusComponent,
    BikeComponent,
    SpeakerComponent,
    AirpodsComponent,
    TvComponent,
    DashboardComponent,
    LoginLComponent,
    TransactionComponent,
    PayComponent,
    AfterPayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ConsumerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
