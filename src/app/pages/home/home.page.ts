import { Component, OnInit } from '@angular/core';
// pour lire les données
import { ActivatedRoute } from '@angular/router';
// pour les photos
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  fullName:string;
  phoneNo:string;
  email:string;
  profilePicture: File | undefined = undefined;
  profilePictureUrl:string | null = null;
  // private domSanitizer: DomSanitize
  constructor(private route: ActivatedRoute) { 
  this.fullName = '';
this.phoneNo = '';
this.email = '';
  }

  ngOnInit() {
    this.fullName = this.route.snapshot.queryParamMap.get('fullName') || '';
    this.phoneNo = this.route.snapshot.queryParamMap.get('phoneNo') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    this.profilePictureUrl = '/assets/images/'+this.route.snapshot.queryParamMap.get('profilePicture');
    console.log(this.profilePictureUrl);
    
    // if (profilePicture) {
    //   fetch(profilePicture)
    //     .then(res => res.blob())
    //     .then(blob => {
    //       this.profilePictureUrl = URL.createObjectURL(blob);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
    // if (profilePicture) {
    //   const objectUrl = URL.createObjectURL(profilePicture);
    //   this.profilePictureUrl = this.domSanitizer.bypassSecurityTrustUrl(objectUrl);
    //   }
   
  }
  

}
