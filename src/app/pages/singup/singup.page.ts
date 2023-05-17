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
  // router nous permet d'envoyer les données dans une autre route définit
  constructor(private router: Router) {
    this.fullName=""
    this.phoneNo=""
    this.email=""
    this.password=""



  }
  // cette code concerne les phots
  // de la sellectionner,charger s'il y'en a et de la lire  sinon la proprieté  qui stock le photo sera vide
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
// navigateToNewPage nous dirige vers une autre page
  navigateToNewPage() {
    // NavigationExtras nous permet de transférer les données à partir du routeur
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


  // localStorage.setItem('profilePicture',this.profilePicture);
  // Vérifier si une nouvelle photo de profil a été sélectionnée
  if (this.profilePicture) {
    // Générer un identifiant unique pour la nouvelle photo
    const profilePictureId = 'profile_picture_' + Date.now().toString();

    // Enregistrer le chemin de la nouvelle photo de profil dans le local storage
    localStorage.setItem(profilePictureId, this.profilePicture);

    // Enregistrer l'identifiant de la nouvelle photo de profil comme photo de profil actuelle
    localStorage.setItem('currentProfilePictureId', profilePictureId);
  }




    localStorage.setItem('password',this.password)
    this.router.navigate(['/loginscreen'], navigationExtras);
    // this.router.navigate(['/home'], { queryParams: { fullName: this.fullName, phoneNo: this.phoneNo, email: this.email } });
  }



  ngOnInit() {


  }


}
