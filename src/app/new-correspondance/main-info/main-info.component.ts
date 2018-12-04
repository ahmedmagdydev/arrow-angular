import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

export interface Keywords {
  name: string;
}

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {
	visible = true;
	  selectable = true;
	  removable = true;
	  addOnBlur = true;
	  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
	  keywords: Keywords[] = [
	    {name: 'keyword1'},
	    {name: 'keyword2'},
	    {name: 'keyword3'},
	  ];

	  add(event: MatChipInputEvent): void {
	     const input = event.input;
	     const value = event.value;

	     // Add our fruit
	     if ((value || '').trim()) {
	       this.keywords.push({name: value.trim()});
	     }

	     // Reset the input value
	     if (input) {
	       input.value = '';
	     }
	   }

	   remove(fruit: Keywords): void {
	     const index = this.keywords.indexOf(fruit);

	     if (index >= 0) {
	       this.keywords.splice(index, 1);
	     }
	   }
  constructor() { }

  ngOnInit() {
  }

}
