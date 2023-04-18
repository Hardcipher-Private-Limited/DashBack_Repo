import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failedpaymentreciept',
  templateUrl: './failedpaymentreciept.page.html',
  styleUrls: ['./failedpaymentreciept.page.scss'],
})
export class FailedpaymentrecieptPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome ";
}

}
