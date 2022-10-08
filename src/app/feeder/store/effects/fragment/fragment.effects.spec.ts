import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FragmentEffects } from './fragment.effects';

describe('FragmentEffects', () => {
  let actions$: Observable<any>;
  let effects: FragmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FragmentEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(FragmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
