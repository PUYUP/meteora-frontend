import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createReward,
  updateReward,
} from 'src/app/feeder/store/actions/reward/reward.actions';
import { selectRewards } from 'src/app/feeder/store/selectors/reward/reward.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-reward-editor',
  templateUrl: './reward-editor.component.html',
  styleUrls: ['./reward-editor.component.css'],
})
export class RewardEditorComponent implements OnInit {
  @Output() rewardEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  formGroup: any = FormGroup;
  reward$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.reward$ = this.store.pipe(select(selectRewards));
    this.reward$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
      if (
        state?.status == 'loaded' &&
        (state?.action == 'create' || state?.action == 'update')
      ) {
        this.cancel();
      }
    });
  }

  ngOnInit(): void {
    this.initForm();

    if (this.data?.uuid) {
      this.formGroup.patchValue({
        provider: this.data?.provider,
        label: this.data?.label,
        description: this.data?.description,
        term: this.data?.term,
        amount: this.data?.amount,
        unit_slug: this.data?.unit_slug,
        unit_label: this.data?.unit_label,
        allocation: this.data?.allocation,
        start_at: this.data?.start_at,
        expiry_at: this.data?.expiry_at,
      });
    }
  }

  initForm(): void {
    let start_at = this.data?.fragment?.expiry_at;
    let expiry_at = this.data?.fragment?.expiry_at;

    this.formGroup = this.fb.group({
      provider: ['', [Validators.required]],
      label: ['', [Validators.required]],
      description: [''],
      term: [''],
      amount: ['', [Validators.required]],
      unit_slug: ['', [Validators.required]],
      unit_label: ['', [Validators.required]],
      allocation: ['', [Validators.required]],
      start_at: [start_at ? start_at : '', [Validators.required]],
      expiry_at: [expiry_at ? expiry_at : '', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.data?.uuid) {
      this.store.dispatch(
        updateReward({ data: this.formGroup.value, uuid: this.data?.uuid })
      );
    } else {
      this.store.dispatch(
        createReward({
          data: {
            ...this.formGroup.value,
            content_type: 'fragment',
            object_id: this.data?.fragment?.uuid,
          },
        })
      );
    }
  }

  cancel(): void {
    this.rewardEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
