import { TestBed } from '@angular/core/testing';

import { CoresspondenceService } from './coresspondence.service';

describe('CoresspondenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoresspondenceService = TestBed.get(CoresspondenceService);
    expect(service).toBeTruthy();
  });
});
