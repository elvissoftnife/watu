import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { InscriptionsService } from './inscriptions.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})

export class InscriptionsComponent implements OnInit {

  get inscripciones() {
    return this.inscripcionService.inscripciones;
  }

  constructor(
    private inscripcionService: InscriptionsService,
    private spinner: NgxSpinnerService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.spinner.show("agency_container_spinner")
    await this.obtenerDataInscripciones();
    this.spinner.hide("agency_container_spinner")
  }

  async obtenerDataInscripciones() {
    await this.inscripcionService.LoadInscripciones();
    console.log(this.inscripciones);
  }

}
