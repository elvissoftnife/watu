import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { AgencyContainerComponent } from './shared/components/agency-container/agency-container.component';

const routes: Routes = [
  {
    path: 'agency',
    component: AgencyContainerComponent,
    children: [
      {
        path: 'inscriptions',
        component: InscriptionsComponent,
      },
      {
        path: 'programs',
        component: ProgramsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}
