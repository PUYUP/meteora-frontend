import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRecoveryRoutingModule } from './password-recovery-routing.module';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [PasswordRecoveryComponent],
  imports: [
    CommonModule,
    PasswordRecoveryRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
  ],
})
export class PasswordRecoveryModule {}
