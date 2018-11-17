import { Component, OnInit } from '@angular/core';

import { DrinkersService } from '../drinkers.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  drinkers: any[];
  cityOptions: SelectItem[];

  originalDrinkersList: any[];

  constructor(private drinkerService: DrinkersService ) {
    this.drinkerService.getDrinkers().subscribe(
      data => {
        this.drinkers = data;
        this.originalDrinkersList = data;
      }
    );

    this.drinkerService.getCities().subscribe(
      data => {
        this.cityOptions = data.map(city => {
          return {
            label: city.city,
            value: city.city,
          };
        });
      }
    )

   }

  ngOnInit() {
  }

  filterCities(city: string){
    this.drinkers = this.originalDrinkersList;
    if(city){
      this.drinkers = this.originalDrinkersList.filter(drinker => drinker.city === city);
    }
  }

}
