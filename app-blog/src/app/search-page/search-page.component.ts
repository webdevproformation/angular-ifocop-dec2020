import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor( private _data : DataService ) { }

  ngOnInit(): void {
    let r = this._data.search("ENDIPINE");
    console.log(r);
  }

}
