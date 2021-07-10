import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { AgencyContainerComponent } from './shared/components/agency-container/agency-container.component';
import { SedesComponent } from './pages/sedes/sedes.component'
import { InscriptionsProgramComponent } from './pages/inscriptions-program/inscriptions-program.component';

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
        path: 'sedes',
        component: SedesComponent
      },
      {
        path: 'programs/:id',
        component: ProgramsComponent,
      }, {
        path: 'inscriptionsprograms/:id',
        component: InscriptionsProgramComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule],
})
export class AgencyRoutingModule { }
