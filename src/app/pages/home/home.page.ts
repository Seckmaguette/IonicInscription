import { Component, OnInit } from '@angular/core';
// pour lire les données
import { ActivatedRoute } from '@angular/router';
// pour les photos
import { DomSanitizer } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  fullName:string;
  phoneNo:string;
  email:string;
  // profilePicture: File | undefined = undefined;
  profilePictureUrl:string | null = null;
  // private domSanitizer: DomSanitize

  // selectedFile: File | null = null;
  // ,private http: HttpClient
  constructor(private route: ActivatedRoute) {
  this.fullName = '';
this.phoneNo = '';
this.email = '';

  }

  // onUpload() {
  //   const formData = new FormData();

  //   if (this.selectedFile) {
  //     formData.append('image', this.selectedFile, this.selectedFile.name);
  //   }

  //   this.http.post('/upload-photo', formData).subscribe((response) => {
  //     console.log(response);
  //   });


  // }




  // onFileSelected(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  // }

  ngOnInit() {
    this.fullName = this.route.snapshot.queryParamMap.get('fullName') || '';
    this.phoneNo = this.route.snapshot.queryParamMap.get('phoneNo') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
    this.profilePictureUrl = '/assets/images/'+this.route.snapshot.queryParamMap.get('profilePicture');
    console.log(this.profilePictureUrl);


  }


}
