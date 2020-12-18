import { Component , ViewChild } from '@angular/core';
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
        <app-search></app-search>
        <p data-info="valeur" #tt></p>
      </nav>
    </div>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  url : string = "https://via.placeholder.com/60x40?text=jour3";
  menu : Array<string> = ["Accueil","Articles", "Connexion"];

  @ViewChild('tt') paragraphe;

  ngAfterViewInit(){
    console.log(this.paragraphe.nativeElement.dataset.info);
  }

  onLoadP($event){
    console.log($event.target.dataset.info);
  }
}