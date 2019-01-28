import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalizationModule} from '../shared/localization/localization.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatIconModule, MatButtonModule, MatTooltipModule, MatSelectModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatProgressSpinnerModule, MatSlideToggleModule
} from '@angular/material';
@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule, LocalizationModule, SettingsRoutingModule, FormsModule, ReactiveFormsModule,
      MatIconModule, MatButtonModule, MatTooltipModule, MatSelectModule,
      MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
      MatProgressSpinnerModule, MatSlideToggleModule
  ]
})
export class SettingsModule { }
