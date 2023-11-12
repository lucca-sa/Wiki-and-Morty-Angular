import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { LocationListComponent } from './location-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LocationSearchFormComponent } from 'src/app/shared/components/search-form/location-search-form.component';

@NgModule({
  declarations: [LocationListComponent, LocationSearchFormComponent],
  imports: [CommonModule, LocationListRoutingModule, InfiniteScrollModule],
})
export class LocationListModule {}
