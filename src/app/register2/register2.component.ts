import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  login: Login= new Login();
  submitted = false;
  registerForm : FormGroup;
  // router: any;
  constructor(private consumerService: ConsumerService, private router: Router,private formBuilder : FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      email: new FormControl('', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))

    });
  }
  newlogin(): void {
    this.submitted = false;
    this.login = new Login();
  }
 save() {
   this.consumerService.createLogin(this.login)
     .subscribe(data => console.log(data), error => console.log(error));
     this.login = new Login();
     console.log("consumer added" + this.login);
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
