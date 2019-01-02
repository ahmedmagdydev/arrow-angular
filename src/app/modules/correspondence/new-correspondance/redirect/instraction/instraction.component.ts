import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-instraction',
  templateUrl: './instraction.component.html',
  styleUrls: ['./instraction.component.scss']
})
export class InstractionComponent implements OnInit {

  selectedOptions: any[] = [];
  instractionOptions: any[];
  constructor(public dialogRef: MatDialogRef<InstractionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.instractionOptions = data.instractionOptions || [];
  }

  ngOnInit() {}

  onSelect(option, index) {
    if ( !option.selected ) {
      option.selected = true;
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(0, index);
      option.selected = false;
    }
  }
  deSelect(option, index) {
    this.instractionOptions.filter(instraction => {
      if(instraction.option === option) {
        instraction.selected = false;
      }
    });
    this.selectedOptions.splice(index, 1);
  }
  cancel(): void {
    this.dialogRef.close();
  }
  done(): void {
    this.dialogRef.close({selectedOptions: this.selectedOptions});
  }
}
