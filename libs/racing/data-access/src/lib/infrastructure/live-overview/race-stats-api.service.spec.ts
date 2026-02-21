import { TestBed } from '@angular/core/testing';

import { RaceStatsApiService } from './race-stats-api.service';

describe('RaceStatsApiService', () => {
  let service: RaceStatsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceStatsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
