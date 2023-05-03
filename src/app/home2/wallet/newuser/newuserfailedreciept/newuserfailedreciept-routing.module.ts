import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewuserfailedrecieptPage } from './newuserfailedreciept.page';

const routes: Routes = [
  {
    path: '',
    component: NewuserfailedrecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewuserfailedrecieptPageRoutingModule {}
