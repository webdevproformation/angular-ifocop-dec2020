import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { DataService } from "../services/data.service";
import { AuthService } from './../services/auth.service';
import { Article } from '../services/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article : Article;
  url : string;
  constructor( 
      private _data :DataService , 
      private _url : ActivatedRoute ,
      private _route : Router ,
      public auth : AuthService  ) { }
  ngOnInit(): void {
    // récupérer dans l'url l'id
    this._url.paramMap.subscribe( (response) => {
      let idDansUrl = response.get("id");
       // dès que j'ai l'id => recherche dans mon service 
      
       if( this._data.getById( idDansUrl) !== undefined ){
        this.article = this._data.getById( idDansUrl); 
       } else {
         // redirection vers le composant not-found 
         this._route.navigate(["/not-found"]);
       }
     
    } )
    this.url = "https://source.unsplash.com/random/600x400?v"+ (Math.random().toFixed(2))
  }
}
