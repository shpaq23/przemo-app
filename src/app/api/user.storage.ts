import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { User } from 'src/app/domain/User';

@Injectable({providedIn: 'root'})
export class UserStorage {

  private readonly user$ = new ReplaySubject<User>(1);


  selectUser(): Observable<User> {
    return this.user$.asObservable();
  }

  setUser(user: User): void {
    this.user$.next(user);
  }

}
