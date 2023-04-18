import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FailedpaymentrecieptPage } from './failedpaymentreciept.page';

const routes: Routes = [
  {
    path: '',
    component: FailedpaymentrecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FailedpaymentrecieptPageRoutingModule {}
