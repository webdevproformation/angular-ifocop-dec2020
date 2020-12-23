import { Component, OnInit } from '@angular/core';
import { DataOnlineService } from "../services/data-online.service";

@Component({
  selector: 'app-creations',
  templateUrl: './creations.component.html',
  styleUrls: ['./creations.component.css']
})
export class CreationsComponent implements OnInit {
  articles : Array<{}>
  constructor( private _data : DataOnlineService) { }

  ngOnInit(): void {
    // RxJS => programmation réactive 
    this._data.getAll().subscribe(  function( reponse :any ){ 
      // afficher les données à l'écran dans le composant creation.component.html 
      // ne pas hésiter bootstrap pour la mise en forme !! et display grid 

      // retravailler le tableau avant de l'envoyer à la vue 
      
      let reponseModifiee = reponse.map( function( item ){
        return {
          title : item.title,
          img : "https://source.unsplash.com/random/900x200?v"+ (Math.random().toFixed(2)) ,
          body : item.body,
          span : `span-${ ((Math.random()*3) + 1).toFixed(0) }`
        }
      } )
      // 1
      
      //console.log(reponseModifiee);
      this.articles = reponseModifiee.slice(0 , 50) ;
    }.bind(this)  )
    // pas des créations => la console 
  }

}
