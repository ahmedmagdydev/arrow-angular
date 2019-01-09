import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgPipesModule} from 'ngx-pipes';
import {SlickModule} from 'ngx-slick';
import { FormsModule } from '@angular/forms';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { RowDetailsComponent } from './row-details/row-details.component';
import {LocalizationModule} from '../localization/localization.module';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [DataTableComponent, TableHeaderComponent, TableFooterComponent, RowDetailsComponent],
  imports: [CommonModule, NgxPaginationModule, NgPipesModule, FormsModule, LocalizationModule, MatCheckboxModule],
  exports: [DataTableComponent, SlickModule]
})
export class DataTableModule { }
