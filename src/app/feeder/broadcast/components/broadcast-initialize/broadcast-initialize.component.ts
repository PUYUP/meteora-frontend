import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadListings } from 'src/app/feeder/store/actions/listing/listing.actions';
import { loadProducts } from 'src/app/feeder/store/actions/product/product.actions';
import { selectListings } from 'src/app/feeder/store/selectors/listing/listing.selectors';
import { selectProducts } from 'src/app/feeder/store/selectors/product/product.selectors';
import { AppState } from 'src/app/store/reducers';
import { BroadcastEditorDialogComponent } from '../broadcast-editor-dialog/broadcast-editor-dialog.component';

@Component({
  selector: 'app-broadcast-initialize',
  templateUrl: './broadcast-initialize.component.html',
  styleUrls: ['./broadcast-initialize.component.css'],
})
export class BroadcastInitializeComponent implements OnInit {
  listingValue: any;
  productValue: any;

  listing$: Observable<any> | undefined;
  product$: Observable<any> | undefined;

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {
    this.store.dispatch(loadListings({}));
    this.listing$ = this.store.pipe(select(selectListings));
  }

  ngOnInit(): void {}

  listingSelected(event: any): void {
    let value = event.value;

    // Products
    this.store.dispatch(loadProducts({ listing: value }));
    this.product$ = this.store.pipe(select(selectProducts));

    this.productValue = '';
  }

  addBroadcast(): void {
    const dialogRef = this.matDialog.open(BroadcastEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        product: this.productValue,
      },
    });
  }
}
