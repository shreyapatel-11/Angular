import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { PieChartComponent } from './pie-chart.component';

const routes: Routes = [{ path: '', component: PieChartComponent,
children: [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: ChartContainerComponent
  },
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieChartRoutingModule { }
