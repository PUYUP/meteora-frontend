import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadBroadcasts } from 'src/app/feeder/store/actions/broadcast/broadcast.actions';
import { selectBroadcasts } from 'src/app/feeder/store/selectors/broadcast/broadcast.selectors';
import { AppState } from 'src/app/store/reducers';
import { BroadcastEditorDialogComponent } from '../broadcast-editor-dialog/broadcast-editor-dialog.component';

@Component({
  selector: 'app-broadcast-list',
  templateUrl: './broadcast-list.component.html',
  styleUrls: ['./broadcast-list.component.css'],
})
export class BroadcastListComponent implements OnInit {
  broadcast$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadBroadcasts({}));
    this.broadcast$ = this.store.pipe(select(selectBroadcasts));
  }

  addBroadcast(): void {
    const dialogRef = this.matDialog.open(BroadcastEditorDialogComponent, {
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
    this.store.dispatch(loadBroadcasts({ isLoadMore: true, url: url }));
  }
}
