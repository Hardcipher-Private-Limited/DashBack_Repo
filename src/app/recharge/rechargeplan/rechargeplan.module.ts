import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechargeplanPageRoutingModule } from './rechargeplan-routing.module';

import { RechargeplanPage } from './rechargeplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechargeplanPageRoutingModule
  ],
  declarations: [RechargeplanPage]
})
export class RechargeplanPageModule {}
