import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyprogramsComponent } from './pages/myprograms/myprograms.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { UserContainerComponent } from './shared/components/user-container/user-container.component';
import { ProgramDetailComponent	} from  './pages/program-detail/program-detail.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserContainerComponent,
    children: [
      {
        path: 'myprograms',
        component: MyprogramsComponent,
      },
      {
        path: 'programs/:id',
        component: ProgramsComponent,
      },
      {
	path: 'programdetail/:id',
	component: ProgramDetailComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
