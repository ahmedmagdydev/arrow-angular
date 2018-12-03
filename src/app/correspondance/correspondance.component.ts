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
	  public corresIndex;
	  public statuses:Array<any> = [
	  {"en":"new","ar":"جديد"},
	  {"en":"done","ar":"تم"},
	  {"en":"assigned","ar":"مسجب"},
	  {"en":"waiting","ar":"منتظر"}
	  ,{"en":"delayed","ar":"مؤجل"},
	  {"en":"new","ar":"جديد"},
	  {"en":"done","ar":"تم"},
	  {"en":"assigned","ar":"مسجب"},
	  {"en":"waiting","ar":"منتظر"}
	  ,{"en":"delayed","ar":"مؤجل"}
	  ];




	  
	  public dashboardStatus(status){
	    return  this.DashboardData.filter(function (data) {
	      return data.status === status;
	    }); 
	  }

	  
	    corresActive(index, thisStatus){
	    	this.corresIndex = index;
	    	this._status = thisStatus;
	  		this._currentPage = 1;
	  		// this.checkedRows=[]
	  		// this.uncheckAll()
	    }
	  public ngOnInit():void {

			

	    }


	    slideConfig = {"slidesToShow": 7, "slidesToScroll": 1,"rtl": true, "infinite":false};


	    
}
