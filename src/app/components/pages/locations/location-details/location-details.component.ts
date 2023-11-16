import { Location as AngularLocation } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, take } from 'rxjs';
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
    // Obtém os parâmetros da rota
    this.route.params.pipe(take(1)).subscribe((params) => {
      // Extrai o ID do parâmetro
      const id = params['id'];
      // Chama o serviço para obter os detalhes da localização
      this.location$ = this.locationService.getDetails(id);
    });
  }

  onGoBack(): void {
    this.angularLocation.back();
  }
}
