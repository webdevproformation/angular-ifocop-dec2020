import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataOnlineService {

  private _urlApi : string = "http://jsonplaceholder.typicode.com/posts";

  constructor( private _http : HttpClient) { }

  getAll<T>(){
      return this._http.get( this._urlApi);
  }

}
