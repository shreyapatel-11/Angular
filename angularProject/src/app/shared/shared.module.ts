import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { ColumnChartDirective } from './column-chart/column-chart.directive';



@NgModule({
  declarations: [
    PaginationComponent,
    ColumnChartDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationComponent,
    ColumnChartDirective
  ]
})
export class SharedModule { }
