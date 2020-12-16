import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../services/categories.service';

@Component({
  selector: 'app-article',
  template: `<div>
            <h2>{{ titre }}</h2>
            <time>{{ dt }}</time>
            <p>{{ premiersMot(27) }}</p>
            <p>{{ premiersMot2(5) }}</p>
            <ul>
              <li *ngFor="let item of tab">{{ item }}</li>
            </ul>
            <ul>
              <li *ngFor="let categorie of categories">{{ categorie }}</li>
            </ul>
          </div>`,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titre : string = "premier article" ;
  dt : string = "20/02/2020";
  p :string = "Lorem ipsum doleozirhezoiho fejzior sit amet consectetur adipisicing elit. Corrupti minus iusto ab vero deserunt blanditiis eius vel, repudiandae animi quod rerum fugit voluptatibus culpa dignissimos. Explicabo animi fugit vero earum.";
  tab : Array<string> = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5"
  ];
  categories : any = (new CategoriesService()).getAll()

  premiersMot( nbLettre : number ) : string {
    return this.p.substring( 0 , nbLettre );
  }
  // utiliser les tableaux 
  premiersMot2( nbMots : number ) : string {
    let textTab = this.p.split( " " ).slice( 0 ,  nbMots);
    return textTab.join(" ");
  }
  // document.getElementById("h1").innerHTML = titre
  // php echo {{ }}
  // php include() === <app-article></app-article>

  constructor() { 
  }

  ngOnInit(): void {
  }

}
