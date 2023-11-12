import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location as AngularLocation } from '@angular/common';

import { take } from 'rxjs';
import { Observable } from 'rxjs';
import { Location } from 'src/app/shared/Interfaces/location.interface';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent {
  location$?: Observable<Location>;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    private angularLocation: AngularLocation
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.location$ = this.locationService.getDetails(id);
    });
  }

  onGoBack(): void {
    this.angularLocation.back();
  }
}
