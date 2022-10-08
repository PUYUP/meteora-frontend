import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardingRoutingModule } from './boarding-routing.module';
import { BoardingComponent } from './boarding.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BoardingComponent],
  imports: [CommonModule, BoardingRoutingModule, SharedModule],
})
export class BoardingModule {}
