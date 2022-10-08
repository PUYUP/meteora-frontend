import * as fromRedeem from './redeem.actions';

describe('loadRedeems', () => {
  it('should return an action', () => {
    expect(fromRedeem.loadRedeems().type).toBe('[Redeem] Load Redeems');
  });
});
