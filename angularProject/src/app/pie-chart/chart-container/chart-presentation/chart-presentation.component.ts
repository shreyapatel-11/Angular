import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { ChartPresenterService } from '../chart-presenter/chart-presenter.service';

declare var google: any;

@Component({
  selector: 'app-chart-presentation',
  templateUrl: './chart-presentation.component.html',
  styleUrls: ['./chart-presentation.component.scss'],
})
export class ChartPresentationComponent implements AfterViewInit {


  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  const options = {
    pieHole: 0.4,
    title: 'My Daily Activities',
    legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  // public chartType = ChartType.PieChart;
  // public columnNames = ['Browser', 'Percentage'];

  // data = [
  //   ['Firefox', 45.0],
  //   ['IE', 26.8],
  //   ['Chrome', 12.8],
  //   ['Safari', 8.5],
  //   ['Opera', 6.2],
  //   ['Others', 0.7],
  // ];

  // options = {
  //   pieHole: 0.4,
  //   colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
  //   is3D: true,
  // };
  // width = 550;
  // height = 400;

  // constructor(private chartService: ChartPresenterService) {}

  // ngOnInit(): void {}

  // ngOnInit(): void {
  //   var leaves = this.chartService.getAll();
  //   google.charts.load("current", {packages:["corechart"]});
  //   this.buildChart(leaves);
  // }

  // public buildChart(leaves: PieChart[]){
  //   var renderChart = (chart: any) => {
  //     // var data = google.visualization.arrayToDataTable([
  //     //   ['Task', 'Hours per Day'],
  //     //   ['Work',     11],
  //     //   ['Commute',  2],
  //     //   ['Watch TV', 1],
  //     //   ['Eat',      0],
  //     //   ['Sleep',    0]
  //     // ]);

  //     var chartItems= [];
  //     chartItems.push(['Task', 'Hours per Day']);
  //     leaves.forEach(items => {
  //       chartItems.push([items.leaveName]);
  //     });

  //     var data = google.visualization.arrayToDataTable(chartItems);

  //     var options = {
  //       pieHole: .6,
  //       height: 400,
  //       width: 650
  //     }
  //     chart().draw(data, options);
  //   }
  //   var donutChart = () => new google.visualization.PieChart(document.getElementById('donutchart'));
  //   var callBack = () => renderChart(donutChart);
  //   google.charts.setOnLoadCallback(callBack);
  // }

  // // public drawChart() {
  //   // var data = google.visualization.arrayToDataTable([
  //   //   ['Task', 'Hours per Day'],
  //   //   ['Work',     11],
  //   //   ['Commute',  2],
  //   //   ['Watch TV', 1],
  //   //   ['Eat',      0],
  //   //   ['Sleep',    0]
  //   // ]);

  //   // var options = {
  //   //   pieHole: .6,
  //   //   height: 400,
  //   //   width: 650
  //   // }

  //   // var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  //   //     chart.draw(data, options);
  // // }
}
