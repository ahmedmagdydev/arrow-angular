import {Component, EventEmitter, Input, OnInit, Output, Inject} from '@angular/core';
import {Language} from 'angular-l10n';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-query-conditions',
  templateUrl: './query-conditions.component.html',
  styleUrls: ['./query-conditions.component.scss']
})
export class QueryConditionsComponent implements OnInit {

  @Language() lang: string;
  @Input() conditions: any[] = [];
  @Output() conditionsChange: EventEmitter<any> = new EventEmitter();
  code='(txtSearchPartyCode.Text == "") & (txtSearchBranchId.Text != "") & (txtSearchSymbol.Text == "") & (txtSearchTerminalId.Text == "")'
  constructor(public dialog: MatDialog ) { }
  ngOnInit() {}

  openEditCode(code){
        const dialogRef = this.dialog.open(EditCodeModal,{
          data:{
            code:code
          },
          width:'860px'
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
  }
addCondition(){
  let item = 'a';
  this.conditions.push(item)
}
  // ---------------- condition drag and drop -------------------
  dropCondition(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.conditions, event.previousIndex, event.currentIndex);
  }
}

@Component({
  selector: 'edit-code-modal',
  templateUrl: 'edit-code-modal.html',
})
export class EditCodeModal{
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}