import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cablepage1',
  templateUrl: './cablepage1.page.html',
  styleUrls: ['./cablepage1.page.scss'],
})
export class Cablepage1Page implements OnInit {
  name: string = ' ';

  constructor() {}

  ngOnInit() {}
  onClick(event: any) {
    console.log(event);
    this.name = 'Welcome to fastag';
  }
}
