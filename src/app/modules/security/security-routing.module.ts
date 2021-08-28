import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { ServicesComponent } from './pages/services/services.component';
import { UsComponent } from './pages/us/us.component';
import { SecurityContainerComponent } from './shared/components/security-container/security-container.component';

const routes: Routes = [
  {
    path: '',
    component: SecurityContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'us',
        component: UsComponent,
      },
      {
        path: 'recuperar-contrasena',
        component: RecoverPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
