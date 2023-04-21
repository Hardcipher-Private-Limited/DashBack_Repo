import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletToWalletFailedPagePage } from './wallet-to-wallet-failed-page.page';

const routes: Routes = [
  {
    path: '',
    component: WalletToWalletFailedPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletToWalletFailedPagePageRoutingModule {}
