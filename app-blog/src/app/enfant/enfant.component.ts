import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant',
  template: `
  <ul>
    <li *ngFor="let c of cat">{{ c }}</li>
  </ul>
  `,
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit  {

  @Input() cat : Array<string> ;
  // la valeur stockée dans l'attribut cat est envoyée depuis le parent

  constructor() { 
  }


  ngOnInit(): void {
  }

}
