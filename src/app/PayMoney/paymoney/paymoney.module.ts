import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymoneyPageRoutingModule } from './paymoney-routing.module';

import { PaymoneyPage } from './paymoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymoneyPageRoutingModule
  ],
  declarations: [PaymoneyPage]
})
export class PaymoneyPageModule {}
