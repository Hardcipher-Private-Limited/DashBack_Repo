import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FailedpaymentrecieptPageRoutingModule } from './failedpaymentreciept-routing.module';

import { FailedpaymentrecieptPage } from './failedpaymentreciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FailedpaymentrecieptPageRoutingModule
  ],
  declarations: [FailedpaymentrecieptPage]
})
export class FailedpaymentrecieptPageModule {}
