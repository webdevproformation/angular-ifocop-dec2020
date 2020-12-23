import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  compteUser = {
    nom : "Alain" ,
    login : "login",
    mdp : "azerty",
    role : "admin"
  }

  constructor( private _route : Router) { }

  login( credentials : { login : string , password : string } ) :boolean {
    if( credentials.login === this.compteUser.login && credentials.password === this.compteUser.mdp ){
      let token = { 
        nom : this.compteUser.nom ,
        role : this.compteUser.role 
      }
      localStorage.setItem("token" , JSON.stringify(token));
      return true;
    } else {
      return false ;
    }
  }

  logout():void{
    localStorage.removeItem("token");
    // supprimer le token du localstorage 
    // et redirection vers la page de connexion
    this._route.navigate(['/connexion']);
  }

  isLoggedIn() :boolean{
    // est ce que local storage existe ??
    let isLocalStorageExist = localStorage.getItem("token");
    /* if(isLocalStorageExist){
      return true;
    } else {
      return false ;
    } */
    return (isLocalStorageExist) ? true : false ; 
  }

  isAdminLogged() : boolean{
    let isLocalStorageExist = localStorage.getItem("token");
    let profil = JSON.parse(isLocalStorageExist);

    if(profil.role === "admin"){
      return true;
    }
    return false ;

  }

}
