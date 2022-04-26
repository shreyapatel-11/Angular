import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //start: PieChart  

  public chartType = ChartType.PieChart;

  public chartData = [
    ['Accepted', 6.5],
    ['Rejected', 5],
    ['Pending', 1],
    ['Req. Revoke', 0],
    ['Revoked', 0]
  ];

  public chartOptions = {
    pieHole: .6,
    legend: 'none',
    pieStartAngle: -95,
    'width':250,
    'height':200,
    chartArea: { width: '100%', height: '100%' },
    pieSliceTextStyle: { color: 'transparent' },
    colors: ['#408CFF', '#F26A6A', '#FFB800', '#f3b49f', '#f6c7b6'],
   
  };
  //end: PieChart  

  //start: column chart 

  public type = ChartType.ColumnChart;

  public data = [
      ["Mon", 90],
      ["Tue", 110],
      ["Wed", 97],
      ["Thu", 50],
      ["Fri", 14],
      ["Sat", 120],
      ["Sun", 80],
   ];

   columnNames = ['Year', 'Asia'];
  //  backgroundColor: {color: 'red'};	

   options = {
    legend: 'none',
    vAxis: {
      /**
       * @remove : minor gridlines
       */
      minorGridlines:{count:0},

      // gridlines: {
      //     color: 'none'
      // }
    }
    // colors: ['#408CFF']
    // chartArea: { width: '100%', height: '100%' },
   };

   width = 550;
   height = 500;
   
  //end: column-chart  

}
