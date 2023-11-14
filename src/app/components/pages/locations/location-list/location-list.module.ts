import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { LocationListComponent } from './location-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedFormModule } from 'src/app/shared/components/search-form/search-form.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

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
