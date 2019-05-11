import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsServiceIIComponent } from './rxjs-service-ii.component';

describe('RxjsServiceIIComponent', () => {
  let component: RxjsServiceIIComponent;
  let fixture: ComponentFixture<RxjsServiceIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsServiceIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsServiceIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
