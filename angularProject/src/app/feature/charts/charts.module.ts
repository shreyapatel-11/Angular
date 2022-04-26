import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ColumnChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    GoogleChartsModule,
    SharedModule
  ]
})
export class ChartsModule { }
