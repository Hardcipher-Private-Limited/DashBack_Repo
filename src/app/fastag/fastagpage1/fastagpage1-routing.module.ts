import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fastagpage1Page } from './fastagpage1.page';

const routes: Routes = [
  {
    path: '',
    component: Fastagpage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fastagpage1PageRoutingModule {}
