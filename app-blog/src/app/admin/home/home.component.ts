import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nom : string = "";
  articles : Array<{ _id: string , company : string , about:string}> = []

  constructor( private _data : DataService) { }

  ngOnInit(): void {
    this.articles = this._data.getAll();
    this.nom = JSON.parse(localStorage.getItem("token")).nom ;
  }

}
