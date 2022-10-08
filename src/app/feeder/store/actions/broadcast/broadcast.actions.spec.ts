import * as fromBroadcast from './broadcast.actions';

describe('loadBroadcasts', () => {
  it('should return an action', () => {
    expect(fromBroadcast.loadBroadcasts().type).toBe(
      '[Broadcast] Load Broadcasts'
    );
  });
});
