import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadListings } from 'src/app/feeder/store/actions/listing/listing.actions';
import { selectListings } from 'src/app/feeder/store/selectors/listing/listing.selectors';
import { ListingEditorDialogComponent } from 'src/app/shared/listing-editor-dialog/listing-editor-dialog.component';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-listing-list',
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.css'],
})
export class ListingListComponent implements OnInit {
  listing$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>, public matDialog: MatDialog) {
    this.store.dispatch(loadListings({}));
    this.listing$ = this.store.pipe(select(selectListings));
  }

  ngOnInit(): void {}

  addListing(): void {
    const dialogRef = this.matDialog.open(ListingEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
    });
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(loadListings({ isLoadMore: true, url: url }));
  }
}
