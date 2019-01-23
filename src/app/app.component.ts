import { Component, LOCALE_ID, Inject, HostListener } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {fadeAnimation} from './animations';
import { UtilService } from 'src/app/services/util/util.service';
import { AuthService } from './services/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    animations: [fadeAnimation] // register the animation
})
export class AppComponent  {
  authorized = false;

  constructor(@Inject(LOCALE_ID) public readonly localeId,private  router: Router,
   private utilService: UtilService, private authService: AuthService) {
    router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd ) {
            this.authorized = event.url && !event.url.includes('/auth');
        }
    });
  }

  ngOnInit(): void {
      this.authService.shareSessionStorage();   
      this.authService.handleLoginAndLogoutEvents();   
  }
}
