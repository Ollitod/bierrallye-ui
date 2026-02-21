import { TestBed } from '@angular/core/testing';

import { PenaltyApiService } from './penalty-api.service';

describe('PenaltyApiService', () => {
  let service: PenaltyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenaltyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
