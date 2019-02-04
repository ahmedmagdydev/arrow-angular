import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-advanced-mode',
  templateUrl: './search-advanced-mode.component.html',
  styleUrls: ['./search-advanced-mode.component.scss']
})
export class SearchAdvancedModeComponent implements OnInit {

	@Input() code;
  constructor() { }

  ngOnInit() {
  }

}
