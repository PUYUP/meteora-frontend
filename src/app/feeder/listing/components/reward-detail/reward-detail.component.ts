import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteReward,
  loadReward,
} from 'src/app/feeder/store/actions/reward/reward.actions';
import { selectReward } from 'src/app/feeder/store/selectors/reward/reward.selectors';
import { AppState } from 'src/app/store/reducers';
import Swal from 'sweetalert2';
import { RewardEditorModalComponent } from '../reward-editor-modal/reward-editor-modal.component';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.component.html',
  styleUrls: ['./reward-detail.component.css'],
})
export class RewardDetailComponent implements OnInit {
  rewardUUID: any;
  reward$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private matDialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.rewardUUID = this.route.snapshot.paramMap.get('reward_uuid');

    this.store.dispatch(loadReward({ uuid: this.rewardUUID }));
    this.reward$ = this.store.pipe(
      select(selectReward({ uuid: this.rewardUUID }))
    );
  }

  edit(data: any): void {
    const dialogRef = this.matDialog.open(RewardEditorModalComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 550,
      maxHeight: '90vh',
      width: '550px',
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
        this.store.dispatch(deleteReward({ uuid: uuid }));
      }
    });
  }

  back(): void {
    this.location.back();
  }
}
