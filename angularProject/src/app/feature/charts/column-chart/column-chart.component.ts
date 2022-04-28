import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartType, Column } from 'angular-google-charts';
import { Chart } from '../model/charts.model';
import { ChartsService } from '../service/charts.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {

  constructor(private chartService: ChartsService) { }

  ngOnInit(): void {
    this.getChartData();
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

  public columnData: Chart[];

  getChartData(){
    this.chartService.getColumn().subscribe(data => {
      console.log(data)
      this.columnData = data;
    })
  }
  public data = [
      ["Mon", -5],
      ["Tue", 10],
      ["Wed", 1],
      ["Thu", 3],
      ["Fri", 5],
      ["Sat", 2],
      ["Sun", 0],
   ];
   
  //  dynamic data
   mehtod(temp:Chart[]) {
     /**
      * @forEach loop
      */
    //  let iterator = 0;
    //   this.columnData.forEach( (i) => {
    //   this.data[iterator][1] = i.patient;
    //   console.log(this.data[iterator][1]);
    //   iterator++;
    // });

    /**
     * @for...of loop
     */
    let p = 0;
    
    for (const i of temp) {
      if(this.data[p][0]===i.day){
        // console.log(this.data[p][0]===i.day);
        this.data[p][1] = i.patient;
      }
      else{
        this.data[p][1] = 0;
      }
      // console.log(this.data[p][1]);
      p++;
    }
    console.log(this.data)

    /**
     * @for loop
     */
    //  for(let i =0 ; i<= this.columnData.length; i++) {
    //   //  console.log(this.columnData[i].patient);
    //    this.data[i][1]=this.columnData[i].patient;
    //   //  console.log(this.data[i][1])
    //  }
   }

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

   public selected: number;
   public tempColumnData: Chart[];
   public temp: Chart[];

  //  select this week or last week
   update(e:any){
    //  console.log(this.columnData)
     this.selected = e.target.value
     this.tempColumnData = this.columnData
     if(this.selected == 1){
       this.temp  = this.tempColumnData.slice(0,7)
       this.mehtod(this.temp)
      //  console.log(this.tempColumnData.slice(0,7));
     }
     else{
       this.temp= this.tempColumnData.slice(7)
        this.mehtod(this.temp)
      //  console.log(this.tempColumnData.slice(7));
    }

  }
  //end: column-chart 
}
