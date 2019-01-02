export const  pieChartOptions: any = {
  "title": {"text": ""},
  "subtitle": {"text": ""},
  "exporting": {"scale": 2, "enabled": true},
  "chart": {
    "type": "pie", "polar": false,
    "plotBackgroundColor": null, "plotBorderWidth": null, "plotShadow": false, "inverted": false,
    "parallelAxes": {"resize": {"lineWidth": 4}},
    "style": "{\"fontFamily\":\"\\\"cairo regular\\\", \\\"Lucida Sans Unicode\\\", Verdana, Arial, Helvetica, sans-serif\",\"fontSize\":\"12px\"}",
    "width": 310, "height": 190
  },
  "plotOptions": {
    "pie": {
      "allowPointSelect": true, "cursor": "pointer", "innerSize": "80%",
      "dataLabels": {"enabled": false}, "showInLegend": true
    },
    "series": {"dataLabels": {"enabled": false},}
  },
  "tooltip": {"pointFormat": "{series.name}: <b>{point.percentage:.1f}%</b>"},
  "series": [
    {
      "name": "", "turboThreshold": 0, "colorByPoint": true,
      
      data: [],
    }
  ],
  "data": {
    "csv": "\"Category\";\"Brands\"\n\"Chrome\";61.41\n\"Internet Explorer\";11.84\n\"Firefox\";10.85\n\"Edge\";4.67\n\"Safari\";4.18\n\"Other\";7.05",
    "googleSpreadsheetKey": false,
    "googleSpreadsheetWorksheet": false
  },
  "legend": {
    "layout": "vertical", "align": "left", "x": 0,
    "verticalAlign": "top", "y": 30, "floating": false, "enabled": true,
    "lineHeight": 14, "reversed": false,
  },
  "colors": ["#00dc77", "#ffae00", "#fd4242", "#dadde1"],
  "pane": {backgroundColor: ["#00dc77", "#ffae00", "#fd4242", "#dadde1"],},
  "responsive": {"rules": []},
  "credits": {"href": "", "text": "", "enabled": false},
  "xAxis": {"title": {}},
  "yAxis": {"title": {}}
};
