import { Component, OnInit } from '@angular/core';

import { Drinker, DrinkersService} from '../drinkers.service';
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;
  itemsOrdered: any;
  transactionDetails: any;
  spendings: any;

  constructor(
    private drinkerService: DrinkersService,
    private route: ActivatedRoute
  ) { 
    this.route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');

      this.drinkerService.getDrinker(this.drinkerName).subscribe(
        data => {
          this.drinkerDetails = data;
        }
      )
      
      this.drinkerService.getTransactions(this.drinkerName).subscribe(
        data => {
          this.transactionDetails = data;

          const totals = [];
          const ids = [];

          data.forEach(transaction => {
            console.log(transaction.id + " " + transaction.total)
            ids.push(transaction.id)
            totals.push(transaction.total)
          })

          this.renderChart(ids, totals, 'transactions_graph',"Transactions","ID","Total")

        }
      )

      this.drinkerService.getOrderedMost(this.drinkerName).subscribe(
        data => {
          const items = [];
          const counts = [];

          data.forEach(item => {
            items.push(item.item)
            counts.push(item.ordered)
          })

          this.renderChart(items, counts,'ordered_most_graph',"Drinker's favorite items","Items","# of Orders");

        }
      )


    })

  }

  ngOnInit() {
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
