import { Component, OnInit } from '@angular/core';
import { Consumer } from '../Consumer';
import { ConsumerService } from '../consumer.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  consumer: Consumer= new Consumer();
  submitted = false;
  registerForm : FormGroup;

  constructor(private consumerService: ConsumerService, private router: Router, private formBuilder : FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName:['', Validators.required],
      phone:['', Validators.required],
      address:['', Validators.required],
      emailId:['',Validators.required],
      salary:['', Validators.required],
      card:['', Validators.required],
      bank:['', Validators.required],
      account:['', Validators.required],
      ifsc:['', Validators.required]
    });
  }

  newConsumer(): void {
    this.submitted = false;
    this.consumer = new Consumer();
  }
 save() {
   this.consumerService.createConsumer(this.consumer)
     .subscribe(data => console.log(data), error => console.log(error));
     this.consumer = new Consumer();
     console.log("consumer added" + this.consumer);
     this.goto();
  }
  onSubmit() {
   this.submitted = true;
     this.save();

     if(this.registerForm.invalid)
     {
       //  alert("UNSUCCESSFUL!!")
       return;
     }
     else{
      //  alert("SUCCESSFUL!!")
     }
 }

 goto(){
  this.router.navigate(['/register2']);
 }


}

