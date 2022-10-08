import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { RedeemListComponent } from './components/redeem-list/redeem-list.component';

@NgModule({
  declarations: [CouponListComponent, RedeemListComponent],
  imports: [
    CommonModule,
    CouponRoutingModule,

    MatListModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
  ],
})
export class CouponModule {}
