import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Payupi1Page } from './payupi1.page';

const routes: Routes = [
  {
    path: '',
    component: Payupi1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Payupi1PageRoutingModule {}
