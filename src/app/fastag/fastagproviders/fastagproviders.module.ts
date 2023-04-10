import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastagprovidersPageRoutingModule } from './fastagproviders-routing.module';

import { FastagprovidersPage } from './fastagproviders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastagprovidersPageRoutingModule
  ],
  declarations: [FastagprovidersPage]
})
export class FastagprovidersPageModule {}
