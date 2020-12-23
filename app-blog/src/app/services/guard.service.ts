import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {  Router , CanActivate , ActivatedRouteSnapshot } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  canActivate(_route: ActivatedRouteSnapshot):boolean{
    if(this._auth.isLoggedIn()){
      return true ;
    }
    this._route.navigate(["/non-autorise"]);
    return false;
  }
  constructor( private _auth : AuthService , private _route : Router) { }
}
