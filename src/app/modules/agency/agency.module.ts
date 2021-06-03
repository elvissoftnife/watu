import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgencyRoutingModule } from './agency-routing.module';
import { ProgramsComponent } from './pages/programs/programs.component';
import { InscriptionsComponent } from './pages/inscriptions/inscriptions.component';
import { AgencyContainerComponent } from './shared/components/agency-container/agency-container.component';
import { AgencyNavComponent } from './shared/components/agency-nav/agency-nav.component';
import { AgencyFooterComponent } from './shared/components/agency-footer/agency-footer.component';
import { EditProgramModalComponent } from './pages/programs/components/edit-program-modal/edit-program-modal.component';
import { AddProgramModalComponent } from './pages/programs/components/add-program-modal/add-program-modal.component';

@NgModule({
  declarations: [
    ProgramsComponent,
    InscriptionsComponent,
    AgencyContainerComponent,
    AgencyNavComponent,
    AgencyFooterComponent,
    EditProgramModalComponent,
    AddProgramModalComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AgencyRoutingModule,
  ],
})
export class AgencyModule {}
