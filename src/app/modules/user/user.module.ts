import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { ProgramsComponent } from './pages/programs/programs.component';
import { MyprogramsComponent } from './pages/myprograms/myprograms.component';
import { UserNavComponent } from './shared/components/user-nav/user-nav.component';
import { UserFooterComponent } from './shared/components/user-footer/user-footer.component';
import { UserContainerComponent } from './shared/components/user-container/user-container.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ProgramsComponent,
    MyprogramsComponent,
    UserNavComponent,
    UserFooterComponent,
    UserContainerComponent,
    UserProfileComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule,
    NgxSpinnerModule,
  ],
})
export class UserModule { }
