import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataTreeServiceService} from './data-tree-service.service';

@Component({
  selector: 'app-data-tree',
  templateUrl: './data-tree.component.html',
  styleUrls: ['./data-tree.component.scss']
})
export class DataTreeComponent {

  @Input() dir: string;
  @Input() treeData: any[];
  @Input() childrenNodesName: string;
  @Input() nodeDisplayName: string;
  @Input() nodeID: string;
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteNodeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public _treeService: DataTreeServiceService) { }

  // ---------------- on delete node ----------------
  deleteNode(node) {
    this.treeData = this.treeData.filter( treeNode => node !== treeNode);
  }
}
