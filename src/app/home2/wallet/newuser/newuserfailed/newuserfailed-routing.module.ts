import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewuserfailedPage } from './newuserfailed.page';

const routes: Routes = [
  {
    path: '',
    component: NewuserfailedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewuserfailedPageRoutingModule {}
