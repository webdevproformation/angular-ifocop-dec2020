import { Component } from '@angular/core';
@Component({
  selector: 'app-menu',
  template: `
    <div class="row">
      <nav class="navbar navbar-expand bg-dark navbar-dark col-12">
        <img [src]="url" alt="" class="navbar-brand img-thumbnail">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" *ngFor="let m of menu">
            <a href="" class="nav-link">
              {{ m }}
            </a>
          </li>
        </ul>
        <app-search></app-search>
      </nav>
    </div>
  `
})
export class MenuComponent {
  url : string = "https://via.placeholder.com/60x40?text=jour3";
  menu : Array<string> = ["Accueil","Articles", "Connexion"];
}