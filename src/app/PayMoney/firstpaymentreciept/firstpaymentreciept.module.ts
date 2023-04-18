import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstpaymentrecieptPageRoutingModule } from './firstpaymentreciept-routing.module';

import { FirstpaymentrecieptPage } from './firstpaymentreciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstpaymentrecieptPageRoutingModule
  ],
  declarations: [FirstpaymentrecieptPage]
})
export class FirstpaymentrecieptPageModule {}
