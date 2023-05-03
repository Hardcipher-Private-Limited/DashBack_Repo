import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewwalletPage } from './newwallet.page';

const routes: Routes = [
  {
    path: '',
    component: NewwalletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewwalletPageRoutingModule {}
