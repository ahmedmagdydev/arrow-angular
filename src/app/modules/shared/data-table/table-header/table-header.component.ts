import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {

  @Input() isAllChecked: boolean;
  @Output() checkAllEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() { }


  checkAll(ev) {this.checkAllEvent.emit(ev);}
}
