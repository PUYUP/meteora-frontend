import * as fromSuggest from './suggest.actions';

describe('loadSuggests', () => {
  it('should return an action', () => {
    expect(fromSuggest.loadSuggests().type).toBe('[Suggest] Load Suggests');
  });
});
