import { Component, LOCALE_ID, Inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  authorized = false;

  constructor(@Inject(LOCALE_ID) public readonly localeId, router: Router) {
      router.events.subscribe((event: any) => {
          if (event instanceof NavigationEnd ) {
              this.authorized = event.url && !event.url.includes('/auth');
          }
      });
  }
}
