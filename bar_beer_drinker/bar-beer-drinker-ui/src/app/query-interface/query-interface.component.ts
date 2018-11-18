import { Component, OnInit } from '@angular/core';

import { QueryInterfaceService } from '../query-interface.service';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-query-interface',
  templateUrl: './query-interface.component.html',
  styleUrls: ['./query-interface.component.css']
})
export class QueryInterfaceComponent implements OnInit {

  trueOrFalse: string;

  inputText: string = "";

  queryData : any[];
  queryActualData: any[];

  constructor(
    private queryInterfaceService: QueryInterfaceService
  ) { }

  onClickQuery(){
    this.queryInterfaceService.sendTestQuery(this.inputText).subscribe(
      data => {
        this.queryData = data;

      }
    )
  }

  ngOnInit() {
  }

  




}
