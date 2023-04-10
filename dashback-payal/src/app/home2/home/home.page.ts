import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ScrollDetail } from '@ionic/core/components';
// import { ScrollingHeaderModule } from 'ionic-scrolling-header';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild(Content) content: Content;
  ishidden:boolean=false;
  name:string="raj";

  constructor() { }

  ngOnInit() {
  }
  handleScrollStart() {
    console.log('scroll start');
    this.ishidden=true;
  }
  hide(){
    this.ishidden=!this.ishidden;
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', ev.detail);
  }

  handleScrollEnd() {
    console.log('scroll end');
  }
  // scrollHandler(event:any){
  //   this.hide=false;
  // }

}
