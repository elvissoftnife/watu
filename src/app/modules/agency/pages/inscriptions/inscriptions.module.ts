import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InscriptionsComponent } from './inscriptions.component';

@NgModule({
  imports: [BrowserModule, CommonModule, NgbModule],
  declarations: [InscriptionsComponent],
  exports: [InscriptionsComponent],
  bootstrap: [InscriptionsComponent]
})
export class NgbdTableBasicModule {}
