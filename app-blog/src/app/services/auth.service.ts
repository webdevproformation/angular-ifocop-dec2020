import { Injectable } from '@angular/core';

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

  constructor() { }

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

}
