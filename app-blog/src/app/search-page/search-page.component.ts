import { Component, OnInit , Input , OnChanges } from '@angular/core';
import { DataService } from './../services/data.service';
import { ActivatedRoute } from "@angular/router" ;

@Component({
  selector: 'app-search-page',
  template: `
    <div class="row" *ngIf="resultat.length > 0 ; else noResult">
      <div class="alert alert-success col-12 mt-3">
        <p class="mb-0">
          Vous avez {{ resultat.length }} résultat(s) avec le mot <strong>{{ mot }}</strong>
        </p>
      </div>
      <article class="card col-6 my-2" *ngFor="let r of resultat">
        <header class="d-flex justify-content-between align-items-center mb-2">
          <h2 class="mb-0">{{ r.company }}</h2>
          <img [src]="r.picture" alt="" class="mt-2 img-thumbnail rounded-circle">
        </header>
        <p>{{ r.about }}</p>
        <div>
          <span *ngFor="let tag of r.tags" class="badge badge-warning mr-2 my-2">
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
    <ng-template #noResult>
      <div class="row">
        <p class="col-12 mt-5 alert alert-danger">Aucun résultat pour le mot rechercher !!! </p>
      </div>
    </ng-template>
  `,
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit , OnChanges {

  @Input() rrrr : string ;
  resultat : Array<{}> = [];
  mot : string = "";
  constructor( 
      private _data : DataService , 
      private _url : ActivatedRoute ) { }

  ngOnInit(): void {
    // this.resultat  = this._data.search(this.rrrr);
    this._url.paramMap.subscribe( (response) => { 
      // console.log(response.get("mot"))
      this.resultat = this._data.search(response.get("mot"));
      this.mot = response.get("mot");
    } )  
  }
  ngOnChanges(){
    console.log("ici")
    console.log(this.rrrr)
    this.resultat =  this._data.search( this.rrrr );
  }

}
