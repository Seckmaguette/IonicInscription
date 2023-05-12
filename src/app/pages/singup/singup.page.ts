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
  profilePicture: File | undefined = undefined;
  constructor(private router: Router) { 
    this.fullName=""
    this.phoneNo=""
    this.email=""
    
    
    
  }
  // onFileSelected(event) {
  //   this.imageFile = event.target.files[0];
  // }
  onFileSelected(event: any) {
    this.profilePicture = event.target.files[0].name;
    console.log(event.target.files[0].name);
  }
  navigateToNewPage() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        fullName: this.fullName,
        phoneNo: this.phoneNo,
        email: this.email,
        profilePicture: this.profilePicture,
      },
    };
    this.router.navigate(['/home'], navigationExtras);
    // this.router.navigate(['/home'], { queryParams: { fullName: this.fullName, phoneNo: this.phoneNo, email: this.email } });
  }
  


  ngOnInit() {
  }
  

}
