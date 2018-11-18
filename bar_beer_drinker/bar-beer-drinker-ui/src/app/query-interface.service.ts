import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryInterfaceService {

  url = 'https://c274683.herokuapp.com'

  constructor(public http: HttpClient) { }

  sendTestQuery(query: string){
    return this.http.get<any[]>(this.url+'/api/testQuery/' + query)
  }

}
