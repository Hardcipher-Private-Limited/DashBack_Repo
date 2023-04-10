import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ScrollDetail } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fastagproviders',
  templateUrl: './fastagproviders.page.html',
  styleUrls: ['./fastagproviders.page.scss'],
})
export class FastagprovidersPage implements OnInit {
  text: any = " ";
  ishidden: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
  handleScrollStart() {
    console.log('scroll start');
    this.ishidden = true;
  }
  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', ev.detail);
  }
  hide() {
    this.ishidden = !this.ishidden;
  }
  handleScrollEnd() {
    console.log('scroll end');
  }
}
