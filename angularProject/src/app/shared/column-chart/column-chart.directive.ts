import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Directive({
  selector: '[appColumnChart]'
})
export class ColumnChartDirective {
  
  constructor(private ele: ElementRef, private renderer: Renderer2) { 
    ele.nativeElement.style.border = "2px solid black";
  }
  ngOnInit() {
    const child = this.renderer.createElement('google-chart');
    this.renderer.appendChild(this.ele.nativeElement, child);
    
    this.renderer.setAttribute(child, 'type', 'ColumnChart')
    this.renderer.setAttribute(child, "height", '600px')
    this.renderer.setAttribute(child, "width", '500px')
    this.renderer.setAttribute(child, "display", 'block')
    this.renderer.setProperty(child, "data", this.tdata)
  }
  // @HostBinding('style.width') width = "600px";
  // @HostBinding('style.height') height = "500px"
  public type = ChartType.ColumnChart;
  public tdata = [
    ["Mon", 16],
    ["Tue", 21],
    ["Wed", 1],
    ["Thu", 3],
    ["Fri", 5],
    ["Sat", 2],
    ["Sun", 1],
  ];
 public options = {
    legend: 'none',
    bar: {groupWidth: "20"},
    
    vAxis: {
      /**
       * @remove : minor gridlines
       */
      minorGridlines: { count: 0 },
      gridlines: {
          // color: 'none'
          
          lineStyle: "dashed",
      },
      
    },
    series:{
      0: { lineDashStyle: [2, 2] },
    },
    colors: ['#7fb4be']
    // chartArea: { width: '100%', height: '100%' },
  };
}
