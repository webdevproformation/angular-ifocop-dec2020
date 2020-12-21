import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article : {};

  constructor( 
      private _data :DataService , 
      private _url : ActivatedRoute ) { }

  ngOnInit(): void {
    // récupérer dans l'url l'id
    this._url.paramMap.subscribe( (response) => {
      let idDansUrl = response.get("id");
       // dès que j'ai l'id => recherche dans mon service 
      this.article = this._data.getById( idDansUrl); 
    } )
  }
}
