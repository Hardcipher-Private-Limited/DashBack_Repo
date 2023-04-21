import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.module').then((m) => m.SplashPageModule),
  },
  {
    path: 'slider',
    loadChildren: () =>
      import('./slider/slider.module').then((m) => m.SliderPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'forgetpsw',
    loadChildren: () =>
      import('./login/resetpsw/forgetpsw/forgetpsw.module').then(
        (m) => m.ForgetpswPageModule
      ),
  },
  {
    path: 'newpsw',
    loadChildren: () =>
      import('./login/resetpsw/newpsw/newpsw.module').then(
        (m) => m.NewpswPageModule
      ),
  },
  {
    path: 'otp',
    loadChildren: () =>
      import('./register/otp/otp.module').then((m) => m.OtpPageModule),
  },
  {
    path: 'mobile-login',
    loadChildren: () =>
      import('./login/mobile-login/mobile-login.module').then(
        (m) => m.MobileLoginPageModule
      ),
  },
  {
    path: 'emailotp',
    loadChildren: () =>
      import('./register/emailotp/emailotp.module').then(
        (m) => m.EmailotpPageModule
      ),
  },
  {
    path: 'psdchange',
    loadChildren: () =>
      import('./login/resetpsw/successfully/psdchange.module').then(
        (m) => m.PsdchangePageModule
      ),
  },
  {
    path: 'createaccount',
    loadChildren: () =>
      import('./register/regsuccessfully/createaccount.module').then(
        (m) => m.CreateaccountPageModule
      ),
  },
  {
    path: 'email-mobile-otp',
    loadChildren: () =>
      import('.//login/resetpsw/email-mobile-otp/email-mobile-otp.module').then(
        (m) => m.EmailMobileOtpPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home2/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'tred',
    loadChildren: () =>
      import('./home2/tred/tred.module').then((m) => m.TredPageModule),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./home2/store/store.module').then((m) => m.StorePageModule),
  },
  {
    path: 'utilities',
    loadChildren: () =>
      import('./home2/utilities/utilities.module').then(
        (m) => m.UtilitiesPageModule
      ),
  },
  {
    path: 'redirect',
    loadChildren: () =>
      import('./home2/redirect/redirect.module').then(
        (m) => m.RedirectPageModule
      ),
  },
  {
    path: 'notification',
    loadChildren: () =>
      import('./home2/notification/notification.module').then(
        (m) => m.NotificationPageModule
      ),
  },
  {
    path: 'wallet',
    loadChildren: () =>
      import('./home2/wallet/wallet.module').then((m) => m.WalletPageModule),
  },
  {
    path: 'paymenthistory',
    loadChildren: () =>
      import('./payment/paymenthistory/paymenthistory.module').then(
        (m) => m.PaymenthistoryPageModule
      ),
  },
  {
    path: 'pay1',
    loadChildren: () =>
      import('./payment/pay1/pay1.module').then((m) => m.Pay1PageModule),
  },
  {
    path: 'pay2',
    loadChildren: () =>
      import('./payment/pay2/pay2.module').then((m) => m.Pay2PageModule),
  },
  {
    path: 'fastagproviders',
    loadChildren: () =>
      import('./fastag/fastagproviders/fastagproviders.module').then(
        (m) => m.FastagprovidersPageModule
      ),
  },
  {
    path: 'fastagpage1',
    loadChildren: () =>
      import('./fastag/fastagpage1/fastagpage1.module').then(
        (m) => m.Fastagpage1PageModule
      ),
  },
  {
    path: 'fastagpage2',
    loadChildren: () =>
      import('./fastag/fastagpage2/fastagpage2.module').then(
        (m) => m.Fastagpage2PageModule
      ),
  },
  {
    path: 'cableproviders',
    loadChildren: () =>
      import('./cable/cableproviders/cableproviders.module').then(
        (m) => m.CableprovidersPageModule
      ),
  },
  {
    path: 'cablepage1',
    loadChildren: () =>
      import('./cable/cablepage1/cablepage1.module').then(
        (m) => m.Cablepage1PageModule
      ),
  },
  {
    path: 'cablepage2',
    loadChildren: () =>
      import('./cable/cablepage2/cablepage2.module').then(
        (m) => m.Cablepage2PageModule
      ),
  },
  {
    path: 'rechargeplan',
    loadChildren: () =>
      import('./recharge/rechargeplan/rechargeplan.module').then(
        (m) => m.RechargeplanPageModule
      ),
  },
  {
    path: 'successfultransaction',
    loadChildren: () =>
      import(
        './payment/successfultransaction/successfultransaction.module'
      ).then((m) => m.SuccessfultransactionPageModule),
  },
  {
    path: 'failedtransaction',
    loadChildren: () =>
      import('./payment/failedtransaction/failedtransaction.module').then(
        (m) => m.FailedtransactionPageModule
      ),
  },
  {
    path: 'firstpayment',
    loadChildren: () =>
      import('./PayMoney/firstpayment/firstpayment.module').then(
        (m) => m.FirstpaymentPageModule
      ),
  },
  {
    path: 'transactionfailedpage',
    loadChildren: () =>
      import(
        './PayMoney/transactionfailedpage/transactionfailedpage.module'
      ).then((m) => m.TransactionfailedpagePageModule),
  },
  {
    path: 'firstpaymentreciept',
    loadChildren: () =>
      import('./PayMoney/firstpaymentreciept/firstpaymentreciept.module').then(
        (m) => m.FirstpaymentrecieptPageModule
      ),
  },
  {
    path: 'failedpaymentreciept',
    loadChildren: () =>
      import(
        './PayMoney/failedpaymentreciept/failedpaymentreciept.module'
      ).then((m) => m.FailedpaymentrecieptPageModule),
  },
  {
    path: 'pay',
    loadChildren: () =>
      import('./PayMoney/pay/pay.module').then((m) => m.PayPageModule),
  },
  {
    path: 'paymoney',
    loadChildren: () =>
      import('./PayMoney/paymoney/paymoney.module').then(
        (m) => m.PaymoneyPageModule
      ),
  },
  {
    path: 'refer',
    loadChildren: () =>
      import('./Refer/refer/refer.module').then((m) => m.ReferPageModule),
  },
  {
    path: 'firstpaymentpage',
    loadChildren: () =>
      import(
        './WalletToWallet/success/firstpaymentpage/firstpaymentpage.module'
      ).then((m) => m.FirstpaymentpagePageModule),
  },
  {
    path: 'secondpaymentpage',
    loadChildren: () =>
      import(
        './WalletToWallet/success/secondpaymentpage/secondpaymentpage.module'
      ).then((m) => m.SecondpaymentpagePageModule),
  },

  {
    path: 'wallet-to-wallet-failed-page',
    loadChildren: () =>
      import(
        './WalletToWallet/failedpage/wallet-to-wallet-failed-page/wallet-to-wallet-failed-page.module'
      ).then((m) => m.WalletToWalletFailedPagePageModule),
  },
  {
    path: 'pagenumber1',
    loadChildren: () =>
      import('./WalletToWallet/failedpage/pagenumber1/pagenumber1.module').then(
        (m) => m.Pagenumber1PageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
