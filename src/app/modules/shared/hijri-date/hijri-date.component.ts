import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-hijri-date',
  templateUrl: './hijri-date.component.html',
  styleUrls: ['./hijri-date.component.scss']
})
export class HijriDateComponent implements OnInit {

  @Input() monthsToShow;
  @Input() rangeSelect;

  constructor() { }

  ngOnInit() {
    $('.date-picker').calendarsPicker({
      rangeSelect: this.rangeSelect, monthsToShow: this.monthsToShow,
      calendar: $.calendars.instance('islamic') ,
      prevText: 'السابق', 
      todayText: 'اليوم', 
      nextText: 'التالى', 
      clearText: 'مسح', 
      closeText: 'إغلاق', 
      onClose: function(dates) { 
      }
    });
  }

}
