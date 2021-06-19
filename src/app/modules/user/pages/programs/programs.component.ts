import { Component } from '@angular/core';
import { ParamsPrograms, Program, Agency, Sede } from './interfaces/programas.interface';
import { ProgramsService } from './programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
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

  agencies: {
    agencias: Agency[]
  } = { agencias: [] }

  sedes: {
    sedes: Sede[]
  } = { sedes: [] }

  idAgency: number = 0;
  idSede: number = 0;

  constructor(private programService: ProgramsService) {}

  async ngOnInit(): Promise<void> {
    this.getPrograms();
    this.getAgencies();
  }

  async getPrograms(){
    this.programs = await this.programService.getPrograms(this.paramsPrograms);
    console.log("this.programs => ", this.programs);
  }

  async getAgencies(){
    this.agencies = await this.programService.getAgencies();
    console.log("this.agencies => ", this.agencies);
  }

  async getSedes(idSede: number){
    this.sedes = await this.programService.getSedes(idSede);
    console.log("this.sedes => ", this.sedes);
  }

  changeProgram(){
    this.getPrograms();
  }

  changeAgency(agencySelected:any){
    console.log("agencySelected => ", agencySelected.target.value);
    let idAgency = agencySelected.target.value;
    this.getSedes(idAgency);
    this.getPrograms();
  }

  changeSede(sedeSelected:any){
    console.log("sedeSelected => ", sedeSelected.target.value);
    this.getPrograms();
  }
  cleanFilters(){
    this.paramsPrograms = {
      programa: '',
      body: {
        id_sede: 0,
        id_agencia: 0,
      }
    }
    this.getPrograms();
  }
}
