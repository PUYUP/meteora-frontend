import { TestBed } from '@angular/core/testing';

import { IsanonGuard } from './isanon.guard';

describe('IsanonGuard', () => {
  let guard: IsanonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsanonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
