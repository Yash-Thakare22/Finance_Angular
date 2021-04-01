import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iphone11',
  templateUrl: './iphone11.component.html',
  styleUrls: ['./iphone11.component.css']
})
export class Iphone11Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPay(){
    this.router.navigate(['/pay']);
   }

}
