import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CharactersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharactersProvider {
  

  constructor(public http: HttpClient) {
    console.log('Hello CharactersProvider Provider');
  }

}
