// ========================= App settings =====================
export const APP_SETTINGS = {
    encryption: {key: '0123456789abcdef', iv: 'fedcba9876543210'}
};



// ========================= localization =====================
import {L10nConfig, ProviderType, StorageStrategy} from 'angular-l10n';
export const l10nConfig: L10nConfig = {
  locale : {
    languages: [{code: 'en', dir: 'ltr'}, {code: 'ar', dir: 'rtl'}],
    language: localStorage.getItem('currentLocale') || 'ar',
    storage: StorageStrategy.Local,
    defaultLocale: {languageCode: 'ar'}
  },
  translation: {
    providers: [{type: ProviderType.Static, prefix: './assets/locale/locale-'}],
    caching: true,
    missingValue: 'No key'
  }
};



// ========================= API =====================
export const APP_PROFILE = {
  test: {url : 'http://10.0.10.107:7676/arrow4-client/'},
  test2: {url: 'https://arrow-4.herokuapp.com/'},
  test3: {url: 'https://arrow-angular.herokuapp.com/'},
  local: {url : 'http://localhost:4200/'}
};
export const APP_PROFILE_active = APP_PROFILE.test3;
export const API_URLS = {
  correspondences: APP_PROFILE_active.url + 'assets/data/dashboard.json',
};
