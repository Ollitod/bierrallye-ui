import { TestBed } from '@angular/core/testing';

import { LiveOverviewStoreService } from './live-overview-store.service';

describe('LiveOverviewStoreService', () => {
  let service: LiveOverviewStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveOverviewStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
