import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocalizationModule} from '../shared/localization/localization.module';

import { SubstitutionRoutingModule } from './substitution-routing.module';
import { SubstitutionComponent } from './substitution.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MatIconModule, MatButtonModule, MatTooltipModule, MatSelectModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatProgressSpinnerModule, MatSlideToggleModule
} from '@angular/material';
@NgModule({
  declarations: [SubstitutionComponent],
  imports: [
    CommonModule,
    SubstitutionRoutingModule, FormsModule, ReactiveFormsModule, LocalizationModule,
      MatIconModule, MatButtonModule, MatTooltipModule, MatSelectModule,
      MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
      MatProgressSpinnerModule, MatSlideToggleModule
  ]
})
export class SubstitutionModule { }
