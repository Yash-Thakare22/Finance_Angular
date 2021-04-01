import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../Consumer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  employeeslist: Observable<Consumer>[] = [];
  empobj: any;
  actobj: any;
  delRec: String;
  count: any = 0;

  constructor(private consumerService: ConsumerService, private router: Router, private http: HttpClient) {
  }
  ngOnInit() 
  {
    this.reloadData();
  }
  reloadData() {
    this.consumerService.displayConsumer().subscribe(data => {
      this.employeeslist = data;
      console.log(this.employeeslist);  // don't put ouside subscribe
    });
  }

  public delete(id:number){

    this.consumerService.deleteConsumer(id).subscribe(data=>{
        this.empobj = data;
        console.log(this.empobj);
        alert("record deleted");
    });
  }

  public activate(id:number){
    this.consumerService.activateConsumer(JSON.stringify(id)).subscribe(data=>{
        this.actobj = data;
        console.log(this.actobj);
        alert("consumer activated");
    });
  }

  

}
