import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { JwtHelperService } from '@auth0/angular-jwt';

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

  jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibm9tIjoiQWxhaW4iLCJsb2dpbiI6ImxvZ2luIiwibWRwIjoiYXplcnR5Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.JSJ22klumRD3KHMTsE-XZjqzrsMwF4QHIVT7PnIMwek" ;

  constructor( private _route : Router) { }

  login( credentials : { login : string , password : string } ) :boolean {
    if( credentials.login === this.compteUser.login && credentials.password === this.compteUser.mdp ){
      let token = { 
        nom : this.compteUser.nom ,
        role : this.compteUser.role 
      }
      localStorage.setItem("token" , JSON.stringify(token));
      localStorage.setItem("token2" , this.jwt);
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

    // let test = new JwtHelperService();
    // console.log( test.decodeToken(localStorage.getItem('token2')) )
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
