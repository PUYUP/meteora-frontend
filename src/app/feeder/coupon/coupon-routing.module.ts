import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedeemListComponent } from './components/redeem-list/redeem-list.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';

const routes: Routes = [
  {
    path: 'coupon',
    children: [
      {
        path: '',
        component: CouponListComponent,
      },
    ],
  },
  {
    path: 'redeem',
    children: [
      {
        path: '',
        component: RedeemListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponRoutingModule {}
