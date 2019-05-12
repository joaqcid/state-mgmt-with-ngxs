import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRxjsServiceComponent } from './generic-rxjs-service.component';

describe('GenericRxjsServiceComponent', () => {
  let component: GenericRxjsServiceComponent;
  let fixture: ComponentFixture<GenericRxjsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericRxjsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericRxjsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
