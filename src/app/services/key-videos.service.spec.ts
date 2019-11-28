import { TestBed } from '@angular/core/testing';

import { KeyVideosService } from './key-videos.service';

describe('KeyVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyVideosService = TestBed.get(KeyVideosService);
    expect(service).toBeTruthy();
  });
});
