import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.page.html',
  styleUrls: ['./refer.page.scss'],
})
export class ReferPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome"
    

  }

}
