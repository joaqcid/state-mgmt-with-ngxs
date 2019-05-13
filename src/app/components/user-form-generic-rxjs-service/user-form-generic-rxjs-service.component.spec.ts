import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormGenericRxjsServiceComponent } from './user-form-generic-rxjs-service.component';

describe('UserFormGenericRxjsServiceComponent', () => {
  let component: UserFormGenericRxjsServiceComponent;
  let fixture: ComponentFixture<UserFormGenericRxjsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormGenericRxjsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormGenericRxjsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
