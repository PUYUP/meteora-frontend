import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import {
  deleteListing,
  loadListing,
} from 'src/app/feeder/store/actions/listing/listing.actions';
import { selectListing } from 'src/app/feeder/store/selectors/listing/listing.selectors';
import { ListingEditorDialogComponent } from 'src/app/shared/listing-editor-dialog/listing-editor-dialog.component';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
})
export class ListingDetailComponent implements OnInit {
  listingUUID: any | undefined;
  listing$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.listingUUID =
      this.route.snapshot.paramMap.get('listing_uuid') || undefined;

    this.store.dispatch(loadListing({ uuid: this.listingUUID }));
    this.listing$ = this.store.pipe(
      select(selectListing({ uuid: this.listingUUID }))
    );
  }

  edit(data: any): void {
    const dialogRef = this.matDialog.open(ListingEditorDialogComponent, {
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
      text: 'Tindakan ini menghapus semua produk dan saran dari bisnis ini. Anda akan kehilangan banyak data penting.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, Hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deleteListing({ uuid: uuid }));
      }
    });
  }

  back(): void {
    this.location.back();
  }
}
