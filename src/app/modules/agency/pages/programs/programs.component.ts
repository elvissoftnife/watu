import { Component, OnInit } from '@angular/core';
import { ProgramsService } from './programs.service';

interface Programa {
  nombre_programa: string;
  vacantes: number;
  inscritos: number;
}

const PROGRAMAS: Programa[] = [
  {
    nombre_programa: 'Work and Travel 1',
    vacantes: 150,
    inscritos: 20
  },
  {
    nombre_programa: 'Work and Travel 2',
    vacantes: 150,
    inscritos: 20
  },
  {
    nombre_programa: 'Work and Travel 3',
    vacantes: 150,
    inscritos: 20
  },
  {
    nombre_programa: 'Work and Travel 4',
    vacantes: 150,
    inscritos: 20
  }
];


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})




export class ProgramsComponent implements OnInit {

  constructor(
    private programa: ProgramsService
  ) { }

  

  async ngOnInit(): Promise<void> {
    const data = await this.programa.getData(); 
    console.log(data);
  }

  programas = PROGRAMAS;
}
