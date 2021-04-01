import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oneplus',
  templateUrl: './oneplus.component.html',
  styleUrls: ['./oneplus.component.css']
})
export class OneplusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPay(){
    this.router.navigate(['/pay']);
   }

}
