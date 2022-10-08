import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadInteractions } from 'src/app/feeder/store/actions/interaction/interaction.actions';
import { selectInteractions } from 'src/app/feeder/store/selectors/interaction/interaction.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-interaction-list',
  templateUrl: './interaction-list.component.html',
  styleUrls: ['./interaction-list.component.css'],
})
export class InteractionListComponent implements OnInit {
  @Input('suggest_uuid') suggestUUID: any;

  interactions$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>) {
    this.interactions$ = this.store.pipe(select(selectInteractions));
  }

  ngOnInit(): void {
    this.store.dispatch(loadInteractions({ suggest: this.suggestUUID }));
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(
      loadInteractions({
        suggest: this.suggestUUID,
        isLoadMore: true,
        url: url,
      })
    );
  }
}
