import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
declare var $:any;
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {

  @Input() lang: string;
  public uploader:FileUploader = new FileUploader({url: URL});
  @Output() uploaders = new EventEmitter<any>();
  
  fileOverAnother():void {
    this.uploader.queue = this.uploader.queue.filter((file, index, self) =>
        index === self.findIndex((t) => (
          file.file.name === t.file.name        
        ))  
    ) 
    for(let event of this.uploader.queue) {
      if(!event.isUploaded) {
        event.upload();
      }
    }
    this.uploaders.emit(this.uploader.queue);
  }

  constructor() {

  }

  clickOnUploadInput() {
    $('#importInput').click();
  }

}
