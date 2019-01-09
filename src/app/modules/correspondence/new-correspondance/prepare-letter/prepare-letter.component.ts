import {Component, ViewChild, AfterViewChecked, OnInit, Input} from '@angular/core';
import {CKEditorComponent} from 'ng2-ckeditor';
import {Language} from 'angular-l10n';
import {MatDialog} from '@angular/material';
import {LetterPreviewComponent} from './letter-preview/letter-preview.component';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-prepare-letter',
  templateUrl: './prepare-letter.component.html',
  styleUrls: ['./prepare-letter.component.scss']
})
export class PrepareLetterComponent implements AfterViewChecked, OnInit {

  @ViewChild(CKEditorComponent) ckeditor : CKEditorComponent;
  @Language() lang: string;
  @Input() newCorrespondenceForm: FormGroup;
  prepareLetterForm: FormGroup;


  constructor(public dialog: MatDialog, private builder: FormBuilder) { }
  ngOnInit() { this.createPrepareLetterForm(); }
  ngAfterViewChecked() { this.initRichEditor(); }



    /* ******************** create prepare letter form ******************* */
    initRichEditor() {
        const editor  = this.ckeditor.instance;
        editor.config.height = '400';
//   	editor.config.toolbar = [
//     { name: 'basicstyles', items: [ 'FontSize','Styles', 'Font', 'Table' , 'Bold', 'Italic' ] },
//     {name: 'list',items:['Insert/Remove Numbered List']}
// ];
        editor.config.toolbarGroups = [
            { name: 'paragraph',   groups: [ 'list', 'indent', 'align'] },
            { name: 'basicstyles', groups: [ 'basicstyles' ] },
            { name: 'styles', groups: [ 'styles','insert' ] },

        ];
        editor.config.removeButtons = 'Save,Templates,Source,Find,Replace,Scayt,SelectAll,Forms,Links,Radio,Flash,Smiley,Iframe,Horizontalrule'
        // console.log(editor.config)
    }
    createPrepareLetterForm() {
        this.prepareLetterForm = this.builder.group({
            template: ['', []],
            needSigningFrom: ['', []],
            content: ['', []],
        });
    }

  /* ******************** letter Preview ******************* */
  letterPreview() {
      const letter: any = {};
      letter.corresNumber = this.newCorrespondenceForm ? this.newCorrespondenceForm.value.corresNumber : '';
      letter.subject = this.newCorrespondenceForm ? this.newCorrespondenceForm.value.subject : '';
      letter.content = this.prepareLetterForm.value.content;
      letter.needSigningFrom = this.prepareLetterForm.value.needSigningFrom;
      const dialogRef = this.dialog.open(LetterPreviewComponent, {
          width: '600px', data: {letter: letter}
      });
  }

}
