import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
declare var $:any;
import { FileUploader, FileItem } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploaderComponent {

  @Input() lang: string;
  public uploader:FileUploader = new FileUploader({url: URL});
  @Output() uploaders = new EventEmitter<any>();
  
  public fileOverAnother(e:any):void {
    this.uploader.queue = this.uploader.queue.filter((file, index, self) =>
        index === self.findIndex((t) => (
          file.file.name === t.file.name        
        ))  
    ) 
    this.uploaders.emit(this.uploader.queue);
  }

  constructor() {

  }

  clickOnUploadInput(event) {
    $('#importInput').click();
  }

}
