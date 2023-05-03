import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewusersucessrecieptPage } from './newusersucessreciept.page';

const routes: Routes = [
  {
    path: '',
    component: NewusersucessrecieptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewusersucessrecieptPageRoutingModule {}
