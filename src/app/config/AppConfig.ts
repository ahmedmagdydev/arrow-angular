// ========================= App settings =====================
export const APP_SETTINGS = {
    encryption: {key: '0123456789abcdef', iv: 'fedcba9876543210'}
};

// ========================= Arrow Prefix =====================
export const ARROW_PREFIX = 'arrowCMSClient.';

// ========================= localization =====================
import {L10nConfig, ProviderType, StorageStrategy} from 'angular-l10n';
export const l10nConfig: L10nConfig = {
  locale : {
    languages: [{code: 'en', dir: 'ltr'}, {code: 'ar', dir: 'rtl'}],
    language: localStorage.getItem('arrowCMSClient.currentLocale') || 'ar',
    storage: StorageStrategy.Local,
    defaultLocale: {languageCode: 'ar'}
  },
  translation: {
    providers: [{type: ProviderType.Static, prefix: './assets/locale/locale-'},
     {type: ProviderType.Static, prefix: './assets/locale/errors-'}],
    caching: true,
    missingValue: 'No key'
  }
};


// ========================= API =====================
export const APP_PROFILE = {
  test: {url : 'http://10.0.10.107:7676/arrow4-client/'},
  test2: {url: 'https://arrow-4angular.herokuapp.com/'},
  local: {url : 'http://localhost:4200/'}
};
export const APP_PROFILE_active = APP_PROFILE.test2;
export const API_URLS = {
  correspondences: APP_PROFILE_active.url + 'assets/data/dashboard.json',
  query:  APP_PROFILE_active.url + 'assets/data/query.json',
  access:  APP_PROFILE_active.url + 'assets/data/access.json'
};
