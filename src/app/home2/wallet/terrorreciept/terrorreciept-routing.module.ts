import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerrorrecieptPage } from './terrorreciept.page';

const routes: Routes = [
  {
    path: '',
    component: TerrorrecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerrorrecieptPageRoutingModule {}
