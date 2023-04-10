import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fastagpage2Page } from './fastagpage2.page';

const routes: Routes = [
  {
    path: '',
    component: Fastagpage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fastagpage2PageRoutingModule {}
