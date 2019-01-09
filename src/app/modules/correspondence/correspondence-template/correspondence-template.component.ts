import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TemplateManagerService} from '../../../services/util/template-manager.service';

@Component({
  selector: 'app-correspondence-template',
  templateUrl: './correspondence-template.component.html',
  styleUrls: ['./correspondence-template.component.scss']
})
export class CorrespondenceTemplateComponent implements OnInit {

  @Input() html: any = '<h1>Hello</h1><input type="text" id="name">';
  @Input() src: any = '$("#name").val("template name");';
  @Input() style: any = 'h1{color: blue;}';
  @ViewChild('templateContainer') templateContainer: ElementRef;

  constructor(private _templateManagerService: TemplateManagerService) { }
  ngOnInit() {
      this.initTemplate();
  }


  initTemplate() {
      if (!this.html) {
        return ;
      }
      const element = this.templateContainer.nativeElement;
      const script = this._templateManagerService.createScript(this.src);
      const styleSheet = this._templateManagerService.createStyleSheet(this.style);
      document.getElementById('templateMarkup').innerHTML = this.html;
      element.appendChild(script);
      element.appendChild(styleSheet);
  }
}
