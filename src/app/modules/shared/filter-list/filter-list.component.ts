import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {

  @Language() lang: string;
  @Input() filters: any[];
  @Input() activeTab;
  @Input() slider;
  @Output() filterSelectEvent: EventEmitter<any> = new EventEmitter();
  slideConfig = {'slidesToShow': 7, 'slidesToScroll': 1, 'rtl': true, 'infinite': false};

  constructor() { }
  ngOnInit() {}

  // ------------------ filter click event ------------------
  selectFilter = (filter) =>  this.filterSelectEvent.emit(filter);

}
