import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Language, LocaleService, StorageStrategy } from 'angular-l10n';
import { UtilService } from './../../../../services/util/util.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './../../../../services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Language() lang: string;
  targetLang;
  activeLang;
  displayName;
  constructor(public authService: AuthService, private utilService: UtilService, private locale: LocaleService) {
    this.activeLang = this.locale.getDefaultLocale();
    this.targetLang = this.activeLang === 'en' ?  'ar' : 'en';
  }

  ngOnInit(): void {
   const authData = this.utilService.getSessionStorage('authData');
   this.displayName = authData && authData.displayName? authData.displayName: '';   
  }

  selectLocale() {
    if (this.activeLang === 'ar') {
      this.locale.setDefaultLocale('en');
      this.utilService.setLocalStorage('currentLocale', 'en');
      this.targetLang = 'ar';
      this.activeLang = 'en';
    } else {
      this.locale.setDefaultLocale('ar');
      this.utilService.setLocalStorage('currentLocale', 'ar');
      this.targetLang = 'en';
      this.activeLang = 'ar';
    }
  }
}
