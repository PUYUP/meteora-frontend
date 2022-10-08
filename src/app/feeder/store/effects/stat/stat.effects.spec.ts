import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StatEffects } from './stat.effects';

describe('StatEffects', () => {
  let actions$: Observable<any>;
  let effects: StatEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(StatEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
