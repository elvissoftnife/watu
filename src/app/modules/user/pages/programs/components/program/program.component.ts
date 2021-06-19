import { Component, OnInit } from '@angular/core';
//import { Program, ParamsPrograms } from '../../interfaces/programas.interface';
//import { ProgramsService } from '../../programs.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})

export class ProgramComponent {
//export class ProgramComponent implements OnInit {

  /*
  programs:{
    lista_programas: Program[]
  } = { lista_programas: []};

  paramsPrograms:ParamsPrograms = {
    programa: '',
    body: {
      id_sede: 0,
      id_agencia: 0,
    }
  }

  constructor(private programService: ProgramsService) {}

  async ngOnInit(): Promise<void> {
    this.getPrograms();
  }

  async getPrograms(){
    this.programs = await this.programService.getData(this.paramsPrograms);
    console.log("this.programs => ", this.programs);
  }
  */
}
