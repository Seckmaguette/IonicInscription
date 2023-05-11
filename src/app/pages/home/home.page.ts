import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  fullName:string;
  phoneNo:string;
  email:string;
  constructor(private route: ActivatedRoute) { 
  this.fullName = '';
this.phoneNo = '';
this.email = '';
  }

  ngOnInit() {
    this.fullName = this.route.snapshot.queryParamMap.get('fullName') || '';
    this.phoneNo = this.route.snapshot.queryParamMap.get('phoneNo') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
   
  }
  

}
