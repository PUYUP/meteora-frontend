import { SuggestEffects } from '../feeder/store/effects/suggest/suggest.effects';
import { FragmentEffects } from '../feeder/store/effects/fragment/fragment.effects';
import { ListingEffects } from '../feeder/store/effects/listing/listing.effects';
import { ProductEffects } from '../feeder/store/effects/product/product.effects';
import { SpreadEffects } from '../feeder/store/effects/spread/spread.effects';
import { PersonPasswordEffects } from '../person/store/effects/password/password.effects';
import { PersonSecurecodeEffects } from '../person/store/effects/securecode/securecode.effects';
import { PersonUserEffects } from '../person/store/effects/user/user.effects';
import { BroadcastEffects } from '../feeder/store/effects/broadcast/broadcast.effects';
import { TargetEffects } from '../feeder/store/effects/target/target.effects';
import { RewardEffects } from '../feeder/store/effects/reward/reward.effects';
import { RedeemEffects } from '../feeder/store/effects/redeem/redeem.effects';
import { TakenEffects } from '../feeder/store/effects/taken/taken.effects';
import { StatEffects } from '../feeder/store/effects/stat/stat.effects';
import { InteractionEffects } from '../feeder/store/effects/interaction/interaction.effects';

export const AppEffects = [
  PersonSecurecodeEffects,
  PersonUserEffects,
  PersonPasswordEffects,

  ListingEffects,
  ProductEffects,
  FragmentEffects,
  SpreadEffects,
  SuggestEffects,
  BroadcastEffects,
  TargetEffects,
  RewardEffects,
  RedeemEffects,
  TakenEffects,
  StatEffects,
  InteractionEffects,
];
