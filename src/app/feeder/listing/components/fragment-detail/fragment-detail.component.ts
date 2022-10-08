import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteFragment,
  loadFragment,
} from 'src/app/feeder/store/actions/fragment/fragment.actions';
import { selectFragment } from 'src/app/feeder/store/selectors/fragment/fragment.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import { FragmentEditorDialogComponent } from '../fragment-editor-dialog/fragment-editor-dialog.component';

@Component({
  selector: 'app-fragment-detail',
  templateUrl: './fragment-detail.component.html',
  styleUrls: ['./fragment-detail.component.css'],
})
export class FragmentDetailComponent implements OnInit {
  fragmentUUID: any;
  fragment$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.fragmentUUID = this.route.snapshot.paramMap.get('fragment_uuid');

    this.store.dispatch(loadFragment({ uuid: this.fragmentUUID }));
    this.fragment$ = this.store.pipe(
      select(selectFragment({ uuid: this.fragmentUUID }))
    );
  }

  edit(data: any): void {
    const dialogRef = this.matDialog.open(FragmentEditorDialogComponent, {
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
        this.store.dispatch(deleteFragment({ uuid: uuid }));
      }
    });
  }

  back(): void {
    this.location.back();
  }
}
