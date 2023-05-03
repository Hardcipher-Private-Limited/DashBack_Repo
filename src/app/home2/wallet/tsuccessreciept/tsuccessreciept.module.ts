import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsuccessrecieptPageRoutingModule } from './tsuccessreciept-routing.module';

import { TsuccessrecieptPage } from './tsuccessreciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsuccessrecieptPageRoutingModule
  ],
  declarations: [TsuccessrecieptPage]
})
export class TsuccessrecieptPageModule {}
