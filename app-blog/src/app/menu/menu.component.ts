import { Component , Output, EventEmitter } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-menu',
  template: `
    <div class="row">
      <nav class="navbar navbar-expand bg-dark navbar-dark col-12">
        <img [src]="url" alt="" class="navbar-brand img-thumbnail">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" *ngFor="let m of menu">
            <a [routerLink]="m.url" class="nav-link">
              {{ m.label }}
            </a>
          </li>
          <li class="nav-item" *ngIf="!this._auth.isLoggedIn()"><a routerLink="/connexion" class="nav-link">Connexion</a></li>
          <li class="nav-item" *ngIf="this._auth.isLoggedIn()"><a routerLink="/admin" class="nav-link">BackOffice</a></li>
          <li class="nav-item" *ngIf="this._auth.isLoggedIn()"><a class="nav-link" (click)="onClickDeconnexion()">Déconnexion</a></li>
        </ul>
        <app-search (search)="onSearch($event)"></app-search>
      </nav>
    </div>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  url : string = "https://via.placeholder.com/60x40?text=jour3";
  menu : Array< { label : string , url : string} > = [ 
                  { label: "Accueil" , url : "/"} , 
                  { label : "Contact" , url: "/contact"}
                ];

  @Output() search = new EventEmitter();
  onClickDeconnexion(){
    this._auth.logout();
  }
  constructor( private _auth : AuthService){}

  onSearch($event){
    console.log("dans le composant menu")
    console.log( $event )
    this.search.emit( $event );
  }
}