import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createProduct,
  updateProduct,
} from 'src/app/feeder/store/actions/product/product.actions';
import { selectProducts } from 'src/app/feeder/store/selectors/product/product.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css'],
})
export class ProductEditorComponent implements OnInit {
  @Output() productEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  formGroup: any = FormGroup;
  product$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.product$ = this.store.pipe(select(selectProducts));
    this.product$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
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
        label: this?.data?.label,
        description: this?.data?.description,
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
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.data?.uuid) {
      this.store.dispatch(
        updateProduct({ data: this.formGroup.value, uuid: this.data?.uuid })
      );
    } else {
      this.store.dispatch(
        createProduct({
          data: { ...this.formGroup.value, listing: this.data?.listing_uuid },
        })
      );
    }
  }

  cancel(): void {
    this.productEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
