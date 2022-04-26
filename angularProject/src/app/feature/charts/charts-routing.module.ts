import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColumnChartComponent } from './column-chart/column-chart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', redirectTo: 'column-chart', pathMatch: 'full'
      },
      {
        path: 'column-chart', component: ColumnChartComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
