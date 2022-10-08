import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  createTarget,
  loadTargets,
} from 'src/app/feeder/store/actions/target/target.actions';
import { loadFragments } from 'src/app/feeder/store/actions/fragment/fragment.actions';
import { loadListings } from 'src/app/feeder/store/actions/listing/listing.actions';
import { loadProducts } from 'src/app/feeder/store/actions/product/product.actions';
import {
  loadSuggests,
  resetSuggests,
} from 'src/app/feeder/store/actions/suggest/suggest.actions';
import { selectTargets } from 'src/app/feeder/store/selectors/target/target.selectors';
import { selectFragments } from 'src/app/feeder/store/selectors/fragment/fragment.selectors';
import { selectListings } from 'src/app/feeder/store/selectors/listing/listing.selectors';
import { selectProducts } from 'src/app/feeder/store/selectors/product/product.selectors';
import { selectSuggests } from 'src/app/feeder/store/selectors/suggest/suggest.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-broadcast-select-suggest',
  templateUrl: './broadcast-select-suggest.component.html',
  styleUrls: ['./broadcast-select-suggest.component.css'],
})
export class BroadcastSelectSuggestComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: any;

  @Input('broadcast_uuid') broadcastUUID: any;
  @Input('broadcast_data') broadcastData: any;

  selectedSuggests: any;
  canal: any;
  fragmentUUID: any;
  rating: any;

  listing$: Observable<any> | undefined;
  product$: Observable<any> | undefined;
  fragment$: Observable<any> | undefined;
  suggest$: Observable<any> | undefined;
  target$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(resetSuggests());

    this.suggest$ = this.store.pipe(select(selectSuggests));
    this.target$ = this.store.pipe(select(selectTargets));
    this.listing$ = this.store.pipe(select(selectListings));
    this.fragment$ = this.store.pipe(select(selectFragments));
  }

  ngOnInit(): void {
    // Fragments
    this.store.dispatch(
      loadFragments({ product: this.broadcastData?.product })
    );
  }

  fragmentSelected(event: any): void {
    this.fragmentUUID = event.value;
  }

  startBroadcast(): void {
    let datas = [];

    for (let item of this.selectedSuggests) {
      let d = {
        broadcast: this.broadcastUUID,
        suggest: item,
        method: this.canal,
      };

      datas.push(d);
    }

    this.store.dispatch(createTarget({ data: datas }));
  }

  canalSelected(event: any): void {
    this.paginator.pageIndex = 0;

    this.canal = event.value;

    if (this.canal == 'email') {
      this.store.dispatch(
        loadSuggests({
          fragment: this.fragmentUUID,
          canal: this.canal,
          rating: this.rating,
        })
      );
    } else {
      Swal.fire({
        title: 'Informasi',
        text: 'Hubungi kami untuk fitur ini',
        showCancelButton: true,
        cancelButtonText: 'Tutup',
        showConfirmButton: false,
        icon: 'warning',
      });
    }
  }

  ratingChange(event: any): void {
    this.paginator.pageIndex = 0;

    this.rating = event.value;

    this.store.dispatch(
      loadSuggests({
        fragment: this.fragmentUUID,
        canal: this.canal,
        rating: this.rating,
      })
    );
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(
      loadSuggests({
        isLoadMore: true,
        url: url,
        fragment: this.fragmentUUID,
        canal: this.canal,
        rating: this.rating,
      })
    );
  }
}
