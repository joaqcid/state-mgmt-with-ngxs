import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormNgxsComponent } from './user-form-ngxs.component';

describe('UserFormNgxsComponent', () => {
  let component: UserFormNgxsComponent;
  let fixture: ComponentFixture<UserFormNgxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormNgxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormNgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
