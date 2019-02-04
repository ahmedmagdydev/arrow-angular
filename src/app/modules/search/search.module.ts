import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { QueryResultComponent } from './query-result/query-result.component';
import { QueryFormComponent, EditCodeModal } from './query-form/query-form.component';
import {LocalizationModule} from '../shared/localization/localization.module';
import {DataTableModule} from '../shared/data-table/data-table.module';
import {FilterListModule} from '../shared/filter-list/filter-list.module';
import {QueryParamsComponent} from './query-params/query-params.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AccessRightsModal } from './access-rights/access-rights.modal';

import {
    MatIconModule, MatMenuModule, MatButtonModule, MatTooltipModule, MatSelectModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,
    MatProgressSpinnerModule, MatTabsModule, MatDialogModule, MatTreeModule, MatSlideToggleModule, MatAutocompleteModule,
} from '@angular/material';
import { QueryOutputComponent } from './query-form/query-output/query-output.component';
import { QueryConditionsComponent } from './query-form/query-conditions/query-conditions.component';
import { SearchAdvancedModeComponent } from './query-form/search-advanced-mode/search-advanced-mode.component';
import { QueryConditionValuesComponent } from './query-form/query-conditions/query-condition-values/query-condition-values.component';
@NgModule({

    declarations: [SearchComponent, QueryResultComponent, QueryFormComponent, QueryParamsComponent, QueryOutputComponent, QueryConditionsComponent, EditCodeModal, QueryParamsComponent, AccessRightsModal, SearchAdvancedModeComponent, QueryConditionValuesComponent],
    imports: [
        CommonModule, SearchRoutingModule, LocalizationModule, DataTableModule, MatMenuModule, MatSelectModule,
        FilterListModule, FormsModule, ReactiveFormsModule, MatIconModule,
        MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule,

        MatProgressSpinnerModule, MatTabsModule, MatDialogModule, MatTreeModule, MatSlideToggleModule, MatAutocompleteModule, DragDropModule, MatButtonModule, MatTooltipModule,
    ],
    entryComponents:[AccessRightsModal, EditCodeModal],
    bootstrap:[AccessRightsModal]
})
export class SearchModule { }