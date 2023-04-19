import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymoneyPage } from './paymoney.page';

const routes: Routes = [
  {
    path: '',
    component: PaymoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymoneyPageRoutingModule {}
