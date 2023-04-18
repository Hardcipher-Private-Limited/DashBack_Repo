import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpaymentrecieptPage } from './firstpaymentreciept.page';

const routes: Routes = [
  {
    path: '',
    component: FirstpaymentrecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstpaymentrecieptPageRoutingModule {}
