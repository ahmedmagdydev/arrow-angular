import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visual-tree',
  templateUrl: './visual-tree.component.html',
  styleUrls: ['./visual-tree.component.scss']
})
export class VisualTreeComponent implements OnInit {

  teeSize = 1;
  selectedNode: any;
  showNodePreview;
  @Input() treeData: any[];
  constructor() { }

  ngOnInit() {}

  openNodePreview(selectedNode) {
    this.selectedNode = selectedNode;
    this.showNodePreview = true;
  }
  closeNodePreview(event) {
    this.selectedNode = null;
    this.showNodePreview = false;
  }
  resizeTree(type) {
    this.teeSize = type === 'increase' ? this.teeSize + 0.1 : this.teeSize - 0.1;
  }
}
