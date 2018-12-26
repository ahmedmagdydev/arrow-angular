import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent{

  @Language() lang: string;
  @Input() currentPage = 1;
  @Output() unCheckAllEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() itemsPerPageEvent: EventEmitter<any> = new EventEmitter();
  @Output() currentPageEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  uncheckAll() { this.unCheckAllEvent.emit(true); }
  changeItemsPerPage(value) { this.itemsPerPageEvent.emit(value); }
  currentPageChanged(value) {
    console.log(value);
    this.currentPageEvent.emit(value); }

}
