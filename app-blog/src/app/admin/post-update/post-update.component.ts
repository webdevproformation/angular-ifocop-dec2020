import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service" ;

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  article : any ;
  constructor( 
      private _url : ActivatedRoute , 
      private _data : DataService ) { }

  ngOnInit(): void {
    this._url.paramMap.subscribe( (response) =>{
      let id = response.get("id");
      this.article = this._data.getById( id );
    } )
  }
  onSubmit( ...f ){
    console.log(f);
    // appeler le service update ... demain 
  }

}
