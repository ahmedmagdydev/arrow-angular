import { NgModule } from '@angular/core';
import {TranslationModule} from 'angular-l10n';

@NgModule({
  imports: [TranslationModule],
  exports: [TranslationModule]
})
export class LocalizationModule { }
