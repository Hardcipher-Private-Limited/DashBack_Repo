import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagenumber1Page } from './pagenumber1.page';

const routes: Routes = [
  {
    path: '',
    component: Pagenumber1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagenumber1PageRoutingModule {}
