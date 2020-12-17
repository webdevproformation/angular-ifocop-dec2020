import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';
import { BoutonComponent } from './bouton/bouton.component';
import { HeroComponent } from './hero/hero.component';
import { CompteurComponent } from './compteur/compteur.component';
import { OngletComponent } from './onglet/onglet.component';
import { AccordeonComponent } from './accordeon/accordeon.component';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MenuComponent,
    BoutonComponent,
    HeroComponent,
    CompteurComponent,
    OngletComponent,
    AccordeonComponent,
    ParentComponent,
    EnfantComponent 
  ],
  imports: [
BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
