import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
import { Article } from "../services/article";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles : Array<Article>;
  constructor( private _data : DataService ) { }
  ngOnInit(): void {
    this.articles = this._data.getAll();
  }
  premiersMot(text : string , nbMots : number = 5) : string{
    return text.split(" ").slice(0, nbMots ).join(" ");
  }
}
