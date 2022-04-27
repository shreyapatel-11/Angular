import { Directive, ElementRef } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Directive({
  selector: '[appColumnChart]'
})
export class ColumnChartDirective {

  constructor(private ele: ElementRef) { 
    
    ele.nativeElement.style.width = "600px";
    ele.nativeElement.style.height = "500px";
    ele.nativeElement.style.border = "2px solid black";
  }
  
}
