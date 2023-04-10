import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cablepage1PageRoutingModule } from './cablepage1-routing.module';

import { Cablepage1Page } from './cablepage1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cablepage1PageRoutingModule
  ],
  declarations: [Cablepage1Page]
})
export class Cablepage1PageModule {}
