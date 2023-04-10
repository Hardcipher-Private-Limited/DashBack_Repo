import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNomineePageRoutingModule } from './add-nominee-routing.module';

import { AddNomineePage } from './add-nominee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNomineePageRoutingModule
  ],
  declarations: [AddNomineePage]
})
export class AddNomineePageModule {}
