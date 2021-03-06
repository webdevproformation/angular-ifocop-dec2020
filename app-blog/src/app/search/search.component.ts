import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-search',
  template: `
    <form class="form-inline ml-2" #f="ngForm" (submit)="onSubmitSearch(f)">
      <input 
        type="text" 
        name="search" 
        class="form-control" 
        placeholder="recherche ..."
        ngModel 
        #search="ngModel"
        required 
        minlength="1"
        >
      <input type="submit" class="btn btn-danger  ml-2" [disabled]="!f.valid">
    </form>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter();

  constructor( private _router : Router  ) { }

  onSubmitSearch(f){
    // récupérer les valeurs saisies du formation
    console.log(f.value);

    // this.search.emit(f.value.search);
    this._router.navigate([ "/search", f.value.search.trim().toLowerCase() ]);
    // appeler un service => recherche dans une base de données 
    // appeler un autre service => stocker dans une table ce qui a été saisie 

    // vider tous les champs du formulaire 
    f.reset();
  }
  onKeyDownSearch(search){
    // afficher un select qui est caché + 
    // appeler un service => recherche dans une base de données et qui te fait des propositions 
    console.log(search.value);
  }
  

  ngOnInit(): void {
  }

}
