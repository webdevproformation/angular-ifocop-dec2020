import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchComponent } from './search/search.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './admin/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchFormComponent,
    SearchComponent,
    SearchPageComponent,
    ContactComponent,
    AccueilComponent,
    ConnexionComponent,
    ArticleComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
  BrowserModule , 
  FormsModule,
  RouterModule.forRoot([
      { path: "" , component : AccueilComponent },
      { path: "contact" , component : ContactComponent },
      { path: "connexion" , component : ConnexionComponent },
      { path: "search/:mot" , component : SearchPageComponent },
      { path: "article/:id" , component : ArticleComponent },
      { path: "admin" , component : HomeComponent },
      { path: "**"  , component : NotFoundComponent}
  ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
