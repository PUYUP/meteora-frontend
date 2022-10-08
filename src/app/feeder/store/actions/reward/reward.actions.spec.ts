import * as fromReward from './reward.actions';

describe('loadRewards', () => {
  it('should return an action', () => {
    expect(fromReward.loadRewards().type).toBe('[Reward] Load Rewards');
  });
});
