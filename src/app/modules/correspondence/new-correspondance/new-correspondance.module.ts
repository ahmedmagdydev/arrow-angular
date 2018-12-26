import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCorrespondanceComponent } from './new-correspondance.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { TasksComponent } from './tasks/tasks.component';
import { RelatedComponent } from './related/related.component';
import { HistoryComponent } from './history/history.component';
import { RedirectComponent } from './redirect/redirect.component';
import { PrepareLetterComponent } from './prepare-letter/prepare-letter.component';
import { NewCorrespondanceRoutingModule } from './new-correspondance-routing.module';
import {DataTableModule} from '../../shared/data-table/data-table.module';
import { OrgChartModule } from 'ng2-org-chart';
import {MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatTreeModule,
        MatCheckboxModule,
      MatIconModule,
    MatRadioModule,
  MatExpansionModule} from '@angular/material';
// import {sharedModule} from '../../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { Diagram} from 'gojs';
import { FileDropModule } from 'ngx-file-drop';

@NgModule({
  declarations: [
  NewCorrespondanceComponent,
  MainInfoComponent,
  AttachmentsComponent,
  TasksComponent
,RelatedComponent
,HistoryComponent
,RedirectComponent
,PrepareLetterComponent ],
  imports: [
    CommonModule,
    NewCorrespondanceRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    FileDropModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    CKEditorModule,
    OrgChartModule,
DataTableModule
  ] 
})
export class NewCorrespondanceModule { }
