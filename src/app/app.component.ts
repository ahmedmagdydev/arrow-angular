import { Component, OnInit} from '@angular/core';
import {DashboardData} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private DashboardData:Array<any> = DashboardData;
  public ngOnInit():void {

      console.log(this.DashboardData)
    }

}
