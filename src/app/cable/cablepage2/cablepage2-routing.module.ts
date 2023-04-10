import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cablepage2Page } from './cablepage2.page';

const routes: Routes = [
  {
    path: '',
    component: Cablepage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cablepage2PageRoutingModule {}
