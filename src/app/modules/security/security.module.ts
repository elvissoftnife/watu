import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { UsComponent } from './pages/us/us.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityContainerComponent } from './shared/components/security-container/security-container.component';
import { SecurityNavComponent } from './shared/components/security-nav/security-nav.component';
import { SecurityFooterComponent } from './shared/components/security-footer/security-footer.component';
import { SecurityLoginComponent } from './shared/components/security-login/security-login.component';
import { SecurityRegisterComponent } from './shared/components/security-register/security-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    UsComponent,
    SecurityContainerComponent,
    SecurityNavComponent,
    SecurityFooterComponent,
    SecurityLoginComponent,
    SecurityRegisterComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SecurityModule {}
