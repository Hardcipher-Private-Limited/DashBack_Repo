import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstpaymentrecieptPage } from './firstpaymentreciept.page';

describe('FirstpaymentrecieptPage', () => {
  let component: FirstpaymentrecieptPage;
  let fixture: ComponentFixture<FirstpaymentrecieptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstpaymentrecieptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstpaymentrecieptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
