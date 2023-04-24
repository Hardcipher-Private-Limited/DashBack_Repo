import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Payupi1PageRoutingModule } from './payupi1-routing.module';

import { Payupi1Page } from './payupi1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Payupi1PageRoutingModule
  ],
  declarations: [Payupi1Page]
})
export class Payupi1PageModule {}
