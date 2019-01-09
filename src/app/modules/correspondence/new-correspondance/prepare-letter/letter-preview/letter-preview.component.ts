import {AfterViewChecked, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-letter-preview',
  templateUrl: './letter-preview.component.html',
  styleUrls: ['./letter-preview.component.scss']
})
export class LetterPreviewComponent implements OnInit {

  @Language() lang: string;
  letter;

  constructor(public dialogRef: MatDialogRef<LetterPreviewComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.letter = data.letter || {};
  }
  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }

}
