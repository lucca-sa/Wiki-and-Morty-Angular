import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { SharedFormModule } from 'src/app/shared/components/search-form/search-form.module';
import { LocationListRoutingModule } from './location-list-routing.module';
import { LocationListComponent } from './location-list.component';

@NgModule({
  declarations: [LocationListComponent],
  imports: [
    CommonModule,
    LocationListRoutingModule,
    InfiniteScrollModule,
    SharedFormModule,
    HeaderModule,
  ],
})
export class LocationListModule {}
