import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FailedpaymentrecieptPage } from './failedpaymentreciept.page';

describe('FailedpaymentrecieptPage', () => {
  let component: FailedpaymentrecieptPage;
  let fixture: ComponentFixture<FailedpaymentrecieptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedpaymentrecieptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FailedpaymentrecieptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
