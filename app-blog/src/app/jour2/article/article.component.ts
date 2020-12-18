import { Component, OnInit } from '@angular/core';
import { DonneesService } from './../services/donnees.service';

@Component({
  selector: 'app-article',
  template: `
    <div>
      <h2>{{ titre }}</h2>
      <img src="{{ url }}" alt="" class="img-thumbnail">
      <br>
      <img [src]="url2" alt="" class="img-thumbnail">
      <br>
      <button class="btn btn-sm btn-secondary mr-2">{{ next }}</button>
      <button [innerHTML]="next2" class="btn btn-sm btn-dark"></button>
      <p>{{ p }}</p>
      <p [innerHTML]="p2"></p>
      <p [innerHTML]="p3"></p>
    </div>
  `,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titre : string = "Premier article";
  url : string = "https://via.placeholder.com/200x150";
  url2 : string = "https://via.placeholder.com/40x40";
  next : string = "lire la suite ...." ;
  next2 : string = "next ..." ;  // interpolation via le property binding
                                 // property binding one way class => vue html
  p : string = "bonjour <br> les amis !";
  p2 : string = "bonjour <br> les amis !"; // le html est interprété 
  p3 : string ; // ng g s services/donnees

  constructor( private _p : DonneesService ) { }

  ngOnInit(): void {
    this.p3 = this._p.getP();
  }

}
