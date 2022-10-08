import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import {
  deleteSpread,
  loadSpread,
} from 'src/app/feeder/store/actions/spread/spread.actions';
import { selectSpread } from 'src/app/feeder/store/selectors/spread/spread.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import { SpreadEditorDialogComponent } from '../spread-editor-dialog/spread-editor-dialog.component';

import * as htmlToImage from 'html-to-image';
import * as downloadjs from 'downloadjs';

@Component({
  selector: 'app-spread-detail',
  templateUrl: './spread-detail.component.html',
  styleUrls: ['./spread-detail.component.css'],
})
export class SpreadDetailComponent implements OnInit {
  spreadUUID: any;
  spread$: Observable<any> | undefined;

  @ViewChild('printEl', { static: false }) printEl: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.spreadUUID = this.route.snapshot.paramMap.get('spread_uuid');

    this.store.dispatch(loadSpread({ uuid: this.spreadUUID }));
    this.spread$ = this.store.pipe(
      select(selectSpread({ uuid: this.spreadUUID }))
    );
  }

  edit(data: any): void {
    const dialogRef = this.matDialog.open(SpreadEditorDialogComponent, {
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
      text: 'Tindakan ini menghapus permanen.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, Hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.store.dispatch(deleteSpread({ uuid: uuid }));
      }
    });
  }

  printQR(name: any) {
    htmlToImage
      .toPng(this.printEl.nativeElement)
      .then(function (dataUrl) {
        downloadjs(dataUrl, name.replace(/\W+/g, '-'));
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  back(): void {
    this.location.back();
  }
}
