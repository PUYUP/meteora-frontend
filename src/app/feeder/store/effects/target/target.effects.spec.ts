import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TargetEffects } from './target.effects';

describe('TargetEffects', () => {
  let actions$: Observable<any>;
  let effects: TargetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TargetEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(TargetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
