import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackgroundVideoComponent } from './background-video.component';

@NgModule({
  declarations: [BackgroundVideoComponent],
  imports: [CommonModule],
  exports: [BackgroundVideoComponent],
})
export class BackgroundVideoModule {}
