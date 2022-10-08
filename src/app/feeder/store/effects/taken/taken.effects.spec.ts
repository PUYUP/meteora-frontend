import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TakenEffects } from './taken.effects';

describe('TakenEffects', () => {
  let actions$: Observable<any>;
  let effects: TakenEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakenEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(TakenEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
