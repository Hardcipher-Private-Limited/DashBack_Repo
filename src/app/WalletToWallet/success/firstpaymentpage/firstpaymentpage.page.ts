import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpaymentpage',
  templateUrl: './firstpaymentpage.page.html',
  styleUrls: ['./firstpaymentpage.page.scss'],
})
export class FirstpaymentpagePage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag";
}

}
