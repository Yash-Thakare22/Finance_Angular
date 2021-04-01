import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airpods',
  templateUrl: './airpods.component.html',
  styleUrls: ['./airpods.component.css']
})
export class AirpodsComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPay(){
    this.router.navigate(['/pay']);
   }



}
