import { Injectable } from '@angular/core';
import { Http } from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HttptestService {

  constructor(private _http: Http) { }
/*
  getCurrentTime(){
      return this._http.get('http://date.jsontest.com') /*look up observables and subscribing to observables
      .map(res => res.json());
  }

  postJSON() {

  }
*/
}
