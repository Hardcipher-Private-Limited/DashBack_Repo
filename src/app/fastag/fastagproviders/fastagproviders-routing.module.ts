import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastagprovidersPage } from './fastagproviders.page';

const routes: Routes = [
  {
    path: '',
    component: FastagprovidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastagprovidersPageRoutingModule {}
