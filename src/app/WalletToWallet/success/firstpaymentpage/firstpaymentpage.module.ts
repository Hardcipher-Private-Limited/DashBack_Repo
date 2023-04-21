import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstpaymentpagePageRoutingModule } from './firstpaymentpage-routing.module';

import { FirstpaymentpagePage } from './firstpaymentpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstpaymentpagePageRoutingModule
  ],
  declarations: [FirstpaymentpagePage]
})
export class FirstpaymentpagePageModule {}
