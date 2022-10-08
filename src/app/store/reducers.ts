import { ActionReducerMap } from '@ngrx/store';
import {
  FeederSuggestReducer,
  FeederSuggestState,
} from '../feeder/store/reducers/suggest/suggest.reducer';
import {
  FeederFragmentReducer,
  FeederFragmentState,
} from '../feeder/store/reducers/fragment/fragment.reducer';

// FEEDER
import {
  FeederListingReducer,
  FeederListingState,
} from '../feeder/store/reducers/listing/listing.reducer';
import {
  FeederProductReducer,
  FeederProductState,
} from '../feeder/store/reducers/product/product.reducer';
import {
  FeederSpreadReducer,
  FeederSpreadState,
} from '../feeder/store/reducers/spread/spread.reducer';

// PERSON
import {
  PersonPasswordReducer,
  PersonPasswordState,
} from '../person/store/reducers/password/password.reducer';
import {
  PersonSecurecodeReducer,
  PersonSecurecodeState,
} from '../person/store/reducers/securecode/securecode.reducer';
import {
  PersonUserReducer,
  PersonUserState,
} from '../person/store/reducers/user/user.reducer';
import {
  FeederBroadcastReducer,
  FeederBroadcastState,
} from '../feeder/store/reducers/broadcast/broadcast.reducer';
import {
  FeederTargetReducer,
  FeederTargetState,
} from '../feeder/store/reducers/target/target.reducer';
import {
  FeederRewardReducer,
  FeederRewardState,
} from '../feeder/store/reducers/reward/reward.reducer';
import {
  FeederRedeemReducer,
  FeederRedeemState,
} from '../feeder/store/reducers/redeem/redeem.reducer';
import {
  FeederTakenReducer,
  FeederTakenState,
} from '../feeder/store/reducers/taken/taken.reducer';
import {
  FeederStatReducer,
  FeederStatState,
} from '../feeder/store/reducers/stat/stat.reducer';
import {
  FeederInteractionReducer,
  FeederInteractionState,
} from '../feeder/store/reducers/interaction/interaction.reducer';

// STATE
export interface AppState {
  person_securecode: PersonSecurecodeState;
  person_user: PersonUserState;
  person_password: PersonPasswordState;

  feeder_listing: FeederListingState;
  feeder_product: FeederProductState;
  feeder_fragment: FeederFragmentState;
  feeder_spread: FeederSpreadState;
  feeder_suggest: FeederSuggestState;
  feeder_broadcast: FeederBroadcastState;
  feeder_target: FeederTargetState;
  feeder_reward: FeederRewardState;
  feeder_redeem: FeederRedeemState;
  feeder_taken: FeederTakenState;
  feeder_stat: FeederStatState;
  feeder_interaction: FeederInteractionState;
}

// REDUCERS
export const AppReducers: ActionReducerMap<AppState> = {
  person_securecode: PersonSecurecodeReducer,
  person_user: PersonUserReducer,
  person_password: PersonPasswordReducer,

  feeder_listing: FeederListingReducer,
  feeder_product: FeederProductReducer,
  feeder_fragment: FeederFragmentReducer,
  feeder_spread: FeederSpreadReducer,
  feeder_suggest: FeederSuggestReducer,
  feeder_broadcast: FeederBroadcastReducer,
  feeder_target: FeederTargetReducer,
  feeder_reward: FeederRewardReducer,
  feeder_redeem: FeederRedeemReducer,
  feeder_taken: FeederTakenReducer,
  feeder_stat: FeederStatReducer,
  feeder_interaction: FeederInteractionReducer,
};
