import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Cria um BehaviorSubject para armazenar o nome do usuário logado
  private loggedInUserNameSubject = new BehaviorSubject<string | null>(null);

  // Cria um Observable a partir do BehaviorSubject para permitir que outros componentes assinem e recebam atualizações
  loggedInUserName$ = this.loggedInUserNameSubject.asObservable();

  updateLoggedInUserName(loggedInUserName: string | null) {
    // Emite uma nova atualização para todos os assinantes do Observable
    this.loggedInUserNameSubject.next(loggedInUserName);
  }
}
