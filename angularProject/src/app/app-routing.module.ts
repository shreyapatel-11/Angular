import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'mentor',
  },
  {
    path: 'data',
    loadChildren: () => import('./feature/data-binding/data-binding.module').then(m => m.DataBindingModule)
  },
  { path: 'mentor', loadChildren: () => import('./feature/mentor/mentor.module').then(m => m.MentorModule) },
  { path: 'pie-chart', loadChildren: () => import('./pie-chart/pie-chart.module').then(m => m.PieChartModule) },
  { path: 'charts', loadChildren: () => import('./feature/charts/charts.module').then(m => m.ChartsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
