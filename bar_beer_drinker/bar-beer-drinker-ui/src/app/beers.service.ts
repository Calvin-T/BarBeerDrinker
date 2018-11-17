import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';

export interface BeerLocation {
  bar: string;
  price: number;
  Customers: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  getBeers(){
    return this.http.get<any[]>('/api/beers');
  }

  getBarsSelling(beer: String){
    return this.http.get<BeerLocation[]>('/api/beers/' + beer)
  }

  getManfs(beer?: String): any{
    if(beer){
      return this.http.get<string>('api/manufacturer/'+beer)
    }
    return this.http.get<string[]>('api/manufacturer')
  }

  getMostPopularBar(beer: string){
    return this.http.get<any[]>('/api/beers/' + beer + '/most_popular_bars')
  }

  getTopDrinkers(beer: string){
    return this.http.get<any[]>('/api/beers/' + beer + '/top_drinkers')
  }

  getMostPopularTimes(beer: string){
    return this.http.get<any[]>('/api/beers/' + beer + '/most_popular_times')
  }

}
