import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSpreads } from 'src/app/feeder/store/actions/spread/spread.actions';
import { selectSpreads } from 'src/app/feeder/store/selectors/spread/spread.selectors';
import { AppState } from 'src/app/store/reducers';
import { SpreadEditorDialogComponent } from '../spread-editor-dialog/spread-editor-dialog.component';

@Component({
  selector: 'app-spread-list',
  templateUrl: './spread-list.component.html',
  styleUrls: ['./spread-list.component.css'],
})
export class SpreadListComponent implements OnInit {
  @Input('fragment_uuid') fragmentUUID: any;
  @Input('fragment') fragment: any;

  spread$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private matDialog: MatDialog, private store: Store<AppState>) {
    this.spread$ = this.store.pipe(select(selectSpreads));
  }

  ngOnInit(): void {
    this.store.dispatch(loadSpreads({ fragment: this.fragmentUUID }));
  }

  addSpread(fragment: any): void {
    const dialogRef = this.matDialog.open(SpreadEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        fragment: fragment,
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
      loadSpreads({ isLoadMore: true, url: url, fragment: this.fragmentUUID })
    );
  }
}
