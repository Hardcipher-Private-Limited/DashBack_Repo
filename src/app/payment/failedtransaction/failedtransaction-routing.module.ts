import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FailedtransactionPage } from './failedtransaction.page';

const routes: Routes = [
  {
    path: '',
    component: FailedtransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FailedtransactionPageRoutingModule {}
