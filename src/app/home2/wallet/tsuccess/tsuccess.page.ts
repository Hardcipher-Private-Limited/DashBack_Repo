import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsuccess',
  templateUrl: './tsuccess.page.html',
  styleUrls: ['./tsuccess.page.scss'],
})
export class TsuccessPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag";
}

}
