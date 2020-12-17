import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onglet',
  template: `
  <div class="onglet">
    <button 
      data-index="0" 
      (click)="onClickOnglet($event)"
      class="btn btn-primary btn-sm mb-2">
      onglet 1
    </button>
    <button 
      data-index="1" 
      (click)="onClickOnglet($event)"
      class="btn btn-info btn-sm ml-3  mb-2">onglet 2</button>
    <div [ngClass]="{
      'd-none' : onglets[0]
    }" class="border border-secondary p-3 rounded">
        <p class="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, et.</p>
    </div>
    <div [ngClass]="{
      'd-none' : onglets[1]
    }" class="border border-secondary p-3 rounded">
        <p class="m-0">Quaerat, harum molestias ea libero in distinctio quisquam eos perspiciatis!</p>
    </div>
</div>
  `,
  styleUrls: ['./onglet.component.css']
})
export class OngletComponent implements OnInit {
  onglets : Array<boolean> = [ false , true ];
  onClickOnglet($event){
    let index = $event.target.dataset.index;
    this.onglets.fill(true); // ["bonjour", "hello"].fill("toto") => ["toto", "toto"]
    this.onglets[index] = false ;
  }
  constructor() { }
  ngOnInit(): void {
  }
}
