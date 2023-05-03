import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceedtopaynextPage } from './proceedtopaynext.page';

const routes: Routes = [
  {
    path: '',
    component: ProceedtopaynextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceedtopaynextPageRoutingModule {}
