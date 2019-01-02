import {Component, ElementRef, ViewChild, OnInit, OnChanges} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FileUploader } from 'ng2-file-upload';
import { FileUploaderComponent } from 'src/app/modules/shared/file-uploader/file-uploader.component';
import {fileObject} from '../../../../config/Lookups';
import {Language} from 'angular-l10n';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
declare var $: any;
@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent  {

  files: fileObject[] = [];
  @Language() lang: string;
  detailsObj = {name : '', type:'', lastModifiedDate: '', size: ''}
  @ViewChild(FileUploaderComponent) fileUploaderComponent: FileUploaderComponent; 
  versionUploader:FileUploader = new FileUploader({url: URL});
  info = false;
  selectedFile;
  selectedIndex;
  selectedVersion;
  modifiedDate;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any = [];
     allFruits: any = [
       {
         id: 1,
         name: 'Apple'
       },
       {
         id: 2,
         name: 'Orange'
       },
       {
         id: 3,
         name: 'Banana'
       },
       {
         id: 4,
         name: 'Malta'
       }
     ];
      @ViewChild('fruitInput') fruitInput: ElementRef;
      constructor() {
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
          startWith(null),
          map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
      }
     
      add(event: MatChipInputEvent): void {
          debugger
          const input = event.input;
          const value = event.value;
          // Add our fruit
          if ((value || '').trim()) {
            this.fruits.push({
              id:Math.random(),
              name:value.trim()
            });
          }

          // Reset the input value
          if (input) {
            input.value = '';
          }

          this.fruitCtrl.setValue(null);
        }

        remove(fruit, indx): void {
          this.fruits.splice(indx, 1);
        }

        fillDetailsObj(item) {
          this.detailsObj.name = item.name;
          this.detailsObj.type = item.type;
          this.detailsObj.lastModifiedDate = item.lastModifiedDate;
          this.detailsObj.size = item.size;
        }

        selected(event: MatAutocompleteSelectedEvent): void {
          this.fruits.push(event.option.value);
          this.fruitInput.nativeElement.value = '';
          this.fruitCtrl.setValue(null);
        }
        // import versions for file selected
        importVersion(event) {
          for(let queue of this.versionUploader.queue) {
            queue.file.name = this.selectedFile.name;

            var reader = new FileReader();
            var fileByteArray = [];
            reader.readAsArrayBuffer(queue._file);
            reader.onloadend = function (evt) {
              if (event.target.readyState == FileReader.DONE) {
                var arrayBuffer = event.target.result,
                array = new Uint8Array(arrayBuffer);
                for (var i = 0; i < array.length; i++) {
                  fileByteArray.push(array[i]);
               }
              }
            }
            const newFile = new File(fileByteArray, this.selectedFile.name, {type: this.selectedFile.type, lastModified: queue.file.lastModifiedDate});
            console.log(fileByteArray.length);
            this.files[this.selectedIndex].versions = this.files[this.selectedIndex].versions || [];
            this.files[this.selectedIndex].versions.push(newFile);   
            if(!queue.isUploaded) {
              queue.upload();
            }   
          }
          this.versionUploader.clearQueue();
          this.selectedFile = this.files[this.selectedIndex];
          
        }

        // change selected version
        changeSelectedVersion(version) {
          this.fillDetailsObj(version);
          this.selectedVersion = version;
        }     
          
        // handle file uploaded from uploader queue
        handleUploaders(events) {
          for(let event of events) {
            if(!event.isUploaded) {
              const file: fileObject = {};
              file.name = event._file.name;
              file.lastModifiedDate = event._file.lastModifiedDate;
              file.size = event._file.size;
              file.type = event._file.type;
              file.versions = [event._file];
              event.upload();                
              this.files.push(file);
            }
          } 
        }

        private _filter(value: any): any[] {
          return this.allFruits.filter(fruit => fruit.name.toLowerCase().includes(value.toLowerCase()));
        }
      // show details for selected file
      showFileDetails(item, index){
        this.selectedFile = item;
        this.selectedIndex = index;
        this.fillDetailsObj(item);
        this.versionUploader.clearQueue();
        this.info= true;
      }

      deleteFile(index, item) {
        this.files.splice(index, 1);
        this.fileUploaderComponent.uploader.queue.splice(index,1);
        if(this.info && item.name === this.selectedFile.name) {
        this.info = false;
        }
      }
 
}
