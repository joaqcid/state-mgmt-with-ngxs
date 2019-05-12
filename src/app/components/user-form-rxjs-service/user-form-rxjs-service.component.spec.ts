import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormRxjsServiceComponent } from './user-form-rxjs-service.component';

describe('UserFormRxjsServiceComponent', () => {
  let component: UserFormRxjsServiceComponent;
  let fixture: ComponentFixture<UserFormRxjsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormRxjsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormRxjsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
