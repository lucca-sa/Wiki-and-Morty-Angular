import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Character } from '../Interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacters(query = '', page = 1) {
    // Constrói a URL da API com o termo de pesquisa e número da página
    const filter = `${environment.baseUrlAPI}character/?name=${query}&page=${page}`;
    // Realiza a chamada GET à API e retorna a resposta como um array de personagens
    return this.http.get<Character[]>(filter);
  }

  getDetails(id: number) {
    // Constrói a URL da API para obter detalhes de um personagem com base no ID
    return this.http.get<Character>(`${environment.baseUrlAPI}character/${id}`);
  }
}
