import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input, ViewChild, ViewContainerRef, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';
declare var $:any;
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FileUploaderComponent {

  @Input() lang: string;
  @Output() uploaders = new EventEmitter<any>();
  @Input() uploadId;
  @Input() uploader:FileUploader;

  fileOverAnother():void {
    this.uploaders.emit(this.uploader.queue);
  }

  clickOnUploadInput() {
    const id= '#'+this.uploadId;
    $(id).click();
  }

  
 }
  


