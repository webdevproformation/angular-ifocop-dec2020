import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  getP<T>(){
    return "bonjour je viens du service Données <br> et j'ai des balises html"
  }

  constructor() { }
}
