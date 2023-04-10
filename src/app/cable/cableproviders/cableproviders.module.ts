import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CableprovidersPageRoutingModule } from './cableproviders-routing.module';

import { CableprovidersPage } from './cableproviders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CableprovidersPageRoutingModule
  ],
  declarations: [CableprovidersPage]
})
export class CableprovidersPageModule {}
