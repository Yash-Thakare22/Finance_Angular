import { Component, OnInit } from '@angular/core';
import { Login } from '../Login';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  ngOnInit(): void {
    
  }

  loginForm:FormGroup
  model : any={};    
  title = 'Finance';
  login = false;
  user;
  errorMessage:string;    
  constructor(private router:Router) {
    this.loginForm=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(5)]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)])
    })
   }    
   get username()
   {
     return this.loginForm.get("username");
   }
   get password()
   {
     return this.loginForm.get("password");
   }
   sendDetails(email:string,password:string){
     if(email=="admin"&&password=="admin123")
     {
     // sessionStorage.setItem('user',this.username.value)
      this.router.navigate(['/admin'])
     }
     else
     {
      window.alert("LOGIN UNSUCCESSFUL!!!")
            console.log(this.loginForm.value);
  }
}
  

Login(){
    if(this.loginForm.valid){
      this.sendDetails(this.loginForm.value.username,this.loginForm.value.password)
    }else{
      alert("error")
    }
  }

//   ngDoCheck(){
//     if(sessionStorage.getItem('user')){
//       this.login=true
//       this.user=sessionStorage.getItem('user')
//     }else{
//       this.login=false
//       this.user=""
//     }
//   }

//   logout(){
//     sessionStorage.clear()
//     this.login=false
//     this.user=""
//     this.router.navigate(['/home'])
//   }

//   btnClick(){
//     this.router.navigate(['/forgotpassword']);
// }

  
}

//   login: Login= new Login();
//   submitted = false;
//   profileForm =this.fb.group({
//     username: new FormControl('', Validators.required ),
//     password: new FormControl('', Validators.required ),
//   });

//   constructor(private fb: FormBuilder,private consumerService: ConsumerService) { }

//   ngOnInit(): void {
//   }

//   save() {
//     this.consumerService.createConsumer(this.login)
//       .subscribe(data => console.log(data), error => console.log(error));
//       this.login = new Login();
//       console.log("consumer added" + this.login);
//    }
//    onSubmit() {
//     this.submitted = true;
//       this.save();
//       console.warn(this.profileForm.value);
//   }
  

// }
