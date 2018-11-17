import { Component, OnInit } from '@angular/core';
import { BeersService, BeerLocation } from '../beers.service';
import { ActivatedRoute } from '@angular/router';

import { SelectItem } from 'primeng/components/common/selectitem';

declare const Highcharts: any;

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  beerName: string;
  beerLocations: BeerLocation[];
  beerManf: string;

  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) { 
    this.route.paramMap.subscribe((paramMap) => {
      this.beerName = paramMap.get('beer');


      this.beerService.getBarsSelling(this.beerName).subscribe(
        data => {
          this.beerLocations = data;
        }
      );

      this.beerService.getManfs(this.beerName).subscribe(
        data => {
          this.beerManf = data;
        }
      );

      this.beerService.getMostPopularBar(this.beerName).subscribe(
        data => {
          const orders = [];
          const bars = [];

          data.forEach(order => {
            bars.push(order.bar)
            orders.push(order.orders)
          })

          for (var i=bars.length; i>10; i--) {
            bars.pop();
            orders.pop();
          }

          this.renderChart(bars, orders, 'most_popular_bar_graph',"Top 10 Selling Bars","Bars","Orders")
        }
      )

      this.beerService.getTopDrinkers(this.beerName).subscribe(
        data => {
          const orders = [];
          const drinkers = [];

          data.forEach(order => {
            drinkers.push(order.drinker)
            orders.push(order.orders)
          })

          for (var i=drinkers.length; i>15; i--) {
            drinkers.pop();
            orders.pop();
          }

          this.renderChart(drinkers, orders, 'top_drinker_graph',"Top 15 Consumers","Drinkers","Orders")
        }
      )

      this.beerService.getMostPopularTimes(this.beerName).subscribe(
        data => {
          const orders = [];
          const times = [];

          data.forEach(order => {
            times.push(order.ttime)
            orders.push(order.orders)
          })

          for (var i=times.length; i>15; i--) {
            times.pop();
            orders.pop();
          }

          this.renderChart(times, orders, 'most_popular_times_graph_beer',"Most Popular Times","Times","Orders")
        }
      )

      this.filterOptions = [
        {
          'label': 'High price first',
          'value': 'high price'
        },
        {
          'label': 'Low price first',
          'value': 'low price'
        }
      ]
      

    });


  }


  ngOnInit() {
    
  }

  sortBy(selectedOption: string) {
    if (selectedOption === 'low price') {
      this.beerLocations.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (selectedOption === 'high price') {
      this.beerLocations.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }

  renderChart(items: string[], counts: number[], graphName: string, title: string, xTitle: string, yTitle: string) {
    Highcharts.chart(graphName, {
      chart: {
        type: 'column'
      },
      title: {
        text: title
      },
      xAxis: {
        categories: items,
        title: {
          text: xTitle
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: yTitle
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        item: {
          dataLabels: {
            enabled: true
          }
        }
      }, 
      legend: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        data: counts
      }]

    })
  }

}
