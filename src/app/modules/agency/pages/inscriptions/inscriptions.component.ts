import { Component, OnInit } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';

export interface Inscripcion {
  id: number;
  estado: number;
  programa: Programa;
}

export interface Programa {
  id: number;
  nombre: string;
  descripcion: string;
  sede: Sede;
}

export interface Sede {
  id: number;
  nombre: string;
  agencia: Agencia;
}

export interface Agencia {
  id: number;
  nombre_agencia: string;
  image: string;
}

export interface User {
  id: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  email: string;
}

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})

export class InscriptionsComponent implements OnInit {

  inscripciones: {
    reservas: Inscripcion[]
  } = { reservas: [] };

  constructor(
    private inscripcion: InscriptionsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerDataInscripciones();
  }

  async obtenerDataInscripciones() {
    this.inscripciones = await this.inscripcion.getData();
    console.log(this.inscripciones);
  }

}
