import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {
email:string;
password:string;
  constructor() {
    this.email="";
    this.password="";
  }

  ngOnInit() {
  }

}
