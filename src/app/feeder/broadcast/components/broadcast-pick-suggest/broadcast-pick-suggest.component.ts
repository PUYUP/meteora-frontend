import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadFragments,
  resetFragment,
} from 'src/app/feeder/store/actions/fragment/fragment.actions';
import { loadProducts } from 'src/app/feeder/store/actions/product/product.actions';
import {
  loadSuggests,
  resetSuggests,
} from 'src/app/feeder/store/actions/suggest/suggest.actions';
import { selectFragments } from 'src/app/feeder/store/selectors/fragment/fragment.selectors';
import { selectProducts } from 'src/app/feeder/store/selectors/product/product.selectors';
import { selectSuggests } from 'src/app/feeder/store/selectors/suggest/suggest.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import { BroadcastEditorDialogComponent } from '../broadcast-editor-dialog/broadcast-editor-dialog.component';

@Component({
  selector: 'app-broadcast-pick-suggest',
  templateUrl: './broadcast-pick-suggest.component.html',
  styleUrls: ['./broadcast-pick-suggest.component.css'],
})
export class BroadcastPickSuggestComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: any;

  selectedSuggests: any;
  canal: any = 'email';
  productUUID: any = '';
  fragmentUUID: any = '';
  rating: any = '';

  product$: Observable<any> | undefined;
  fragment$: Observable<any> | undefined;
  suggest$: Observable<any> | undefined;

  // MatPaginator Output
  pageIndex = 0;
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private store: Store<AppState>, private matDialog: MatDialog) {
    this.store.dispatch(resetSuggests());

    this.suggest$ = this.store.pipe(select(selectSuggests));
    this.product$ = this.store.pipe(select(selectProducts));
    this.fragment$ = this.store.pipe(select(selectFragments));
  }

  ngOnInit(): void {
    this.store.dispatch(loadProducts({}));
    this.store.dispatch(
      loadSuggests({
        product: this.productUUID,
        fragment: this.fragmentUUID,
        canal: this.canal,
        rating: this.rating,
      })
    );
  }

  productSelected(event: any): void {
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.productUUID = event.value;

    if (this.productUUID) {
      this.store.dispatch(loadFragments({ product: this.productUUID }));
    } else {
      this.store.dispatch(resetFragment());
    }

    this.store.dispatch(
      loadSuggests({
        product: this.productUUID,
        fragment: this.fragmentUUID,
        canal: this.canal,
        rating: this.rating,
      })
    );
  }

  fragmentSelected(event: any): void {
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.fragmentUUID = event.value;

    this.store.dispatch(
      loadSuggests({
        product: this.productUUID,
        fragment: this.fragmentUUID,
        canal: this.canal,
        rating: this.rating,
      })
    );
  }

  ratingSelected(event: any): void {
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.rating = event.value;

    this.store.dispatch(
      loadSuggests({
        product: this.productUUID,
        fragment: this.fragmentUUID,
        canal: this.canal,
        rating: this.rating,
      })
    );
  }

  canalSelected(event: any): void {
    this.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.canal = event.value;

    if (this.canal == 'email') {
      this.store.dispatch(
        loadSuggests({
          product: this.productUUID,
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

  startBroadcast(): void {
    console.log(this.selectedSuggests);

    let targets = [];

    for (let item of this.selectedSuggests) {
      let d = {
        suggest: item,
        method: this.canal,
      };

      targets.push(d);
    }

    const dialogRef = this.matDialog.open(BroadcastEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        broadcast: null,
        product: this.productUUID,
        fragment: this.fragmentUUID,
        targets: targets,
      },
    });
  }
}
