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
  },
  {
    path: 'tsuccessreciept',
    loadChildren: () => import('./tsuccessreciept/tsuccessreciept.module').then( m => m.TsuccessrecieptPageModule)
  },
  {
    path: 'terrorreciept',
    loadChildren: () => import('./terrorreciept/terrorreciept.module').then( m => m.TerrorrecieptPageModule)
  },
  {
    path: 'newuser1',
    loadChildren: () => import('./newuser/newuser1/newuser1.module').then( m => m.Newuser1PageModule)
  },
  {
    path: 'newuser2',
    loadChildren: () => import('./newuser/newuser2/newuser2.module').then( m => m.Newuser2PageModule)
  },
  {
    path: 'newuser3',
    loadChildren: () => import('./newuser/newuser3/newuser3.module').then( m => m.Newuser3PageModule)
  },
  {
    path: 'newusersucess',
    loadChildren: () => import('./newuser/newusersucess/newusersucess.module').then( m => m.NewusersucessPageModule)
  },
  {
    path: 'newwallet',
    loadChildren: () => import('./newwallet/newwallet.module').then( m => m.NewwalletPageModule)
  },
  {
    path: 'newusersucessreciept',
    loadChildren: () => import('./newuser/newusersucessreciept/newusersucessreciept.module').then( m => m.NewusersucessrecieptPageModule)
  },
  {
    path: 'newuserfailed',
    loadChildren: () => import('./newuser/newuserfailed/newuserfailed.module').then( m => m.NewuserfailedPageModule)
  },
  {
    path: 'newuserfailedreciept',
    loadChildren: () => import('./newuser/newuserfailedreciept/newuserfailedreciept.module').then( m => m.NewuserfailedrecieptPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPageRoutingModule {}
