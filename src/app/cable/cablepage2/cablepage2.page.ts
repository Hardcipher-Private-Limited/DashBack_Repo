import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cablepage2',
  templateUrl: './cablepage2.page.html',
  styleUrls: ['./cablepage2.page.scss'],
})
export class Cablepage2Page implements OnInit {
  name: string=" ";

  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag";
}
}
