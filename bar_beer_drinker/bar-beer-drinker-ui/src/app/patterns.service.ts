import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatternsService {

  url = 'https://c274683.herokuapp.com'

  constructor(public http: HttpClient) { }

  getPatternOne() {
    return this.http.get<any[]>(this.url + '/api/patternone')
  }

  getPatternTwo() {
    return this.http.get<any[]>(this.url +'/api/patterntwo')
  }

}
