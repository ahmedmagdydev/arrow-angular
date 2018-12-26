import {Component, Input} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.scss']
})
export class RowDetailsComponent {

  @Language() lang: string;
  @Input() detailsColumns: any[] = [];
  @Input() data: any = {};
  constructor() { }


  getObjectAttributeFromArray(arr: any[], attribute): any {
    const ob = arr[0];
    return ob[attribute];
  }
}
