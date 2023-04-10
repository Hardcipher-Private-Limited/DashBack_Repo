import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CableprovidersPage } from './cableproviders.page';

const routes: Routes = [
  {
    path: '',
    component: CableprovidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CableprovidersPageRoutingModule {}
