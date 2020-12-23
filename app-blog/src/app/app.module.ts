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
import { PostAddComponent } from './admin/post-add/post-add.component';
import { PostUpdateComponent } from './admin/post-update/post-update.component';

import { GuardService }  from "./services/guard.service";
import { NonAutoriseComponent } from './non-autorise/non-autorise.component';

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
    HomeComponent,
    PostAddComponent,
    PostUpdateComponent,
    NonAutoriseComponent
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
      { path: "non-autorise" , component : NonAutoriseComponent },
      { path: "admin/post/update/:id" , component : PostUpdateComponent , canActivate : [GuardService] },
      { path: "admin/post/add" , component : PostAddComponent , canActivate : [GuardService] },
      { path: "admin" , component : HomeComponent , canActivate : [GuardService] },
      { path: "**"  , component : NotFoundComponent}
  ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
