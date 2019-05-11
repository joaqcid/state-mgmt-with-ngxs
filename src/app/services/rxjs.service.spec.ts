import { TestBed } from '@angular/core/testing';

import { RxjsService } from './rxjs.service';

describe('RxjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsService = TestBed.get(RxjsService);
    expect(service).toBeTruthy();
  });
});
