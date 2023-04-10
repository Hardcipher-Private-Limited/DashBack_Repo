import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cablepage2PageRoutingModule } from './cablepage2-routing.module';

import { Cablepage2Page } from './cablepage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cablepage2PageRoutingModule
  ],
  declarations: [Cablepage2Page]
})
export class Cablepage2PageModule {}
