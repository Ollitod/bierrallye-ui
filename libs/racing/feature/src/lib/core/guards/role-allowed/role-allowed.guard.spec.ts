import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleAllowedGuard } from './role-allowed.guard';

describe('roleAllowedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => roleAllowedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
