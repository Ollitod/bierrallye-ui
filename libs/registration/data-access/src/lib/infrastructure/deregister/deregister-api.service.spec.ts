import { TestBed } from '@angular/core/testing';

import { DeregisterApiService } from './deregister-api.service';

describe('DeregisterApiService', () => {
  let service: DeregisterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeregisterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
