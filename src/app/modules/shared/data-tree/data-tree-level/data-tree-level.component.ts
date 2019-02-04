import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataTreeServiceService} from '../data-tree-service.service';

@Component({
  selector: 'app-data-tree-level',
  templateUrl: './data-tree-level.component.html',
  styleUrls: ['./data-tree-level.component.scss']
})
export class DataTreeLevelComponent {

  @Input() opened;
  @Input() children: any[];
  @Input() childrenNodesName: string;
  @Input() nodeDisplayName: string;
  @Input() nodeID: string;
  @Input() dir: string;
  @Output() childSelectEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteNodeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(public _treeService: DataTreeServiceService) { }

  // ---------------- on toggle node ( open && close ) ----------------
  onSelectChildNode = (node) => this.childSelectEvent.emit( node.selected);

  // ---------------- on delete node ----------------
  deleteNode(node) {
    this.children = this.children.filter( treeNode => node !== treeNode);
  }
}
