import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastagpage2',
  templateUrl: './fastagpage2.page.html',
  styleUrls: ['./fastagpage2.page.scss'],
})
export class Fastagpage2Page implements OnInit {
  name: string=" ";

  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag";
}
}
