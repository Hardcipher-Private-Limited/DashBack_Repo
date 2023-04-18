import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessfultransactionPageRoutingModule } from './successfultransaction-routing.module';

import { SuccessfultransactionPage } from './successfultransaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessfultransactionPageRoutingModule
  ],
  declarations: [SuccessfultransactionPage]
})
export class SuccessfultransactionPageModule {}
