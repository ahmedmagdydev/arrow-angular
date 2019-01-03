import { Component, OnInit } from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-new-correspondance',
  templateUrl: './new-correspondance.component.html',
  styleUrls: ['./new-correspondance.component.scss']
})
export class NewCorrespondanceComponent implements OnInit {

    @Language() lang: string;
  constructor() { }

  ngOnInit() {
  }

}
