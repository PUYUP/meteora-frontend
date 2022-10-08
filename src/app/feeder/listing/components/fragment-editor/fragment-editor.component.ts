import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createFragment,
  updateFragment,
} from 'src/app/feeder/store/actions/fragment/fragment.actions';
import { selectFragments } from 'src/app/feeder/store/selectors/fragment/fragment.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-fragment-editor',
  templateUrl: './fragment-editor.component.html',
  styleUrls: ['./fragment-editor.component.css'],
})
export class FragmentEditorComponent implements OnInit {
  @Output() fragmentEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  formGroup: any = FormGroup;
  fragment$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.fragment$ = this.store.pipe(select(selectFragments));
    this.fragment$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
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
        label: this.data?.label,
        start_at: this.data?.start_at,
        expiry_at: this.data?.expiry_at,
        description: this.data?.description,
      });
    }
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      label: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      start_at: ['', [Validators.required]],
      expiry_at: ['', [Validators.required]],
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.data?.uuid) {
      this.store.dispatch(
        updateFragment({ data: this.formGroup.value, uuid: this.data?.uuid })
      );
    } else {
      this.store.dispatch(
        createFragment({
          data: { ...this.formGroup.value, product: this.data?.product_uuid },
        })
      );
    }
  }

  cancel(): void {
    this.fragmentEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
