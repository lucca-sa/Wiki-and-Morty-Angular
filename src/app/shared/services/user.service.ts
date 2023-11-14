import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUserNameSubject = new BehaviorSubject<string | null>(null);
  loggedInUserName$ = this.loggedInUserNameSubject.asObservable();

  updateLoggedInUserName(loggedInUserName: string | null) {
    this.loggedInUserNameSubject.next(loggedInUserName);
  }
}
