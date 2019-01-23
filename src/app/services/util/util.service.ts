import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ARROW_PREFIX } from '../../config/AppConfig';

@Injectable({providedIn: 'root'})
export class UtilService {

  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient) { }

  /** GET */
  getResources (url): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get<any>(url, {headers:headers});
  }
  /** post */
  postResources (url, body?): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post<any>(url, JSON.stringify(body),{headers: headers});
  }
  /** put */
  putResources (url, body): Observable<any> {return this.http.put<any>(url, body); }
  /** delete */
  deleteResources (url): Observable<any> {return this.http.delete<any>(url); }



  /** local storage */
  setLocalStorage(key, value) { localStorage.setItem(ARROW_PREFIX+key, JSON.stringify(value)); }
  getLocalStorage(key): any { return JSON.parse(localStorage.getItem(ARROW_PREFIX+key)); }
  checkLocalStorageExist(key): boolean { return localStorage.getItem(ARROW_PREFIX+key) != null; }
  removeLocalStorage(key) { localStorage.removeItem(ARROW_PREFIX+key); }

  /** session storage */
  setSessionStorage(key, value) { sessionStorage.setItem(ARROW_PREFIX+key, JSON.stringify(value)); }
  getSessionStorage(key): any { return JSON.parse(sessionStorage.getItem(ARROW_PREFIX+key)); }
  checkSessionExist(key): boolean { return sessionStorage.getItem(ARROW_PREFIX+key) != null; }
  removeSessionStorage(key) { sessionStorage.removeItem(ARROW_PREFIX+key); }
  clearSession() {sessionStorage.clear(); }

  /** cookie service */
  setCookie(key, value) { this.cookieService.set(key, value);}
  getCookie(key) { return this.cookieService.get(key);}
  deleteCookie(key) { this.cookieService.delete(key);}
  deleteAllCookie() { this.cookieService.deleteAll();}
  getAllCookie() { return this.cookieService.getAll();}
  checkCookieExist(key) { return this.cookieService.check(key);}

    /** auth */
  getAuthData() {
    const authData = this.getSessionStorage('authData');
    return authData ? authData : null;
  }
  createAuthorizationHeader() {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    const authData = this.getAuthData();
    if(authData != null) {
      headers = headers.append('authToken', authData.authToken);
      headers= headers.append('domainPrefix', authData.domainPrefix);
    }
    return headers;
  }

  /* *********** router *********** */
    navigate(URL, queryParams = {}) {
      this.router.navigate([URL], { queryParams: queryParams });
    }
}
