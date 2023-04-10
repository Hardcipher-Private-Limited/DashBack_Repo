import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-plan',
  templateUrl: './start-plan.page.html',
  styleUrls: ['./start-plan.page.scss'],
})
export class StartPlanPage implements OnInit {
  public Plan = [
    { title: "Start New Plan", url: 'assets/icon/home/sp1.svg'},
    { title: "End Existing Plan", url: 'assets/icon/home/sp1.svg'},
    { title: "Certificates & Taxes", url: 'assets/icon/home/sp2.svg'},
    { title: "Interest Rate", url: 'assets/icon/home/sp3.svg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
