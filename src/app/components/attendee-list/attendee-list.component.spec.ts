import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeListComponent } from './attendee-list.component';

describe('AttendeeListComponent', () => {
  let component: AttendeeListComponent;
  let fixture: ComponentFixture<AttendeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
