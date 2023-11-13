import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationDetailsRoutingModule } from './location-details-routing.module';
import { LocationDetailsComponent } from './location-details.component';


@NgModule({
  declarations: [
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    LocationDetailsRoutingModule
  ]
})
export class LocationDetailsModule { }
