import { Injectable } from '@angular/core';

import { TokenService } from '../token/token.service';
import { User } from './user';

const USER_KEY = "user";

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private tokenService: TokenService) { }

  hasUser() {
    return !!window.localStorage.getItem(USER_KEY);
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
  }

  setUser(user: User) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(window.localStorage.getItem(USER_KEY)) as User;
  }

  logout() {
    this.tokenService.removeToken();
    window.localStorage.removeItem(USER_KEY);
  }

  isLogged() {
    return this.tokenService.hasToken() && this.hasUser();
  }
}