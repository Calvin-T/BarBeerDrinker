import { Component, OnInit } from '@angular/core';

import { PatternsService } from '../patterns.service';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  patternOneData: any[];
  patternTwoData: any[];

  constructor(private patternsService: PatternsService) {

    this.patternsService.getPatternOne().subscribe(
      data => {
        this.patternOneData = data;
      }
    )

    this.patternsService.getPatternTwo().subscribe(
      data => {
        this.patternTwoData = data;
      }
    )

   }

  ngOnInit() {
  }

}
