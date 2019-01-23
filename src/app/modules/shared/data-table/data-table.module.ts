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
import {MatCheckboxModule, MatButtonModule, MatInputModule} from '@angular/material';
import {FilterPipePipe} from '../../../pipes/filter-pipe.pipe';
import {SpinnerModule} from '../spinner/spinner.module';

@NgModule({
  declarations: [DataTableComponent, TableHeaderComponent, TableFooterComponent, RowDetailsComponent, FilterPipePipe],
  imports: [CommonModule, NgxPaginationModule, NgPipesModule, FormsModule, LocalizationModule, MatCheckboxModule,
      MatButtonModule, MatInputModule, SpinnerModule],
  exports: [DataTableComponent, SlickModule, SpinnerModule]
})
export class DataTableModule { }
