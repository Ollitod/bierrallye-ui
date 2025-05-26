import { TestBed } from '@angular/core/testing';

import { StartblockApiService } from './startblock-api.service';

describe('StartblockApiService', () => {
  let service: StartblockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartblockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
