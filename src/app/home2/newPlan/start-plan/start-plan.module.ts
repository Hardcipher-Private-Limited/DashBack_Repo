import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartPlanPageRoutingModule } from './start-plan-routing.module';

import { StartPlanPage } from './start-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPlanPageRoutingModule
  ],
  declarations: [StartPlanPage]
})
export class StartPlanPageModule {}
