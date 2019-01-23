import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-tree-level',
  templateUrl: './tree-level.component.html',
  styleUrls: ['./tree-level.component.scss']
})
export class TreeLevelComponent implements OnInit {

    today = new Date;
    @Language() lang: string;
    @Input() treeData: any[];
    @Output() openNodePreviewEvent: EventEmitter<any> = new EventEmitter();

    constructor() { }
    ngOnInit() {}

    openNodePreview(selectedNode) {
        this.openNodePreviewEvent.emit(selectedNode);
    }
    // check if value is a date object
    isDate(date) {
        return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
    }
}
