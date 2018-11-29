import { Component, OnInit } from '@angular/core';
import {DashboardData} from '../data';

@Component({
  selector: 'app-correspondance',
  templateUrl: './correspondance.component.html',
  styleUrls: ['./correspondance.component.scss']
})

export class CorrespondanceComponent implements OnInit {

	  public DashboardData:Array<any> = DashboardData;
	  public _orderBy;
	  public _status;
	  public _itemsPerPage;
	  public _currentPage;
	  public statuses:Array<any> = [
	  {"number":20,"en":"new","ar":"جديد"},
	  {"number":30,"en":"done","ar":"تم"},
	  {"number":25,"en":"assigned","ar":"مسجب"},
	  {"number":20,"en":"waiting","ar":"منتظر"},
	  {"number":40,"en":"delayed","ar":"مؤجل"},
	  {"number":20,"en":"new","ar":"جديد"},
	  {"number":30,"en":"done","ar":"تم"},
	  {"number":25,"en":"assigned","ar":"مسجب"},
	  {"number":20,"en":"waiting","ar":"منتظر"}
	  ,{"number":40,"en":"delayed","ar":"مؤجل"}
	  ];
	  public corresIndex ;
	  public checkedRows=[];
	  public priority(_priority){
	  	return Math.ceil(_priority / 2);
	  }
	  public changeItemsPerPage(_value){
	  	this._itemsPerPage = _value;
	  }

	  public dashboardStatus(status){
	    return  DashboardData.filter(function (data) {
	      return data.status === status;
	    }); 
	  }

	  public dashboardStatusPrioriy(status){
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
	  }
	  

	  public changeStatus(thisStatus){
	  	this._status = thisStatus;
	  	this._currentPage = 1;
	  }

	  public orderTable = function (orderArg) {
	  	
	  	if (this._orderBy == orderArg ){
	  		this._orderBy = '-' + orderArg;
	  	}else{
	  		this._orderBy = orderArg;
	  	}
	  	this.uncheckAll();
	  }
	  public ngOnInit():void {
			this._orderBy = 'sender';
			this._status= 'new';
			this._itemsPerPage = 10;
			this.corresIndex = 0;
			this._currentPage=1;
	      	// console.log(this.dashboardStatusPrioriy('new'));

	    }


	    slideConfig = {"slidesToShow": 7, "slidesToScroll": 1,"rtl": true, "infinite":false};
	     
	    corresActive(index, thisStatus){
	    	this.corresIndex = index;
	    	this._status = thisStatus;
	  		this._currentPage = 1;
	  		// this.checkedRows=[]
	  		this.uncheckAll()
	    }
	    pop(e){
	    	e.preventDefault()
	    }
	    showCheckBox(){
	    	if(this.checkedRows.length > 0 ){
	    		return true;
	    	}else{
	    		return false;
	    	}
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

	    isAllChecked() {
	    		    	let filteredRows
	    		    	let orderby = this._orderBy 
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
	    afterChange(e) {
	      console.log(e);
	    }

}
