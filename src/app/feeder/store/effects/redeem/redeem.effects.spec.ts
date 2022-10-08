import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RedeemEffects } from './redeem.effects';

describe('RedeemEffects', () => {
  let actions$: Observable<any>;
  let effects: RedeemEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedeemEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RedeemEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
