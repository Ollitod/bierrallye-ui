import { TestBed } from '@angular/core/testing';

import { OnboardingStoreService } from './onboarding-store.service';

describe('OnboardingStoreService', () => {
  let service: OnboardingStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnboardingStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
