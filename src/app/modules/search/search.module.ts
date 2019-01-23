import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { QueryFormComponent } from './query-form/query-form.component';
import {LocalizationModule} from '../shared/localization/localization.module';
import {DataTableModule} from '../shared/data-table/data-table.module';
import {FilterListModule} from '../shared/filter-list/filter-list.module';
import {QueryParamsComponent} from './query-params/query-params.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
    MatIconModule, MatMenuModule, MatButtonModule, MatTooltipModule, MatSelectModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatProgressSpinnerModule, MatTabsModule,
} from '@angular/material';
@NgModule({
    declarations: [SearchComponent, QueryResultComponent, QueryFormComponent, QueryParamsComponent],
    imports: [
        CommonModule, SearchRoutingModule, LocalizationModule, DataTableModule, MatMenuModule, MatSelectModule,
        FilterListModule, FormsModule, ReactiveFormsModule, MatIconModule,
        MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
        MatProgressSpinnerModule, MatTabsModule, DragDropModule, MatButtonModule, MatTooltipModule
    ]
})
export class SearchModule { }