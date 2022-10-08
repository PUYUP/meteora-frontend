import * as fromTaken from './taken.actions';

describe('loadTakens', () => {
  it('should return an action', () => {
    expect(fromTaken.loadTakens().type).toBe('[Taken] Load Takens');
  });
});
