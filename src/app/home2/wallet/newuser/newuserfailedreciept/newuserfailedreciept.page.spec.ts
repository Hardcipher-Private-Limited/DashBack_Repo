import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewuserfailedrecieptPage } from './newuserfailedreciept.page';

describe('NewuserfailedrecieptPage', () => {
  let component: NewuserfailedrecieptPage;
  let fixture: ComponentFixture<NewuserfailedrecieptPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewuserfailedrecieptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewuserfailedrecieptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
