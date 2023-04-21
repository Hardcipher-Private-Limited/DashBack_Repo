import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletToWalletFailedPagePage } from './wallet-to-wallet-failed-page.page';

describe('WalletToWalletFailedPagePage', () => {
  let component: WalletToWalletFailedPagePage;
  let fixture: ComponentFixture<WalletToWalletFailedPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletToWalletFailedPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletToWalletFailedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
