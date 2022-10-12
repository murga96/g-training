import { TestBed } from '@angular/core/testing';

import { RestrictGuardGuard } from './restrict-guard.guard';

describe('RestrictGuardGuard', () => {
  let guard: RestrictGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RestrictGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
