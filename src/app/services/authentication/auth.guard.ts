import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilService } from '../util/util.service';
import {authenticationNavigateRoot} from '../../config/app-navigation';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private utilService: UtilService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    const authorized = this.authService.checkLoggedInUser();
    return authorized ? true: this.router.navigate([authenticationNavigateRoot]);     
  }
}
