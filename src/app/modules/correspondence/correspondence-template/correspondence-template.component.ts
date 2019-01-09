import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TemplateManagerService} from '../../../services/util/template-manager.service';

@Component({
  selector: 'app-correspondence-template',
  templateUrl: './correspondence-template.component.html',
  styleUrls: ['./correspondence-template.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CorrespondenceTemplateComponent implements OnInit, OnChanges {

  @Input() templateFiles: FileList;
  @Input() html: any = '<h1>Hello</h1><input type="text" id="name">';
  @Input() src: any = '$("#name").val("template name");';
  @Input() style: any = 'h1{color: blue;}';
  @ViewChild('templateContainer') templateContainer: ElementRef;

  constructor(private _templateManagerService: TemplateManagerService) { }
  ngOnInit() {
      this.initTemplate();
  }
  ngOnChanges() {
      if ( this.templateFiles && this.templateFiles.length > 0) {
          this.injectTemplateFiles();
      }
  }

  /********************** () inject template content ***************** */
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


    /********************** () inject template files content ***************** */
  injectTemplateFiles() {
        const element = this.templateContainer.nativeElement;
        element.innerHTML = '';
        for ( let i = 0 ; i < this.templateFiles.length; i++) {
            const file: File =  this.templateFiles[i];
            this.readFileAsText(file, element);
        }
  }
  readFileAsText(file, element) {
      const reader = new FileReader();
      const ref = this;
      reader.onload = (function(f) {
          return function(e) {
              switch (file.type) {
                  case 'text/css' : {
                      const styleSheet = ref._templateManagerService.createStyleSheet(e.target.result);
                      // document.head.prepend(styleSheet);
                      // el.prepend(styleSheet);
                      element.appendChild(styleSheet);
                      break;
                  }
                  case 'text/html' : {
                      document.getElementById('templateMarkup').innerHTML = e.target.result;
                      break;
                  }
                  case 'text/javascript' : {
                      const script = ref._templateManagerService.createScript(e.target.result);
                      element.appendChild(script);
                      break;
                  }
              }
          };
      })(file);
      reader.readAsText(file);
  }
}
