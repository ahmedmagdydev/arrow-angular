import { Component, LOCALE_ID, Inject} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  authorized;

  constructor(@Inject(LOCALE_ID) public readonly localeId, router: Router) {
      router.events.subscribe((event: any) => {
          console.log(event);
          if (event instanceof NavigationEnd ) {
            if ( event.url && event.url.indexOf('/auth') !== -1) {
                this.authorized = false;
            }
          }
      });
  }
}
