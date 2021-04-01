import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-l',
  templateUrl: './login-l.component.html',
  styleUrls: ['./login-l.component.css']
})
export class LoginLComponent implements OnInit {
  login: Login= new Login();
  submitted = false;
  conId : number;
 
  constructor(private consumerService: ConsumerService, private router: Router) { }
  ngOnInit() {
  }
  newlogin(): void {
    this.submitted = false;
    this.login = new Login();
  }
 save() {
   this.consumerService.loginConsumer(this.login)
     .subscribe(data => {console.log(data);this.conId=Number(data);
      console.log(this.conId);
      if(this.conId>0){
        sessionStorage.setItem('cId',String(this.conId));
        this.gotoDashboard();
      }
      else{
        window.alert("LOGIN UNSUCCESSFUL!!!");
        console.log("No record Found!");
        this.gotoLogin();
      }
    }, error => console.log(error));
     this.login = new Login();
     console.log("login" + this.login);
     
     
  }
  onSubmit() {
   this.submitted = true;
     this.save();
 }

 gotoAdmin(){
  this.router.navigate(['/admin-login']);
 }

 gotoLogin(){
  this.router.navigate(['/home']);
 }

 gotoDashboard(){
   //session storage
  //  sessionStorage.setItem('cId;', conId);
  this.router.navigate(['/dashboard']);
 }

 gotoPass(){
  this.router.navigate(['/change-password']);
 }

 gotoRegister(){
  this.router.navigate(['/register']);
 }

}
