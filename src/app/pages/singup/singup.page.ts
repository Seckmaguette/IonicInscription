import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  fullName:string="";
  phoneNo:string=""
  email:string=""
  constructor(private router: Router) { 
    this.fullName=""
    this.phoneNo=""
    this.email=""
    
  }
  navigateToNewPage() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        fullName: this.fullName,
        phoneNo: this.phoneNo,
        email: this.email,
      },
    };
    this.router.navigate(['/home'], navigationExtras);
    // this.router.navigate(['/home'], { queryParams: { fullName: this.fullName, phoneNo: this.phoneNo, email: this.email } });
  }
  


  ngOnInit() {
  }
  

}
