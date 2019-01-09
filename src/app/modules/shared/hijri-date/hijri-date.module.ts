import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijriDateComponent } from './hijri-date.component';

@NgModule({
  declarations: [HijriDateComponent],
  imports: [CommonModule],
  exports: [HijriDateComponent]
})
export class HijriDateModule { }
