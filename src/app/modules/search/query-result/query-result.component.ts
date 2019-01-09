import { Component, OnInit } from '@angular/core';
import {UtilService} from '../../../services/util/util.service';
import {CoresspondenceService} from '../../../services/coresspondence/coresspondence.service';
import {API_URLS} from '../../../config/AppConfig';
import {correspondencesPortalStatusLookup, correspondencesTableInfoLookup} from '../../../config/Lookups';
import {Language} from 'angular-l10n';

@Component({
  selector: 'app-query-result',
  templateUrl: './query-result.component.html',
  styleUrls: ['./query-result.component.scss']
})
export class QueryResultComponent implements OnInit {

    @Language() lang: string;
    slideConfig = {'slidesToShow': 7, 'slidesToScroll': 1, 'rtl': true, 'infinite': false};
    correspondencesTable: any = correspondencesTableInfoLookup;
    _orderBy;
    _status;
    _currentPage;
    public corresIndex;
    correspondencesStatus: any[] = correspondencesPortalStatusLookup;
    loading;
  constructor(private util: UtilService, private coresspondenceService: CoresspondenceService) { }

  ngOnInit() {
      this.getData();
  }
    // ----------------------- get correspondences data -----------------------
    getData() {
        this.loading = true;
        this.util.getResources(API_URLS.correspondences).subscribe( result => {
                this.correspondencesTable.data = result;
                this.correspondencesStatus = this.coresspondenceService.getCorrespondencesTypes(result, correspondencesPortalStatusLookup);
                this._status = this.correspondencesStatus[0].title;
                this.loading = false;
            },
            (error) => { this.loading = false; } ,
            () => {this.loading = false; }
        );
    }
    // ----------------------- on select status / correspondence type  -----------------------
    corresActive(index, thisStatus){
        this.corresIndex = index;
        this._status = thisStatus;
        this._currentPage = 1;
    }

}
