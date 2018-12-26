import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {

  _itemsPerPage = 5;
  _currentPage = 1;
  checkedRows = [];
  corresIndex = 0;
	@Input() DashboardData;
	@Input() _status = 'new';
	@Input() _orderBy = 'sender';
	@Input() showHeader;
	@Input() showFooter;




  constructor() { }






  public priority(_priority): any { return Math.ceil(_priority / 2); }
  public changeItemsPerPage(_value) { this._itemsPerPage = _value; }
  public dashboardStatus(status): any {
    return  this.DashboardData.filter(function (data) {
      return data.status === status;
    });
  }
/*  public dashboardStatusPrioriy(status){
    const thisStatus = this.dashboardStatus(status);
    const red = thisStatus.filter(function (item) {
      return item.priority <= 4;
    });
    const orange = thisStatus.filter(function (item) {
      return  item.priority <= 8 &&  item.priority > 4;
    });
    const blue  = thisStatus.filter(function (item) {
      return  item.priority <= 12 &&  item.priority > 8;
    });
    const gray = thisStatus.filter(function (item) {
      return  item.priority <= 15 &&  item.priority > 12;
    });
    const array = new Array(red.length,orange.length,blue.length,gray.length)
    return array
  }*/

  faSort(sortby): string {
    if ( this._orderBy === sortby) {
      return 'fa-sort-asc';
    } else if (this._orderBy.substring(1, 5000) === sortby) {
      return 'fa-sort-desc';
    } else {
      return 'fa-sort';
    }
  }
  showCheckBox(): boolean { return this.checkedRows.length > 0; }
  isAllChecked() {
  		    	let filteredRows;
  		    	let orderby = this._orderBy ;
  		    	filteredRows = this.DashboardData.filter(
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
  	    checkRow(e,data,selected){
  	    	if(e.target.checked == true){
  	    		this.checkedRows.push(data);
  	    	}else{
  	    		const index = this.checkedRows.indexOf(data)
  	    		if (index > -1) {
  	    		  this.checkedRows.splice(index, 1);
  	    		}
  	    	}
  	    	console.log(this.checkedRows)
  	    	
  	    }
  	    uncheckAll(){
  	    	this.checkedRows=[];
  	    	this.DashboardData.forEach(x => x.selected = false)
  	    }
  	    checkAll(ev) {
  	    	let filteredRows
  	    	let orderby = this._orderBy 
  	    	this.checkedRows = []
  	    	filteredRows = this.DashboardData.filter(
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
  	      			x.selected = ev.target.checked;
  	      			this.checkedRows.push(x)
  	      		}

  	      		)
  	      	if(!ev.target.checked){
  				this.checkedRows=[]
  	      	}
  	    	console.log(this.checkedRows)
  	    }

public orderTable = function (orderArg) {
	  	
	  	if (this._orderBy == orderArg ){
	  		this._orderBy = '-' + orderArg;
	  	}else{
	  		this._orderBy = orderArg;
	  	}
	  	this.uncheckAll();
	  }



}
