import { TestBed } from '@angular/core/testing';

import { PenaltyStoreService } from './penalty-store.service';

describe('PenaltyStoreService', () => {
  let service: PenaltyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenaltyStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
