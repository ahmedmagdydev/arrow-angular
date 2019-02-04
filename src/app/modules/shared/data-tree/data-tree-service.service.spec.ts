import { TestBed } from '@angular/core/testing';

import { DataTreeServiceService } from './data-tree-service.service';

describe('DataTreeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTreeServiceService = TestBed.get(DataTreeServiceService);
    expect(service).toBeTruthy();
  });
});
