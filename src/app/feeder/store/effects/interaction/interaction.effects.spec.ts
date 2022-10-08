import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InteractionEffects } from './interaction.effects';

describe('InteractionEffects', () => {
  let actions$: Observable<any>;
  let effects: InteractionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(InteractionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
