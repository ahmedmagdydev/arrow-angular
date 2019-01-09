import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UtilService } from '../util/util.service';
import {authenticationNavigate} from '../../shared/app-navigation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private utilService: UtilService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    const userToken = this.utilService.getUserToken();
    return (userToken != null) ? true: this.router.navigate([authenticationNavigate.login]);   
  }
}
