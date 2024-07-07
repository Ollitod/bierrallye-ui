import { TestBed } from '@angular/core/testing';

import { RaceStatsService } from './race-stats.service';

describe('RaceStatsService', () => {
  let service: RaceStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
