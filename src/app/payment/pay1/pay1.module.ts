import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pay1PageRoutingModule } from './pay1-routing.module';

import { Pay1Page } from './pay1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pay1PageRoutingModule
  ],
  declarations: [Pay1Page]
})
export class Pay1PageModule {}
