import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpaymentpagePage } from './firstpaymentpage.page';

const routes: Routes = [
  {
    path: '',
    component: FirstpaymentpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstpaymentpagePageRoutingModule {}
