import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  template: `
    <div>
      <p>{{ presentation }}</p>
      <p>{{ date }}</p>
      <ul>
        <li>{{ matieres[0] }}</li>
        <li>{{ matieres[1] }}</li>
        <li>{{ matieres[2] }}</li>
      </ul>
      <!-- Alain habite au 76 bd du Paradis à Paris -->
      <p> {{ objet.nom }} habite au {{ objet.adresse.rue }} à {{ objet.adresse.ville  }}  </p>
      <p> {{ objet.nom + " habite au " + objet.adresse.rue + "  à " + objet.adresse.ville }}</p>
      <p> {{ description() }}</p>
      <ul>
        <li *ngFor="let jour of jours" class="">{{ jour }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  jours : Array<string> = [ "lundi", "mardi" , "mercredi" ];
  // Angular dispose Directive 
  // attribut pour les balises spécifiques à Angular
  /** 
   * ES6 pour parcourir un tableau 
   * for (let jour of jours){ }
   * *ngIf=""
   * ngClass NgStyle ngModel 
  */

  presentation : string = "je découvre les interpolations";
  date : string = "16/12/2020";
  matieres : Array<string> = [ "js" , "jquery", "Angular"];
  objet : any = { 
    id : 1,
    nom : "Alain",
    age : 12,
    adresse : {
      rue : "76 bd du Paradis",
      cp : 75000,
      ville : "Paris"
    }
   }
   description() : string {
     // Alain a 12 ans
     let html = `${ this.objet.nom } a ${this.objet.age} ans`;
     // hardware
    return html; 
   }

  constructor() { }

  ngOnInit(): void {
  }

}

// pause déjeuner rdv dans 1h => 13h42 
// bonne appétit => 
// composant
// interpolation
// directive *ngFor 
// service 
// injection de dépendance

// bon appétit 

// hello hello !!!!!!!!!!!!!!!!!!! 



