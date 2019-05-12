import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsIIComponent } from './ngxs-ii.component';

describe('NgxsIIComponent', () => {
  let component: NgxsIIComponent;
  let fixture: ComponentFixture<NgxsIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
