import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-node-preview',
  templateUrl: './node-preview.component.html',
  styleUrls: ['./node-preview.component.scss']
})
export class NodePreviewComponent {

  @Input() selectedNode;
  @Input() showNodePreview;
  @Output() closeNodePreviewEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }


  closeNodePreview() {
    this.closeNodePreviewEvent.emit(true);
  }

}
