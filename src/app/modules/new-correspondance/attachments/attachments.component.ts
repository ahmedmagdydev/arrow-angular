import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

import { UploadEvent, UploadFile, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {

  public files: UploadFile[] = [];
  public info = false;
  public itemInfo ;
   public modifiedDate;
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

        selected(event: MatAutocompleteSelectedEvent): void {
          this.fruits.push(event.option.value);
          this.fruitInput.nativeElement.value = '';
          this.fruitCtrl.setValue(null);
        }

        private _filter(value: any): any[] {
          return this.allFruits.filter(fruit => fruit.name.toLowerCase().includes(value.toLowerCase()));
        }
   public showInfo(item){
   	this.info= true;
   	this.itemInfo = item.fileEntry;
   	console.log(item)
   }
    public dropped(event: UploadEvent) {
    	console.log(event)
      this.files = this.files.concat(event.files);
      for (const droppedFile of event.files) {
   
        // Is it a file?
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
          	
   			// fileEntry._date = Date.now();
   			// fileEntry._type = file.type;
   			// fileEntry._size = file.size;
   			// fileEntry._owner = "ahmed magdy";
            // Here you can access the real file
            // console.log(droppedFile.relativePath, file);
   			// this.modifiedDate = file.lastModified;
            /**
            // You could upload it like this:
            const formData = new FormData()
            formData.append('logo', file, relativePath)
   
            // Headers
            const headers = new HttpHeaders({
              'security-token': 'mytoken'
            })
   
            this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
            .subscribe(data => {
              // Sanitized logo returned from backend
            })
            **/
   
          });
          
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }
   
    public fileOver(event){
      // console.log(event);
    }
   
    public fileLeave(event){
      // console.log(event);
    }

  ngOnInit() {
  }

}
