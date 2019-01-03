import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataTableModule} from '../shared/data-table/data-table.module';
import {LocalizationModule} from '../shared/localization/localization.module';
import {ChartsModule} from '../shared/charts/charts.module';

@NgModule({
  declarations: [DashboardComponent ],
  imports: [
    CommonModule, HomeRoutingModule, DataTableModule, LocalizationModule, ChartsModule
  ]
})
export class HomeModule { }
