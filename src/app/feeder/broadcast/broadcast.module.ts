import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RatingModule } from 'ng-starrating';

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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { BroadcastRoutingModule } from './broadcast-routing.module';
import { BroadcastListComponent } from './components/broadcast-list/broadcast-list.component';
import { BroadcastDetailComponent } from './components/broadcast-detail/broadcast-detail.component';
import { BroadcastEditorComponent } from './components/broadcast-editor/broadcast-editor.component';
import { BroadcastEditorDialogComponent } from './components/broadcast-editor-dialog/broadcast-editor-dialog.component';

import { BroadcastSelectSuggestComponent } from './components/broadcast-select-suggest/broadcast-select-suggest.component';
import { BroadcastInitializeComponent } from './components/broadcast-initialize/broadcast-initialize.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { BroadcastPickSuggestComponent } from './components/broadcast-pick-suggest/broadcast-pick-suggest.component';

@NgModule({
  declarations: [
    BroadcastListComponent,
    BroadcastDetailComponent,
    BroadcastEditorComponent,
    BroadcastEditorDialogComponent,
    BroadcastSelectSuggestComponent,
    BroadcastInitializeComponent,
    OrderListComponent,
    OrderDetailComponent,
    BroadcastPickSuggestComponent,
  ],
  imports: [
    CommonModule,
    BroadcastRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,

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
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class BroadcastModule {}
