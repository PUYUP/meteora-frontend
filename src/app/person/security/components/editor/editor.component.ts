import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  createSecurecode,
  resetSecurecode,
} from 'src/app/person/store/actions/securecode/securecode.actions';
import { updateUser } from 'src/app/person/store/actions/user/user.actions';
import { personSelectSecurecode } from 'src/app/person/store/selectors/securecode/securecode.selectors';
import { personSelectUser } from 'src/app/person/store/selectors/user/user.selectors';
import { SecurecodeValidationDialogComponent } from 'src/app/shared/securecode-validation-dialog/securecode-validation-dialog.component';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  userData$: Observable<any> | undefined;
  securecode$: Observable<any> | undefined;
  private onDestroy$ = new Subject<void>();

  user: any;
  username: string | undefined;
  email: string | undefined;
  securecodeStatus: string | undefined;

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    // Listening user...
    this.userData$ = this.store.pipe(select(personSelectUser));
    this.userData$.pipe(takeUntil(this.onDestroy$)).subscribe((state: any) => {
      if (state?.status != 'loading') {
        this.user = state?.data?.user;
        this.username = this.user?.username;
        this.email = this.user?.email;
      }
    });

    // Listening securecode
    this.securecode$ = this.store.pipe(select(personSelectSecurecode));
    this.securecode$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((state: any) => {
        let isVerified = state?.data?.is_verified;
        let challenge = state?.data?.challenge;
        let showDialog =
          challenge == 'change_email' || challenge == 'change_msisdn';

        if (state?.status != 'loading' && showDialog && !isVerified) {
          this.validateSecurecodeDialog(state?.data);
        }

        this.securecodeStatus = state?.status;
      });
  }

  ngOnInit(): void {}

  validateSecurecodeDialog(data: any): void {
    const dialogRef = this.dialog.open(SecurecodeValidationDialogComponent, {
      disableClose: true,
      autoFocus: false,
      data: data,
      maxWidth: 350,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.passcode && result?.is_verified) {
        let issuer = result?.issuer;
        let issuerType = result?.issuer_type;

        let data = {
          [issuerType]: issuer,
          validation: {
            passcode: result?.passcode,
            token: result?.token,
            challenge: result?.challenge,
          },
        };

        this.store.dispatch(
          updateUser({ hexid: this.user?.hexid, data: data })
        );
      } else {
        this.email = this.user?.email;
      }

      this.store.dispatch(resetSecurecode());
    });
  }

  usernameChange(event: any): void {
    if (event.value) this.username = event.value;
  }

  emailChange(event: any): void {
    if (event.value) this.email = event.value;
  }

  securitySave(field: string) {
    let data = {};

    if (field === 'email') {
      data = {
        issuer: this.email,
        challenge: 'change_email',
      };

      return this.store.dispatch(createSecurecode({ data: data }));
    } else {
      data = { username: this.username };
    }

    return this.store.dispatch(
      updateUser({ hexid: this.user?.hexid, data: data })
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
