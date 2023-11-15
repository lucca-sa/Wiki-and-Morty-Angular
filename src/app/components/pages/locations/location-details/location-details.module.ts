import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { LocationDetailsRoutingModule } from './location-details-routing.module';
import { LocationDetailsComponent } from './location-details.component';

@NgModule({
  declarations: [LocationDetailsComponent],
  imports: [CommonModule, LocationDetailsRoutingModule, HeaderModule],
})
export class LocationDetailsModule {}
