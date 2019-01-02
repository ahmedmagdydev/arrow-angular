import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-redirect-preview',
  templateUrl: './redirect-preview.component.html',
  styleUrls: ['./redirect-preview.component.scss']
})
export class RedirectPreviewComponent implements OnInit {

  @Language() lang: string;
  @Input() categories: any[];
  @Input() sendGroup;
  @Output() deleteDepartmentEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}

  isCategoryHasSelectedDepartments(category) {
        let hasSelected = false;
        for ( const department of category.departments ) {
            if ( department.selected) {
                hasSelected = true;
                break;
            }
        }
        return hasSelected;
  }
  deleteDepartment(department, category ) {
      this.deleteDepartmentEvent.emit({'department': department, 'category': category});
  }
}
