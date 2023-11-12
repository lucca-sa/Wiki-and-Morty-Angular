import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { LocationListComponent } from './location-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [LocationListComponent],
  imports: [CommonModule, LocationListRoutingModule, InfiniteScrollModule],
})
export class LocationListModule {}
