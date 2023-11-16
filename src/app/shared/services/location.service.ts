import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Location } from '../Interfaces/location.interface';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  searchLocations(query = '', page = 1) {
    // Constrói a URL da API com o termo de pesquisa e número da página
    const filter = `${environment.baseUrlAPI}location/?name=${query}&page=${page}`;
    // Realiza a chamada GET à API e retorna a resposta como um array de locações
    return this.http.get<Location[]>(filter);
  }

  getDetails(id: number) {
    // Constrói a URL da API para obter detalhes de uma localização com base no ID
    return this.http.get<Location>(`${environment.baseUrlAPI}location/${id}`);
  }
}
