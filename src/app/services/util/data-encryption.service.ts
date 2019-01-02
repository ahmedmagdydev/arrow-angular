import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import {APP_SETTINGS} from '../../config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class DataEncryptionService {

  key;
  iv;
  constructor() {
      this.key = CryptoJS.enc.Latin1.parse(APP_SETTINGS.encryption.key);
      this.iv  = CryptoJS.enc.Latin1.parse(APP_SETTINGS.encryption.iv);
  }


  /* ********************** AES algorithm *************** */
  encryptAES(message) {
    const padMsg = this.padString(message);
    const cipherText = CryptoJS.AES.encrypt(padMsg, this.key,
        { iv: this.iv, padding: CryptoJS.pad.NoPadding, mode: CryptoJS.mode.CBC}).toString();
    return cipherText;
  }
  decryptAES(cipherText) {
      const bytes  = CryptoJS.AES.decrypt(cipherText, this.key,
          { iv: this.iv, padding: CryptoJS.pad.NoPadding, mode: CryptoJS.mode.CBC});
      const originalText = bytes.toString(CryptoJS.enc.Latin1);
      return originalText;
    }
  padString(source): string {
    const paddingChar = ' ';
    const size = 16;
    const x = source.length % size;
    const padLength = size - x;
    for (let i = 0; i < padLength; i++) {
      source += paddingChar;
    }
    return source;
  }
}
