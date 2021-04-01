import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsumerService } from '../consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  tranlist:Transaction[]=[];


  transList:Transaction[] =[
    {transactionDate:"12-Dec-2020",transactionAmount:5600,cardNumber:11111},
    {transactionDate:"13-Dec-2020",transactionAmount:4600,cardNumber:11111},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
