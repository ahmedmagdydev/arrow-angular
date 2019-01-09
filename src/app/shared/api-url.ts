import {APP_PROFILE_active} from '../config/AppConfig'

export const serviceUrl = APP_PROFILE_active;

// authentication module API urls
export const authenticationUrls: any = {
    login: serviceUrl + 'login',

};

