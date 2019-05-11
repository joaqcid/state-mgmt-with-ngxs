import { TestBed } from '@angular/core/testing';

import { GenericRxjsService } from './generic-rxjs.service';

describe('GenericRxjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericRxjsService = TestBed.get(GenericRxjsService);
    expect(service).toBeTruthy();
  });
});
