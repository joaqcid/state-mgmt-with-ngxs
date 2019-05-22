import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowlNotificationComponent } from './growl-notification.component';

describe('GrowlNotificationComponent', () => {
  let component: GrowlNotificationComponent;
  let fixture: ComponentFixture<GrowlNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowlNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowlNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
