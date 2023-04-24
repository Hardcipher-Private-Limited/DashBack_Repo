import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedtopayPageRoutingModule } from './proceedtopay-routing.module';

import { ProceedtopayPage } from './proceedtopay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedtopayPageRoutingModule
  ],
  declarations: [ProceedtopayPage]
})
export class ProceedtopayPageModule {}
