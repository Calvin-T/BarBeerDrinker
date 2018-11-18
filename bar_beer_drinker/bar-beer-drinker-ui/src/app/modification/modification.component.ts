import { Component, OnInit } from '@angular/core';
import { ModificationService } from '../modification.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css'],

})
export class ModificationComponent implements OnInit {

  inputText: string = "";
  inputText2: string = "";
  inputText3: string = "";
  inputText4: string = "";
  inputText5: string = "";
  inputText6: string = "";
  inputText7: string = "";
  inputText8: string = "";

  trueOrFalse: string;
  constructor(
    private modificationService: ModificationService
  ) {

  }


  onClickBeers(){
    this.modificationService.sendBeerQuery(this.inputText).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  onClickBars(){
    this.modificationService.sendBarQuery(this.inputText2).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  onClickDrinkers(){
    this.modificationService.sendDrinkerQuery(this.inputText3).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  onClickFrequents(){
    this.modificationService.sendFrequentQuery(this.inputText5).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  onClickSells(){
    this.modificationService.sendSellQuery(this.inputText4).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  onClickLikes(){
    this.modificationService.sendLikeQuery(this.inputText6).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }


  onClickTotals(){
    this.modificationService.sendTotalQuery(this.inputText7).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  onClickTrans(){
    this.modificationService.sendTranQuery(this.inputText8).subscribe(
      data => {
        this.trueOrFalse = data;
      }
    )
  }

  ngOnInit() {
  }

}
