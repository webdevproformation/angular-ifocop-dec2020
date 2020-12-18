import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'app-blog';
  sousTitre :string = "coucou les amis comment allez vous ???? ";
  tttt : string = "*";
  // sousTitre => camelCase 
  // sous_titre => pascal_case
  onSearch($event){
    console.log("je suis dans le composant root");
    console.log($event);
    this.tttt = $event ;
  }
}
