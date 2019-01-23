import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {DataTableModule} from '../shared/data-table/data-table.module';
import {LocalizationModule} from '../shared/localization/localization.module';
import {ChartsModule} from '../shared/charts/charts.module';
import { HijriDateModule } from '../shared/hijri-date/hijri-date.module';
import {MatSelectModule, MatProgressBarModule} from '@angular/material';
import { HomeComponent } from './home.component';
@NgModule({
  declarations: [HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DataTableModule,
    LocalizationModule,
    ChartsModule,
    HijriDateModule,
    MatProgressBarModule,
    MatSelectModule]
})
export class HomeModule { }
