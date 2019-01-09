import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { QueryFormComponent } from './query-form/query-form.component';
import {LocalizationModule} from '../shared/localization/localization.module';
import {DataTableModule} from '../shared/data-table/data-table.module';
import {MatProgressBarModule, MatMenuModule} from '@angular/material';

@NgModule({
  declarations: [SearchComponent, QueryResultComponent, QueryFormComponent],
  imports: [
    CommonModule, SearchRoutingModule, LocalizationModule, DataTableModule, MatProgressBarModule, MatMenuModule
  ]
})
export class SearchModule { }
