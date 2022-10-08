import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    IntroRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
})
export class IntroModule {}
