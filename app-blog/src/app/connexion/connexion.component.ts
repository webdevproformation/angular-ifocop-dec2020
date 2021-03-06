import { Component, OnInit } from '@angular/core';
import { AuthService }  from "../services/auth.service"
import { Router } from "@angular/router" ;

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  show : boolean = false ;
  constructor( private _auth : AuthService , private _route : Router ) { }
  onSubmit(f){
    if(f.valid){
      console.log(f.value)
      // stocker dans le localStorage une information qui dit => c'est la administrateur 
      let verif = this._auth.login( f.value );
      if( verif ){
        // redirection vers la page d'accueil du back office du site 
        // Router 
        this._route.navigate(["/admin"]);
      } else {
        f.reset();
        this.show = true ;
        setTimeout( () => { 
          this.show = false ;
        } , 2000)
      }
    }
  }

 

  ngOnInit(): void {
  }

}
