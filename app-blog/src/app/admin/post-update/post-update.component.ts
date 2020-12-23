import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from "@angular/router";
import { DataService } from "../../services/data.service" ;
import { Article } from "../../services/article" ;

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  article : any ;
  show: boolean = false ;
  constructor( 
      private _url : ActivatedRoute , 
      private _data : DataService , 
      private _route : Router) { }

  ngOnInit(): void {
    this._url.paramMap.subscribe( (response) =>{
      let id = response.get("id");
      this.article = this._data.getById( id );
    } )
  }
  onSubmit( f  ){
    let donnees : Article = {
      _id : f.value._id ,
      company : f.value.titre ,
      name : f.value.auteur  ,
      about : f.value.contenu ,
      picture : "http://placehold.it/32x32",
      tags : (typeof(f.value.tags) == "string") ? f.value.tags.split(",") : f.value.tags
    }
    // appeler le service update ... demain  */
    // rdv 10h57 
    this._data.update( donnees );
    this.show= true;
    setTimeout( function(){ 
      
      this.show = false;
      this._route.navigate(["/admin"]); // redirection vers l'accueil de l'admin 

     }.bind(this), 1000)
     
  }

}
