import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechargeplanPage } from './rechargeplan.page';

const routes: Routes = [
  {
    path: '',
    component: RechargeplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechargeplanPageRoutingModule {}
