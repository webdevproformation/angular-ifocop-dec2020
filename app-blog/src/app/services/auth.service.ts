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

  logout(){}

  isLoggedIn(){}

}
