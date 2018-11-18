import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationService {

  url = 'https://c274683.herokuapp.com'

  constructor(public http: HttpClient) { }

  sendBeerQuery(query: string){
    return this.http.get<string>(this.url + '/api/beerUpdate/' + query)
  }

  sendBarQuery(query: string){
    return this.http.get<string>(this.url +'/api/barUpdate/' + query)
  }

  sendDrinkerQuery(query: string){
    return this.http.get<string>(this.url +'/api/drinkerUpdate/' + query)
  }

  sendSellQuery(query: string){
    return this.http.get<string>(this.url +'/api/sellUpdate/' + query)
  }

  sendFrequentQuery(query: string){
    return this.http.get<string>(this.url +'/api/frequentUpdate/' + query)
  }

  sendLikeQuery(query: string){
    return this.http.get<string>(this.url +'/api/likeUpdate/' + query)
  }

  sendTotalQuery(query: string){
    return this.http.get<string>(this.url +'/api/totalUpdate/' + query)
  }

  sendTranQuery(query: string){
    return this.http.get<string>(this.url +'/api/tranUpdate/' + query)
  }

}
