import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Language, LocaleService} from 'angular-l10n';
import {DataEncryptionService} from '../../../services/util/data-encryption.service';
import { UtilService } from 'src/app/services/util/util.service';
import {authenticationUrls, userInfoUrls} from '../../../config/api-url';
import { Router } from '@angular/router';
import {homeNavigationRoot} from '../../../config/app-navigation';
import { AuthService } from './../../../services/authentication/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @Language() lang: string;
  submitted;
  loginForm: FormGroup;
  invalidUserNameOrPass = false;
  invalidUser = false;
  domainInvalid = false;
  loadingLogin = false;
  authData = {lang:'', authToken: '', displayName: '', domainPrefix: ''};
  authorized = false;

  constructor(private authService: AuthService, private utilService: UtilService, private locale: LocaleService,
     private dataEncryptionService: DataEncryptionService, private router: Router) { }

  ngOnInit() {
    this.createLoginForm();
    this.authorized = this.authService.checkLoggedInUser();   
    this.authorized ? this.router.navigate([homeNavigationRoot]): null;   
  }

  createLoginForm() {
      this.loginForm = new FormGroup({
          userName: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
          domainPrefix: new FormControl('', [Validators.required]),
          lang: new FormControl('', [Validators.required]),
          rememberMe: new FormControl(''),
          forceLogin: new FormControl(''),
      });
  }
  get form() { return this.loginForm.controls; }

  login(credentials) {
    credentials.password = this.loginForm.controls['password'].value;
    this.invalidUser = false;
    this.domainInvalid = false;
    this.invalidUserNameOrPass = false;
    this.loadingLogin = true;
    if ( this.loginForm.valid) {
        credentials.password = this.dataEncryptionService.encryptAES(credentials.password);
        this.utilService.postResources(authenticationUrls.login, credentials).subscribe(
        (response) => {
            if(response.code.toString() === '1') {    
             this.saveAuthData(response.data, credentials);   
             this.loadingLogin = true; 
             this.getLoggedInUserName();
             this.utilService.setLocalStorage('logIn-event', 'login' + Math.random());  
            } else {
              this.loadingLogin = false; 
              this.handleErrorMessage(response.code.toString());
            }             
          }, error => {
            this.invalidUser = true;
            console.log('error during login');
        });
      }     
  }

  getLoggedInUserName() {  
      this.utilService.getResources(userInfoUrls.getUserInfo).subscribe(
        (response) => {    
          if(response.code.toString() === '1') {
            this.authData.displayName = response.data.displayName;
            this.utilService.setSessionStorage('authData', this.authData)    
            this.router.navigate([homeNavigationRoot]); 
          } else {
             this.invalidUser = true;
          }
       }, error => {
          console.log('error during get user info')
       })  
  }

  handleErrorMessage(code) {
    switch(code) {
      case '1001': this.invalidUserNameOrPass = true; break;
      case '1005': this.domainInvalid = true; break;
      default : this.invalidUser = true;
    }
  }

  saveAuthData(loginData, credentials) { 
    this.authData.lang = credentials.lang;
    this.authData.domainPrefix = credentials.domainPrefix;
    this.authData.authToken = loginData;
    this.utilService.setSessionStorage('authData', this.authData);
  }

  setLocal(event) {
    const selectedValue = event.value;
    this.locale.setDefaultLocale(selectedValue);
    this.utilService.setLocalStorage('currentLocale', selectedValue);
  }

  resetForm() {
    this.loginForm.reset();
  }

}
