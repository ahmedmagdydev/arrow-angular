import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrespondenceTemplateComponent } from './correspondence-template.component';

@NgModule({
  declarations: [CorrespondenceTemplateComponent],
  imports: [
    CommonModule
  ],
    exports: [CorrespondenceTemplateComponent]
})
export class CorrespondenceTemplateModule { }
