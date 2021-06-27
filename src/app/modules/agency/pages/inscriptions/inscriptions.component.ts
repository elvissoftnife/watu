import { Component, OnInit } from '@angular/core';
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
    private inscripcionService: InscriptionsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerDataInscripciones();
  }

  async obtenerDataInscripciones() {
    await this.inscripcionService.LoadInscripciones();
    console.log(this.inscripciones);
  }

}
