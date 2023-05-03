import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsufficientbalancePageRoutingModule } from './insufficientbalance-routing.module';

import { InsufficientbalancePage } from './insufficientbalance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsufficientbalancePageRoutingModule
  ],
  declarations: [InsufficientbalancePage]
})
export class InsufficientbalancePageModule {}
