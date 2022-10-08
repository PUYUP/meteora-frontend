import * as fromSpread from './spread.actions';

describe('loadSpreads', () => {
  it('should return an action', () => {
    expect(fromSpread.loadSpreads().type).toBe('[Spread] Load Spreads');
  });
});
