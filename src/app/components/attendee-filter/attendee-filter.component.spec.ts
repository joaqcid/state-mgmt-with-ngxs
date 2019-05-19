import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeeFilterComponent } from './attendee-filter.component';

describe('AttendeeFilterComponent', () => {
  let component: AttendeeFilterComponent;
  let fixture: ComponentFixture<AttendeeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendeeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendeeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
