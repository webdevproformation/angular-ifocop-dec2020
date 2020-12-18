import { Component, OnInit , Input , OnChanges } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-search-page',
  template: `
    <div class="row">
        <article class="card col-6 my-2" *ngFor="let r of resultat">
          <h2>{{ r.company }}</h2>
          <p>{{ r.about }}</p>
        </article>
    </div>
  `,
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit , OnChanges {

  @Input() rrrr : string = "";
  resultat : Array<{}> = [];
  constructor( private _data : DataService ) { }

  ngOnInit(): void {
    let r = this._data.search("ENDIPINE");
    console.log(r);
  }
  ngOnChanges(){
    console.log("ici")
    console.log(this.rrrr)
    this.resultat =  this._data.search( this.rrrr );
  }

}
