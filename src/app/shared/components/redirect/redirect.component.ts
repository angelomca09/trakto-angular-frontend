import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    window.location.href = route.data['externalUrl'];
    return true;

  }
}