import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton',
  template: `
    <div>
        <button [style]="bouton1" >Bouton 1</button>
        <button [style.color]="colorBtn2" [style.fontSize]="'30px'">Bouton 2</button>
        <hr>
        <button class="btn btn-dark">Bouton 3 </button>
        <button class="btn btn-dark btn-lg">Bouton 4 </button>
        <button class="btn btn-outline-danger btn-lg">Bouton 5 </button>
        <hr>
        <h2>jouer bouton bootstrap + angular class binding </h2>
        <input type="submit" class="btn" [class.btn-outline-success]="true" >
        <a 
          href="" 
          class="btn" 
          [class.btn-danger]="lien.isDanger" 
          [class.btn-lg]="lien.isBig">
            lien en forme de bouton
        </a>
        <hr>
        <h2>la Directive ngClass</h2>
        <button [ngClass]="{ 
          'btn' : true ,
          'btn-primary' : true 
        }" [style.box-shadow]="'2px 2px 3px grey'">Bouton 6</button>
    </div>
  `,
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {
  /**
   *  <button></button> / <input type="submit"> / <a href=""></a> (3 balises potentiellement utilisable)
   *  btn
   *  btn-primary / secondary / danger / success / warning / dark / light / info => bouton plein
   *  btn-outline-primary / secondary / danger / success / warning / dark / light / info => bouton vide => bordure de la couleur + effet sur le hover
   * btn-sm / lg => taille du bouton small ou large 
   */
  lien : { isBig : boolean, isDanger : boolean} = {
    isBig : false ,
    isDanger : false
  }  // coins arrondis 
  // couleur de fond rouge
  // texte blanc 
  // [style]="objet-litteral"
  bouton1: any = {
    borderRadius : "5px",
    background : "red",
    color : "white"
  };
  colorBtn2 :string = "green";

  constructor() { }

  ngOnInit(): void {
  }

}
