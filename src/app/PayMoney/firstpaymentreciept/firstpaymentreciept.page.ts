import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpaymentreciept',
  templateUrl: './firstpaymentreciept.page.html',
  styleUrls: ['./firstpaymentreciept.page.scss'],
})
export class FirstpaymentrecieptPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag";
}

}
