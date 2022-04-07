import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartRoutingModule } from './pie-chart-routing.module';
import { PieChartComponent } from './pie-chart.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { ChartPresentationComponent } from './chart-container/chart-presentation/chart-presentation.component';


@NgModule({
  declarations: [
    PieChartComponent,
    ChartContainerComponent,
    ChartPresentationComponent
  ],
  imports: [
    CommonModule,
    PieChartRoutingModule
  ]
})
export class PieChartModule { }
