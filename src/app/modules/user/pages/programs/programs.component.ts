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

  constructor(private programService: ProgramsService) {}

  async ngOnInit(): Promise<void> {
    this.getPrograms();
    this.getAgencies();
  }

  async getPrograms(){
    this.programs = await this.programService.getPrograms(this.paramsPrograms);
  }

  async getAgencies(){
    this.agencies = await this.programService.getAgencies();
  }

  async getSedes(idSede: number){
    this.sedes = await this.programService.getSedes(idSede);
  }

  changeProgram(){
    this.getPrograms();
  }

  changeAgency(agencySelected:any){
    let idAgency = agencySelected.target.value;
    this.getSedes(idAgency);
    this.getPrograms();
  }

  changeSede(){
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
