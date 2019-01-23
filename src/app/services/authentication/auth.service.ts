import { Injectable } from '@angular/core';
import { UtilService } from './../util/util.service';
import { Router } from '@angular/router';
import { authenticationNavigateRoot } from './../../config/app-navigation';
import { authenticationUrls } from 'src/app/config/api-url';
import { ARROW_PREFIX } from './../../config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private utilService: UtilService) { }

  checkLoggedInUser() {
    return this.utilService.checkSessionExist('authData');    
  }

  logOut() {
    this.utilService.postResources(authenticationUrls.logout).subscribe(
      (response) => {
        if(response.code.toString() === '1226') {
          this.utilService.setLocalStorage('logout-event', 'logout' + Math.random());
          this.utilService.removeSessionStorage('authData');
          this.router.navigate([authenticationNavigateRoot]);
        }  
    })  
  }

  shareSessionStorage() {
    if (!sessionStorage.length) {
      this.utilService.setLocalStorage('getSessionStorage', Date.now().toString());
    }
    window.addEventListener('storage', function(event) {
      if (event.key == ARROW_PREFIX+'getSessionStorage') {
          localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
          localStorage.removeItem('sessionStorage');
      } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
          var data = JSON.parse(event.newValue);
          for (let key in data) {
            sessionStorage.setItem(key, data[key]);
          }
        }
    });
  }

  handleLoginAndLogoutEvents() {
    let reference = this;
    window.addEventListener('storage', function(event) {
      if (event.key == ARROW_PREFIX+'logout-event') {
            reference.utilService.removeSessionStorage('authData');    
            reference.router.navigate([authenticationNavigateRoot]);
        } if (event.key == ARROW_PREFIX+'logIn-event') {
            location.reload();
        }
    });
  }
    
  
}
