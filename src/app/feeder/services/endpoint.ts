import { environment } from 'src/environments/environment';

const prefix = 'feeder/v1/';

export const Endpoints = {
  stat: environment.endpoint + prefix + 'stats/',
  listing: environment.endpoint + prefix + 'listings/',
  product: environment.endpoint + prefix + 'products/',
  fragment: environment.endpoint + prefix + 'fragments/',
  spread: environment.endpoint + prefix + 'spreads/',
  reward: environment.endpoint + prefix + 'rewards/',
  suggest: environment.endpoint + prefix + 'suggests/',
  redeem: environment.endpoint + prefix + 'redeems/',
  taken: environment.endpoint + prefix + 'takens/',
  broadcast: environment.endpoint + prefix + 'broadcasts/',
  target: environment.endpoint + prefix + 'targets/',
  order: environment.endpoint + prefix + 'orders/',
  interaction: environment.endpoint + prefix + 'interactions/',
};
