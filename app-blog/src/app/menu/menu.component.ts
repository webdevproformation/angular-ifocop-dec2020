import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
      <img [src]="url" alt="" class="navbar-brand img-thumbnail">
      <ul class="navbar-nav ml-auto">
          <li *ngFor="let m of menu" class="nav-item">
            <a href="" [innerHTML]="textMenu(m)" class="nav-link active text-danger"></a>
            <!-- <a href="" class="nav-link active"> {{ m.label }} <span class="ml-2"> {{ m.emoji }} </span> </a> -->
          </li>
      </ul>
  </nav>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  url : string = "https://via.placeholder.com/80x40";
  menu : Array<{ label : string , emoji : string }> = [
    {label : "Accueil", emoji : "🎄"},
    {label : "Blog", emoji : "🎅"},
    {label : "Contact", emoji : "🎁"},
    {label : "Connexion", emoji : "🔥"}
  ];
  textMenu( item : { label : string , emoji : string }) : string {
    return item.label+'<span class="ml-2">'+item.emoji+'</span>'
  }
  constructor() { }
  ngOnInit(): void {
  }
}

/**
 *  https://getbootstrap.com/docs/4.0/components/navbar/
 *  nav  <=> 4 class 
 *         navbar  + navbar-expand (responsive) + navbar-light / dark (couleur du texte) + bg-light/ dark
 *    logo / texte Marque  <=> 1 class navbar-brand
 *     ul <=> 1 class navbar-nav
 *        li  <=> 1 class nav-item
 *          a  <=> 1 class nav-link text-danger
 *            texte : Accueil / Blog ...
 */