import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BroadcastEffects } from './broadcast.effects';

describe('BroadcastEffects', () => {
  let actions$: Observable<any>;
  let effects: BroadcastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BroadcastEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
