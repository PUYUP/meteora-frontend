import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProducts } from 'src/app/feeder/store/actions/product/product.actions';
import { selectProducts } from 'src/app/feeder/store/selectors/product/product.selectors';
import { AppState } from 'src/app/store/reducers';
import { ProductEditorModalComponent } from '../product-editor-modal/product-editor-modal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input('listing_uuid') listing_uuid: any;

  product$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private matDialog: MatDialog, private store: Store<AppState>) {
    this.product$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts({ listing: this.listing_uuid }));
  }

  addProduct(listing_uuid: any): void {
    const dialogRef = this.matDialog.open(ProductEditorModalComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        listing_uuid: listing_uuid,
      },
    });
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(
      loadProducts({ isLoadMore: true, url: url, listing: this.listing_uuid })
    );
  }
}
