import { Component, OnInit } from '@angular/core';
import { InscriptionsService } from './inscriptions.service';

interface Inscripcion {
  programa: string;
  nombres: string;
  fecha: Date;
}

const INSCRIPCIONES: Inscripcion[] = [
  {
    programa: 'Work and Travel 1',
    nombres: 'Carlitos Unnoc',
    fecha: new Date(1478708162000)
  },
  {
    programa: 'Work and Travel 2',
    nombres: 'Carlitos Unnoc',
    fecha: new Date(1478708162000)
  },
  {
    programa: 'Work and Travel 3',
    nombres: 'Carlitos Unnoc',
    fecha: new Date(1478708162000)
  },
  {
    programa: 'Work and Travel 4',
    nombres: 'Carlitos Unnoc',
    fecha: new Date(1478708162000)
  }
];

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})

export class InscriptionsComponent implements OnInit {

  constructor(
    private inscripcion: InscriptionsService
  ) { }

  async ngOnInit(): Promise<void> {
    const data = await this.inscripcion.getData(); 
    console.log(data);
  }

  inscripciones = INSCRIPCIONES;
}
