import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsIIIComponent } from './ngxs-iii.component';

describe('NgxsIIIComponent', () => {
  let component: NgxsIIIComponent;
  let fixture: ComponentFixture<NgxsIIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsIIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
