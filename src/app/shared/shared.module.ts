import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecurecodeValidationComponent } from './securecode-validation/securecode-validation.component';
import { SecurecodeCreateComponent } from './securecode-create/securecode-create.component';
import { SecurecodeValidationDialogComponent } from './securecode-validation-dialog/securecode-validation-dialog.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ListingEditorDialogComponent } from './listing-editor-dialog/listing-editor-dialog.component';
import { ListingEditorComponent } from './listing-editor/listing-editor.component';
import { ListingListComponent } from './listing-list/listing-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SecurecodeValidationComponent,
    SecurecodeCreateComponent,
    SecurecodeValidationDialogComponent,
    ListingEditorDialogComponent,
    ListingEditorComponent,
    ListingListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatBottomSheetModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    ScrollingModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SecurecodeValidationComponent,
    SecurecodeValidationDialogComponent,
    SecurecodeCreateComponent,
    ListingListComponent,
  ],
})
export class SharedModule {}
