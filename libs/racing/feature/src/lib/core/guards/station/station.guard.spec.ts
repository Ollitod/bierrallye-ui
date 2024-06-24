import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { stationGuard } from './station.guard';

describe('stationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => stationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
