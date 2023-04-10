import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgetpsw',
    loadChildren: () => import('./login/resetpsw/forgetpsw/forgetpsw.module').then( m => m.ForgetpswPageModule)
  },
  {
    path: 'newpsw',
    loadChildren: () => import('./login/resetpsw/newpsw/newpsw.module').then( m => m.NewpswPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./register/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'mobile-login',
    loadChildren: () => import('./login/mobile-login/mobile-login.module').then( m => m.MobileLoginPageModule)
  },
  {
    path: 'emailotp',
    loadChildren: () => import('./register/emailotp/emailotp.module').then( m => m.EmailotpPageModule)
  },
  {
    path: 'psdchange',
    loadChildren: () => import('./login/resetpsw/successfully/psdchange.module').then( m => m.PsdchangePageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./register/regsuccessfully/createaccount.module').then( m => m.CreateaccountPageModule)
  },
  {
    path: 'email-mobile-otp',
    loadChildren: () => import('.//login/resetpsw/email-mobile-otp/email-mobile-otp.module').then( m => m.EmailMobileOtpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home2/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tred',
    loadChildren: () => import('./home2/tred/tred.module').then( m => m.TredPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./home2/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./home2/utilities/utilities.module').then( m => m.UtilitiesPageModule)
  },
  {
    path: 'redirect',
    loadChildren: () => import('./home2/redirect/redirect.module').then( m => m.RedirectPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./home2/notification/notification.module').then( m => m.NotificationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
