import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  template: `
  <div class="row d-flex align-items-center my-4">
    <span>{{ nombre }}</span>
    <button class="btn btn-success mx-2" (click)="onClickAugmente()" >+</button>
    <button class="btn btn-warning" (click)="onClickDiminue()">-</button>
  </div>
  <hr>
  <div>
    <button class="btn-sm btn btn-outline-dark" (click)="onClickToggle($event)">masquer</button>
    <p [ngClass]="{ 'd-none':isVisible }">un peu de texte</p>
  </div>
  `,
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {

  nombre : number = 0;
  isVisible : boolean = false ;

  constructor() { }

  onClickToggle($event){
    let texteBouton = $event.target.innerText ;
    /* if( texteBouton === "masquer"){
      this.isVisible = true;
      $event.target.innerText = "afficher";
    }else {
      this.isVisible = false;
      $event.target.innerText = "masquer";
    } */

    if( this.isVisible === false ){
      this.isVisible = true;
      $event.target.innerText = "afficher";
    }else {
      this.isVisible = false;
      $event.target.innerText = "masquer";
    }
    
  }

  ngOnInit(): void {
  }
  onClickAugmente(){
    //alert("j'ai cliqué sur le +");
    // this.nombre = this.nombre + 1;
    this.nombre++; // identique i++
  }

  onClickDiminue(){
    this.nombre--;
    //this.nombre = this.nombre - 1;
  }
  // cas partique => ajouter sur le bouton orange le comportement suivant
  // si je clique dessus ça fait diminuer l'attribut de class nom 

}
// propertyp binding => class => html (one way)
// event binding html => class  (one way)
//(click)="methode-class()"

// d-flex => display:flex => met les élèments 