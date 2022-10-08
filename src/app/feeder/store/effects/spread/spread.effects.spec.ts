import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpreadEffects } from './spread.effects';

describe('SpreadEffects', () => {
  let actions$: Observable<any>;
  let effects: SpreadEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpreadEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(SpreadEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
