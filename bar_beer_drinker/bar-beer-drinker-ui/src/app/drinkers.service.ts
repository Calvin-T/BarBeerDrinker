import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Drinker {
  drinkerName: string;
  city: string;
  phone: string;
  street: string;
}

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  url = 'https://c274683.herokuapp.com'

  constructor(public http: HttpClient) { }

  getDrinkers(){
    return this.http.get<any[]>(this.url + '/api/drinkers')
  }

  getDrinker(name: string){
    return this.http.get<Drinker>(this.url +'/api/drinkers/' + name)
  }

  getCities(city?: string): any{
    if(city){
      return this.http.get<string>(this.url +'/api/cities/'+city)
    }
    return this.http.get<string[]>(this.url +'/api/cities')
  }

  getOrderedMost(name: string) {
    return this.http.get<any[]>(this.url +'/api/drinkers/' + name + '/orders_most')
  }

  getTransactions(name: string){
    return this.http.get<any[]>(this.url +'/api/drinkers/' + name + '/transactions')
  }

}
