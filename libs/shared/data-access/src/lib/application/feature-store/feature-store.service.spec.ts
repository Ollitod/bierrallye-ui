import { TestBed } from '@angular/core/testing';

import { FeatureStoreService } from './feature-store.service';

describe('FeatureStoreService', () => {
  let service: FeatureStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
