import { Component, OnInit } from '@angular/core';
// pour lire les données
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  postContent: string = '';
  posts: any[] = [];
  profilePicture: string ="";
  fullName:string=""

  // partager une photo dans la page accueil
  selectedFile: File | null = null;
onFileSelected(event: any, post: any) {
  this.selectedFile = event.target.files[0];
  // post.selectedImage = URL.createObjectURL(this.selectedFile);
  if (this.selectedFile !== null) {
    post.selectedImage = URL.createObjectURL(this.selectedFile);
    post.selectedVideo = URL.createObjectURL(this.selectedFile);
  } else {

    // Gérer le cas où this.selectedFile est nul (null)
  }

}


// activatedRoute permet de recuper les données venant d'un autre route
  constructor(private route: ActivatedRoute) {}
    updateElapsedTime() {
      const now = new Date();

      this.posts.forEach(post => {
        const postDate = new Date(post.date);
        const elapsedTime = Math.floor((now.getTime() - postDate.getTime()) / 1000); // en secondes

        post.minutesElapsed = Math.floor(elapsedTime / 60); // en minutes
        post.secondsElapsed = elapsedTime % 60; // en secondes
      });
    }
    // recent
    submitPost(postForm: NgForm) {
      // Traitez le contenu du post
      const newPost = {
        content: this.postContent,
        image: this.selectedFile ? URL.createObjectURL(this.selectedFile) : null,
        date: new Date(),
        video: this.selectedFile ? URL.createObjectURL(this.selectedFile) : null,
        // video: post.selectedVideo ? post.selectedVideo : null,
        isNew: true // Ajoutez la propriété 'isNew' à true pour marquer la nouvelle publication
      };

      // Ajoutez le nouveau post au tableau des posts
      this.posts.push(newPost);

      // Mettez à jour le temps écoulé
      this.updateElapsedTime();

      // Enregistrez le tableau des posts dans le local storage
      localStorage.setItem('posts', JSON.stringify(this.posts));

      // Réinitialisez le contenu du formulaire pour lui permettre de prendre encore du contenu
      this.postContent = '';
    };

// form: NgForm nous interress pour gérer la publication
// submitPost(postForm: NgForm) {
  // Traitez le contenu du post
  // const newPost = {
  //   content: this.postContent,
  //   image: this.selectedFile ? this.selectedFile.name : null,
  //   date: new Date(),
  //   isNew: true // Ajoutez la propriété 'isNew' à true pour marquer la nouvelle publication
  // };

  // Ajoutez le nouveau post au tableau des posts
  // this.posts.push(newPost);

  // Mettez à jour le temps écoulé
  // this.updateElapsedTime();

  // Enregistrez le tableau des posts dans le local storage
  // localStorage.setItem('posts', JSON.stringify(this.posts));

  // Réinitialisez le contenu du formulaire pour lui permettre de prendre encore du contenu
//   this.postContent = '';
// };

    // submitPost(form: NgForm) {
    //   // ...

    //   const newPost = {
    //     content: this.postContent,
        // pour sellectionner la photo lors de la publication
      //   image: this.selectedFile ? this.selectedFile.name : null,
      //   date: new Date(),
      // };

      // ...
// concerne la sellection du photo
      // form.resetForm();
      // this.selectedFile = null;

      // Ajoutez le nouveau post au tableau des posts
      // this.posts.push(newPost);
  // Mettez à jour le temps écoulé
  // this.updateElapsedTime();
    // Enregistrez le tableau des posts dans le local storage
    // localStorage.setItem('posts', JSON.stringify(this.posts));

    // Réinitialisez le contenu du formulaire pour lui permettre de prendre encore du contenu
    // this.postContent = '';
    // }

    // submitPost(form:NgForm) {
      // Traitez le contenu du post
      // const newPost = {
      //   content: this.postContent,
      //   image: this.selectedFile ? this.selectedFile.name : null,
      //   date: new Date(),

      // };

      // Ajoutez le nouveau post au tableau des posts
      // this.posts.push(newPost);
  // Mettez à jour le temps écoulé
  // this.updateElapsedTime();
    // Enregistrez le tableau des posts dans le local storage
    // localStorage.setItem('posts', JSON.stringify(this.posts));

    // Réinitialisez le contenu du formulaire pour lui permettre de prendre encore du contenu
  //   this.postContent = '';
  // };


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

  // Mettez à jour le temps écoulé au chargement de la page
  this.updateElapsedTime();

    // Récupérer l'avatar depuis le local storage
    this.profilePicture = localStorage.getItem('profilePicture') || "";
    this.fullName = localStorage.getItem('fullName') || '';

   // Récupérer l'identifiant de la photo de profil actuelle
   // Vérifier si une nouvelle photo de profil a été sélectionnée
   const currentProfilePictureId = localStorage.getItem('currentProfilePictureId');

   if (currentProfilePictureId) {
     // Récupérer le chemin de la nouvelle photo de profil à partir du local storage
     this.profilePicture = localStorage.getItem(currentProfilePictureId) || '';
   } else {
     // Récupérer le chemin de la photo de profil par défaut à partir du local storage
     this.profilePicture = localStorage.getItem('profilePicture') || '';
   }

    // Récupérer les posts depuis le local storage
    const storedPosts = localStorage.getItem('posts');

    // Vérifier s'il y a des posts stockés
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    }




    // ... le reste de votre code
  }
}

// this.profilePicture = localStorage.getItem('profilePicture') ?? '';
