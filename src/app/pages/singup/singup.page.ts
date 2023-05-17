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
  password:string=""
  // profilePicture: string | undefined = undefined;
  profilePicture: string = "";

  // profilePicture: File | undefined = undefined;
  constructor(private router: Router) {
    this.fullName=""
    this.phoneNo=""
    this.email=""
    this.password=""



  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePicture = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      this.profilePicture = "";
    }
  }
  
  navigateToNewPage() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        fullName: this.fullName,
        phoneNo: this.phoneNo,
        email: this.email,
        password:this.password,
        profilePicture: this.profilePicture,
      },
    };
     
// Sauvegarder les informations d'identification dans le localStorage
  localStorage.setItem('fullName', this.fullName);
  
 
  localStorage.setItem('phoneNo', this.phoneNo);
    
   
  localStorage.setItem('email', this.email);
    
   
  localStorage.setItem('profilePicture',this.profilePicture);
 
    localStorage.setItem('password',this.password)
    this.router.navigate(['/loginscreen'], navigationExtras);
    // this.router.navigate(['/home'], { queryParams: { fullName: this.fullName, phoneNo: this.phoneNo, email: this.email } });
  }



  ngOnInit() {
  }


}
