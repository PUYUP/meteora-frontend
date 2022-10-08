import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createInteraction,
  updateInteraction,
} from 'src/app/feeder/store/actions/interaction/interaction.actions';
import { selectInteractions } from 'src/app/feeder/store/selectors/interaction/interaction.selectors';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-interaction-editor',
  templateUrl: './interaction-editor.component.html',
  styleUrls: ['./interaction-editor.component.css'],
})
export class InteractionEditorComponent implements OnInit {
  @Output() interactionEditorEvent = new EventEmitter<any>();
  @Input('data') data: any;

  interaction$: Observable<any> | undefined;
  formGroup: any = FormGroup;
  private onDestroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.interaction$ = this.store.pipe(select(selectInteractions));
    this.interaction$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((state: any) => {
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
      description: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit(): void {
    if (this.data?.uuid) {
      this.store.dispatch(
        updateInteraction({ data: this.formGroup.value, uuid: this.data?.uuid })
      );
    } else {
      this.store.dispatch(
        createInteraction({
          data: { ...this.formGroup.value, suggest: this.data?.suggest_uuid },
        })
      );
    }
  }

  cancel(): void {
    this.interactionEditorEvent.emit({ action: 'cancel' });
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
