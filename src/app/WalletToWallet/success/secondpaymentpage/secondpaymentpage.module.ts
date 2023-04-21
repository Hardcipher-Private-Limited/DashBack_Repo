import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondpaymentpagePageRoutingModule } from './secondpaymentpage-routing.module';

import { SecondpaymentpagePage } from './secondpaymentpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondpaymentpagePageRoutingModule
  ],
  declarations: [SecondpaymentpagePage]
})
export class SecondpaymentpagePageModule {}
