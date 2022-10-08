import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RewardEffects } from './reward.effects';

describe('RewardEffects', () => {
  let actions$: Observable<any>;
  let effects: RewardEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RewardEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(RewardEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
