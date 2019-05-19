import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeFormComponent } from './attendee-form.component';

describe('AttendeeFormComponent', () => {
  let component: AttendeeFormComponent;
  let fixture: ComponentFixture<AttendeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
