import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {

  @Language() lang: string;
  @Input() tableInfo: any;
  @Input() _itemsPerPage = 10;
  _currentPage = 1;
  checkedRows = [];
  searchString = '';
  @Input() _status = 'new';
  @Input() _orderBy = 'sender';
  @Input() showHeader;
  @Input() showFooter;
  @Input() hideActions;

  @Output() selectedRowsEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionColumnEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionHeaderEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() noExpandable;
  @Input() noDrag;


  constructor() { }


  getObjectAttribute = (object: any, attribute) => object[attribute];
  currentPageChanged = (page) => this._currentPage = page;
  priority = (_priority) => Math.ceil(_priority / 2);
  changeItemsPerPage = (_value) => this._itemsPerPage = _value;
  getObjectAttributeFromArray(arr: any[], attribute): any {
    const ob = arr[0];
    return ob[attribute];
  }
  faSort(sortby): string {
    if ( this._orderBy === sortby) {
      return 'fa-sort-asc';
    } else if (this._orderBy.substring(1, 5000) === sortby) {
      return 'fa-sort-desc';
    } else {
      return 'fa-sort';
    }
  }
  orderTable = function (orderArg) {
        if (this._orderBy === orderArg ){
            this._orderBy = '-' + orderArg;
        } else {
            this._orderBy = orderArg;
        }
        this.uncheckAll();
  }


  // ================ row selection ===============
  showCheckBox(): boolean { return this.checkedRows.length > 0; }
  isAllChecked() {
    let filteredRows;
    let orderby = this._orderBy ;
    filteredRows = this.tableInfo.data.filter(
      x => x.status === this._status);
    if(orderby.charAt(0) == '-'){
      let thisOrderby = orderby.substring(1,5000);
      filteredRows.sort((a, b) => {
        if (b[thisOrderby] < a[thisOrderby]) return -1;
        else if (b[thisOrderby] > a[thisOrderby]) return 1;
        else return 0;
      });
    }else{
      filteredRows.sort((a, b) => {
        if (a[orderby] < b[orderby]) return -1;
        else if (a[orderby] > b[orderby]) return 1;
        else return 0;
      });
    }
    let filteredInPage = filteredRows.slice((this._itemsPerPage*this._currentPage)-this._itemsPerPage, (this._itemsPerPage*this._currentPage))
    return filteredInPage.every(_ => _.selected);
  }
  checkRow( data){

    // console.log(selected)
    data.selected = !data.selected;
    if ( data.selected) {
      this.checkedRows.push(data);
    } else {
      const index = this.checkedRows.indexOf(data);
      if (index > -1) {
        this.checkedRows.splice(index, 1);
      }
    }
    this.selectedRowsEvent.emit(this.checkedRows);
  }
  uncheckAll(event) {
    this.checkedRows = [];
    this.tableInfo.data.forEach(x => x.selected = false);
    this.selectedRowsEvent.emit(this.checkedRows);
  }
  checkAll(ev) {
    let filteredRows;
    const orderby = this._orderBy;
    this.checkedRows = [];
    filteredRows = this.tableInfo.data.filter(
      x => x.status === this._status);
    if(orderby.charAt(0) == '-'){
      let thisOrderby = orderby.substring(1,5000);
      filteredRows.sort((a, b) => {
        if (b[thisOrderby] < a[thisOrderby]) return -1;
        else if (b[thisOrderby] > a[thisOrderby]) return 1;
        else return 0;
      });
    }else{
      filteredRows.sort((a, b) => {
        if (a[orderby] < b[orderby]) return -1;
        else if (a[orderby] > b[orderby]) return 1;
        else return 0;
      });
    }
    let filteredInPage = filteredRows.slice((this._itemsPerPage*this._currentPage)-this._itemsPerPage, (this._itemsPerPage*this._currentPage))

    filteredInPage.forEach(
      x => {
        x.selected = ev.checked;
        this.checkedRows.push(x);
      }
    )
    if(!ev.checked) {
      this.checkedRows = [];
    }
    this.selectedRowsEvent.emit(this.checkedRows);
  }



  // ==================== actionColumnEvent ==================
    actionColumnEventClick = (row, action) => this.actionColumnEvent.emit({'action': action, 'row': row});
    headerActionEvent = (action) => this.actionHeaderEvent.emit(action);
}
