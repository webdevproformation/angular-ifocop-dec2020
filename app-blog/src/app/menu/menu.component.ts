import { Component , Output, EventEmitter } from '@angular/core';

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
                  { label : "Contact" , url: "/contact"} , 
                  { label :"Connexion" , url : "/connexion"}
                ];

  @Output() search = new EventEmitter();

  onSearch($event){
    console.log("dans le composant menu")
    console.log( $event )
    this.search.emit( $event );
  }
}