import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedtoupiPage } from './proceedtoupi.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedtoupiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedtoupiPageRoutingModule {}
