import { Component, ElementRef, ViewChild, OnInit, OnChanges, HostListener, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FileUploader } from 'ng2-file-upload';
import { FileUploaderComponent } from 'src/app/modules/shared/file-uploader/file-uploader.component';
import {fileObject} from '../../../../config/Lookups';
import {Language} from 'angular-l10n';
import { DomSanitizer } from '@angular/platform-browser';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
declare var $: any;
@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss'],
})
export class AttachmentsComponent  {
  
  uploader: FileUploader = new FileUploader({url: URL});
  files: fileObject[] = [];
  @Language() lang: string;
  detailsObj = {name : '', type:'', lastModifiedDate: '', size: ''}
  versionUploader:FileUploader = new FileUploader({url: URL});
  info = false;
  localImageUrl;
  selectedFile;
  selectedIndex;
  selectedVersion;
  modifiedDate;
  showImage = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: any = [];
  fileByteArray = [];
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
      constructor(private eRef: ElementRef, public sanitizer:DomSanitizer) {
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
          startWith(null),
          map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
          this.uploader = new FileUploader({url: URL});
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
            this.selectedVersion = queue._file;
            
            const newFile = new File([""], this.selectedFile.name, {type: queue.file.type, 
            lastModified: this.selectedVersion.lastModifiedDate});
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
          //remove duplicate files
          this.uploader.queue = this.uploader.queue.filter((file, index, self) =>
          index === self.findIndex((t) => (
            file.file.name === t.file.name        
            ))  
          ) 
          events = this.uploader.queue;
        for(let event of events) {
            if(!event.isUploaded) {
              event.upload();
              const file: fileObject = {};
              file.name = event._file.name;
              file.lastModifiedDate = event._file.lastModifiedDate;
              file.size = event._file.size;
              file.type = event._file.type;
              file.versions = [event._file];                           
              this.files.push(file);
            }
          } 
              
        }

        // preview Image selected
        previewImage(item, index) {
          if(item.type.split('/')[0] === 'image' ) {
            let fileItem = this.uploader.queue[index];
            this.localImageUrl = (window.URL) ? window.URL.createObjectURL(fileItem._file) :
             (window as any).webkitURL.createObjectURL(fileItem._file);
            this.info= false;
            this.showImage = true;
            this.selectedFile = item;
            this.selectedIndex = index;
          }
        }

        downloadFile(file) {
          if (window.navigator.msSaveOrOpenBlob) {
           navigator.msSaveBlob(file, this.selectedFile.name);
          } else {
           const downloadLink = document.createElement("a");
           downloadLink.style.display = "none";
           document.body.appendChild(downloadLink);
           const fileItem = this.uploader.queue[this.selectedIndex];
           const url = (window.URL) ? window.URL.createObjectURL(fileItem._file) :
            (window as any).webkitURL.createObjectURL(file._file);
           downloadLink.setAttribute("href", url);
           downloadLink.setAttribute("download", this.selectedFile.name);
           downloadLink.click();
           document.body.removeChild(downloadLink);
          }
        }

        

      _filter(value: any): any[] {
          return this.allFruits.filter(fruit => fruit.name.toLowerCase().includes(value.toLowerCase()));
        }

      // show details for selected file
      showFileDetails(item, index){
        
        this.selectedFile = item;
        this.selectedIndex = index;
        this.fillDetailsObj(item);
        this.versionUploader.clearQueue();
        this.showImage = false;
        this.info= true;
      }

      deleteFile(index, item) {
        this.files.splice(index, 1);
        this.uploader.queue.splice(index,1);
        if(item.name === this.selectedFile.name) {
          return this.info? this.info = false : this.showImage = false;
        }
      }
 
}
