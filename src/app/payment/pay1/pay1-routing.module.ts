import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pay1Page } from './pay1.page';

const routes: Routes = [
  {
    path: '',
    component: Pay1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pay1PageRoutingModule {}
