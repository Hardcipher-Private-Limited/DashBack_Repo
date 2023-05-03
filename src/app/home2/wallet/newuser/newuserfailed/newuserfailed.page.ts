import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newuserfailed',
  templateUrl: './newuserfailed.page.html',
  styleUrls: ['./newuserfailed.page.scss'],
})
export class NewuserfailedPage implements OnInit {
  name:string=" "
  constructor() { }

  ngOnInit() {
  }
  onClick(event: any){
    console.log(event);
    this.name ="Welcome ";
}

}
