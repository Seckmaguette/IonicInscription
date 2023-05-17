import { Component, OnInit } from '@angular/core';
// NgModel recupere les données saisient au niveau du champ de formulaire
import { NgModel } from '@angular/forms';
//  avigationExtras nous permet de transférer les données à partir du routeur par l'interface NavigationExtras
import { Router, NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
// importer AlertController  nous permet d'utilsé les allertes
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

// pour fiare injection de dépendance  il faut faire private le NomDeInjection ensuite AlertController
  constructor(private router: Router,private activatedRoute:ActivatedRoute,private alertController:AlertController) {
    this.email="";
    this.password="";

  }

// informations des données venants de la page inscription
async login() {
    // Vérifier si les informations d'identification de l'utilisateur sont correctes
    if (this.email === localStorage.getItem('email') && this.password === localStorage.getItem('password')) {
      // Si les informations d'identification sont correctes, rediriger l'utilisateur vers la page d'accueil
      this.router.navigate(['/home']);


    } else {
// pour utiliser les allertes il faut u
// l'injection de dépendance alertController permet faire ce qu'on veut faire sur l'alerte
      const alert = await this.alertController.create({
        header: 'Erreur de connexion',
        message: 'Email ou mot de passe incorrect',
        buttons: ['OK'],
        

      });

      await alert.present();

    }
  }

  // fin
  ngOnInit() {

  }

}
