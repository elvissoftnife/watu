import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyModule } from './modules/agency/agency.module';
import { UserModule } from './modules/user/user.module';
import { SecurityModule } from './modules/security/security.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    SecurityModule,
    UserModule,
    AgencyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
