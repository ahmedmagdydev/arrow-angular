import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader.component';
import { FileUploadModule } from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import { LocalizationModule } from '../localization/localization.module';

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [CommonModule, FileUploadModule, FormsModule, LocalizationModule],

exports: [FileUploaderComponent]
})
export class FileUploaderModule { }
