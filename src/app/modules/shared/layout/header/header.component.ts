import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Language, LocaleService} from 'angular-l10n';

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
  constructor(private locale: LocaleService) {
    this.activeLang = this.locale.getDefaultLocale();
    this.targetLang = this.activeLang === 'en' ?  'ar' : 'en';
  }

  selectLocale() {
    if (this.activeLang === 'ar') {
      this.locale.setDefaultLocale('en');
      localStorage.setItem('currentLocale', 'en');
      this.targetLang = 'ar';
      this.activeLang = 'en';
    } else {
      this.locale.setDefaultLocale('ar');
      localStorage.setItem('currentLocale', 'ar');
      this.targetLang = 'en';
      this.activeLang = 'ar';
    }
  }
}
