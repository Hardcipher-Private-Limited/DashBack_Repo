import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayUPIPage } from './pay-upi.page';

const routes: Routes = [
  {
    path: '',
    component: PayUPIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayUPIPageRoutingModule {}
