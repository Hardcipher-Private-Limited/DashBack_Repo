import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewusersucessrecieptPageRoutingModule } from './newusersucessreciept-routing.module';

import { NewusersucessrecieptPage } from './newusersucessreciept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewusersucessrecieptPageRoutingModule
  ],
  declarations: [NewusersucessrecieptPage]
})
export class NewusersucessrecieptPageModule {}
