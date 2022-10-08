import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createListing,
  updateListing,
} from 'src/app/feeder/store/actions/listing/listing.actions';
import { selectListings } from 'src/app/feeder/store/selectors/listing/listing.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-listing-editor',
  templateUrl: './listing-editor.component.html',
  styleUrls: ['./listing-editor.component.css'],
})
export class ListingEditorComponent implements OnInit {
  @Output() listingEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  listing$: Observable<any> | undefined;
  formGroup: any = FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.listing$ = this.store.pipe(select(selectListings));
    this.listing$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
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

    if (this.data) {
      this.formGroup.patchValue({
        label: this.data?.label,
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
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.data?.uuid) {
      this.store.dispatch(
        updateListing({ data: this.formGroup.value, uuid: this.data?.uuid })
      );
    } else {
      this.store.dispatch(createListing({ data: this.formGroup.value }));
    }
  }

  cancel(): void {
    this.listingEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
