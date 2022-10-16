import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.scss'],
})
export class EmailSentComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'stockChart';
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: undefined,
    },
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      margin: 10,
      backgroundColor: 'transparent',
      symbolRadius: 0,
    },
    xAxis: {
      // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      opposite: false,
      min: 0,
      tickInterval: 10,
      labels: {
        overflow: 'justify',
      },
    },
    tooltip: {
      valueSuffix: ' emails',
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    credits: {
      enabled: false,
    },
    navigator: {
      enabled: false,
    },
    rangeSelector: {
      selected: 2,
      buttonTheme: {
        // styles for the buttons
        fill: '#3f51b5',
        stroke: 'none',
        'stroke-width': 0,
        r: 8,
        width: 40,
        style: {
          boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
          color: '#fff',
        },
        states: {
          hover: {
            fill: '#3f51b5',
          },
          select: {
            fill: '#3f51b5',
            style: {
              color: 'white',
            },
          },
        },
      },
      labelStyle: {
        opacity: 0,
      },
      inputEnabled: false,
      buttonPosition: {
        align: 'right',
      },
      buttons: [
        {
          text: 'Week',
          type: 'week',
        },
        {
          text: 'Month',
          type: 'month',
        },
        {
          text: 'Year',
          type: 'year',
        },
      ],
    },
    series: [
      {
        name: 'Series A',
        type: 'column',
        data: [
          5, 15, 4, 23, 2, 7, 11, 11, 15, 20, 2, 7, 5, 15, 4, 23, 2, 7, 11, 11,
          15, 20, 2, 7,
        ],
        color: 'cornflowerblue',
        pointStart: Date.UTC(2022, 0, 1),
        pointIntervalUnit: 'month',
      },
      {
        name: 'Series B',
        type: 'column',
        pointStart: Date.UTC(2022, 0, 1),
        pointIntervalUnit: 'month',
        data: [
          13, 26, 37, 8, 6, 7, 13, 16, 24, 8, 6, 17, 5, 15, 4, 23, 2, 7, 11, 11,
          15, 20, 2, 7,
        ],
        color: '#FFFF66',
      },
      {
        name: 'Series C',
        pointStart: Date.UTC(2022, 0, 1),
        pointIntervalUnit: 'month',
        type: 'column',
        color: 'lightgreen',
        data: [
          21, 14, 3, 13, 4, 26, 23, 4, 3, 12, 14, 26, 5, 15, 4, 23, 2, 7, 11,
          11, 15, 20, 2, 7,
        ],
        
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
