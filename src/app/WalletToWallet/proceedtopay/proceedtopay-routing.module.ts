import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedtopayPage } from './proceedtopay.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedtopayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedtopayPageRoutingModule {}
