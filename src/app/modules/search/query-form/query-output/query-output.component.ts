import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Language} from 'angular-l10n';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-query-output',
  templateUrl: './query-output.component.html',
  styleUrls: ['./query-output.component.scss']
})
export class QueryOutputComponent implements OnInit {

  outputForm: FormGroup;
  @Language() lang: string;
  @Input() templates: any[] = [];
  @Input() searchType;
  @Input() templateFields: any[] = [];
  @Input() outputs: any[] = [];
  @Output() outputsChange: EventEmitter<any> = new EventEmitter<any>();
  selectedOutputIndex = -1;

  constructor(private _builder: FormBuilder) { }
  ngOnInit() {
     this.initOutputForm();
  }

  initOutputForm(output = {templateID: '', field: '', displayAs: '', sort: ''}) {
      this.outputForm = this._builder.group({
          templateID: new FormControl(output.templateID, [Validators.required]),
          field: new FormControl(output.field, [Validators.required]),
          displayAs: new FormControl(output.displayAs, [Validators.required]),
          sort: new FormControl(output.sort, [Validators.required]),
      });
  }
  // ---------------- drag&drop output -------------------
    dropOutput(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.outputs, event.previousIndex, event.currentIndex);
    }

  // ---------------- add output -------------------
  submitOutput(output) {
      if ( this.selectedOutputIndex >= 0 ) {
          this.outputs[this.selectedOutputIndex] = output;
          this.selectedOutputIndex = -1;
      } else {
          this.outputs.push(output);
      }
      this.outputsChange.emit(this.outputs);
  }
  editOutput(output, index) {
      this.selectedOutputIndex = index;
      this.initOutputForm(output);
  }
  deleteOutput(output, index) {
      this.outputs.splice(index, 1);
  }
}
