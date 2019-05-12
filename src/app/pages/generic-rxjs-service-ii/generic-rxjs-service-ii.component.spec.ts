import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRxjsServiceIIComponent } from './generic-rxjs-service-ii.component';

describe('GenericRxjsServiceIIComponent', () => {
  let component: GenericRxjsServiceIIComponent;
  let fixture: ComponentFixture<GenericRxjsServiceIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericRxjsServiceIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericRxjsServiceIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
