import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service"; 
import { Article } from "../../services/article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nom : string = "";
  articles : Array<Article> = []

  constructor( private _data : DataService) { }

  ngOnInit(): void {
    this.articles = this._data.getAll();
    this.nom = JSON.parse(localStorage.getItem("token")).nom ;
  }

  onClickDelete( id:string ):void{
    console.log( id );
    this._data.delete( id );
  }
}

// {id : 1 , nom : "Alain"} => transformer en chaine de caractère 
// JSON.stringify( {id : 1 , nom : "Alain"} ) => "{ "id" : "1" , "nom" : "Alain"}"
// let a = "{ "id" : "1" , "nom" : "Alain"}"
// a.nom => ne marche pas
// JSON.parse ( "{ "id" : "1" , "nom" : "Alain"}" ) => {id : 1 , nom : "Alain"}

// pause déjeuner => rdv dans 1 heure 13h43 !! 
// bon appétit à tout lemonde 