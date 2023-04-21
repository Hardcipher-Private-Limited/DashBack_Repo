import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenumber1',
  templateUrl: './pagenumber1.page.html',
  styleUrls: ['./pagenumber1.page.scss'],
})
export class Pagenumber1Page implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome ";
}

}
