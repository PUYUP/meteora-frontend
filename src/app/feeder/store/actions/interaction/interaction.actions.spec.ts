import * as fromInteraction from './interaction.actions';

describe('loadInteractions', () => {
  it('should return an action', () => {
    expect(fromInteraction.loadInteractions().type).toBe(
      '[Interaction] Load Interactions'
    );
  });
});
