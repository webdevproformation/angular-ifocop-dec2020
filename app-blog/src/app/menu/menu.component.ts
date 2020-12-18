import { Component , Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-menu',
  template: `
    <div class="row">
      <h2>Menu</h2>
      <nav class="navbar navbar-expand bg-dark navbar-dark col-12">
        <img [src]="url" alt="" class="navbar-brand img-thumbnail">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" *ngFor="let m of menu">
            <a href="" class="nav-link">
              {{ m }}
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
  menu : Array<string> = ["Accueil","Articles", "Connexion"];

  @Output() search = new EventEmitter();

  onSearch($event){
    console.log("dans le composant menu")
    console.log( $event )
    this.search.emit( $event );
  }
}