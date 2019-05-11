import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsComponent } from './ngxs.component';

describe('NgxsComponent', () => {
  let component: NgxsComponent;
  let fixture: ComponentFixture<NgxsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
