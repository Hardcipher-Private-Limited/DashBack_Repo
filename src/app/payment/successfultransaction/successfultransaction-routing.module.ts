import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessfultransactionPage } from './successfultransaction.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessfultransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessfultransactionPageRoutingModule {}
