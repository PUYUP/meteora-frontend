import * as fromTarget from './target.actions';

describe('loadTargets', () => {
  it('should return an action', () => {
    expect(fromTarget.loadTargets().type).toBe('[Target] Load Targets');
  });
});
