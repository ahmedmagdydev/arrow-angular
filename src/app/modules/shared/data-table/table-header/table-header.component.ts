import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent {

  labelPosition = 'after';
  @Input() isAllChecked: boolean;
  @Output() checkAllEvent: EventEmitter<boolean> = new EventEmitter();
  @Language() lang: string;
  @Input() searchString;
  @Output() searchStringChange: EventEmitter<boolean> = new EventEmitter();
  @Input() actions: any[];
  @Output() actionsEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() { }


  checkAll = (ev) => this.checkAllEvent.emit(ev);
  searchStringEnter = (value) => this.searchStringChange.emit(value);
  actionEventClicked = (action) => this.actionsEvent.emit(action);
}
