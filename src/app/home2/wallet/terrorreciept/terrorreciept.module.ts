import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerrorrecieptPageRoutingModule } from './terrorreciept-routing.module';

import { TerrorrecieptPage } from './terrorreciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerrorrecieptPageRoutingModule
  ],
  declarations: [TerrorrecieptPage]
})
export class TerrorrecieptPageModule {}
