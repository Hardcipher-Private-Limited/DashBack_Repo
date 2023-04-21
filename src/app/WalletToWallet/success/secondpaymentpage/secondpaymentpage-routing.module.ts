import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondpaymentpagePage } from './secondpaymentpage.page';

const routes: Routes = [
  {
    path: '',
    component: SecondpaymentpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondpaymentpagePageRoutingModule {}
