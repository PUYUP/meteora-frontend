import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SuggestEffects } from './suggest.effects';

describe('SuggestEffects', () => {
  let actions$: Observable<any>;
  let effects: SuggestEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(SuggestEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
