import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fastagpage2PageRoutingModule } from './fastagpage2-routing.module';

import { Fastagpage2Page } from './fastagpage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fastagpage2PageRoutingModule
  ],
  declarations: [Fastagpage2Page]
})
export class Fastagpage2PageModule {}
