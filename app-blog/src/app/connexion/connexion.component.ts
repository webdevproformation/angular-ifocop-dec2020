import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  compteUser = {
    login : "login",
    mdp : "azerty",
    role : "admin"
  }
  show : boolean = false ;

  onSubmit(f){
    if(f.valid){
      console.log(f.value)
      if( f.value.login === this.compteUser.login && f.value.password === this.compteUser.mdp ){
        // redirection vers la page d'accueil du back office du site 
        // stocker dans le localStorage une information qui dit => c'est la administrateur 
      } else {
        f.reset();
        this.show = true ;
        setTimeout( () => { 
          this.show = false ;
        } , 2000)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
