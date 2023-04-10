import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-cableproviders',
  templateUrl: './cableproviders.page.html',
  styleUrls: ['./cableproviders.page.scss'],
})
export class CableprovidersPage implements OnInit {

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
