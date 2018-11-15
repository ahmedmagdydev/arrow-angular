import { Component, OnInit} from '@angular/core';
import {DashboardData} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private DashboardData:Array<any> = DashboardData;
  public _orderBy;
  public _status;
  public _itemsPerPage;
  public _currentPage;

  public priority(_priority){
  	return Math.ceil(_priority / 2);
  }
  public changeItemsPerPage(_value){
  	this._itemsPerPage = _value;
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

      	console.log(this.DashboardData);
    }

}
