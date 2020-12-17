import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <article>
        <header>
          <h2>{{ article.titre }}</h2>
          <time>{{ article.date.getFullYear() }}</time>
        </header>
        <p>{{ article.contenu }}</p>
        <app-enfant [cat]="article.categories"></app-enfant>
        <app-auteur [nom]="article.auteur"></app-auteur>
        <app-like (like)="onChangeTitre()"></app-like>
    </article>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  onChangeTitre(){
    this.article.titre = this.article.titre + "💖";
  }
  article = { 
    titre : "article 1",
    contenu : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eius, nemo sed animi at iste vel. At, accusantium quos! Provident animi vel et, unde sit dolorem nobis voluptas laudantium enim.",
    auteur : "Moi",
    date : new Date(),
    categories : [ "js","angular","react" ]
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
