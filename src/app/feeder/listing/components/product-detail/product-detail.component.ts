import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteProduct,
  loadProduct,
} from 'src/app/feeder/store/actions/product/product.actions';
import { selectProduct } from 'src/app/feeder/store/selectors/product/product.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import { ProductEditorModalComponent } from '../product-editor-modal/product-editor-modal.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productUUID: any;
  product$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productUUID = this.route.snapshot.paramMap.get('product_uuid');

    this.store.dispatch(loadProduct({ uuid: this.productUUID }));
    this.product$ = this.store.pipe(
      select(selectProduct({ uuid: this.productUUID }))
    );
  }

  edit(data: any): void {
    const dialogRef = this.matDialog.open(ProductEditorModalComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: data,
    });
  }

  delete(uuid: any): void {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Tindakan ini menghapus semua saran dari produk ini. Anda akan kehilangan banyak data penting.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, Hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deleteProduct({ uuid: uuid }));
      }
    });
  }

  back(): void {
    this.location.back();
  }
}
