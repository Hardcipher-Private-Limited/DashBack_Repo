import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FailedtransactionPageRoutingModule } from './failedtransaction-routing.module';

import { FailedtransactionPage } from './failedtransaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FailedtransactionPageRoutingModule
  ],
  declarations: [FailedtransactionPage]
})
export class FailedtransactionPageModule {}
