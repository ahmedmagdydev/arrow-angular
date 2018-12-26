import {Component, OnInit, Input, OnChanges} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{

  showChart = true;
  highcharts = Highcharts;
  @Input() chartOptions: any;


  constructor() {}
  ngOnInit() {}

  updateChart(chartOptions) {
    this.showChart = false;
    this.highcharts = null;
    this.chartOptions = null;
    const ref = this;
    setTimeout(function () {
      ref.highcharts = Highcharts;
      ref.chartOptions = chartOptions;
      ref.showChart = true;
    }, 20);
  }
}
