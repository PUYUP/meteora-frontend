import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createSpread,
  updateSpread,
} from 'src/app/feeder/store/actions/spread/spread.actions';
import { selectSpreads } from 'src/app/feeder/store/selectors/spread/spread.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-spread-editor',
  templateUrl: './spread-editor.component.html',
  styleUrls: ['./spread-editor.component.css'],
})
export class SpreadEditorComponent implements OnInit {
  @Output() spreadEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  formGroup: any = FormGroup;
  spread$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.spread$ = this.store.pipe(select(selectSpreads));
    this.spread$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
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
        allocation: this.data?.allocation,
        expiry_at: this.data?.expiry_at,
        introduction: this.data?.introduction,
      });
    }
  }

  initForm(): void {
    let expiry_at = this.data?.fragment?.expiry_at;

    this.formGroup = this.fb.group({
      allocation: ['', [Validators.required]],
      expiry_at: [expiry_at ? expiry_at : '', [Validators.required]],
      introduction: [''],
    });
  }

  onSubmit(): void {
    if (this.data?.uuid) {
      this.store.dispatch(
        updateSpread({ data: this.formGroup.value, uuid: this.data?.uuid })
      );
    } else {
      this.store.dispatch(
        createSpread({
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
    this.spreadEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
