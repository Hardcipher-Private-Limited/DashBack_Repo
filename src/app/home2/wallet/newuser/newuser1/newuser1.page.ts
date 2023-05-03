import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuser1',
  templateUrl: './newuser1.page.html',
  styleUrls: ['./newuser1.page.scss'],
})
export class Newuser1Page implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag"
  }
    

}
