import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser3',
  templateUrl: './newuser3.page.html',
  styleUrls: ['./newuser3.page.scss'],
})
export class Newuser3Page implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag"

    

  }

}
