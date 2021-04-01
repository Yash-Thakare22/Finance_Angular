// import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { Login } from '../Login';
// import { ConsumerService } from '../consumer.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//  login: Login = new Login();
//   submitted = false;
  
//   profileForm =this.fb.group({
//     username: new FormControl('', Validators.required ),
//     password: new FormControl('', Validators.required ),
//   });
  
//   constructor(private consumerService: ConsumerService, private fb: FormBuilder) { }
//   ngOnInit() {
//   }
//   newEmployee(): void {
//     this.submitted = false;
//     this.login = new Login();
//   }
//  save() {
//    this.consumerService.createLogin(this.login)
//      .subscribe(data => console.log(data), error => console.log(error));
//      this.login = new Login();
//      console.log("emp added" + this.login);
//   }
//   onSubmit() {
//    this.submitted = true;
//      this.save();
//      console.warn(this.profileForm.value);
//  }
// }

  

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Login } from '../Login';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  submitted = false;
  constructor(private router: Router){}

  ngOnInit(){}

  gotoAdmin(){
    this.router.navigate(['/admin-login']);
   }

   gotoPass(){
    this.router.navigate(['/change-password']);
   }

   gotoDashboard(){
     this.router.navigate(['/dashboard']);
   }
  
}