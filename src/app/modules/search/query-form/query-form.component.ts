import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
	addedOutput=false;	
	outputs = [
	    {
	    	field:"Created By",
	    	sort:"Descending"
	    },{
	    	field:"Sent By",
	    	sort:"Ascending"
	    },{
	    	field:"Created By",
	    	sort:"Descending"
	    },{
	    	field:"Is Need Action",
	    	sort:"Ascending"
	    },{
	    	field:"Created By",
	    	sort:"Ascending"
	    },
	  ];
	  conditions=['1','2']
  constructor() { }
  drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.outputs, event.previousIndex, event.currentIndex);
    }
    dropCondition(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.conditions, event.previousIndex, event.currentIndex);
    }
  ngOnInit() {
  }

}
