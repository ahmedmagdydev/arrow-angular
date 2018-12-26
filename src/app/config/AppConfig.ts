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
  test: {url : 'http://10.0.10.107:7676/arrow-bootstrap-opt/'},
  local: {url : 'http://localhost:4200/'}
};
export const APP_PROFILE_active = APP_PROFILE.local;
export const API_URLS = {
  correspondences: APP_PROFILE_active.url + 'assets/data/dashboard.json',
};
