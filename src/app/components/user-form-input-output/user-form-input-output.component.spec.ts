import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormInputOutputComponent } from './user-form-input-output.component';

describe('UserFormInputOutputComponent', () => {
  let component: UserFormInputOutputComponent;
  let fixture: ComponentFixture<UserFormInputOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormInputOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
