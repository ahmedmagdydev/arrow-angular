import { Component, OnInit } from '@angular/core';
import {correspondencesStatusLookup, correspondencesTableInfoLookup} from '../../../../config/Lookups';
import {CoresspondenceService} from '../../../../services/coresspondence/coresspondence.service';
import {UtilService} from '../../../../services/util/util.service';
import {Language} from 'angular-l10n';
import {API_URLS} from '../../../../config/AppConfig';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit {

    @Language() lang: string;
	correspondencesStatus: any[] = correspondencesStatusLookup;
	correspondencesTable: any = correspondencesTableInfoLookup;
	loading;
	public related = [];
	public _status = '';
    searchCorrespondencesForm: FormGroup;
    templateTypes: any[] = [{name: 'type 1'}, {name: 'type 2'}];
    selectedCorrespondences: any[] = [];
  constructor(private util: UtilService, private coresspondenceService: CoresspondenceService, private builder: FormBuilder) {}
  ngOnInit() {
      this.createSearchForm();
  }

  /* ******************** search ******************* */
	createSearchForm() {
        this.searchCorrespondencesForm = this.builder.group({
            correspondenceNumber: ['', []],
            privilegeNumber: ['', []],
            templateType: ['', []],
		});
	}
  search(searchParameters) {
     this.loading = true;
     this.util.getResources(API_URLS.correspondences).subscribe( result => {
          this.correspondencesTable.data = result;
          this.correspondencesStatus = this.coresspondenceService.getCorrespondencesTypes(result, correspondencesStatusLookup);
          this._status = this.correspondencesStatus[0].title;
          this.loading = false;
          },
		 (error) => { this.loading = false; } ,
		 () => {this.loading = false; }
	);
  }


  /* ******************** selected correspondence ******************* */
  onSelectRows(selectedCorrespondences) {
	this.selectedCorrespondences = selectedCorrespondences;
	// console.log(selectedCorrespondences);
  }
  getSelectedCorrespondences() {
  	return this.selectedCorrespondences;
  }
}
