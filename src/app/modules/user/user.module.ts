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
import { ProgramComponent } from './pages/programs/components/program/program.component';
import { SearchComponent } from './pages/programs/components/search/search.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';

@NgModule({
  declarations: [
    ProgramsComponent,
    MyprogramsComponent,
    UserNavComponent,
    UserFooterComponent,
    UserContainerComponent,
    ProgramComponent,
    SearchComponent,
    ProgramDetailComponent,
    UserProfileComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UserRoutingModule,
  ],
})
export class UserModule {}
