// transformer la class en un vrai composant Angular
// décorer notre class avec un décoration Component
// fin de la création de notre premier composant 

import { Component } from '@angular/core';

@Component({
    selector : "premier",
    template : `
        <div>
            <h2>mon premier composant</h2>
            <p>je viens de créer un composant à la main</p>
        </div>
    `
})
export class PremierComponent{ }
// maintenant que le composant est créé 
// afficher à l'écran 

// 3 choses à faire :

// 1 export devant la class => utiliser dans un autre fichier 
// 2 déclarer le composant dans notre application
//     app.module.ts 
// réaliser les modifications suivantes dans ce fichier 

// import { PremierComponent } from './premier.component';
/*
 * declarations: [
    AppComponent ,
    PremierComponent
  ]
 */

// 3 utiliser mon composant 
// dans le fichier app.component.html 
// ajouter à la fin la balise suivante <premier></premier>

// http://localhost:4200/
