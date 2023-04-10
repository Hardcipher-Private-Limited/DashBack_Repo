import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-psdchange',
  templateUrl: './psdchange.page.html',
  styleUrls: ['./psdchange.page.scss'],
})
export class PsdchangePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
    this.router.navigate(['login']);
    }, 10000); //5s
    }

  login(){
    this.router.navigate(['login'])
  }
}
