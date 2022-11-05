import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', // this is the parent's path
    component: DefaultComponent,
    children: [
      {
        path: '', // this is for the child's path that is related to his dady defaultComponent
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
