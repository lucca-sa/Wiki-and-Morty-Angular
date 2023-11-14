import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { BackgroundVideoModule } from 'src/app/shared/components/background-video/background-video.module';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    BackgroundVideoModule,
  ],
})
export class SignupModule {}
