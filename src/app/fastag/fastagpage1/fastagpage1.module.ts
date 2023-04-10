import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fastagpage1PageRoutingModule } from './fastagpage1-routing.module';

import { Fastagpage1Page } from './fastagpage1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fastagpage1PageRoutingModule
  ],
  declarations: [Fastagpage1Page]
})
export class Fastagpage1PageModule {}
