import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackgroundVideoModule } from 'src/app/shared/components/background-video/background-video.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    BackgroundVideoModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
