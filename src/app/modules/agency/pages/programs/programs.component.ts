import { Component, OnInit } from '@angular/core';
import { ProgramsService } from './programs.service';

export interface Programa {
  id:          number;
  nombre:      string;
  descripcion: string;
  vacantes:    number;
  inscritos:   number;
  estado:      number;
  id_sede:     number;
  sede:        Sede;
}

export interface Sede {
  id:       number;
  nombre:   string;
  distrito: string;
  agencia:  Agencia;
}

export interface Agencia {
  id:             number;
  nombre_agencia: string;
}

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})

export class ProgramsComponent implements OnInit {


  programas:{
    lista_programas: Programa[]
  } = { lista_programas: []};

  constructor(
    private programa: ProgramsService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.obtenerDataPrograma();
  }

  async obtenerDataPrograma(){
    this.programas = await this.programa.getData();
    console.log(this.programas)
  }
  
}
