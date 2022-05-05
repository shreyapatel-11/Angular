import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { ChartPresenterService } from '../chart-presenter/chart-presenter.service';

// declare var google: any;

@Component({
  selector: 'app-chart-presentation',
  templateUrl: './chart-presentation.component.html',
  styleUrls: ['./chart-presentation.component.scss'],
})
export class ChartPresentationComponent implements OnInit {
constructor(){
  google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.drawVisualization);
}

  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {


  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day','Average'],
    ['Accepted', 8,6],
    ['Rejected', 2,9],
    ['Pending', 2,4],
    ['Req. Revoke', 0],
    ['Revoked', 0]
  ]);

  const options = {
    pieHole: 0.8,
    // legend: {position: 'top'},

  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngOnInit() {
    // google.charts.load('current', { 'packages': ['corechart'] });
    // google.charts.setOnLoadCallback(this.drawChart);
    
  }
  public type = ChartType.ComboChart;
  public  data:any | undefined;
  public options:any | undefined;
  public drawVisualization() {
    // Some raw data (not necessarily accurate)
     this.data = google.visualization.arrayToDataTable([
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ]);
    var ele!:any
     this.options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };
    
    ele = document.getElementById('chart_div');
    var chart = new google.visualization.ComboChart(ele);
    chart.draw(this.data, this.options);
  }
  width = 550;
  height = 500;
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

