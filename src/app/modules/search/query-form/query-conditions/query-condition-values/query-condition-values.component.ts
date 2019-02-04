import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-query-condition-values',
  templateUrl: './query-condition-values.component.html',
  styleUrls: ['./query-condition-values.component.scss']
})
export class QueryConditionValuesComponent implements OnInit {
@Input() fieldType;
 myControl = new FormControl();
 options: string[] = ['ahmed magdy', 'bilal gaber', 'alaa ibrahim'];
 filteredOptions: Observable<string[]>;
  constructor() { }

  ngOnInit() {
  	this.filteredOptions = this.myControl.valueChanges
  	    .pipe(
  	      startWith(''),
  	      map(value => this._filter(value))
  	    );
  }

  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

}
