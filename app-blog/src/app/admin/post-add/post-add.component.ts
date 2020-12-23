import { Component, OnInit } from '@angular/core';
import { DataService }  from "../../services/data.service";
import { Router } from "@angular/router";
import { Article } from './../../services/article';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  auteur : string ;
  constructor( private _data : DataService , private _route : Router) { }
  ngOnInit(): void {
    this.auteur = JSON.parse(localStorage.getItem("token")).nom;
  }
  onSubmit(f){
    let donnees : Article = {
      company : f.value.titre || `Article ${(Math.random()*100).toFixed(0)}`,
      name : f.value.auteur || "moi" ,
      about : f.value.contenu || "un peu de contenu",
      picture : "http://placehold.it/32x32",
      tags : (f.value.tags.length > 0) ? f.value.tags.split(",") : "js,jquery".split(",")
    }
     // envoyer au service 
    this._data.add( donnees );
    // redirection vers la page d'accueil du back office 
    this._route.navigate(["/admin"]);
  }
}
