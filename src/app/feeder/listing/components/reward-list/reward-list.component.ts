import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadRewards } from 'src/app/feeder/store/actions/reward/reward.actions';
import { selectRewards } from 'src/app/feeder/store/selectors/reward/reward.selectors';
import { AppState } from 'src/app/store/reducers';
import { RewardEditorModalComponent } from '../reward-editor-modal/reward-editor-modal.component';

@Component({
  selector: 'app-reward-list',
  templateUrl: './reward-list.component.html',
  styleUrls: ['./reward-list.component.css'],
})
export class RewardListComponent implements OnInit {
  @Input('fragment_uuid') fragmentUUID: any;
  @Input('fragment') fragment: any;

  reward$: Observable<any> | undefined;

  // MatPaginator Output
  pageSize = 25;
  pageEvent: PageEvent | undefined;

  constructor(private matDialog: MatDialog, private store: Store<AppState>) {
    this.reward$ = this.store.pipe(select(selectRewards));
  }

  ngOnInit(): void {
    this.store.dispatch(loadRewards({ fragment: this.fragmentUUID }));
  }

  addReward(fragment: any): void {
    const dialogRef = this.matDialog.open(RewardEditorModalComponent, {
      closeOnNavigation: true,
      disableClose: true,
      maxWidth: 550,
      maxHeight: '90vh',
      width: '550px',
      data: {
        fragment: fragment,
      },
    });
  }

  pageChangeEvent(event: any, data: any): void {
    let previous = data?.previous;
    let next = data?.next;

    let direction =
      event?.pageIndex > event?.previousPageIndex ? 'next' : 'prev';

    let url = direction == 'next' ? next : previous;
    this.store.dispatch(
      loadRewards({ isLoadMore: true, url: url, fragment: this.fragmentUUID })
    );
  }
}
