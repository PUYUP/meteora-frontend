import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteBroadcast,
  loadBroadcast,
} from 'src/app/feeder/store/actions/broadcast/broadcast.actions';
import { selectBroadcast } from 'src/app/feeder/store/selectors/broadcast/broadcast.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import { BroadcastEditorDialogComponent } from '../broadcast-editor-dialog/broadcast-editor-dialog.component';

@Component({
  selector: 'app-broadcast-detail',
  templateUrl: './broadcast-detail.component.html',
  styleUrls: ['./broadcast-detail.component.css'],
})
export class BroadcastDetailComponent implements OnInit {
  broadcastUUID: any | undefined;
  broadcast$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.broadcastUUID =
      this.route.snapshot.paramMap.get('broadcast_uuid') || undefined;

    this.store.dispatch(loadBroadcast({ uuid: this.broadcastUUID }));
    this.broadcast$ = this.store.pipe(
      select(selectBroadcast({ uuid: this.broadcastUUID }))
    );
  }

  edit(data: any): void {
    const dialogRef = this.matDialog.open(BroadcastEditorDialogComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 450,
      maxHeight: '90vh',
      width: '450px',
      data: {
        broadcast: data,
      },
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
        this.store.dispatch(deleteBroadcast({ uuid: uuid }));
      }
    });
  }

  back(): void {
    this.location.back();
  }
}
