import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BackgroundVideoModule } from 'src/app/shared/components/background-video/background-video.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

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
