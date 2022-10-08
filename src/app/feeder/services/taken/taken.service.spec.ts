import { TestBed } from '@angular/core/testing';

import { TakenService } from './taken.service';

describe('TakenService', () => {
  let service: TakenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
