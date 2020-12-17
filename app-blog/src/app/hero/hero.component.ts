import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
  <div class="row">
    <article class="col-4">
        <img [src]="url" alt="" class="img-thumbnail">
        <button [style.background]="article1.btnFond" [style.color]="article1.btnText">lire la suite</button>
    </article>
    <article class="col-4">
        <img [src]="url" alt="" class="img-thumbnail">
        <button [class.btn]="true" [class.btn-outline-success]="true" [class.text-primary]="true" [style.boxShadow]="'2px 2px 2px grey'">lire la suite</button>
    </article>
    <article class="col-4">
        <img [src]="url" alt="" class="img-thumbnail">
        <button [ngClass]="{
          'rounded': article3.arrondi,
          'btn btn-outline-primary' : article3.bordureBleu,
          'btn-lg' : article3.isBig
        }">lire la suite</button>
    </article>
  </div>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  url : string = "https://via.placeholder.com/300x200?text=paysage" ;

  article1 = {
    btnFond : "red",
    btnText : "black"
  }
  article3 = {
    arrondi : true,
    bordureBleu : true ,
    isBig : true
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// rdv 13h39 bon appétit

// phase d'apprentissage 
// http://localhost:4200/
// http://localhost:8888/
// http://test.fr:8888/

