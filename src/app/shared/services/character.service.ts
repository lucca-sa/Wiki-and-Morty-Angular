import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '../Interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 1) {
    const filter = `${environment.baseUrlAPI}character/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }

  getDetails(id: number) {
    return this.http.get<Character>(`${environment.baseUrlAPI}character/${id}`);
  }
}