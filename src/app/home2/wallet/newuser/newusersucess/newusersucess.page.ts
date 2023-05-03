import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newusersucess',
  templateUrl: './newusersucess.page.html',
  styleUrls: ['./newusersucess.page.scss'],
})
export class NewusersucessPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome to fastag";
}

}
