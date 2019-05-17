import { TestBed } from '@angular/core/testing';

import { AngularService } from './angular.service';

describe('AngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularService = TestBed.get(AngularService);
    expect(service).toBeTruthy();
  });
});
