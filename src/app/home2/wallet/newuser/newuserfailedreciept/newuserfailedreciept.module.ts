import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewuserfailedrecieptPageRoutingModule } from './newuserfailedreciept-routing.module';

import { NewuserfailedrecieptPage } from './newuserfailedreciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewuserfailedrecieptPageRoutingModule
  ],
  declarations: [NewuserfailedrecieptPage]
})
export class NewuserfailedrecieptPageModule {}
