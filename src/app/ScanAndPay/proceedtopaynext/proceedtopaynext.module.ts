import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceedtopaynextPageRoutingModule } from './proceedtopaynext-routing.module';

import { ProceedtopaynextPage } from './proceedtopaynext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceedtopaynextPageRoutingModule
  ],
  declarations: [ProceedtopaynextPage]
})
export class ProceedtopaynextPageModule {}
