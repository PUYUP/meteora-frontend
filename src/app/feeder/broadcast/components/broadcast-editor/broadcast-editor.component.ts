import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createBroadcast,
  updateBroadcast,
} from 'src/app/feeder/store/actions/broadcast/broadcast.actions';
import { selectBroadcasts } from 'src/app/feeder/store/selectors/broadcast/broadcast.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-broadcast-editor',
  templateUrl: './broadcast-editor.component.html',
  styleUrls: ['./broadcast-editor.component.css'],
})
export class BroadcastEditorComponent implements OnInit {
  @Output() broadcastEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  broadcast$: Observable<any> | undefined;
  formGroup: any = FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.broadcast$ = this.store.pipe(select(selectBroadcasts));
    this.broadcast$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
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

    if (this.data?.broadcast?.uuid) {
      this.formGroup.patchValue({
        label: this.data?.broadcast?.label,
        description: this.data?.broadcast?.description,
        message: this.data?.broadcast?.message,
      });
    }
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      label: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
      description: [''],
      message: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.data?.broadcast?.uuid) {
      this.store.dispatch(
        updateBroadcast({
          data: this.formGroup.value,
          uuid: this.data?.broadcast?.uuid,
        })
      );
    } else {
      this.store.dispatch(
        createBroadcast({
          data: {
            ...this.formGroup.value,
            product: this.data?.product,
            fragment: this.data?.fragment,
            targets: this.data?.targets,
          },
        })
      );
    }
  }

  cancel(): void {
    this.broadcastEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
