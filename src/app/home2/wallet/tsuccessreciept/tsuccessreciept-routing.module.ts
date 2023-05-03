import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsuccessrecieptPage } from './tsuccessreciept.page';

const routes: Routes = [
  {
    path: '',
    component: TsuccessrecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsuccessrecieptPageRoutingModule {}
