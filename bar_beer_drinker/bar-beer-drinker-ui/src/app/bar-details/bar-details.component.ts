import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {BarsService, Bar, BarMenuItem} from '../bars.service';
import { HttpResponse } from '@angular/common/http';

import { SelectItem } from 'primeng/components/common/selectitem';

declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {
  

  barName: string;
  barDetails: Bar;
  menu: BarMenuItem[];


  filterOptions: SelectItem[];
  sortField: string;
  sortOrder: number;

  constructor(
    private barService: BarsService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.barName = paramMap.get('bar');

      barService.getBar(this.barName).subscribe(
        data => {
          this.barDetails = data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404) {
            alert('Bar not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server.');
          }
        }
      );

      barService.getMostPopularItems(this.barName).subscribe(
        data => {
          const orders = [];
          const items = [];

          data.forEach(order => {
            items.push(order.item)
            orders.push(order.orders)
          })

          this.renderChart(items, orders, 'most_popular_items_graph',"Most Popular Items","Items","Orders")
        }
      )

      barService.getMostPopularManfs(this.barName).subscribe(
        data => {
          const orders = [];
          const manfs = [];

          data.forEach(order => {
            manfs.push(order.Manf)
            orders.push(order.orders)
          })

          this.renderChart(manfs, orders, 'most_popular_manfs_graph',"Most Popular Manufacturers","Manufacturer","Orders")
        }
      )

      barService.getMostPopularTimes(this.barName).subscribe(
        data => {
          const orders = [];
          const times = [];

          data.forEach(order => {
            times.push(order.ttime)
            orders.push(order.orders)
          })

          this.renderChart(times, orders, 'most_popular_times_graph',"Most Popular Times","Times","Orders")
        }
      )

      barService.getMostPopularMonths(this.barName).subscribe(
        data => {
          const orders = [];
          const months = [];

          data.forEach(order => {
            months.push(order.month)
            orders.push(order.orders)
          })

          this.renderChart(months, orders, 'most_popular_months_graph',"Most Popular Months","Months","Orders")
        }
      )

      barService.getMenu(this.barName).subscribe(
        data => {
          this.menu = data;
        }
      )

      barService.getTopSpenders(this.barName).subscribe(
        data => {
          const totals = [];
          const drinkers = [];

          data.forEach(transaction => {
            drinkers.push(transaction.drinker)
            totals.push(transaction.total)
          })

          this.renderChart(drinkers, totals, 'top_spenders_graph',"Top Spenders","Drinkers","Total")

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
        },
        {
          'label': 'Best Seller',
          'value': 'best seller'
        }
      ]

    });

  }

  ngOnInit() {
  }

  sortBy(selectedOption: string) {
    if (selectedOption === 'low price') {
      this.menu.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (selectedOption === 'high price') {
      this.menu.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (selectedOption === 'best seller'){
      this.menu.sort((a, b) => {
        return b.likes - a.likes;
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
