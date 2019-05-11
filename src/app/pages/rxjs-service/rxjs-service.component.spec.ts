import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsServiceComponent } from './rxjs-service.component';

describe('RxjsServiceComponent', () => {
  let component: RxjsServiceComponent;
  let fixture: ComponentFixture<RxjsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
