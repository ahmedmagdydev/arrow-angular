import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubstitutionRoutingModule } from './substitution-routing.module';
import { SubstitutionComponent } from './substitution.component';

@NgModule({
  declarations: [SubstitutionComponent],
  imports: [
    CommonModule,
    SubstitutionRoutingModule
  ]
})
export class SubstitutionModule { }
