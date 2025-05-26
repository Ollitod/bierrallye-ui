import { TestBed } from '@angular/core/testing';

import { VerificationApiService } from './verification-api.service';

describe('VerificationApiService', () => {
  let service: VerificationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
