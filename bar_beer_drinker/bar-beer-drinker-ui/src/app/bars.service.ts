import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Bar {
  BarName: string;
  License: string;
  City: string;
  Number: string;
  Address: string;
}

export interface BarMenuItem {
  name: string;
  manf: string;
  price: number;
  likes: number;
}

@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http: HttpClient
  ) { }

  getBars(){ 
    return this.http.get<Bar[]>('/api/bars');
  }

  getBar(bar: string){
    return this.http.get<Bar>('/api/bars/' + bar);
  }

  getMenu(bar: string){
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getFrequentCounts(){
    return this.http.get<any[]>('/api/frequents-data');
  }

  getTopSpenders(bar: string){
    return this.http.get<any[]>('/api/bars/' + bar + '/top_spenders')
  }

  getMostPopularItems(bar: string){
    return this.http.get<any[]>('/api/bars/' + bar + '/most_popular_items')
  }

  getMostPopularManfs(bar: string){
    return this.http.get<any[]>('/api/bars/' + bar + '/most_popular_manfs')
  }

  getMostPopularTimes(bar: string){
    return this.http.get<any[]>('/api/bars/' + bar + '/most_popular_times')
  }

  getMostPopularMonths(bar: string){
    return this.http.get<any[]>('/api/bars/' + bar + '/most_popular_months')
  }

}
