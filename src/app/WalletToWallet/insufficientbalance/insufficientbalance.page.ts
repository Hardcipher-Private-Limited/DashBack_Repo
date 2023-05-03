import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-insufficientbalance',
  templateUrl: './insufficientbalance.page.html',
  styleUrls: ['./insufficientbalance.page.scss'],
})
export class InsufficientbalancePage implements OnInit {
  
  constructor(private ac: AlertController) { }
  async presentAlert() {
    const alert = await this.ac.create({
      subHeader: 'Insuffiecient Balance',
      message: 'OK'
      // buttons: ['OK'],
    });

    await alert.present();
  }
  
  ngOnInit() {
  }

}
