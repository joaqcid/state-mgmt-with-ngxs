import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildComponent } from './grand-child.component';

describe('GrandChildComponent', () => {
  let component: GrandChildComponent;
  let fixture: ComponentFixture<GrandChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
