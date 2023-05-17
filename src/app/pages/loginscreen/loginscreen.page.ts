import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
// import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {
email:string;
password:string;
id="present-alert"
// private authService:AuthService
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private alertController:AlertController) {
    this.email="";
    this.password="";
    // this.Fullname="";
    // this.Phone="";


        // phoneNo: this.phoneNo,
  }
  // onSubmit() {
  //   const loggedIn = this.authService.login(this.email, this.password);

  //   if (loggedIn) {
  //     // Si les informations d'identification sont correctes, redirigez l'utilisateur vers la page d'accueil
  //     this.router.navigate(['/accueil']);
  //   } else {
  //     // Si les informations d'identification sont incorrectes, affichez un message d'erreur
  //     console.log('Erreur lors de la connexion');
  //   }
  // }

// informations des données venants de la page inscription
async login() {
    // Vérifier si les informations d'identification de l'utilisateur sont correctes
    if (this.email === localStorage.getItem('email') && this.password === localStorage.getItem('password')) {
      // Si les informations d'identification sont correctes, rediriger l'utilisateur vers la page d'accueil
      this.router.navigate(['/home']);


    } else {

      const alert = await this.alertController.create({
        header: 'Erreur de connexion',
        message: 'Email ou mot de passe incorrect',
        buttons: ['OK'],
        // cssClass:'changerMoi'

      });

      await alert.present();



      // Si les informations d'identification sont incorrectes, afficher un message d'erreur
      console.log('Erreur lors de la connexion : email ou mot de passe incorrect');

    }
  }

  // fin

  // navigateToNewPage() {
  //   const navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       // fullName: this.fullName,
  //       // phoneNo: this.phoneNo,
  //       email: this.email,
  //       password: this.password,
  //       // Fullname:this.Fullname,
  //       // Phone:this.Phone,
  //       // profilePicture: this.profilePicture,
  //     },
  //   };
  //   this.router.navigate(['/home'], navigationExtras);
  //   // this.router.navigate(['/home'], { queryParams: { fullName: this.fullName, phoneNo: this.phoneNo, email: this.email } });
  // }

  ngOnInit() {

  }

}
