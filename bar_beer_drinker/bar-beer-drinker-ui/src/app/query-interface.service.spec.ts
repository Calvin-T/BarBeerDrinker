import { TestBed } from '@angular/core/testing';

import { QueryInterfaceService } from './query-interface.service';

describe('QueryInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryInterfaceService = TestBed.get(QueryInterfaceService);
    expect(service).toBeTruthy();
  });
});
