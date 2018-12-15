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
import {MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatTreeModule,
        MatCheckboxModule,
      MatIconModule,
    MatRadioModule} from '@angular/material';
import {sharedModule} from '../../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
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
    sharedModule,
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
    CKEditorModule
  ] 
})
export class NewCorrespondanceModule { }
