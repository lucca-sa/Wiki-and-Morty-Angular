import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Location } from '../Interfaces/location.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  searchLocations(query = '', page = 1) {
    const filter = `${environment.baseUrlAPI}location/?name=${query}&page=${page}`;
    return this.http.get<Location[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Location>(`${environment.baseUrlAPI}location/${id}`);
  }
}
