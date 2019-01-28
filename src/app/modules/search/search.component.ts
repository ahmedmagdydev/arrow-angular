import { Component, OnInit } from '@angular/core';
import {queryTableInfoLookup} from '../../config/Lookups';
import {UtilService} from '../../services/util/util.service';
import {API_URLS} from '../../config/AppConfig';
import {Language} from 'angular-l10n';
import {MatDialog} from '@angular/material';
import {AccessRightsModal } from './access-rights/access-rights.modal'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Language() lang: string;
    queryTable: any = queryTableInfoLookup;
    searchQueries: any[];
    filteredSearchQueries: any[];
    activeTab = 'all';
    loading;
    _status = 'query';
    selectedQuery: any;
    constructor(private util: UtilService, public dialog: MatDialog) {}
    ngOnInit() {this.getData(); }

    // ----------------------- open access rights modal ----------------
    openAccessRights() {
        const dialogRef = this.dialog.open(AccessRightsModal,{
            width: '1140px',
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }

    // ----------------------- get search queries ----------------
    getData() {
        this.loading = true;
        this.util.getResources(API_URLS.query).subscribe( result => {
                this.queryTable.data = result;
                this.searchQueriesFillterStatistics();
                this.loading = false;
            },
            (error) => { this.loading = false; console.log(error);} ,
            () => this.loading = false
        );
    }


    // ----------------------- filter search queries ----------------
    searchQueriesFillterStatistics() {
        this.searchQueries =  this.queryTable.data;
        this.filteredSearchQueries =  this.queryTable.data;
        for ( const query of this.searchQueries) {
            switch (query.type) {
                case 'correspondences':  this.queryTable.filters[2].value += 1; break;
                case 'tasks':  this.queryTable.filters[1].value += 1 ; break;
            }
            this.queryTable.filters[0].value += 1;
        }
    }
    filterSearchQueries(type) {
        this.activeTab = type;
        this.filteredSearchQueries = type === 'all' ?  this.searchQueries : this.searchQueries.filter(query => query.type === type);
        this.queryTable.data = this.filteredSearchQueries;
    }


    // ----------------------- Run Query Actions on select  ----------------
    runQuery(event) {
        // console.log(event.row)
        if (!event.action) {
            // need parameters
            this.selectedQuery = event.row;
        } else {
            this.util.navigate('search/result', {id: event.row.id});
        }
    }
    selectedRowsAction(action) {}

    // ----------------------- search form parametrized queries  ----------------
    search(event) {
        const paramsValue = event;
        console.log(event)
        this.util.navigate('search/result', {id: this.selectedQuery.id});
    }
}
