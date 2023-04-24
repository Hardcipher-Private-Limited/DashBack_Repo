import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayUPIPageRoutingModule } from './pay-upi-routing.module';

import { PayUPIPage } from './pay-upi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayUPIPageRoutingModule
  ],
  declarations: [PayUPIPage]
})
export class PayUPIPageModule {}
