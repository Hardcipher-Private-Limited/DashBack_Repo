import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  name: string  =" "

  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag"

    

  }

}
