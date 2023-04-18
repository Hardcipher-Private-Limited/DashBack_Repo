import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionfailedpagePageRoutingModule } from './transactionfailedpage-routing.module';

import { TransactionfailedpagePage } from './transactionfailedpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionfailedpagePageRoutingModule
  ],
  declarations: [TransactionfailedpagePage]
})
export class TransactionfailedpagePageModule {}
