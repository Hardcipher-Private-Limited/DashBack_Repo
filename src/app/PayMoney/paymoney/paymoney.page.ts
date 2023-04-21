import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymoney',
  templateUrl: './paymoney.page.html',
  styleUrls: ['./paymoney.page.scss'],
})
export class PaymoneyPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  clickOne(){
    console.log(1)
  }
  clickTwo(){
    console.log(2)
  }
  clickThree(){
    console.log(3)
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag"

    

  }


}
