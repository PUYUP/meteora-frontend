import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FragmentDetailComponent } from './components/fragment-detail/fragment-detail.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SpreadDetailComponent } from './components/spread-detail/spread-detail.component';
import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';
import { ListingListComponent } from './components/listing-list/listing-list.component';
import { RewardDetailComponent } from './components/reward-detail/reward-detail.component';
import { SuggestListComponent } from './components/suggest-list/suggest-list.component';
import { SuggestDetailComponent } from './components/suggest-detail/suggest-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listing',
        children: [
          {
            path: '',
            component: ListingListComponent,
          },
          {
            path: ':listing_uuid',
            component: ListingDetailComponent,
          },
        ],
      },
      {
        path: 'product',
        children: [
          {
            path: ':product_uuid',
            component: ProductDetailComponent,
          },
        ],
      },
      {
        path: 'fragment',
        children: [
          {
            path: ':fragment_uuid',
            component: FragmentDetailComponent,
          },
        ],
      },
      {
        path: 'spread',
        children: [
          {
            path: ':spread_uuid',
            component: SpreadDetailComponent,
          },
        ],
      },
      {
        path: 'reward',
        children: [
          {
            path: ':reward_uuid',
            component: RewardDetailComponent,
          },
        ],
      },
      {
        path: 'suggest',
        children: [
          {
            path: '',
            component: SuggestListComponent,
          },
          {
            path: ':uuid',
            component: SuggestDetailComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule {}
