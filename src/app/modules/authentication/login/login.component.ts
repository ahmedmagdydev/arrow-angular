import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Language, LocaleService} from 'angular-l10n';
import {DataEncryptionService} from '../../../services/util/data-encryption.service';
import { UtilService } from 'src/app/services/util/util.service';
import {authenticationUrls} from 'src/app/shared/api-url';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Language() lang: string;
  submitted;
  loginForm: FormGroup;

  constructor(private utilService: UtilService, private locale: LocaleService, private dataEncryptionService: DataEncryptionService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
      this.loginForm = new FormGroup({
          userName: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
          domain: new FormControl('', [Validators.required]),
          language: new FormControl(''),
          rememberMe: new FormControl(''),
          forceLogin: new FormControl(''),
      });
  }
  get form() { return this.loginForm.controls; }

  login(creadencials) {
      if ( this.loginForm.valid) {
        creadencials.password = this.dataEncryptionService.encryptAES(creadencials.password);
        this.utilService.postResources(authenticationUrls, JSON.stringify(creadencials)).subscribe(
            (response)=> {
                alert('success login');
                this.saveAuthData();
            }
        )
      } else {
          this.submitted = true;
          return ;
      }

     
  }

  saveAuthData() {
    const domain = this.loginForm.controls['domain'].value;
    const language = this.loginForm.controls['language'].value;
    const authData = {domain:'' , lang:''};
    authData.domain = domain;
    authData.lang = language;
    this.utilService.setLocalStorage('authData', authData);
  }

  setLocal(event) {
    const selectedValue = event.value;
    this.locale.setDefaultLocale(selectedValue);
    localStorage.setItem('currentLocale', selectedValue);
  }

}
