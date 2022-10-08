import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { loadProducts } from 'src/app/feeder/store/actions/product/product.actions';
import { selectProducts } from 'src/app/feeder/store/selectors/product/product.selectors';
import { selectSuggests } from 'src/app/feeder/store/selectors/suggest/suggest.selectors';
import { AppState } from 'src/app/store/reducers';
import { loadSuggests } from '../../../store/actions/suggest/suggest.actions';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-suggest-list',
  templateUrl: './suggest-list.component.html',
  styleUrls: ['./suggest-list.component.css'],
})
export class SuggestListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: any;

  suggest$: Observable<any> | undefined;
  product$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;
  pageIndex = 0;

  ratingValue: any;
  productValue: any;

  // keyword filter
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  keywords: any = [];

  constructor(private store: Store<AppState>) {
    this.suggest$ = this.store.pipe(select(selectSuggests));
    this.product$ = this.store.pipe(select(selectProducts));
  }

  ngOnInit(): void {
    this.store.dispatch(loadSuggests({}));
    this.store.dispatch(loadProducts({}));
  }

  productSelected(event: any): void {
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.productValue = event.value;

    this.store.dispatch(
      loadSuggests({
        product: this.productValue,
        rating: this.ratingValue,
        keyword: this.keywords.join(','),
      })
    );
  }

  ratingSelected(event: any): void {
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.ratingValue = event.value;

    this.store.dispatch(
      loadSuggests({
        product: this.productValue,
        rating: this.ratingValue,
        keyword: this.keywords.join(','),
      })
    );
  }

  pageChangeEvent(event: any, data: any): void {
    this.pageIndex = event?.pageIndex;

    let previous = data?.previous;
    let next = data?.next;
    let direction = this.pageIndex > event?.previousPageIndex ? 'next' : 'prev';
    let url = direction == 'next' ? next : previous;

    this.store.dispatch(
      loadSuggests({
        isLoadMore: true,
        url: url,
      })
    );
  }

  /**
   * Keyword filter
   */
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    this.store.dispatch(
      loadSuggests({
        product: this.productValue,
        rating: this.ratingValue,
        keyword: this.keywords.join(','),
      })
    );

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(keyword: any): void {
    const index = this.keywords.findIndex((d: any) => d == keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }

    this.store.dispatch(
      loadSuggests({
        product: this.productValue,
        rating: this.ratingValue,
        keyword: this.keywords.join(','),
      })
    );
  }
}
