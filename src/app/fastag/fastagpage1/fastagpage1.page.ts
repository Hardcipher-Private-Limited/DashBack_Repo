import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastagpage1',
  templateUrl: './fastagpage1.page.html',
  styleUrls: ['./fastagpage1.page.scss'],
})
export class Fastagpage1Page implements OnInit {
  name: string  =" "
  

  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag"

    

  }

}
