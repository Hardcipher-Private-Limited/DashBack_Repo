import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletToWalletFailedPagePageRoutingModule } from './wallet-to-wallet-failed-page-routing.module';

import { WalletToWalletFailedPagePage } from './wallet-to-wallet-failed-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletToWalletFailedPagePageRoutingModule
  ],
  declarations: [WalletToWalletFailedPagePage]
})
export class WalletToWalletFailedPagePageModule {}
