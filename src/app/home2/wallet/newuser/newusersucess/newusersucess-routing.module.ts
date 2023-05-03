import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewusersucessPage } from './newusersucess.page';

const routes: Routes = [
  {
    path: '',
    component: NewusersucessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewusersucessPageRoutingModule {}
