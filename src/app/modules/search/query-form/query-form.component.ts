import { Component, OnInit, Inject } from '@angular/core';
import {Language, TranslationService} from 'angular-l10n';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {

	@Language() lang: string;
	templates: any[] = [{name: 'temp1', id: 0}, {name: 'temp2', id: 1}, {name: 'temp3', id: 2}];
    templateFields: any[] = [{name: 'field1', id: 0}, {name: 'field2', id: 1}, {name: 'field3', id: 2}];
	outputs: any[] = [];
	conditions = [
    {
      operator:'',
      field:'',
      condition:'',
      parameter:'',
      displayName:'',
      value:'',
      openingBracket:'',
      closingBracket:''
    }
  ];
	searchType;
  disabled;
  checked;
  code='(txtSearchPartyCode.Text == "") & (txtSearchBranchId.Text != "") & (txtSearchSymbol.Text == "") & (txtSearchTerminalId.Text == "")'
	constructor(private route: ActivatedRoute, public dialog: MatDialog) {
        this.route.queryParams.subscribe(params => {
            this.searchType = params['type'];
        });
    }
    ngOnInit() {}

    advancedMode(e){
      if(e.checked == true){
        this.openEditCode();
      }
    }

    openEditCode(){
          const dialogRef = this.dialog.open(EditCodeModal,{
            data:{
              code:this.code
            },
            width:'860px'
          });

          dialogRef.afterClosed().subscribe(result => {
            if(result == true){
              this.disabled = true;
            }else{
              this.checked = false;
            }
          });
    }


}


@Component({
  selector: 'edit-code-modal',
  templateUrl: 'edit-code-modal.html',
})
export class EditCodeModal{
  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
}