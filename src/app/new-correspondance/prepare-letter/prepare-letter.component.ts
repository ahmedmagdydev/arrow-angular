import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-prepare-letter',
  templateUrl: './prepare-letter.component.html',
  styleUrls: ['./prepare-letter.component.scss']
})
export class PrepareLetterComponent implements OnInit {
	
	public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

}
