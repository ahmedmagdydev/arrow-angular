import {APP_PROFILE_active} from './AppConfig';

export const serviceUrl = APP_PROFILE_active.url;

// authentication module API urls
export const authenticationUrls: any = {
    login: serviceUrl + 'login',
    logout: serviceUrl + 'logout'
};

// user module API urls
export const userInfoUrls: any = {
    getUserInfo: serviceUrl + 'user',
};


export const addressBookUrls:any = {};