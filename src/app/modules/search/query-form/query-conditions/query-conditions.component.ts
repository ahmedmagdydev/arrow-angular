import {Component, EventEmitter, Input, OnInit, Output, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-query-conditions',
  templateUrl: './query-conditions.component.html',
  styleUrls: ['./query-conditions.component.scss']
})
export class QueryConditionsComponent implements OnInit {

  @Language() lang: string;
  @Input() conditions: any[] = [];
  @Output() conditionsChange: EventEmitter<any> = new EventEmitter();
  conditionValue;
  constructor( ) { }
  ngOnInit() {}


addCondition(){
  let item = { operator:'',
      field:'',
      condition:'',
      parameter:'',
      displayName:'',
      value:'',
      openingBracket:'',
      closingBracket:''
    };
  this.conditions.push(item)
  console.log(this.conditions)
}

changeParameter(e, index){

  this.conditions[index].parameter = e.value

}
changeField(e,index){
  this.conditions[index].field = e.value

}
  // ---------------- condition drag and drop -------------------
  dropCondition(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.conditions, event.previousIndex, event.currentIndex);
  }
}

