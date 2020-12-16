import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'app-blog';
  sousTitre :string = "coucou les amis comment allez vous ???? ";
  // sousTitre => camelCase 
  // sous_titre => pascal_case
}
