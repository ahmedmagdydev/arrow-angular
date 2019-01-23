import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.scss']
})
export class QueryParamsComponent implements OnInit, OnChanges {

  @Language() lang: string;
  @Input() params: any[];
  @Output() paramsFormEvent: EventEmitter<any> = new EventEmitter<any>();
  paramsFormGroup: FormGroup;
  formReady;
  constructor(private _fb: FormBuilder) { }
  ngOnInit() {
    this.createParamsForm();
  }
  ngOnChanges() {
    this.createParamsForm();
  }

  // ================== params form ================
  createParamsForm() {
    this.formReady = false;
    const formGroup: any = {};
      for ( const field of this.params) {
          formGroup[field.promptName] = new FormControl(field.defaultValue, this.getFieldValidations(field));
      }
      this.paramsFormGroup = this._fb.group(formGroup);
      this.formReady = true;
  }
  getFieldValidations(field): any[] {
        const validations: any[] = [];
        if ( field.required) {
            validations.push(Validators.required);
        }
        return validations;
  }



  // ================== params form submit================
  submit(paramsValues, valid) {
    this.paramsFormEvent.emit(paramsValues);
  }
}
