import { Component, OnInit, AfterViewInit } from '@angular/core';
import {DashboardData} from '../data';
declare var $;
declare var displayChart;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit{
	  public DashboardData:Array<any> = DashboardData;
	  public _orderBy;
	  public _status;
	  public _itemsPerPage;
	  public _currentPage;
	  public statuses:Array<any> = [
	  {"en":"new","ar":"جديد"},
	  {"en":"done","ar":"تم"},
	  {"en":"assigned","ar":"مسجب"},
	  {"en":"waiting","ar":"منتظر"}
	  ,{"en":"delayed","ar":"مؤجل"}
	  ];
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
			$('.date-range').calendarsPicker({
				rangeSelect: true, monthsToShow: 2,
				calendar: $.calendars.instance('islamic') 
			});
	      	// console.log(this.dashboardStatusPrioriy('new'));
	    }

	    ngAfterViewInit(){
	    	let t = $;
	    	t('.main-tabs li:first-child').addClass('large').find('a').addClass('active'),
	    	setTimeout(function(){displayChart("newChart")},400), 
	    	t('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
	    	    t(e.target).parent().addClass("large"),
	    	    t(e.relatedTarget).parent().removeClass("large"),
	    	    t("#" + t(e.relatedTarget).attr("aria-controls") + "Chart"),
	    	    setTimeout(function() {
	    	    	// console.log(t(e.target).attr("aria-controls") + "Chart")
	    	        displayChart(t(e.target).attr("aria-controls") + "Chart")
	    	    }, 400)
	    	})
	    }


}
