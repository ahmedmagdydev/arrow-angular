import { Component, OnInit, Inject } from '@angular/core';
import {Language, TranslationService} from 'angular-l10n';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {

	@Language() lang: string;
	templates: any[] = [{name: 'temp1', id: 0}, {name: 'temp2', id: 1}, {name: 'temp3', id: 2}];
    templateFields: any[] = [{name: 'field1', id: 0}, {name: 'field2', id: 1}, {name: 'field3', id: 2}];
	outputs: any[] = [];
	conditions = ['1', '2'];
	searchType;

	constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            this.searchType = params['type'];
        });
    }
    ngOnInit() {}

    
}

