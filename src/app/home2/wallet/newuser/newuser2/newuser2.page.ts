import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser2',
  templateUrl: './newuser2.page.html',
  styleUrls: ['./newuser2.page.scss'],
})
export class Newuser2Page implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag"

    

  }

}
