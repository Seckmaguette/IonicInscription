import { Component, OnInit } from '@angular/core';
// pour lire les données
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
// pour les photos
import { DomSanitizer } from '@angular/platform-browser';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  postContent: string = '';

  // submitPost() {
  //   // Traitez le contenu du post (par exemple, enregistrez-le dans une liste de posts)
  //   console.log('Nouveau post :', this.postContent);

  //   // Réinitialisez le contenu du formulaire
  //   this.postContent = '';
  // }
  posts: any[] = [];

   // Ajoutez cette ligne pour déclarer la propriété newComment

  submitPost() {
    // Traitez le contenu du post
    const newPost = {
      content: this.postContent,
      date: new Date(),
    };

    // Ajoutez le nouveau post au tableau des posts
    this.posts.push(newPost);

    // Enregistrez le tableau des posts dans le local storage
    localStorage.setItem('posts', JSON.stringify(this.posts));

    // Réinitialisez le contenu du formulaire
    this.postContent = '';
  }
  addComment(post: any) {
    if (post.commentInput) {
      if (!post.comments) {
        post.comments = [];
      }
      post.comments.push({ content: post.commentInput });
      post.commentInput = "";
    }
  }

  fullName:string;
  phoneNo:string;
  email:string;
  profilePictureUrl: string = "";

  constructor(private route: ActivatedRoute) {
  this.fullName = '';
this.phoneNo = '';
this.email = '';
// this.isAuthenticated=authService.isAuthenticated();

  }

  ngOnInit() {

 // Récupérez les posts depuis le local storage
 const storedPosts = localStorage.getItem('posts');

 // Vérifiez s'il y a des posts stockés
 if (storedPosts) {
   this.posts = JSON.parse(storedPosts);
 }

    this.fullName = this.route.snapshot.queryParamMap.get('fullName') || '';
    this.phoneNo = this.route.snapshot.queryParamMap.get('phoneNo') || '';
    this.email = this.route.snapshot.queryParamMap.get('email') || '';

    // this.profilePictureUrl= "/assets/images/"+this.route.snapshot.queryParamMap.get("profilePicture");
    this.profilePictureUrl = localStorage.getItem('profilePicture') || "/assets/images/"+this.route.snapshot.queryParamMap;
    // this.profilePictureUrl = localStorage.getItem('profilePicture') || "/assets/images/default-profile.png";

    console.log(this.profilePictureUrl);


  }


}
