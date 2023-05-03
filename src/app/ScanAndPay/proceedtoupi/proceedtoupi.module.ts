import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedtoupiPageRoutingModule } from './proceedtoupi-routing.module';

import { ProceedtoupiPage } from './proceedtoupi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedtoupiPageRoutingModule
  ],
  declarations: [ProceedtoupiPage]
})
export class ProceedtoupiPageModule {}
