import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PremierComponent } from './premier.component';
import { DeuxiemeComponent } from './deuxieme.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    AppComponent ,
    PremierComponent,
    DeuxiemeComponent,
    ListeComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
