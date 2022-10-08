import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadRedeems } from 'src/app/feeder/store/actions/redeem/redeem.actions';
import { createTaken } from 'src/app/feeder/store/actions/taken/taken.actions';
import { selectRedeems } from 'src/app/feeder/store/selectors/redeem/redeem.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-redeem-list',
  templateUrl: './redeem-list.component.html',
  styleUrls: ['./redeem-list.component.css'],
})
export class RedeemListComponent implements OnInit {
  redeem$: Observable<any> | undefined;
  identifier: string | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadRedeems({}));
    this.redeem$ = this.store.pipe(select(selectRedeems));
  }

  listenIdentifier(event: any) {
    this.identifier = event.target.value;

    setTimeout(() => {
      this.store.dispatch(loadRedeems({ identifier: this.identifier }));
    }, 500);
  }

  markTaken(item: any) {
    this.store.dispatch(createTaken({ data: { redeem: item.uuid } }));
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(
      loadRedeems({ isLoadMore: true, url: url, identifier: this.identifier })
    );
  }
}
