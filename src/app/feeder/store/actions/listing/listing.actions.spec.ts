import * as fromListing from './listing.actions';

describe('loadListings', () => {
  it('should return an action', () => {
    expect(fromListing.loadListings().type).toBe('[Listing] Load Listings');
  });
});
