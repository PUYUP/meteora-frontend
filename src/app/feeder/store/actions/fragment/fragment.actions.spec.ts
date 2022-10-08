import * as fromFragment from './fragment.actions';

describe('loadFragments', () => {
  it('should return an action', () => {
    expect(fromFragment.loadFragments().type).toBe('[Fragment] Load Fragments');
  });
});
