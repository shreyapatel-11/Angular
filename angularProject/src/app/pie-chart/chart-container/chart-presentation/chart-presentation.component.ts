import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-chart-presentation',
  templateUrl: './chart-presentation.component.html',
  styleUrls: ['./chart-presentation.component.scss']
})
export class ChartPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(this.drawChart);
  }

  public drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Commute',  2],
      ['Watch TV', 2],
      // ['Eat',      2],
      // ['Sleep',    7]
    ]);

    var options = {
      pieHole: .6,
      height: 400,
      width: 650
    }

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
  }

}
