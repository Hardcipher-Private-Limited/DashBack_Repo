import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletPage } from './wallet.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPage
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'tsuccess',
    loadChildren: () => import('./tsuccess/tsuccess.module').then( m => m.TsuccessPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./terror/terror.module').then( m => m.TerrorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPageRoutingModule {}
