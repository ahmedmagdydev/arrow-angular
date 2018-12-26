import {Component, OnInit, ViewChild} from '@angular/core';
import {UtilService} from '../../../services/util.service';
import {API_URLS} from '../../../config/AppConfig';
import {correspondencesStatusLookup, correspondencesTableInfoLookup} from '../../../config/Lookups';
import {Language, TranslationService} from 'angular-l10n';
import {CoresspondenceService} from '../../../services/coresspondence/coresspondence.service';
import {pieChartOptions} from '../../../config/ChartsConfig';
import {ChartComponent} from '../../shared/charts/chart/chart.component';
declare var $;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  @ViewChild(ChartComponent) _chartComponent: ChartComponent;
  chartOptions;
  @Language() lang: string;
  correspondencesStatus: any[] = correspondencesStatusLookup;
  correspondencesTable: any = correspondencesTableInfoLookup;
  _currentPage;
  _status;
  loading;

  constructor(private util: UtilService, private coresspondenceService: CoresspondenceService,
              public _translationService: TranslationService) {
    this._translationService.translationChanged().subscribe(() => {
          this.updateChart();
    });
  }
  ngOnInit() {
    this.getData();
  }

  // ----------------------- get correspondences data -----------------------
  getData() {
      this.loading = true;
      this.util.getResources(API_URLS.correspondences).subscribe( result => {
        this.correspondencesTable.data = result;
        this.correspondencesStatus = this.coresspondenceService.getCorrespondencesTypes(result, correspondencesStatusLookup);
        this.updateChart();
        this._status = this.correspondencesStatus[0].title;
        this.loading = false;
          this.initView();
      },
        (error) => { this.loading = false; } ,
        () => {this.loading = false; }
        );
    }

  // ----------------------- update chart -----------------------
  updateChart() {
    const charLabels = this.coresspondenceService.getChartLabels();
    const priorities: any [] = [];
    for ( const label of charLabels) {
      priorities.push({name: label, y: 0});
    }
    const chartData: any[] = this.coresspondenceService.getCorrespondencesPriorities(this.correspondencesTable.data, priorities);
    this.chartOptions = pieChartOptions;
    this.chartOptions.xAxis.labels = charLabels;
    this.chartOptions.yAxis.labels = charLabels;
    this.chartOptions.series[0].data = chartData;
    if ( this._chartComponent ) {
      this._chartComponent.updateChart(this.chartOptions);
    }
  }


  // ----------------------- init hijri date picker and tab plugins -----------------------
  initView() {
      $('.date-range').calendarsPicker({
        rangeSelect: true, monthsToShow: 1,
        calendar: $.calendars.instance('islamic') ,
        prevText: 'السابق', todayText: 'اليوم', nextText: 'التالى',
        clearText: 'مسح', closeText: 'إغلاق',
        onClose: function(dates) {alert('The chosen date(s): ' + dates);}
      });
      $('.main-tabs li:first-child').addClass('large').find('a').addClass('active');
        $('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
          $(e.target).parent().addClass("large"),
            $(e.relatedTarget).parent().removeClass("large"),
            $("#" + $(e.relatedTarget).attr("aria-controls") + "Chart");
        });
    }


  // ----------------------- on correspondence tab change -----------------------
  public changeStatus(thisStatus) {
    this._status = thisStatus;
    this._currentPage = 1;
  }
}
