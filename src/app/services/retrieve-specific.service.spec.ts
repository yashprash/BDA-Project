import { TestBed } from '@angular/core/testing';

import { RetrieveSpecificService } from './retrieve-specific.service';

describe('RetrieveSpecificService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RetrieveSpecificService = TestBed.get(RetrieveSpecificService);
    expect(service).toBeTruthy();
  });
});
