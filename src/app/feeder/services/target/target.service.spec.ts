import { TestBed } from '@angular/core/testing';

import { FragmentService } from './target.service';

describe('FragmentService', () => {
  let service: FragmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FragmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
