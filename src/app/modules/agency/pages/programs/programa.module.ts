import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProgramsComponent } from './programs.component';

@NgModule({
  imports: [BrowserModule, CommonModule, NgbModule],
  declarations: [ProgramsComponent],
  exports: [ProgramsComponent],
  bootstrap: [ProgramsComponent]
})
export class NgbdTableBasicModule {}
