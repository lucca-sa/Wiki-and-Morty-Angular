import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationDetailsRoutingModule } from './location-details-routing.module';
import { LocationDetailsComponent } from './location-details.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

@NgModule({
  declarations: [LocationDetailsComponent],
  imports: [CommonModule, LocationDetailsRoutingModule, HeaderModule],
})
export class LocationDetailsModule {}
