import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewwalletPageRoutingModule } from './newwallet-routing.module';

import { NewwalletPage } from './newwallet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewwalletPageRoutingModule
  ],
  declarations: [NewwalletPage]
})
export class NewwalletPageModule {}
