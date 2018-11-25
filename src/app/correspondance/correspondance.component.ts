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
	  public statuses:Array<any> = ['new','done','assigned','waiting','delayed','new','done','assigned','waiting','delayed'];
	  public corresIndex ;
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
	  	
	  }
	  public ngOnInit():void {
			this._orderBy = 'sender';
			this._status= 'new';
			this._itemsPerPage = 5;
			this.corresIndex = 0;
	      	// console.log(this.dashboardStatusPrioriy('new'));
	    }

	    slides = [
	      {img: "http://placehold.it/350x150/000000"},
	      {img: "http://placehold.it/350x150/111111"},
	      {img: "http://placehold.it/350x150/333333"},
	      {img: "http://placehold.it/350x150/333333"},
	      {img: "http://placehold.it/350x150/333333"},
	      {img: "http://placehold.it/350x150/666666"}
	    ];
	    slideConfig = {"slidesToShow": 7, "slidesToScroll": 1,"rtl": true, "infinite":false};
	     
	    corresActive(index){
	    	this.corresIndex = index;
	    }
	    pop(e){
	    	e.preventDefault()
	    }
	    

	    afterChange(e) {
	      console.log(e);
	    }

}
