import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
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
