import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Directive({
  selector: '[appColumnChart]'
})
export class ColumnChartDirective {

  @Input() type:string;
  
  constructor(private ele: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { 
    
    ele.nativeElement.style.width = "600px";
    ele.nativeElement.style.height = "500px";
    ele.nativeElement.style.border = "2px solid black";
  }
  ngOnInit() {
    const child = this.document.createElement('google-chart');
    this.renderer.appendChild(this.ele.nativeElement, child);
  }
}
