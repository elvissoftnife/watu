import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddProgramModalComponent } from './add-program-modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [AddProgramModalComponent],
  exports: [AddProgramModalComponent],
  bootstrap: [AddProgramModalComponent]
})
export class NgbdModalBasicModule {}
