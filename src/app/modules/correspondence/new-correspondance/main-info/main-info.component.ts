import {Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms';
import { Language } from 'angular-l10n';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
		@Language() lang: string;
    @Input() newCorrespondenceForm: FormGroup;
    @Input() errors: any;
    @Output() newCorrespondenceFormChange: EventEmitter<any> = new EventEmitter<any>();
    mainInfoForm: FormGroup;

    visible = true;
	  selectable = true;
	  removable = true;
	  addOnBlur = true;
	   separatorKeysCodes: number[] = [ENTER, COMMA];
	  keywords = ['keyword'];
	    availableKeywords: Observable<string[]>;

		allKeywords: string[] = ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5'];
		@ViewChild('keywordInput') keywordInput: ElementRef<HTMLInputElement>;
		  @ViewChild('auto') matAutocomplete: MatAutocomplete;
		  keywordCtrl = new FormControl();

		constructor(private builder: FormBuilder) {
			this.availableKeywords = this.keywordCtrl.valueChanges.pipe(
        startWith(null),
        map((keyword: string | null) => keyword ? this._filter(keyword) : this.allKeywords.slice()));
		}

		private _filter(value: string): string[] {
		    const filterValue = value.toLowerCase();

		    return this.allKeywords.filter(keyword => keyword.toLowerCase().indexOf(filterValue) === 0);
		  }
		ngOnInit() {
			if ( this.newCorrespondenceForm) {
                this.mainInfoForm = this.builder.group({
                    address: ['', []],
                    priority: [''],
                    degreeOfConfidentiality: [''],
                    keywordInputs: [''],
                    corresNumber: ['', [Validators.required]],
                    corresDate: [''],
                    unit: [''],
                });
                this.newCorrespondenceForm = this.builder.group({
                    ...this.newCorrespondenceForm.controls,
                    ...this.mainInfoForm.controls,
                });
			}
            this.newCorrespondenceFormChange.emit(this.newCorrespondenceForm);
            this.mainInfoForm.valueChanges.subscribe( val => {
            	this.newCorrespondenceFormChange.emit({
					form: this.newCorrespondenceForm,
					mainInfoValid: this.mainInfoForm.valid});
			});
		}

	  add(event: MatChipInputEvent): void {
	     

	     if (!this.matAutocomplete.isOpen) {
	           const input = event.input;
	           const value = event.value;

	           // Add our fruit
	           if ((value || '').trim()) {
	             this.keywords.push(value.trim());
	           }

	           // Reset the input value
	           if (input) {
	             input.value = '';
	           }

	           this.keywordCtrl.setValue(null);
	         }
	   }

	   remove(keyword): void {
	     const index = this.keywords.indexOf(keyword);

	     if (index >= 0) {
	       this.keywords.splice(index, 1);
	     }
	   }

	   selected(event: MatAutocompleteSelectedEvent): void {
	       this.keywords.push(event.option.viewValue);
	       this.keywordInput.nativeElement.value = '';
	       this.keywordCtrl.setValue(null);
	     }

	submit(formValues) {
		console.log(JSON.stringify(formValues));
	}
}

