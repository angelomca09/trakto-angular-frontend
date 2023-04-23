import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

const API_URL = 'https://api.trakto.io';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(email: string, password: string) {

    return this.http
      .post(
        API_URL + '/auth/signin',
        { email, password },
        { observe: 'response' }
      )
      .pipe(tap(res => {
        const user = res.body as User;
        const authToken = user.access_token;
        this.userService.setToken(authToken);
        this.userService.setUser(user);
      }));
  }
}