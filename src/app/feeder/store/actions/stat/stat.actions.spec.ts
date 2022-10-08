import * as fromStat from './stat.actions';

describe('loadStats', () => {
  it('should return an action', () => {
    expect(fromStat.loadStat().type).toBe('[Stat] Load Stat');
  });
});
