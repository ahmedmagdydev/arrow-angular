import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UtilService {

  constructor(private http: HttpClient) { }


  /** GET */
  getResources (url): Observable<any> {return this.http.get<any>(url); }
  /** post */
  postResources (url, body): Observable<any> {return this.http.post<any>(url, body); }
  /** put */
  putResources (url, body): Observable<any> {return this.http.put<any>(url, body); }
  /** delete */
  deleteResources (url): Observable<any> {return this.http.delete<any>(url); }



  /** local storage */
  setLocalStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  getLocalStorage(key): any { return JSON.parse(localStorage.getItem(key)); }
  checkLocalStorageExist(key): boolean { return localStorage.getItem(key) != null; }
  removeLocalStorage(key) { localStorage.removeItem(key); }

  /** session storage */
  setSessionStorage(key, value) { sessionStorage.setItem(key, JSON.stringify(value)); }
  getSessionStorage(key): any { return JSON.parse(sessionStorage.getItem(key)); }
  checkSessionExist(key): boolean { return sessionStorage.getItem(key) != null; }
  removeSessionStorage(key) { sessionStorage.removeItem(key); }
  clearSession() {sessionStorage.clear(); }
}
