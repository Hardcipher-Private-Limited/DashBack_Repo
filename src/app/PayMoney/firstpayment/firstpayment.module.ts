import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstpaymentPageRoutingModule } from './firstpayment-routing.module';

import { FirstpaymentPage } from './firstpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstpaymentPageRoutingModule
  ],
  declarations: [FirstpaymentPage]
})
export class FirstpaymentPageModule {}
