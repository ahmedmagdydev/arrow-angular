import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {sharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    sharedModule
  ]
})
export class HomeModule { }
