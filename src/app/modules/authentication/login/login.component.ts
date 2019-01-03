import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Language, LocaleService} from 'angular-l10n';
import {DataEncryptionService} from '../../../services/util/data-encryption.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Language() lang: string;
  submitted;
  loginForm: FormGroup;

  constructor(private locale: LocaleService, private dataEncryptionService: DataEncryptionService) { }

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
      } else {
          this.submitted = true;
          return ;
      }
  }
  setLocal(event) {
    const selectedValue = event.value;
    this.locale.setDefaultLocale(selectedValue);
    localStorage.setItem('currentLocale', selectedValue);
  }

}
