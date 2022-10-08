import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ProductEditorModalComponent } from './components/product-editor-modal/product-editor-modal.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatMomentDateModule,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { NgxPrintModule } from 'ngx-print';

import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FragmentListComponent } from './components/fragment-list/fragment-list.component';
import { FragmentDetailComponent } from './components/fragment-detail/fragment-detail.component';
import { FragmentEditorComponent } from './components/fragment-editor/fragment-editor.component';
import { FragmentEditorDialogComponent } from './components/fragment-editor-dialog/fragment-editor-dialog.component';
import { SpreadDetailComponent } from './components/spread-detail/spread-detail.component';
import { SpreadListComponent } from './components/spread-list/spread-list.component';
import { SpreadEditorDialogComponent } from './components/spread-editor-dialog/spread-editor-dialog.component';
import { SpreadEditorComponent } from './components/spread-editor/spread-editor.component';

import { ListingListComponent } from './components/listing-list/listing-list.component';
import { RewardListComponent } from './components/reward-list/reward-list.component';
import { RewardEditorModalComponent } from './components/reward-editor-modal/reward-editor-modal.component';
import { RewardEditorComponent } from './components/reward-editor/reward-editor.component';
import { RewardDetailComponent } from './components/reward-detail/reward-detail.component';
import { SuggestListComponent } from './components/suggest-list/suggest-list.component';
import { RatingModule } from 'ng-starrating';
import { MatSelectModule } from '@angular/material/select';
import { SuggestDetailComponent } from './components/suggest-detail/suggest-detail.component';
import { InteractionEditorDialogComponent } from './components/interaction-editor-dialog/interaction-editor-dialog.component';
import { InteractionEditorComponent } from './components/interaction-editor/interaction-editor.component';
import { InteractionListComponent } from './components/interaction-list/interaction-list.component';

@NgModule({
  declarations: [
    ListingDetailComponent,
    ProductListComponent,
    ProductEditorModalComponent,
    ProductEditorComponent,
    ProductDetailComponent,
    FragmentListComponent,
    FragmentDetailComponent,
    FragmentEditorComponent,
    FragmentEditorDialogComponent,
    SpreadDetailComponent,
    SpreadListComponent,
    SpreadEditorDialogComponent,
    SpreadEditorComponent,
    ListingListComponent,
    RewardListComponent,
    RewardEditorModalComponent,
    RewardEditorComponent,
    RewardDetailComponent,
    SuggestListComponent,
    SuggestDetailComponent,
    InteractionEditorDialogComponent,
    InteractionEditorComponent,
    InteractionListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListingRoutingModule,
    SharedModule,
    RatingModule,
    NgxPrintModule,

    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatListModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    MatSelectModule,
    MatChipsModule,
  ],
  entryComponents: [ProductEditorModalComponent],
  providers: [],
})
export class ListingModule {}
