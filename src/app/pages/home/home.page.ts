import { Component, OnInit } from '@angular/core';
// pour lire les données
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  postContent: string = '';
  posts: any[] = [];
  profilePicture: string = "";
  fullName:string=""
// activatedRoute permet de recuper les données venant d'un autre route
  constructor(private route: ActivatedRoute) {}

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

    // Réinitialisez le contenu du formulaire pour lui permettre de prendre encore du contenu
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

  ngOnInit() {
    // Récupérer l'avatar depuis le local storage
    this.profilePicture = localStorage.getItem('profilePicture') || "";
    this.fullName = localStorage.getItem('fullName') || '';



    // Récupérer les posts depuis le local storage
    const storedPosts = localStorage.getItem('posts');

    // Vérifier s'il y a des posts stockés
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    }

    // ... le reste de votre code
  }
}
