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
import { CKEditorModule } from 'ng2-ckeditor';


import {
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule, MatDialogModule, MatButtonModule
} from '@angular/material';
// import {sharedModule} from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { Diagram} from 'gojs';
import { FileDropModule } from 'ngx-file-drop';
import { FileUploaderModule } from '../../shared/file-uploader/file-uploader.module';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import {InstractionComponent} from './redirect/instraction/instraction.component';
import {LocalizationModule} from '../../shared/localization/localization.module';
import { RedirectPreviewComponent } from './redirect/redirect-preview/redirect-preview.component';
import { RedirectAddOtherContactsComponent } from './redirect/redirect-add-other-contacts/redirect-add-other-contacts.component';
import {VisualTreeModule} from '../../shared/charts/visual-tree/visual-tree.module';
@NgModule({
  declarations: [
  NewCorrespondanceComponent,
  MainInfoComponent,
  AttachmentsComponent,
  TasksComponent
,RelatedComponent
,HistoryComponent
,RedirectComponent
,PrepareLetterComponent,InstractionComponent, RedirectPreviewComponent, RedirectAddOtherContactsComponent ],
  imports: [
    CommonModule,
    NewCorrespondanceRoutingModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    // FileDropModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    CKEditorModule,
    FileUploadModule,
DataTableModule,
FileUploaderModule,
      LocalizationModule,
      MatDialogModule,
      MatButtonModule,
      VisualTreeModule
  ],
    entryComponents: [InstractionComponent]
})
export class NewCorrespondanceModule { }
