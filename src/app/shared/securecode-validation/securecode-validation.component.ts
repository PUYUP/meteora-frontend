import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { validateSecurecode } from 'src/app/person/store/actions/securecode/securecode.actions';
import { personSelectSecurecode } from 'src/app/person/store/selectors/securecode/securecode.selectors';
import { AppState } from 'src/app/store/reducers';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-securecode-validation',
  templateUrl: './securecode-validation.component.html',
  styleUrls: ['./securecode-validation.component.css'],
})
export class SecurecodeValidationComponent implements OnInit {
  @Input('token') token: string | undefined;
  @Input('challenge') challenge: string | undefined;
  @Input('issuer') issuer: string | undefined;

  securecode$: Observable<any> | undefined;
  formGroup: any = FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.securecode$ = this.store.pipe(select(personSelectSecurecode));
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = this.fb.group({
      passcode: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  onSubmit(): void {
    const data = {
      token: this.token,
      challenge: this.challenge,
    };

    this.store.dispatch(
      validateSecurecode({
        passcode: this.formGroup.value.passcode,
        data: data,
      })
    );
  }
}
