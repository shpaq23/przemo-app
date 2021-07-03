import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/domain/User';
import { UserDto } from 'src/app/infrastructure/user/user.dto';
import { UserRequest } from 'src/app/infrastructure/user/user.request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserHttpResource {

  private readonly url: string = 'http://localhost:8080'

  constructor(private readonly httpClient: HttpClient) {
  }

  login(request: UserRequest): Observable<User> {
    return this.httpClient.post<UserDto>(this.url, request).pipe(
      map(dto => new User(dto.id, request.email))
    );
  }
}
