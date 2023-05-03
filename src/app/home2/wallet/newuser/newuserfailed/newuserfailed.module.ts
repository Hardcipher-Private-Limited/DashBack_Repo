import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewuserfailedPageRoutingModule } from './newuserfailed-routing.module';

import { NewuserfailedPage } from './newuserfailed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewuserfailedPageRoutingModule
  ],
  declarations: [NewuserfailedPage]
})
export class NewuserfailedPageModule {}
