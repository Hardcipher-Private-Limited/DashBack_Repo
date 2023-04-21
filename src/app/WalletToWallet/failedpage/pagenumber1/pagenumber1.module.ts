import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagenumber1PageRoutingModule } from './pagenumber1-routing.module';

import { Pagenumber1Page } from './pagenumber1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagenumber1PageRoutingModule
  ],
  declarations: [Pagenumber1Page]
})
export class Pagenumber1PageModule {}
