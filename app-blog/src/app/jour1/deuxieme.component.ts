import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service';
@Component({
    selector : "deuxieme",
    template : `
    <div>
        <h2>mon deuxième composant</h2>
        <ul>
            <li>créer le composant</li>
            <li>déclarer le composant</li>
            <li>utiliser le composant</li>
        </ul>
        <article *ngFor="let article of articles">
            <h2>{{ article.company }}</h2>
            <p>{{ article.about }}</p>
            <ul class="d-flex list-inline">
                <li *ngFor="let tag of article.tags" class="mr-3 badge badge-success">{{ tag }}</li>
            </ul>
        </article>
    </div>
    `
})
export class DeuxiemeComponent{ 
    articles : any ;
    constructor ( private data : ArticlesService){
        this.articles = this.data.getAll();
    }
}
// 