import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  login: Login= new Login();
  submitted = false;
  // router: any;
  constructor(private consumerService: ConsumerService, private router: Router) { }
  ngOnInit() {
  }
  newlogin(): void {
    this.submitted = false;
    this.login = new Login();
  }
 save() {
   this.consumerService.changePassword(this.login)
     .subscribe(data => console.log(data), error => console.log(error));
     this.login = new Login();
     console.log("Password updated" + this.login);
     alert("Password changed successfully");
     this.gotoLogin();
  }
  onSubmit() {
   this.submitted = true;
     this.save();
 }

 gotoLogin(){
  this.router.navigate(['/login-l']);
 }
}