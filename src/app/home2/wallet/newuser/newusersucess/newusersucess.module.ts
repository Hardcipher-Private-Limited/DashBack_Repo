import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewusersucessPageRoutingModule } from './newusersucess-routing.module';

import { NewusersucessPage } from './newusersucess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewusersucessPageRoutingModule
  ],
  declarations: [NewusersucessPage]
})
export class NewusersucessPageModule {}
