import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadFragments } from 'src/app/feeder/store/actions/fragment/fragment.actions';
import { selectFragments } from 'src/app/feeder/store/selectors/fragment/fragment.selectors';
import { AppState } from 'src/app/store/reducers';
import { FragmentEditorDialogComponent } from '../fragment-editor-dialog/fragment-editor-dialog.component';

@Component({
  selector: 'app-fragment-list',
  templateUrl: './fragment-list.component.html',
  styleUrls: ['./fragment-list.component.css'],
})
export class FragmentListComponent implements OnInit {
  @Input('product_uuid') product_uuid: any;

  fragment$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private matDialog: MatDialog, private store: Store<AppState>) {
    this.fragment$ = this.store.pipe(select(selectFragments));
  }

  ngOnInit(): void {
    this.store.dispatch(loadFragments({ product: this.product_uuid }));
  }

  addFragment(productUUID: any): void {
    const dialogRef = this.matDialog.open(FragmentEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        product_uuid: this.product_uuid,
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
      loadFragments({ isLoadMore: true, url: url, product: this.product_uuid })
    );
  }
}
